import { Button } from "@/components/ui/button"
import { createPayment } from "@/Redux/payment/Action";
import { CheckCircledIcon } from "@radix-ui/react-icons"
import { useDispatch } from "react-redux"


const SubscriptionCard = ({dataInfo}) => {
  const dispatch = useDispatch();

  const handleUpgrade=()=> {
    dispatch(createPayment({planType: data.planType, jwt:localStorage.getItem("jwt")}))
  }
    console.log(dataInfo?.type)

  return (
    <div className="rounded-xl bg-[#1b1b1b] bg-opacity-20 shadow-[#14173b] shadow-2xl card p-5 space-y-5 w-[18rem]">
        <p>{dataInfo?.planName}</p>
        <p>
            <span className="text-xl font-semibold">{dataInfo?.price}</span>
            <span>{dataInfo?.type}</span>
        </p>
        {dataInfo?.type =="ANNUALLY" && <p className="text-green-500">30% off</p>}

        <Button 
        onClick={handleUpgrade}
        className="w-full">
            {dataInfo?.buttonName }
        </Button>
        <div>
          {dataInfo?.features?.map((item) => <div key={item} className="flex items-center gap-2">
            <CheckCircledIcon/>
            <p>{item}</p>
          </div>)}
        </div>

    </div>
  )
}

export default SubscriptionCard
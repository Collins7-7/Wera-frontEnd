import { useSelector } from "react-redux"
import SubscriptionCard from "./SubscriptionCard"
import { store } from "@/Redux/Store"

const paidPlan = [
    "Paid plan coming soon..."
]

const annualPlan = [
    "Annual plan coming soon..."
]

const freePlan = [
    "Enjoy all the features for a month",
    "Limited to only 3 projects"
]

const Subscription = () => {

    const {subscription} = useSelector(store => store)
  return (
    <div className="p-10">
        <h1 className="text-5xl font-semibold py-5 pb-16 text-center">Pricing</h1>
        <div className="flex flex-col lg:flew-row justify-center items-center gap-9">
            <SubscriptionCard dataInfo={{ planName:"Free", features:freePlan, type: "FREE", price:0, buttonName: subscription.userSubscription?.planType == "FREE"? "Current Plan": "Get Started"}}/>
            <SubscriptionCard dataInfo={{planName:"Annual paid plan", features:annualPlan, type: "ANNUALLY", price:10000, buttonName: subscription.userSubscription?.planType == "ANNUALLY"? "Current Plan": "Get Started"}}/>
            <SubscriptionCard dataInfo={{planName:"Monthly paid plan", features:paidPlan, type: "MONTHLY", price:999, buttonName:subscription.userSubscription?.planType == "MONTHLY"? "Current Plan": "Get Started"}} />

        </div>

    </div>
  )
}

export default Subscription
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import CreateProjectForm from '../project/CreateProjectForm'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { PersonIcon } from '@radix-ui/react-icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '@/Redux/Store'
import { logout } from '@/Redux/Auth/Action'

const Navbar = () => {

    const {auth} = useSelector(store => store)
    const dispatch = useDispatch();
    const handleLogout =()=>{
        dispatch(logout())
    }
    const navigate = useNavigate();
  return (
    <div className='border-b py-4 px-5 flex items-center justify-between'>
    <div className='flex items-center gap-3'>
        <p onClick={()=> navigate("/")} className='cursor-pointer font-bold hover:text-purple-900 text-lg'>Wera  Manager</p>

        <Dialog>
            <DialogTrigger>
                <Button className="hover:font-bold" variant="ghost"> Create Project</Button>
            </DialogTrigger>
        <DialogContent>
        <DialogHeader>Create new project</DialogHeader>
            <CreateProjectForm/>
        </DialogContent>
        </Dialog>
        {/* <Button onClick={()=> navigate("/upgrade_plan")} variant="ghost">Upgrade</Button> */}
    </div>
    <div className='flex gap-3 items-center'>
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="outline" size="icon" className="rounded-full border-2 border-gray-500">
                    <PersonIcon/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={handleLogout}> Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        <p>{auth.user?.fullName}</p>
    </div>
    </div>
  )
}

export default Navbar
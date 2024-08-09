
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Navbar from './pages/navbar/Navbar'
import ProjectDetails from './pages/projectDetails/ProjectDetails'
import IssueDetails from './pages/issueDetails/IssueDetails'
import Subscription from './pages/subscription/Subscription'
import Auth from './pages/auth/Auth'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUser } from './Redux/Auth/Action'
import { store } from './Redux/Store'
import { fetchProjects } from './Redux/Project/Action'
import UpgradeSuccess from './pages/subscription/UpgradeSuccess'
import { AcceptInvitation } from './pages/project/AcceptInvitation'

function App() {

  const dispatch = useDispatch();
  const {auth} = useSelector(store => store);

  useEffect(()=> {
    dispatch(getUser())
    dispatch(fetchProjects({}))
  },
[auth.jwt])

console.log("Auth", auth);
 

  return (
    <>
    {
      auth.user?<div>

    <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/project/:id' element={<ProjectDetails/>}/>
        <Route path='/project/:projectId/issue/:issueId' element={<IssueDetails/>}/>
        <Route path='/upgrade_plan' element={<Subscription/>}/>
        <Route path='/upgrade_plan/success' element={<UpgradeSuccess/>}/>
        <Route path='/accept_invitation' element={<AcceptInvitation/>}/>
  
      </Routes>
    </div> : <Auth/>
    }
    
    
    </>
  )
}

export default App

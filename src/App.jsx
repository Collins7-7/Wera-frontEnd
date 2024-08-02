
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Navbar from './pages/navbar/Navbar'
import ProjectDetails from './pages/projectDetails/ProjectDetails'

function App() {
 

  return (
    <>
    <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/project/:id' element={<ProjectDetails/>}/>
  
      </Routes>
    </>
  )
}

export default App

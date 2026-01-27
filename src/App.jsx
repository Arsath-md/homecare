import { useState } from 'react'
import Home from './pages/Home'
import Forms from './components/form'
import { Route,Routes } from 'react-router-dom'

function App() {
    return(
        <>
             <Routes>
            
                         <Route path='/' element={<Home/>}></Route> 
                         <Route path='/service/:title' element={<Forms/>}></Route>
                   
            </Routes>
     
        
        
        </>
   
    )
}

export default App

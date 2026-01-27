import { useState } from 'react'
import Home from './pages/Home'
import Service from './pages/Service'
import Customers from './pages/Customers'
import { Routes,Route } from 'react-router-dom'
import Forms from './components/form'

function App() {

    return(
        <>
        <Routes>
            <Route path='/' element={ <Home/>}> </Route>
            <Route path='/service/:name' element={<Forms/>}></Route>
        </Routes>
         
        </>
    )
}

export default App

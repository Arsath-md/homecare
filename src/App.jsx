import { useState } from 'react'
import Home from './pages/Home'
import Services from './pages/Sevices'
import News_letter from './pages/news_letter'
import Get_in_touch from './pages/get_in_touch'
import Customers from './pages/Customers'

function App() {
    return(
        <div className='bg-gray-200'>
            <Home/>
            <Services/>
            <Customers/>
            <News_letter/>
            <Get_in_touch/>
        </div>
    )
}

export default App

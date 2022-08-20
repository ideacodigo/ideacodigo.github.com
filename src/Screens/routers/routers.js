import React from 'react'
import {
   BrowserRouter,
   Routes,
   Route

} from 'react-router-dom'
import { Footer } from '../../Components/Footer'
import { NavBar } from '../../Components/NavBar/NavBar'
import { ScreenBlog } from '../Blog/Blog'
import { ScreenContact } from '../Contact/Contact'

export const ScreenRouters = () => {
   return (
      <>
         <BrowserRouter>
            <NavBar />
            <Routes>
               <Route path="/" element={<ScreenBlog />}/>
               <Route path="/contact" element={<ScreenContact />}/>
            </Routes>
            <Footer />
         </BrowserRouter>
      </>
   )
}

import React from 'react'
import {Routes,Route} from "react-router-dom"
import About from '../Pages/About'
import Career from '../Pages/Career'
// import Home from '../Pages/Home'
import Blog from '../Pages/Blog'
import NotFound from '../Pages/NotFound'
import HelpSupport from '../Pages/HelpSupport'

const Routess = () => {
  return (
    <div>
      <Routes>
        {/* <Route path='/' element={<Home/>}></Route> */}
        <Route path='/about' element={<About/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/career' element={<Career/>}></Route>
        <Route path='/helpSupport' element={<HelpSupport/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  )
}

export default Routess
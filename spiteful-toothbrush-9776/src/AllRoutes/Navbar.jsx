import React from 'react'
import {NavLink} from "react-router-dom"
const link=[
    // {path:"/",title:"Home"},
    {path:"/about",title:"About"},
    {path:"/blog",title:"Blog"},
    {path:"/career",title:"Career"}
]
const Navbar = () => {
  return (
    <div>
        {link.map(({path,title})=>(
            <NavLink key={path} to={path}>{title}</NavLink>
        ))}
    </div>
  )
}

export default Navbar
import React,{useState} from 'react'
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {sideBarData} from  "../Components/SidebarData";
import { IconContext } from 'react-icons';
import "../Components/Navbar.css";
function Navbar() {
    const [sidebar,setSideBar]=useState(false)
    const showSideBar= () =>setSideBar(!sidebar)
    return (
        <>
        <IconContext.Provider value={{color:"#fff"}}>
        <div className="navbar navItems">
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSideBar} />
            </Link>
           <Link to="/login" className='loginImg'>
           <svg viewBox="0 0 24 24" width="32" height="32" stroke="white" stroke-width="2" 
           fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7">
            </polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
            </Link>
           </div> 
        <nav className={sidebar ?"nav-menu active":"nav-menu"}>
        <ul className="nav-menu-items" onClick={showSideBar}>
        <li className="navbar-toggle">
        <Link to="#" className="menu-bars">
        <AiIcons.AiOutlineClose />
        </Link>
        </li>
        {sideBarData.map((item,index)=>(
            <li  key={index} className={item.cname}>
            <Link to={item.path}>
                {item.icon}
            <span className="title">{item.title}</span>
            </Link>
            </li>
        ))}
        </ul>
        </nav>  
        </IconContext.Provider> 
        </>
    )
}

export default Navbar






import React from 'react'
import "./Sidebar.css"
import { Link, NavLink } from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'

function Sidebar() {
  return (
    <div className='sidebar'>
        <h2>Sidebar</h2>
        <ul className="sidebar__collection">
          <li className="sidebar__item">
            <NavLink to="/admin/create-product" className="sidebar__link"><span>Create Product</span></NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink to="/admin/manage-product" className="sidebar__link"><span>Manage Product</span></NavLink>
          </li> 
          <li className='sidebar__item'>
            <NavLink to={"/"}> <AiOutlineHome/> Go home</NavLink>
          </li>
        </ul>
    </div>
  )
}

export default Sidebar
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  function toggle(){
    setIsOpen(!isOpen)
  }
  function closeToggle(){
    setIsOpen(false)
  }
  return (
    <div>
       
       <header class="header">
        <Link  to='/' class="header_title">Social Magpie <i>Design</i></Link>
        <div className='icons' onClick={toggle}>
          {isOpen ? <FaTimes className='close'/> : <FaBars className='bars'/>} 
          
        </div>
        <nav class={isOpen ? 'navbar_active' : 'navbar'} id="navbar">
            <Link to="/about" class="nav_link" onClick={closeToggle}>About</Link>
            <Link to="/design-blog" class="nav_link" onClick={closeToggle}> Design  Blog</Link>
            <Link to="/freebies" class="nav_link" onClick={closeToggle}>Freebies</Link>
            <Link to="/contact" class="nav_link" onClick={closeToggle}>Contact</Link>
        </nav>
        <Outlet></Outlet>
    </header> 

    </div>
  )
}

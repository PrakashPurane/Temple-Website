import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import menuicon from '../../assets/menuicon.jpg'
import { Link } from 'react-scroll';

const Navbar = () => {

  const [sticky,setSticky]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 500 ? setSticky(true) : setSticky(false)
    })
  },[])

  const [mobileMenu,setMobileMenu]=useState(false);
  const toggleMenu=()=>{
    mobileMenu ? setMobileMenu(false): setMobileMenu(true);

  }
  return (
    <>
    <nav className={`container ${ sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt=" logo of temple"  className='logo'/>
        <ul className={mobileMenu?'':'mobile-menu'}>
            <li> <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='about' smooth={true} offset={-260} duration={500}>About us </Link></li>
            <li><Link to='gallery' smooth={true} offset={-260} duration={500}>Gallery</Link></li>
            <li><Link to='rituals' smooth={true} offset={-260} duration={500}>Rituals Destinations</Link></li>
            <li><Link to='experiences' smooth={true} offset={-260} duration={500}>Experiences </Link></li>
            <li> <Link to='contact' smooth={true} offset={200} duration={500} className='btn'>Contact us</Link></li>
        </ul>
        <img src={menuicon} alt=""  className='menu-icon'  onClick={toggleMenu}/>
    </nav>
      
    </>
  )
}

export default Navbar

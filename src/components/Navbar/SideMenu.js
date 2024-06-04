import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { SocialLinks } from "./SocialLinks";
import { HashLink } from 'react-router-hash-link';

export const SideMenu = ({isMenuOpen, setIsMenuOpen, toggleMenu}) => {
    const menuRef = useRef();
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsMenuOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [setIsMenuOpen]);

    return(
        <nav ref={menuRef} className={`menu column-start ${isMenuOpen ? "open" : ''}`}>
        <ul className="column-start">
          <li><Link to="/" onClick={toggleMenu} className='aside-link'>Home</Link></li>
          <li><Link to="/classes" onClick={toggleMenu} className='aside-link'>Classes</Link></li>
          <li><Link to="/timetable" onClick={toggleMenu} className='aside-link'>Timetable</Link></li>
          <li><Link to="/coaches" onClick={toggleMenu} className='aside-link'>Coaches</Link></li>
          <li><Link to="/pricing" onClick={toggleMenu} className='aside-link'>Pricing</Link></li>
          <li><Link to="/promos" onClick={toggleMenu} className='aside-link'>Promos</Link></li>
          <li><Link to="/shop" onClick={toggleMenu} className='aside-link'>Shop</Link></li>
          <li><Link to="/faqs" onClick={toggleMenu} className='aside-link'>FAQs</Link></li>
          <li><HashLink smooth to="/#contact" onClick={toggleMenu} className='aside-link'>Contacts</HashLink></li>
        </ul>
        <SocialLinks />
        <button className="nav-btn">
        <HashLink smooth to="/#form" className="message-link text-light">Send a message</HashLink>
        </button>
      </nav>
    )
}
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { TbShoppingBagHeart } from "react-icons/tb";
import { SideMenu } from "./SideMenu";
import TotalArticlesNavbar from "../Cart/TotalArticlesNavbar";

export const Navbar = ({active, setActive}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = (e) => {
      e.stopPropagation();
      setIsMenuOpen(prevState => !prevState);
  };

  const toggleCart = () => {
        setActive(!active);
  };

    return (
        <>
        <header>
          <nav className="main-menu">
            <div className="navbar-logo">
                <Link to="/" className="nav-link">
                    <img src={logo} alt="logo" className="company-logo" />
                </Link>
            </div>
            <ul className="nav-list">
            <li className="nav-item">
                <Link to="/classes" className="nav-link">CLASSES</Link>
                </li>
                <li className="nav-item">
                <Link to="/pricing" className="nav-link">PRICING</Link>
                </li>
                <li className="nav-item">
                <Link to="/promos" className="nav-link">PROMO</Link>
                </li>
                <li className="nav-item">
                <Link to="/shop" className="nav-link">SHOP</Link>
                </li>
            </ul>
            <div className="cart-quantity">
                <button onClick={toggleCart} className="cart-btn"> 
                <TbShoppingBagHeart className="cart-icon" />
                </button>
                <TotalArticlesNavbar />
            </div>
            <div className={`menu-toggle ${isMenuOpen ? "open" : ''}`} onMouseDown={toggleMenu}>
            <div className="hamburger">
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </div>
            </div>
            </nav>
          </header>
          <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} toggleMenu={toggleMenu} />
        </>
    )
}
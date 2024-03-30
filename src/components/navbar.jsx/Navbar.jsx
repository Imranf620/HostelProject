import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="Nav">
      <nav id="menu">
        <input type="checkbox" id="responsive-menu" onClick="updatemenu()" />
        <label></label>
        <div className="Logo">
          <Link to="/">
            <img src="/Front+Nav-Images/logo.png" alt="" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link className="dropdown-arrow" href="http://">
              Products
            </Link>
            <ul className="sub-menus">
              <li>
                <Link href="http://">Boys Hostels</Link>
              </li>
              <li>
                <Link href="http://">Girls Hostels</Link>
              </li>
              <li>
                <Link href="http://">Coming Soon</Link>
              </li>
              <li>
                <Link href="http://">Coming Soon</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li id="Services">
            <Link
              className="dropdown-arrow"
              to="/services"
            >
              Services
            </Link>
            <ul className="sub-menus">
              <li>
                <Link href="http://">Services 1</Link>
              </li>
              <li>
                <Link href="http://">Services 2</Link>
              </li>
              <li>
                <Link href="http://">Services 3</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="http://">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        <div className="Signin-Up">
          <Link to="/signin" style={{ textDecoration: 'none' }}>
            <button>Sign_In</button>
          </Link>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <button>Sign_Up</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

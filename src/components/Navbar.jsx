import React, { useState } from "react";
import styled from "styled-components";
import logo from "../components/Images/Netflix-logo.png";
import { NavLink } from "react-router-dom";
import { FaPowerOff, FaSearch } from "react-icons/fa";

const Navbar = ({ isScrolled }) => {
  const links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];

  // const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);
  return (
    <div className="">
      <nav className={`Navbar-container ${isScrolled ? "scrolled" : ""}`}>
        <div className="Navbar-container left">
          <div className="brand">
            <img src={logo} alt="" />
          </div>
          <ul className="Navbar-container links">
            {links.map(({ name, link }) => {
              return (
                <li key={name}>
                  <NavLink to={link} className="li">
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right">
          <div className={`search ${showSearch ? "show-search" : ""}`}>
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) setShowSearch(false);
              }}
            >
              <FaSearch className="search-icon" />
            </button>
            <input
              type="text"
              placeholder="Search"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false);
                setInputHover(false);
              }}
            />
          </div>
          <button onClick={() => signOut(firebaseAuth)}>
            <FaPowerOff />
          </button>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

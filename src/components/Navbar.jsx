// import React, { useState } from "react";
// import logo from "../components/Images/Netflix-logo.png";
// import { NavLink } from "react-router-dom";
// import { FaPowerOff, FaSearch } from "react-icons/fa";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { firebaseAuth } from "../../firebaseConfig";

// const Navbar = ({ isScrolled }) => {
//   const links = [
//     { name: "Home", link: "/" },
//     { name: "TV Shows", link: "/tv" },
//     { name: "Movies", link: "/movies" },
//     { name: "My List", link: "/mylist" },
//   ];

//   const navigate = useNavigate();

//  useEffect(() => {
//     // Listen for changes in authentication state
//     const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
//       if (currentUser) {
//         // If a user is logged in, navigate to the index page
//         navigate("/");
//       }
//     });

//   const [showSearch, setShowSearch] = useState(false);
//   const [inputHover, setInputHover] = useState(false);
//   return (
//     <div className="">
//       <nav className={`Navbar-container ${isScrolled ? "scrolled" : ""}`}>
//         <div className="Navbar-container left">
//           <div className="brand">
//             <img src={logo} alt="" />
//           </div>
//           <ul className="Navbar-container links">
//             {links.map(({ name, link }) => {
//               return (
//                 <li key={name}>
//                   <NavLink to={link} className="li">
//                     {name}
//                   </NavLink>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//         <div className="right">
//           <div className={`search ${showSearch ? "show-search" : ""}`}>
//             <button
//               onFocus={() => setShowSearch(true)}
//               onBlur={() => {
//                 if (!inputHover) setShowSearch(false);
//               }}
//             >
//               <FaSearch className="search-icon" />
//             </button>
//             <input
//               type="text"
//               placeholder="Search"
//               onMouseEnter={() => setInputHover(true)}
//               onMouseLeave={() => setInputHover(false)}
//               onBlur={() => {
//                 setShowSearch(false);
//                 setInputHover(false);
//               }}
//             />
//           </div>
//           <button onClick={() => signOut(firebaseAuth)}>
//             <FaPowerOff />
//           </button>
//         </div>
//       </nav>
//     </div>
//   );
// };
// export default Navbar;

import React, { useState, useEffect } from "react";
import logo from "../components/Images/Netflix-logo.png";
import { NavLink } from "react-router-dom";
import { FaPowerOff, FaSearch } from "react-icons/fa";
// import { onAuthStateChanged, signOut } from "firebase/auth";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../firebaseConfig";

const Navbar = ({ isScrolled }) => {
  const links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    // Listen for changes in authentication state
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        // If a user is logged in, navigate to the index page
        navigate("/");
      }
    });

    // Cleanup function for useEffect
    return () => unsubscribe();
  }, [navigate]);

  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  const signout = async () => {
    try {
      await signOut(firebaseAuth);
      console.log("Sign-out successful");
      navigate("/login");
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };
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
          <button onClick={signout}>
            <FaPowerOff />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

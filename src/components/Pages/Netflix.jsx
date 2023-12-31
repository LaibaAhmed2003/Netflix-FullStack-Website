import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import backgroundImage from "../Images/nbg.jpeg";
import Movielogo from "../Images/netflixmovielogo.png";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div>
      <Navbar isScrolled={isScrolled} />
      <div className="hero">
        <img
          src="https://github.com/koolkishan/netflix-clone-react-node/blob/master/netflix-ui/src/assets/home.jpg?raw=true"
          alt="background"
          className="background-image"
        />
        <div className="container">
          <div className="logo">
            <img
              src="https://raw.githubusercontent.com/koolkishan/netflix-clone-react-node/master/netflix-ui/src/assets/homeTitle.webp"
              alt="Movie logo"
            />
          </div>
          <div className="buttons">
            <button className="">
              <FaPlay /> Play
            </button>
            <button className="">
              <AiOutlineInfoCircle /> More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Netflix;

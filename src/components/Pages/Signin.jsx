import React from "react";
import BackgroundImage from "../BackgroundImage";
import Header from "../Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Signin = () => {
  return (
    <div className="signup-main-div">
      <BackgroundImage />
      <div className="Signup-Container">
        <Header />
        <div className="Signup-Content">
          <h1>Unlimited movies, TV shows, and more</h1>
          <h4>Watch anywhere. Cancel anytime.</h4>
          <h6>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h6>
          <div className="form">
            <input type="email" placeholder="Email address" />
            <button className="btn">
              Get Started
              <FontAwesomeIcon
                icon={faAngleRight}
                style={{ marginLeft: "21px" }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

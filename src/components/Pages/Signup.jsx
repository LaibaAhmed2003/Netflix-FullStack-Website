import React, { useState, useEffect } from "react";
import BackgroundImage from "../BackgroundImage";
import Header from "../Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // Listen for changes in authentication state
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        // If a user is logged in, navigate to the index page
        navigate("/");
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, [navigate]);
  return (
    <div className={`signup-main-div ${showPassword ? "show-password" : ""}`}>
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
          <div
            className="form"
            style={{
              gridTemplateColumns: showPassword ? "1fr 1fr" : "2fr 1fr",
            }}
          >
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
            />
            {showPassword && (
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            )}

            {!showPassword && (
              <button className="btn" onClick={() => setShowPassword(true)}>
                Get Started <FontAwesomeIcon icon={faAngleRight} />
              </button>
            )}
          </div>
          <button className="signinbtn" onClick={handleSignIn}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

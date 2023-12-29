import { useState } from "react";
import BackgroundImage from "../BackgroundImage";
import Header from "../Header";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../../../firebaseConfig";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleLogIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="Login-Container">
      <BackgroundImage />
      <div className="Login-content">
        <Header />
        <div className="form-container">
          <div className="Login-form">
            <div className="Login-title">
              <h3>Login</h3>
            </div>
            <div className="Login-fields">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <button onClick={handleLogIn}>Log In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;

import NetflixLogo from "./Images/Netflix-logo.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="Header">
      <div className="netflixlogo-container">
        <img src={NetflixLogo} alt="Netflix Logo" />
      </div>
      <div className="signinbtn-container">
        <NavLink to="/signin" className="signin">
          Sign In
        </NavLink>
      </div>
    </div>
  );
};
export default Header;

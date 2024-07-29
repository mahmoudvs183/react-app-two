import "./Navbar.css";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faBars,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  const buyButton = {
    color: "white",
    backgroundColor: "#4cbeae",
    border: "2px solid #4cbeae",
  };
  return (
    <>
      <nav className="nav">
        <div className="logo">
          <h1>Act</h1>
          <p>THEME</p>
        </div>
        <div className="links">
          <a href="#">WEBSITE</a>
          <a href="#">CONVERSION</a>
          <a href="#">BLOG</a>
          <a href="#">COMPONENT</a>

          <div className="nav-buttoms">
            <Button buttonText="FREE PACK" />
            <Button style={buyButton} buttonText="BUY NOW" />
          </div>
          <div className="bar-links">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

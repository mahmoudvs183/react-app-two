import styles from "./Landing.css";
import Button from "../Button/Button"

function Landing() {
  const ButtonOne = {
    color: "white",
    border: "2px solid white",
    
  };
  const ButtonTwo = {
    backgroundColor: "#4cbeae",
    color: "white",
    border: "2px solid #4cbeae",
    marginLeft : "15px",
  };
  return (
    <div className="landing">
      <div className="landing-text">
        <h1>With Great Design Comes Great Response</h1>
        
        <p>
          Make a beautiful Hubspot Website-just the  way you want
        </p>
      </div>
      <div className="landing-buttoms ">
        <Button style={ButtonOne} buttonText="LEARN MORE" />
        <Button style={ButtonTwo} buttonText="GET STARTED" />
      </div>
      
    </div>
  );
}

export default Landing;

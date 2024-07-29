import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import "./App.css";

function App() {
  return (
    <>
      <div className="landing-page">
        <div className="cover">
          <div className="container">
            <div className="header">
              <Navbar />
            </div>
            <div className="main">
              <Landing />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import "./Aboutme.css";
import { Link } from "react-router-dom";

const Aboutme = (props) => {
  return (
    <>
      <div className="App">
        <nav>
          <Link to="/">Home</Link> | <Link to="/about-me">About Me</Link>|{" "}
          <Link to="/projects">Projects</Link>
        </nav>
        
        <h1>Hi testing </h1>
      </div>
    </>
  );
};

export default Aboutme;

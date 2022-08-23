import "./Aboutme.css";
import { Link } from "react-router-dom";

const Aboutme = (props) => {

  return (
   <>
    <nav> <Link to="/Projects">Projects</Link> |{" "}
        <Link to="/Aboutme">About Me</Link>|{" "}
        <Link to="/">Home</Link> </nav>
        <h1> DATA </h1>
   </>
  );
};

export default Aboutme;

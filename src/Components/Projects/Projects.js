import "./Projects.css";
import { Link } from 'react-router-dom'


const Projects = () => {
  return (
    <>
   <nav> <Link to="/Projects">Projects</Link> |{" "}
        <Link to="/Aboutme">About Me</Link>|{" "}
        <Link to="/">Home</Link> </nav>
        <h1>""</h1>
      
      <div classname="rain"></div>
  <div classname="lightning"></div>
    </>
  );
};

export default Projects;

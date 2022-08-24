import { Link } from "react-router-dom";
import "./App.css" 
// import ResponsiveAppBar from '../Nav/Nav.js';

const App = (props) => {
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
}

export default App;

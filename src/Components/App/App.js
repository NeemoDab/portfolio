import { Link } from "react-router-dom";
import "./App.css" 


function App() {
  return (
    <>
 <nav> <Link to="/Projects">Projects</Link> |{" "}
        <Link to="/Aboutme">About Me</Link>|{" "}
        <Link to="/">Home</Link> </nav>
    <div className="App">
    <div className="rain"></div>
  <div className="lightening"></div>
    </div>
    <h1>Hi I'm Neemo </h1>
    </>
  );
}

export default App;

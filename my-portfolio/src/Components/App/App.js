import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Aboutme from "../Aboutme/Aboutme";
import Projects from "../Projects/Projects";
import "./App.css" 
import ScrollableTabsButtonAuto from "../Nav/Nav";

function App() {
  return (
    <>
    <div className="App">
    <div className="rain"></div>
  <div className="lightening"></div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Aboutme" element={<Aboutme />} />
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Aboutme from "../Aboutme/Aboutme";
import Projects from "../Projects/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Aboutme" element={<Aboutme />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Home.css";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import ScrollableTabsButtonAuto from "../Nav/Nav.js";
// import PersistentDrawerRight from "../Textbar/Textbar";
// import Logo from "../Logo/Logo.js";

const Home = (props) => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    async function fetchData() {
      async function randomQuote() {
        const id = Math.floor(Math.random() * 1000).toString();
        const response = await fetch(`http://localhost:5432/quotes/${id}`);
        console.log(response);
        const data = await response.json();
        console.log(data);
        setQuote(data.payload[0].text);
        setAuthor(data.payload[0].author);
      }
      randomQuote();
    }
    fetchData();
    console.log("useEffect");
  }, []);

  const navigate = useNavigate();
  return (
    <div className="Home">
      <div className="title-section">
        <h1> DATA</h1>
      </div>
      {/* <Logo /> */}  
        <div className="text-bar">
        {/* <PersistentDrawerRight/> */}
        <ScrollableTabsButtonAuto/>
        </div>
        <div className="cards">
        <Card
          className="wellbeing-section"
          title="DATA"
          aboutSection="DATA"
          path="/Projects"
          navigate={navigate}
        />
        <Card
          className="technical-section"
          title="DATA"
          aboutSection="DATA"
          path="Aboutme"
          navigate={navigate}
        />
      </div>
      <div className="footer-class">
        <Footer />
        <p className="quote-paragraph">
          {quote} {author}
        </p>
      </div>
    </div>
  );
};
export default Home;

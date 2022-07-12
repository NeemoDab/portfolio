import { useEffect, useState } from "react";
import Section from "../Section/Section";
import "./Projects.css";
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";
import ScrollableTabsButtonAuto from "../Nav/Nav.js";

const Projects = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    async function fetchData() {
      async function randomQuote() {
        const id = Math.floor(Math.random() * 1000);
        const response = await fetch(
          `http://localhost:5432/quotes/${id.toString()}`
        );
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
  return (
    <div className="wellbeing-div">
      <div className="title-section">
        <h1>""</h1>
      </div>
      <div classname="rain"></div>
  <div classname="lightning"></div>
      <ScrollableTabsButtonAuto/>
      <Logo />
      <h1>"" </h1>
      <Section
        title="DATA"
        content="DATA"
        className="wellbeing-title"
      />
      <div className="wellbeing-content">
        <div className="wellbeing-links">
          <Section
            title="DATA"
            content={
              <a href="DATA">
                
              </a>
            }
          />
          <Section
            title=""
            content={
              <a href="">
                
              </a>
            }
          />
          <Section
            title="DATA"
            content={
              <a href="DATA">
               
              </a>
            }
          />
          <Section
            title="DATA "
            content={
              <a href="">
                
              </a>
            }
          />
        </div>
        <img
          className="wellbeing-image"
          src=""
          alt="DATA"
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

export default Projects;

import { useEffect, useState } from "react";
import Section from "../Section/Section";
import "./Aboutme.css";
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";

const Aboutme = (props) => {
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
    <div className="technical-div">
      <div className="title-section">
        <h1> DATA </h1>
      </div>
      <Logo />
      <h1> DATA </h1>

      <div className="front-end-div">
        {/* FRONTEND */}
        <Section
          title="DATA "
          content="What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          className="front-end-title"
        />
        <div className="front-end-content">
          <div className="front-end-left-content">
            <Section
              title="DATA "
              content={
                <a href="DATA ">DATA </a>
              }
              className="html-section"
            />
            <Section
              title="DATA "
              content={
                <a href="DATA ">DATA </a>
              }
              className="css-section"
            />
          </div>
          <div className="front-end-right-content">
            <Section
              title="DATA "
              content={
                <a href="DATA ">
                  JAVASCRIPT CHEATSHEET
                </a>
              }
              className="javascript-section"
            />
            <Section
              title="React"
              content={<a href="DATA ">DATA </a>}
              className="react-section"
            />
          </div>
        </div>
      </div>
      {/* BACKEND  */}
      <div className="back-end-div">
        <Section
          title="DATA "
          content="So what makes the front-end of a website possible? Where is all that data stored? This is where the back-end comes in. The back- end of a website consists of a server, an application, and a database. 

A back-end developer builds and maintains the technology that powers those components which, together, enable the user-facing side of the website to even exist in the first place."
          className="back-end-title"
        />
        <div className="back-end-content">
          <div className="back-end-left-content">
            <Section
              title="DATA "
              content={
                <a href="DATA ">
                  DATA 
                </a>
              }
              className="express-section"
            />
            <Section
              title="DATA "
              content={<a href="DATA ">DATA </a>}
              className="node-section"
            />
          </div>
          <div className="back-end-right-content">
            <Section
              title="DATA "
              content={
                <a href="https://sqlbolt.com/">DATA </a>
              }
              className="postgresql-section"
            />
            <Section
              title="Heroku"
              content={
                <a href="https://devcenter.heroku.com/categories/reference">
                 DATA 
                </a>
              }
              className="heroku-section"
            />
          </div>
        </div>
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

export default Aboutme;

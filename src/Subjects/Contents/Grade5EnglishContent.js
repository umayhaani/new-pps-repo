import React, { useState, useEffect } from "react";
import "./contents.css";
import logo from "../../assets/PPS5.jpeg";
// import { USERNAME } from "../Auth";
import { useLocalStorage } from "../../LocalStorage/Local";
import { NavLink, Link, useHistory } from "react-router-dom";
import ReactPlayer from "react-player";
import image2 from "../../assets/contentPic2.jpeg";
import image3 from "../../assets/contentPic3.jpeg";

import English45Chapter1Topic1 from "../../assets/LECTURE NOTES/ENGLISH45_CHAPTER1_TOPIC1.docx";
import English45Chapter1Topic2 from "../../assets/LECTURE NOTES/ENGLISH45_CHAPTER1_TOPIC2.docx";
import English45Chapter2Topic1 from "../../assets/LECTURE NOTES/ENGLISH45_CHAPTER2_TOPIC1.docx";
import English45Chapter2Topic2 from "../../assets/LECTURE NOTES/ENGLISH45_CHAPTER2_TOPIC2.docx";

import { Eng5Valueeee } from "../Grade5/English/English5";

export let WorksheetType;

const Grade5EnglishContent = () => {
  const [content, setContent] = useState();
  useEffect(() => {
    displayContent();
  }, []);

  const history = useHistory();

  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
  const [showCodeWin, setShowCodeWin] = useState(false);
  const worksheetOptHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value === "practice worksheet") {
      WorksheetType = e.target.value;
      history.push("/ShowWorksheets");
    }

    if (e.target.value === "test worksheet") {
      WorksheetType = e.target.value;
      setShowCodeWin(() => true);
    }
  };

  const displayContent = () => {
    //"""""""""""""""""""ENGLISH CLASS 5"""""""""""""""""""""""""""""""""
    if (Eng5Valueeee === "Synonyms (Similar)") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "200px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img style={{ width: "1049px" }} src={image2} alt="image2" />
              <img
                style={{
                  paddingTop: "  0px",
                  float: "right",
                  marginBottom: " 0px",
                }}
                src={image3}
                alt="image3"
              />
              <h1
                style={{
                  textDecoration: "underline",
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note
              </h1>

              <a
                className="button-download"
                href={English45Chapter1Topic1}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Synonyms
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <h3 style={{ wordSpacing: " 50px" }}>
                  <ul>
                    <li>Afraid, scared, frightened</li>
                    <li> Automobile, car, vehicle</li>
                    <li>Big, large, huge</li>
                    <li>Blank, empty, hollow</li>
                    <li>Bunny, rabbit, hare</li>
                    <li> Cap, hat</li>
                    <li> Center, middle, inside</li>
                    <li> Couch, sofa, divan</li>
                    <li>Evil, bad, wicked</li>
                    <li>Famous, well-known</li>
                    <li>Father, dad, daddy</li>
                    <li> Funny, silly, playful, crazy</li>
                    <li> Garbage, trash, junk, waste </li>
                  </ul>
                </h3>
              </div>
            </p>
          </div>

          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          <h1
            style={{
              textDecoration: "underline",
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=42SieHCckoo"
            />
          </div>
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    } else if (Eng5Valueeee === "Antonyms (Opposite)") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "200px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img style={{ width: "1049px" }} src={image2} alt="image2" />
              <img
                style={{
                  paddingTop: "  0px",
                  float: "right",
                  marginBottom: " 0px",
                }}
                src={image3}
                alt="image3"
              />
              <h1
                style={{
                  textDecoration: "underline",
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note
              </h1>

              <a
                className="button-download"
                href={English45Chapter1Topic2}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Antonyms
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <h3 style={{ wordSpacing: " 50px" }}>
                  <ul>
                    <li>Add - Subtract</li>
                    <li> Above - Below</li>
                    <li>After - Before </li>
                    <li>Awake - Asleep </li>
                    <li>Bad - Good </li>
                    <li>Better - Worse </li>
                    <li> Big - Little </li>
                    <li> Birth - Death </li>
                    <li> Boy - Girl</li>
                    <li> Clean - Dirty</li>
                    <li> Close - Open</li>
                    <li> Cold - Hot </li>
                    <li> End - Begin </li>
                  </ul>
                </h3>
              </div>
            </p>
          </div>

          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          <h1
            style={{
              textDecoration: "underline",
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=yaihuBb8Mco"
            />
          </div>
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    } else if (Eng5Valueeee === "Types of Pronouns") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "200px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img style={{ width: "1049px" }} src={image2} alt="image2" />
              <img
                style={{
                  paddingTop: "  0px",
                  float: "right",
                  marginBottom: " 0px",
                }}
                src={image3}
                alt="image3"
              />
              <h1
                style={{
                  textDecoration: "underline",
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note
              </h1>

              <a
                className="button-download"
                href={English45Chapter2Topic1}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Types of Pronouns
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <ul>
                  <li>
                    {" "}
                    <h3>Personal Pronouns</h3>
                  </li>
                </ul>
                <p>
                  Personal pronouns are used as a substitute for a person's
                  name.
                  <p style={{ fontWeight: " bolder" }}>For example:</p>
                  <p>• They went to the store. </p>
                  <p> • I don't want to leave. </p>
                </p>
                <ul>
                  <br></br>

                  <li>
                    {" "}
                    <h3>Possessive Pronouns</h3>
                  </li>
                </ul>
                <p>
                  Possessive pronouns show ownership or possession of a noun.
                  <p style={{ fontWeight: " bolder" }}>For example:</p>
                  <p> • Is that my book?</p>
                  <p> • No, that's his book.</p>
                </p>
                <br></br>

                <ul>
                  <li>
                    {" "}
                    <h3>Indefinite Pronouns</h3>
                  </li>
                </ul>
                <p>
                  Indefinite pronouns are used when an object doesn't need to be
                  specifically identified.
                  <p style={{ fontWeight: " bolder" }}>For example:</p>
                  <p> • Most wealth is held by a select few.</p>
                  <p> • Everyone is here already.</p>
                </p>
                <br></br>

                <ul>
                  <li>
                    {" "}
                    <h3>Relative Pronouns</h3>
                  </li>
                </ul>
                <p>
                  Relative pronouns are used to connect a clause or phrase to a
                  noun or pronoun.
                  <p style={{ fontWeight: " bolder" }}>For example:</p>
                  <p> • The driver who ran the stop sign was careless.</p>
                  <p> • I don't know which pair of shoes you want.</p>
                </p>
                <br></br>

                <ul>
                  <li>
                    {" "}
                    <h3>Intensive Pronouns</h3>
                  </li>
                </ul>
                <p>
                  Intensive pronouns emphasize, or intensify, nouns and
                  pronouns.
                  <p style={{ fontWeight: " bolder" }}>For example:</p>
                  <p> • I myself like to travel.</p>
                  <p> • He himself is his worst critic.</p>
                </p>
                <br></br>
              </div>
            </p>
          </div>

          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          <h1
            style={{
              textDecoration: "underline",
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=h_GnSOIfWf4"
            />
          </div>
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    } else if (Eng5Valueeee === "Types of Prepositions") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "200px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img style={{ width: "1049px" }} src={image2} alt="image2" />
              <img
                style={{
                  paddingTop: "  0px",
                  float: "right",
                  marginBottom: " 0px",
                }}
                src={image3}
                alt="image3"
              />
              <h1
                style={{
                  textDecoration: "underline",
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note
              </h1>

              <a
                className="button-download"
                href={English45Chapter2Topic2}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Types of Prepositions
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <ul>
                  <li>
                    {" "}
                    <h3> Prepositions of Time:</h3>
                  </li>
                </ul>
                <p>
                  Prepositions of time show the relationship of time between the
                  nouns to the other parts of a sentence.
                  <p style={{ fontWeight: " bolder" }}>For example:</p>
                  <p>
                    On, at, in, from, to, for, since, ago, before, till/until,
                    by,{" "}
                  </p>
                </p>
                <ul>
                  <br></br>

                  <li>
                    {" "}
                    <h3> Prepositions of Place and Direction:</h3>
                  </li>
                </ul>
                <p>
                  Prepositions of place show the relationship of place between
                  the nouns to the other parts of a sentence.
                  <p style={{ fontWeight: " bolder" }}>For example:</p>
                  <p> On, at, in, by, from, to, towards, up, down, across, </p>
                </p>
                <br></br>

                <ul>
                  <li>
                    {" "}
                    <h3>• Prepositions of Agents or Things:</h3>
                  </li>
                </ul>
                <p>
                  Prepositions of agents or things indicate a casual
                  relationship between nouns and other parts of the sentence.
                  <p style={{ fontWeight: " bolder" }}>For example:</p>
                  <p> Of, for, by, with, about, etc.</p>
                </p>
                <br></br>

                <ul>
                  <li>
                    {" "}
                    <h3> Phrasal Prepositions:</h3>
                  </li>
                </ul>
                <p>
                  A phrasal preposition is not a prepositional phrase, but they
                  are a combination of two or more words which functions as a
                  preposition.
                  <p style={{ fontWeight: " bolder" }}>For example:</p>
                  <p>
                    {" "}
                    Along with, apart from, because of, by means of, according
                    to{" "}
                  </p>
                </p>
                <br></br>
              </div>
            </p>
          </div>
          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          <h1
            style={{
              textDecoration: "underline",
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=qVo6N4vMPfI"
            />
            {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
          </div>{" "}
        </React.Fragment>
      );
    }
  };

  return (
    <div
      style={{
        background: " linear-gradient(to bottom right, #ff4382, #ffce00)",
      }}
    >
      <nav className="NavbarItems-English1Topic1">
        <NavLink to="/Student">
          <img className="logo-English1Topic1" src={logo} alt="Logo" />
        </NavLink>
        <h1 className="navbar-logo-English1Topic1">{USERNAME}</h1>

        <ul className="nav-menu-English1Topic1 ">
          <div className="nav-links-English1Topic1">
            <li>
              <NavLink to="/Student" className="nav-links-English1Topic1">
                Home
              </NavLink>
            </li>
          </div>

          <div className="nav-links-English1Topic1">
            <li>
              <NavLink to="/English45" className="nav-links-English1Topic1">
                Topics
              </NavLink>
            </li>
          </div>

          {/* <div className="nav-links-English1Topic1">
            <li>
              <select
                className="navworksheets"
                id="Worksheets"
                onChange={worksheetOptHandler}
              >
                <option
                  value="Worksheets"
                  style={{
                     color:"black",
                    backgroundColor: "#e63c44",
                  }}
                >
                  {" "}
                  Worksheets{" "}
                </option>
                 
                <option
                  style={{
                 
                    backgroundColor: "#e63c44",
                  }}
                  value="practice worksheet"
                >
                  Practice Worksheets{" "}
                </option>
                <option
                  style={{
                    
                    backgroundColor: "#e63c44",
                  }}
                  value="test worksheet"
                >
                  Test Worksheets{" "}
                </option>
              </select>
              {/* </NavLink> */}
          {/* </li>
          </div>

          <div className="nav-links-English1Topic1">
            <li>
              <NavLink to="/#" className="nav-links-English1Topic1">
                Progress Report */}
          {/* </NavLink>
            </li>
          </div>

          <div className="nav-links-English1Topic1">
            <li>
              <NavLink to="/#" className="nav-links-English1Topic1">
                Notes
              </NavLink>
            </li>
          </div>

          <div className="nav-links-English1Topic1">
            <li>
              <NavLink
                to="/Student/SpellBee"
                className="nav-links-English1Topic1"
              >
                Spell Bee
              </NavLink> */}
          {/* </li> */}
          {/* </div>   */}
        </ul>
        <NavLink to="/#">
          {" "}
          <button className="button-English1Topic1">Log out</button>
        </NavLink>
      </nav>

      <div
        style={{
          marginRight: "0px",
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundColor: "white",
        }}
      >
        {" "}
      </div>

      <div>{content}</div>
    </div>
  );
};
export default Grade5EnglishContent;

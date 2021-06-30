import React, { useState, useEffect } from "react";
import "./contents.css";
import logo from "../../assets/PPS5.jpeg";
// import { USERNAME } from "../Auth";
import { useLocalStorage } from "../../LocalStorage/Local";
import { NavLink, Link, useHistory } from "react-router-dom";
import ReactPlayer from "react-player";
import image2 from "../../assets/contentPic2.jpeg";
import image3 from "../../assets/contentPic3.jpeg";

import English3Chapter1Topic1 from "../../assets/LECTURE NOTES/ENGLISH3_CHAPTER1_TOPIC1.docx";
import English3Chapter1Topic2 from "../../assets/LECTURE NOTES/ENGLISH3_CHAPTER1_TOPIC2.docx";
import English3Chapter2Topic1 from "../../assets/LECTURE NOTES/ENGLISH3_CHAPTER2_TOPIC1.docx";
import English3Chapter2Topic2 from "../../assets/LECTURE NOTES/ENGLISH3_CHAPTER2_TOPIC2.docx";

import { Eng3Va } from "../Grade3/English/English3";

export let WorksheetType;

const Grade3EnglishContent = () => {
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
    //"""""""""""""""""""ENGLISH CLASS3"""""""""""""""""""""""""""""""""
    if (Eng3Va === "Complete English Alphabet Aa to Zz") {
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
                href={English3Chapter1Topic1}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Alphabets
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <h3 style={{ wordSpacing: " 50px" }}>
                  Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu
                  Vv Ww Xx Yy Zz
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
              url="https://www.youtube.com/watch?v=AB3sdxK3oYQ"
            />
          </div>{" "}
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    } else if (Eng3Va === "Vocabulary (words/meanings)") {
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
                href={English3Chapter1Topic2}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Vocabulary
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <h3 style={{ wordSpacing: " 50px" }}>
                  Ability absorb accuse act active Bold border brief Cable
                  capture certain chill
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
              url="https://www.youtube.com/watch?v=Ran9sit6jHo"
            />
          </div>
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    } else if (Eng3Va === "Vowels (a-e-i-o-u/sounds)") {
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
                href={English3Chapter2Topic1}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Vowels (a-e-i-o-u/sounds)
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <h3 style={{ wordSpacing: " 50px" }}>Aa Ee Ii Oo Uu</h3>
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
              url="https://www.youtube.com/watch?v=ZrZB989VQDU"
            />
          </div>
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    } else if (Eng3Va === "Diagraphs/Common Blends") {
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
                href={English3Chapter2Topic2}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                Diagraphs/Common Blends(-sh){" "}
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <h3 style={{ wordSpacing: " 50px" }}>
                  shade, shadow, shake, shall, shape, share, shark, she, sheep,
                  shine, ship, shirt, shop, shore, short, shot, should,
                  shoulder, shout, show, shut
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
              url="https://www.youtube.com/watch?v=ptfu3tL0OBg"
            />
          </div>
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
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
              <NavLink to="/English3" className="nav-links-English1Topic1">
                Topics
              </NavLink>
            </li>
          </div>

          {/* 
          <div className="nav-links-English1Topic1">
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
          {/* </li> */}
          {/* </div> */}

          {/* <div className="nav-links-English1Topic1">
            <li>
              <NavLink to="/#" className="nav-links-English1Topic1">
                Progress Report
              </NavLink>
            </li>
          </div> */}

          {/* <div className="nav-links-English1Topic1">
            <li>
              <NavLink to="/#" className="nav-links-English1Topic1">
                Notes
              </NavLink>
            </li> */}
          {/* </div> */}

          {/* <div className="nav-links-English1Topic1">
            <li>
              <NavLink
                to="/Student/SpellBee"
                className="nav-links-English1Topic1"
              >
                Spell Bee
              </NavLink>
            </li>
          </div> */}
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
export default Grade3EnglishContent;

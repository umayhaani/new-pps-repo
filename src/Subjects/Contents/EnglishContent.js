import React, { useState, useEffect } from "react";
import "./contents.css";
import logo from "../../assets/PPS5.jpeg";
// import { USERNAME } from "../Auth";
import { useLocalStorage } from "../../LocalStorage/Local";
import { NavLink, Link, useHistory } from "react-router-dom";
import ReactPlayer from "react-player";
import image2 from "../../assets/contentPic2.jpeg";
import image3 from "../../assets/contentPic3.jpeg";

import EnglishChapter1Topic1 from "../../assets/LECTURE NOTES/ENGLISH_CHAPTER1_TOPIC1.docx";
import EnglishChapter1Topic2 from "../../assets/LECTURE NOTES/ENGLISH_CHAPTER1_TOPIC2.docx";
import EnglishChapter1Topic3 from "../../assets/LECTURE NOTES/ENGLISH_CHAPTER1_TOPIC3.docx";
import EnglishChapter2Topic1 from "../../assets/LECTURE NOTES/ENGLISH_CHAPTER2_TOPIC1.docx";
import EnglishChapter2Topic2 from "../../assets/LECTURE NOTES/ENGLISH_CHAPTER2_TOPIC2.docx";

import { Eng1val } from "../Grade1/English/English1";

export let WorksheetType;

const Grade1EnglishContent = () => {
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
      history.push("/PracticeWS");
    }

    if (e.target.value === "test worksheet") {
      WorksheetType = e.target.value;
      setShowCodeWin(() => true);
    }
  };

  const displayContent = () => {
    //"""""""""""""""""""ENGLISH CLASS1"""""""""""""""""""""""""""""""""
    console.log(Eng1val);
    if (Eng1val === "Greetings (Good Morning/Afternoon/Evening)") {
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
                href={EnglishChapter1Topic1}
                download
              >
                Click to download
              </a>
            </div>

            <p>
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Greetings:
              </h2>
              <ul
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <li>
                  <h4> Good Morning </h4>
                </li>
                <li>
                  <h4> Good Afternoon</h4>
                </li>
                <li>
                  <h4> Good Evening</h4>
                </li>
                <li>
                  <h4> Good Night</h4>{" "}
                </li>
                <li>
                  <h4> Nice To Meet You</h4>{" "}
                </li>
                <li>
                  <h4> Nice To Meet You Too</h4>
                </li>
                <li>
                  <h4> Good Bye</h4>
                </li>
                <li>
                  <h4> See You</h4>
                </li>
              </ul>
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
              url="https://www.youtube.com/watch?v=gVIFEVLzP4o"
            />
          </div>
        </React.Fragment>
      );
    }
    console.log(content);

    if (Eng1val === "Greeting Teachers and Elders") {
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
                href={EnglishChapter1Topic2}
                download
              >
                Click to download
              </a>
            </div>

            <p>
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Greetings:
              </h2>
              <ul
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <li>
                  <h4> Good Morning </h4>
                </li>
                <li>
                  <h4> How are you? </h4>
                </li>
                <li>
                  <h4> Fine Thanks.. How are you?</h4>
                </li>
                <li>
                  <h4> Great.</h4>
                </li>
                <li>
                  <h4> Sit down please.</h4>
                </li>
                <li>
                  <h4> Thankyou </h4>
                </li>
                <li>
                  <h4> Good Afternoon</h4>
                </li>
                <li>
                  <h4> Nice To Meet You</h4>
                </li>
                <li>
                  <h4> Nice To Meet You Too </h4>
                </li>
                <li>
                  <h4> Good Evening </h4>
                </li>
                <li>
                  <h4> Good Bye</h4>
                </li>
                <li>
                  <h4> See You </h4>
                </li>
                <li>
                  <h4> Good Night</h4>
                </li>
              </ul>
            </p>

            {/* <img  style = {{ }} src={image2} alt="image2" /> */}
          </div>
          <div
            // className="English1Topic1"
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
              url="https://www.youtube.com/watch?v=Fw0rdSHzWFY"
            />
          </div>{" "}
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    }
    console.log(content);

    if (Eng1val === "Alphabet (Aa to Zz capital and small)") {
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
                href={EnglishChapter1Topic3}
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
            {/* <img  style = {{ }} src={image2} alt="image2" /> */}
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
              url="https://www.youtube.com/watch?v=drusnyfpSO8"
            />
            {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
          </div>
        </React.Fragment>
      );
    }

    console.log(content);

    if (Eng1val === "Small and Capital Letters (A to Z)") {
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
                Lecture Note{" "}
              </h1>

              <a
                className="button-download"
                href={EnglishChapter2Topic1}
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
            {/* <img  style = {{ }} src={image2} alt="image2" /> */}
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
              url="https://www.youtube.com/watch?v=WP1blVh1ZQM"
            />
          </div>
        </React.Fragment>
      );
    }

    console.log(content);

    if (Eng1val === "Sounds of Letters A to Z") {
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
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note{" "}
              </h1>
              <a
                className="button-download"
                href={EnglishChapter2Topic2}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "340px" }}>
                {" "}
                ABC Letter Sounds
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <h3 style={{ wordSpacing: " 50px" }}>
                  A /a/ B /b/ C /k/ D /d/ E /e/ F /f/ G /g/ H /h/ I /i/ J /j/ K
                  /k/ L /l/ M /m/ N /n/ O /o/ P /p/ Q /kw/ R /r/ S /s/ T /t/ U
                  /u/ V /v/ W /w/ X /ks/ Y /y/ Z /z/
                </h3>
              </div>
            </p>
            {/* <img  style = {{ }} src={image2} alt="image2" /> */}
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
              url="https://www.youtube.com/watch?v=4x_G21KhcEw"
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
      <nav className="NavbarItems-student">
        <NavLink to="/Student">
          <img className=" logo-stu" src={logo} alt="Logo" />
        </NavLink>
        <h1 className="navbar-logo-student">{USERNAME}</h1>

        <ul className="nav-menu-student ">
          <div className="nav-links-student">
            <li>
              <NavLink to="/Student" className="nav-links-student">
                Home
              </NavLink>
            </li>
          </div>

          <div className="nav-links-student">
            <li>
              <NavLink to="/English" className="nav-links-student">
                Topics
              </NavLink>
            </li>
          </div>

          {/* <div className="nav-links-student">
            <li>
              <NavLink to="/StudentNotes" className="nav-links-student">
                Notes
              </NavLink>
            </li>
          </div> */}

          {/* <div className="nav-links-student">
            <li>
              <select
                className="navworksheets"
                id="Worksheets"
                onChange={worksheetOptHandler}
              >
                <option
                  value="Worksheets"
                  style={{
                    color: "white",
                    backgroundColor: "#e63c44",
                  }}
                >
                  {" "}
                  WORKSHEETS{" "}
                </option>
                {/* <option
                  style={{
                    color: "black",
                    backgroundColor: "rgb(158, 154, 158)",
                  }}
                  value="practice worksheet"
                >
                  {" "}
                  Worksheets{" "}
                </option> */}
          {/* <option
                  style={{
                    color: "white",
                    backgroundColor: "#e63c44",
                  }}
                  value="practice worksheet"
                >
                  Practice Worksheets{" "}
                </option>
                <option
                  style={{
                    color: "white",
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

          {/* <div className="nav-links-student">
            <li>
              <NavLink to="/DemoSpellBee" className="nav-links-student">
                Spell Bee
              </NavLink>
            </li>
          </div> */}

          {/* <div className="nav-links-student">
            <li>
              <NavLink to="/#" className="nav-links-student">
                Progress Report
              </NavLink>
            </li>
          </div> */}
          {/* <div className="nav-links-student">
            <li>
              <select
                className="navworksheets"
                id="Worksheets"
                onChange={progressOptHandler}
              >
                <option
                  value="Worksheets"
                  style={{
                    color: "white",
                    backgroundColor: "#e63c44",
                  }}
                >
                  {" "}
                  PROGRESS REPORT{" "}
                </option> */}
          {/* <option
                  style={{
                    color: "black",
                    backgroundColor: "rgb(158, 154, 158)",
                  }}
                  value="practice worksheet"
                >
                  {" "}
                  Worksheets{" "}
                </option> */}
          {/* <option
                  style={{
                    color: "white",
                    backgroundColor: "#e63c44",
                  }}
                  value="SubjectWise Progress"
                >
                  SubjectWise Progress{" "}
                </option>
                <option
                  style={{
                    color: "white",
                    backgroundColor: "#e63c44",
                  }}
                  value="OverAll Progress"
                >
                  OverAll Progress{" "}
                </option>
              </select> */}
          {/* </NavLink> */}
          {/* </li>
          </div> */}
        </ul>

        <NavLink to="/#">
          {" "}
          <button className="button-student">Log out</button>
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
export default Grade1EnglishContent;

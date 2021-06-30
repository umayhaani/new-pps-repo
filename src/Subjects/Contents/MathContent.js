import React, { useState, useEffect } from "react";
import "./contents.css";
import logo from "../../assets/PPS5.jpeg";
// import { USERNAME } from "../Auth";
import { useLocalStorage } from "../../LocalStorage/Local";
import { NavLink, Link, useHistory } from "react-router-dom";
import ReactPlayer from "react-player";
import image2 from "../../assets/contentPic2.jpeg";
import image3 from "../../assets/contentPic3.jpeg";

import MathChapter1Topic1 from "../../assets/LECTURE NOTES/MATH_CHAPTER1_TOPIC1.docx";
import MathChapter1Topic2 from "../../assets/LECTURE NOTES/MATH_CHAPTER1_TOPIC2.docx";
import MathChapter2Topic1 from "../../assets/LECTURE NOTES/MATH_CHAPTER2_TOPIC1.docx";
import MathChapter2Topic2 from "../../assets/LECTURE NOTES/MATH_CHAPTER2_TOPIC2.docx";

import { Math2valuee } from "../Grade1/Mathematics/Maths1";

export let WorksheetType;

const Grade4MathContent = () => {
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
    //"""""""""""""""""""MATH CLASS2"""""""""""""""""""""""""""""""""
    if (Math2valuee === "Skip counting by 5s, 10s, 100s") {
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

              <a className="button-download" href={MathChapter1Topic1} download>
                Click to download
              </a>
            </div>

            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Skip counting by 5s, 10s, 100s
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
                    <h3> Skip counting by 5s: </h3>
                  </li>
                </ul>
                <h4>Rule:</h4> Last digit of each count is alternating 5 and 0.
                <h4>Counting:</h4> 5 10 15 20 25 30 35……
                <br></br> <br></br>
                <ul>
                  <li>
                    <h3> Skip counting by 10s:</h3>
                  </li>
                </ul>
                <h4>Rule:</h4> Last digit of each count stays 0. The only thing
                that will change is the first digit.
                <h4>Counting:</h4> 10 20 30 40 50 ………
                <br></br> <br></br>
                <ul>
                  <li>
                    <h3> Skip counting by 100s:</h3>
                  </li>
                </ul>
                <h4>Rule:</h4> Last digit of each count contains two 0s.
                <h4>Counting:</h4> 100 200 300 400 500 ………
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
              url="https://www.youtube.com/watch?v=4xsGvFUGjnw"
            />
          </div>
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    } else if (Math2valuee === "Ordinal counting") {
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

              <a className="button-download" href={MathChapter1Topic2} download>
                Click to download
              </a>
            </div>

            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Ordinal Numbers{" "}
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <h4> Ordinal Numbers shows position of an object</h4>
                <br></br>

                <ul>
                  <li style={{ wordSpacing: " 50px" }}> 1st First </li>
                  <li style={{ wordSpacing: " 39px" }}> 2nd Second </li>
                  <li style={{ wordSpacing: " 50px" }}> 3rd Third </li>
                  <li style={{ wordSpacing: " 50px" }}> 4th Fourth </li>
                  <li style={{ wordSpacing: " 50px" }}> 5th Fifth </li>
                  <li style={{ wordSpacing: " 50px" }}> 6th Sixth </li>
                  <li style={{ wordSpacing: " 50px" }}> 7th Seventh </li>
                  <li style={{ wordSpacing: " 50px" }}> 8th Eighth </li>
                  <li style={{ wordSpacing: " 50px" }}> 9th Ninth </li>
                  <li style={{ wordSpacing: " 40px" }}> 10th Tenth </li>
                </ul>
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
              url="https://www.youtube.com/watch?v=BaO1E21SpkI"
            />
          </div>
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    } else if (Math2valuee === "Multiplication") {
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

              <a className="button-download" href={MathChapter2Topic1} download>
                Click to download
              </a>
            </div>

            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Multiplication{" "}
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <h4> What is to multiply? .</h4>
                <p>
                  In math, to multiply means to add equal groups. When we
                  multiply, the number of things in the group increases
                </p>
                <br></br>
                <h3>Examples</h3>
                <br></br>
                <ul style={{ marginLeft: " 30px" }}>
                  <li> 6*9=54 </li>
                  <br></br>
                  <li> 3*3=9 </li>
                  <br></br>
                  <li> 7*8 = 56</li>
                </ul>
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
              url="https://www.youtube.com/watch?v=6cipxrrcHmQ"
            />
          </div>
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    }

    if (Math2valuee === "Division") {
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

              <a className="button-download" href={MathChapter2Topic2} download>
                Click to download
              </a>
            </div>

            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Division{" "}
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <h4> What is Division?</h4>
                <p>
                  The division is a method of distributing a group of things
                  into equal parts. It is one of the four basic operations of
                  arithmetic, which gives a fair result of sharing.{" "}
                </p>
                <br></br>
                <h3>Examples</h3>
                <br></br>
                <ul style={{ marginLeft: " 30px" }}>
                  <li> 18÷3=6</li>
                  <br></br>
                  <li> 83÷2=41 </li>
                  <br></br>
                  <li>10÷1=10</li>
                </ul>
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
              url="https://www.youtube.com/watch?v=_Mb2f7qpMjc"
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
              <NavLink to="/Maths" className="nav-links-English1Topic1">
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
              </select> */}
          {/* </NavLink> */}
          {/* </li>
          </div>

          <div className="nav-links-English1Topic1">
            <li>
              <NavLink to="/#" className="nav-links-English1Topic1">
                Progress Report
              </NavLink>
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
      {/* <ReactPlayer className="Video" controls url='https://www.youtube.com/watch?v=gVIFEVLzP4o' /> */}
      {/* <FileViewer
        fileType={type}
        filePath={file} /> */}
    </div>
  );
};
export default Grade4MathContent;

import React, { useState, useEffect } from "react";
import "./contents.css";
import logo from "../../assets/PPS5.jpeg";
// import { USERNAME } from "../Auth";
import { useLocalStorage } from "../../LocalStorage/Local";
import { NavLink, Link, useHistory } from "react-router-dom";
import ReactPlayer from "react-player";
import image2 from "../../assets/contentPic2.jpeg";
import image3 from "../../assets/contentPic3.jpeg";
import Math45Chapter1Topic1 from "../../assets/LECTURE NOTES/MATH45_CHAPTER1_TOPIC1.docx";
import Math45Chapter1Topic2 from "../../assets/LECTURE NOTES/MATH45_CHAPTER1_TOPIC2.docx";
import Math45Chapter2Topic1 from "../../assets/LECTURE NOTES/MATH45_CHAPTER2_TOPIC1.docx";
import Math45Chapter2Topic2 from "../../assets/LECTURE NOTES/MATH45_CHAPTER2_TOPIC2.docx";

import { Math4valueeee } from "../Grade4/Mathematics/Maths4";

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
    //"""""""""""""""""""MATH CLASS 4"""""""""""""""""""""""""""""""""
    if (Math4valueeee === "Read Numbers on Number line") {
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
                href={Math45Chapter1Topic1}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                Number Line
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
                    <h3>
                      Writing numbers down on a Number Line makes it easy to
                      tell which numbers are greater or lesser
                    </h3>
                  </li>
                  <li>
                    <h3>
                      A number on the left is less than a number on the right.
                    </h3>
                  </li>
                  <br></br>
                  <h3>Examples:</h3>
                  <li>5 is less than 8 </li>
                  <li>−1 is less than 1</li>
                  <li>−8 is less than −5</li>
                  <li>Example: Lunch</li>
                  John borrowed $3 to pay for his lunch Virginia borrowed $5 to
                  pay for her lunch Alex had enough money for lunch and has $3
                  left over Place these people on the number line to find who is
                  poorest and who is richest.
                  <br></br>
                  Owing money is negative Having money is positive
                  <br></br>
                  So John has "−3", Virginia has "−5" and Alex has "+3"
                  <br></br>
                  Now it is easy to see that:
                  <br></br>
                  <li>Virginia is poorer than John (−5 is less than −3) and</li>
                  <li>John is poorer than Alex (−3 is less than 3) and </li>
                  <li>Alex is, of course, the richest! </li>
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
              url="https://www.youtube.com/watch?v=1RRixctGL8Y"
            />
          </div>
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    } else if (Math4valueeee === "Skip counting   on number line") {
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
                href={Math45Chapter1Topic2}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                Skip counting on number line
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <ul>
                  <h3>What is skip counting?</h3>
                  <li>
                    In math, skip counting can be defined as the method of
                    counting forward by numbers other than 1.
                  </li>
                  <li>
                    To skip count, we keep adding the same number each time to
                    the previous number.
                  </li>
                  <li>
                    Here, we are skip counting by 2 on a number line. So,
                    starting at 0, the next number will be 0 + 2 = 2, then, 2 +
                    2 = 4, then 4 + 2 = 6, then 6 + 2 = 8, and then, 10, 12, 14,
                    16, 18 and so on.
                  </li>
                </ul>
              </div>
            </p>{" "}
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
              url="https://www.youtube.com/watch?v=uNGnd_RzN20"
            />
            {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
          </div>
        </React.Fragment>
      );
    } else if (Math4valueeee === "Multiplication using place value") {
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
                href={Math45Chapter2Topic1}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                Multiplication using place value{" "}
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
                    <h3>Partial Products: (2 digit x 2 digit)</h3>
                  </li>
                </ul>
                <p
                  style={{
                    fontWeight: "bolder",
                    marginLeft: "80px",
                    marginTop: "25px",
                  }}
                >
                  {" "}
                  32{" "}
                </p>
                <p
                  style={{
                    fontWeight: "bolder",
                    wordSpacing: " 25px",
                    textDecoration: "underline",
                    marginLeft: "80px",
                  }}
                >
                  x 34
                </p>
                <p
                  style={{
                    fontWeight: "bolder",
                    wordSpacing: " 25px",
                    marginLeft: "80px",
                  }}
                >
                  {" "}
                  900 (30 x 30)
                </p>
                <p
                  style={{
                    fontWeight: "bolder",
                    wordSpacing: " 25px",
                    marginLeft: "80px",
                  }}
                >
                  120 (30 x 4)
                </p>
                <p
                  style={{
                    fontWeight: "bolder",
                    wordSpacing: " 35px",
                    marginLeft: "80px",
                  }}
                >
                  60 (2 x 30)
                </p>
                <p
                  style={{
                    fontWeight: "bolder",
                    wordSpacing: " 45px",
                    textDecoration: "underline",
                    marginLeft: "80px",
                  }}
                >
                  8 (2 x 4)
                </p>
                <p
                  style={{
                    fontWeight: "bolder",
                    wordSpacing: " 25px",
                    marginLeft: "80px",
                  }}
                >
                  1,088
                </p>
                <br></br> <br></br>
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
              url="https://www.youtube.com/watch?v=sZ4fWym7kYw"
            />
          </div>
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    } else if (Math4valueeee === "Division using place value") {
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
                href={Math45Chapter2Topic2}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                Division using place value{" "}
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
                    <h3>Partial Quotients: 7725/6</h3>
                  </li>
                </ul>

                <p
                  style={{
                    fontWeight: "bolder",
                    textDecoration: "underline",
                    marginLeft: "80px",
                    marginTop: "25px",
                  }}
                >
                  1204 r 1{" "}
                </p>
                <p style={{ fontWeight: "bolder", marginLeft: "80px" }}>
                  {" "}
                  6) 7225
                </p>
                <p
                  style={{
                    fontWeight: "bolder",
                    textDecoration: "underline",
                    marginLeft: "80px",
                  }}
                >
                  {" "}
                  - 6000 ( 1000 x 6)
                </p>
                <p style={{ fontWeight: "bolder", marginLeft: "80px" }}>
                  {" "}
                  1225
                </p>
                <p
                  style={{
                    fontWeight: "bolder",
                    textDecoration: "underline",
                    marginLeft: "80px",
                  }}
                >
                  {" "}
                  - 1200 (200 x 6)
                </p>
                <p style={{ fontWeight: "bolder", marginLeft: "80px" }}> 25</p>
                <p
                  style={{
                    fontWeight: "bolder",
                    textDecoration: "underline",
                    marginLeft: "80px",
                  }}
                >
                  {" "}
                  - 24 (4 x 6)
                </p>
                <p style={{ fontWeight: "bolder", marginLeft: "80px" }}> 1 </p>
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
              url="https://www.youtube.com/watch?v=rXC_XweYNTg"
            />
          </div>{" "}
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
              <NavLink to="/Maths45" className="nav-links-English1Topic1">
                Topic
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
            <li> */}
          {/* <NavLink to="/#" className="nav-links-English1Topic1">
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
              > */}
          {/* Spell Bee
              </NavLink>
            {/* </li> */}
          {/* </div>    */}
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

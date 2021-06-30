import React, { useState, useEffect } from "react";
import "./contents.css";
import logo from "../../assets/PPS5.jpeg";
// import { USERNAME } from "../Auth";
import { useLocalStorage } from "../../LocalStorage/Local";
import { NavLink, Link, useHistory } from "react-router-dom";
import ReactPlayer from "react-player";
import image2 from "../../assets/contentPic2.jpeg";
import image3 from "../../assets/contentPic3.jpeg";

import pic1 from "../../assets/Computer_Ch1_Topic1.JPG";
import pic2 from "../../assets/Computer_Ch1_Topic2.JPG";
import pic3 from "../../assets/Computer_Ch2_Topic1.JPG";
import pic4 from "../../assets/Computer_Ch2_Topic2.JPG";

import ComputerChapter1Topic1 from "../../assets/LECTURE NOTES/Computer_Chapter1_Topic1.docx";
import ComputerChapter1Topic2 from "../../assets/LECTURE NOTES/Computer_Chapter1_Topic2.docx";
import ComputerChapter2Topic1 from "../../assets/LECTURE NOTES/Computer_Chapter2_Topic1.docx";
import ComputerChapter2Topic2 from "../../assets/LECTURE NOTES/Computer_Chapter2_Topic2.docx";
// import English1Chapter2Topic2 from "../../assets/LECTURE NOTES/ENGLISH1_CHAPTER2_TOPIC2.docx";

import { Computereval } from "../Grade1/Computer/Computer1";

export let WorksheetType;

const ComputerContent = () => {
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
    //"""""""""""""""""""Computere CLASS1"""""""""""""""""""""""""""""""""
    console.log(Computereval);
    if (Computereval === "What is Computer") {
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
                href={ComputerChapter1Topic1}
                download
              >
                Click to download
              </a>

              <img style={{ marginTop: "0px" }} src={pic1} alt="pic1" />
            </div>
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
              url="https://www.youtube.com/watch?v=ipGDTd4voug"
            />
          </div>
        </React.Fragment>
      );
    }
    console.log(content);

    if (Computereval === "Parts of Computer") {
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
                href={ComputerChapter1Topic2}
                download
              >
                Click to download
              </a>
            </div>

            <img style={{ marginTop: "10px" }} src={pic2} alt="pic2" />
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
              url="https://www.youtube.com/watch?v=YISZxBeb1mo"
            />
          </div>{" "}
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    }
    console.log(content);

    if (Computereval === "Types of Computer") {
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
                href={ComputerChapter2Topic1}
                download
              >
                Click to download
              </a>
            </div>
            <img style={{ marginTop: "0px" }} src={pic3} alt="pic3" />
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
              url="https://www.youtube.com/watch?v=f-EoEKIm_7o"
            />
            {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
          </div>
        </React.Fragment>
      );
    }

    console.log(content);

    if (Computereval === "Uses Of Computers") {
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
                href={ComputerChapter2Topic2}
                download
              >
                Click to download
              </a>
            </div>
            <img style={{ paddingLeft: "20px" }} src={pic4} alt="pic4" />
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
              url="https://www.youtube.com/watch?v=tBJSt9nMjnA"
            />
          </div>
        </React.Fragment>
      );
    }

    console.log(content);
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
              <NavLink to="/Computer" className="nav-links-student">
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
export default ComputerContent;

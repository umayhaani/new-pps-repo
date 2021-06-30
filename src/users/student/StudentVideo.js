import React, { useEffect, useState } from "react";
import logo from "../../assets/PPS5.jpeg";
// import { USERNAME } from "../../Auth";
import { NavLink, useHistory } from "react-router-dom";
//import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined";
//import img from "../../assets/Capturedddddddddddd.JPG";
import { useLocalStorage } from "../../LocalStorage/Local";

import image2 from "../../assets/contentPic2.jpeg";
import image3 from "../../assets/notess.jpeg";
import "./studentNotes.css";

import "./studentVideos.css";
export let WorksheetType;
export let prevGrade;
const StudentVideo = () => {
  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");

  const history = useHistory();

  const getGrade = (e) => {
    console.log(e.target.innerText);
    prevGrade = e.target.innerText;
    history.push("/VideoSubject1");
  };

  return (
    <div
      style={{
        marginTop: "",
        background: " linear-gradient(to bottom right, #ff4382, #ffce00)",
        //   paddingBottom:"30px",
      }}
    >
      <React.Fragment>
        <nav className="NavbarItems-StudentNotes">
          <NavLink to="/Student">
            <img className=" logo " src={logo} alt="Logo" />
          </NavLink>
          <h1 className="navbar-logo-StudentNotes">{USERNAME}</h1>

          <ul className="nav-menu-StudentNotes ">
            <div className="nav-links-StudentNotes">
              <li>
                <NavLink to="/Student" className="nav-links-StudentNotes">
                  Home
                </NavLink>
              </li>
            </div>

            {/* <div className="nav-links-StudentNotes">
              <li>
                <NavLink to="/StudentNotes" className="nav-links-StudentNotes">
                  Grades
                </NavLink>
              </li>
            </div> */}

            <div className="nav-links-student">
              <li>
                <NavLink to="/StudentNotes" className="nav-links-student">
                  Lecture Notes{" "}
                </NavLink>
              </li>
            </div>
          </ul>

          <NavLink to="/#">
            {" "}
            <button className="button-StudentNotes">Log out</button>
          </NavLink>
        </nav>

        <div
          style={{
            marginRight: "0px",
            paddingTop: "30px",
            paddingBottom: "20px",
            backgroundColor: "white",
          }}
        ></div>
        <div
          style={{
            marginTop: "70px",
            marginLeft: "210px",
            marginRight: "170px",
            backgroundColor: "white",
          }}
        ></div>
        <div
          style={{
            marginTop: "70px",
            marginLeft: "210px",
            marginRight: "170px",
            backgroundColor: "white",
            paddingBottom: "150px",
          }}
        >
          <div>
            <img style={{ width: "1119px" }} src={image2} alt="image2" />
            <img
              style={{
                paddingTop: "  0px",
                float: "right",
                marginBottom: " 0px",
              }}
              src={image3}
              alt="image3"
            />
            <p
              style={{
                //   textAlign:"center",
                paddingTop: " 50px",
                marginLeft: "20px",
                marginBottom: "20px",
                fontWeight: "bolder",
                fontSize: "46px",
                fontStyle: "times new roman",
              }}
            >
              {" "}
              Term's Video Lectures
            </p>
          </div>

          <p
            style={{
              // textDecoration: "underline",
              //   textAlign:"center",
              //   paddingTop: "10px",
              marginLeft: "20px",
              marginBottom: "20px",
              //   paddingBottom: " 50px",
              // fontWeight:"bolder",
              fontSize: "18px",
              color: "grey",
              fontStyle: "times new roman",
            }}
          >
            Simple-to-follow Video Letures of the selected Grade and Subject.
            <br></br>
            After you select Grade and Subject, related Video Letures will
            appear.
            <br></br>
            You can download them to have them offline.
            <br></br>
            <br></br>
            <span style={{ fontWeight: "bold", color: "#E5640F" }}>
              Pick your Grade to get started!
            </span>
          </p>

          <p
            style={{
              // textDecoration: "underline",
              //   textAlign:"center",
              paddingTop: "30px",
              marginLeft: "20px",
              //   marginBottom: "20px",
              //   paddingBottom: " 50px",
              fontWeight: "bolder",
              fontSize: "40px",
              //   color:"grey",
              fontStyle: "times new roman",
            }}
          >
            I'am In....
          </p>

          <div style={{ display: "flex" }} onClick={getGrade}>
            <div className="gradeDiv" id="g1">
              Grade-1
            </div>

            <div className="gradeDiv" id="g2">
              {" "}
              Grade-2
            </div>

            <div className="gradeDiv" id="g3">
              {" "}
              Grade-3
            </div>

            <div className="gradeDiv" id="g4">
              {" "}
              Grade-4
            </div>

            <div className="gradeDiv" id="g5">
              {" "}
              Grade-5
            </div>
          </div>
        </div>
        {/* <div
          style={{
            marginRight: "0px",
            paddingTop: "20px",
            paddingBottom: "20px",
            backgroundColor: "white",
          }}
        >
          {" "}
        </div> */}

        {/* <div
          style={{
            marginTop: "-150px",
            marginLeft: "210px",
            marginRight: "170px",
            backgroundColor: "white",
            paddingBottom: "150px",
          }}
        ></div> */}
        <div
          style={{
            marginRight: "0px",
            paddingTop: "50px",
            paddingBottom: "20px",
            backgroundColor: "white",
          }}
        ></div>
      </React.Fragment>
    </div>
  );
};

export default StudentVideo;

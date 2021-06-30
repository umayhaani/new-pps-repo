import React, { useState, useEffect } from "react";
import "./studentGrade.css";
import logo from "../../assets/PPS5.jpeg";
import { useLocalStorage } from "../../LocalStorage/Local";
import { prevGrade } from "./StudentVideo";
import { prevSubject } from "./VideoSubject1";
import { NavLink, useHistory } from "react-router-dom";
import image2 from "../../assets/contentPic2.jpeg";
import image3 from "../../assets/notesss.jpeg";
import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined";
//import EnterCode from "../../components/UIElements/EnterCode";

export let WorksheetType;

const VideoContent = () => {
  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
  const [showText, setShowText] = useState(() => false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  // useEffect(() => {
  //   displayStudentContent();
  // }, []);

  const getNotes = async () => {
    console.log(prevGrade, prevSubject);
    let responseData;
    let student = "student";
    try {
      const response = await fetch(
        `http://localhost:5000/gettingVideo?student=${student}&grade=${prevGrade}&subject=${prevSubject}`
      );
      responseData = await response.json();
      if (responseData.status === "404" || responseData.notes.length === 0) {
        console.log(responseData.status);
        return setShowText(() => true);
      }
      console.log(responseData.notes.map((n) => n));
    } catch (err) {
      console.log(err);
    }
    if (responseData) {
      setNotes(responseData.notes);
      console.log(notes);
      return;
    }
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

            <div className="nav-links-StudentNotes">
              <li>
                <NavLink to="/videos" className="nav-links-StudentNotes">
                  Grades
                </NavLink>
              </li>
            </div>

            <div className="nav-links-student">
              <li>
                <NavLink to="/StudentNotes" className="nav-links-student">
                  Lecture-Notes{" "}
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
            paddingTop: "20px",
            paddingBottom: "20px",
            backgroundColor: "white",
          }}
        >
          {" "}
        </div>

        <React.Fragment>
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
                List of Video Lectures
              </p>
            </div>
            {/* <div
              style={{
                borderWidth: "thick",
                borderStyle: "solid",
                borderRadius: "7px",
                borderColor: "black",
                width: "fitContent",
                height: "fitContent",
                marginRight: "40px",
                marginLeft: "40px",
                marginTop: "60px",
                paddingBottom: "60px",
                marginBottom: "30px",
              }}
            > */}

            {!showText && (
              <div style={{ display: "flex" }}>
                <div className="all-divs-StudentNotes">
                  <div>
                    {notes.map((n) => (
                      <p className="body-div-StudentNotes">
                        {" "}
                        <p className="text-StudentNotes">{n.uploadedFile}</p>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="all-divs-StudentNotes2">
                  <div>
                    {notes.map((n) => (
                      <p className="body-div-StudentNotes2">
                        {" "}
                        <div>
                          <a
                            className="text-StudentNotes2"
                            href={n.uploadedFile}
                            download
                          >
                            Download
                          </a>
                        </div>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {showText && (
              <div
                style={{
                  // borderWidth: "thick",
                  // borderStyle: "solid",
                  // borderRadius: "7px",
                  //borderColor: " black",
                  width: "700px",
                  height: "400px",
                  marginLeft: "100px",
                  marginTop: "60px",
                }}
              >
                <h1
                  style={{
                    marginTop: "7rem",
                    textAlign: "center",
                  }}
                >
                  NO NOTES AVAILABLE
                </h1>
                <SentimentVeryDissatisfiedOutlinedIcon
                  style={{
                    fontSize: "80px",
                    marginTop: "2rem",
                    marginLeft: "19rem",
                  }}
                />
              </div>
            )}
          </div>
          {/* </div> */}
          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
        </React.Fragment>
      </React.Fragment>
    </div>
  );
};

export default VideoContent;

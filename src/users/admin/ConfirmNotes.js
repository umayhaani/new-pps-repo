import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ApprovedModal from "../../components/Worksheets/ApprovedModal";
import DisapprovedModal from "../../components/Worksheets/DisapprovedModal";
import { useLocalStorage } from "../../LocalStorage/Local";
import logo from "../../assets/PPS5.jpeg";
import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

import "../admin/confirmNotes.css";
import uuid from "react-uuid";

const ConfirmNotes = () => {
  const [notes, setNotes] = useState([]);
  const [showText, setShowText] = useState(() => false);
  const [allow, setAllow] = useState(() => false);
  const [modalisOpen, setModalisOPen] = useState(() => false);
  const [grade, setGrade] = useState("no-value");
  const [errModal, seterrModal] = useState(() => false);
  const [adminType, setAdminType] = useLocalStorage("adminType", "null");

  useEffect(() => {
    getNotes();
  }, [grade, allow]);

  const approveNote = async (searchId) => {
    console.log(searchId);
    //e.preventDefault();
    let responseData;
    setModalisOPen(() => true);
    try {
      const response = await fetch("http://localhost:5000/approveNotes", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          searchId,
        }),
      });
      responseData = await response.json();
      setAllow(true);
    } catch (err) {
      console.log(err);
    }
    // console.log(responseData.approvedNotes);
  };

  const disapproveNote = async (searchId) => {
    seterrModal(() => true);
    let responseData;
    try {
      const response = await fetch("http://localhost:5000/disapproveNotes", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          searchId,
        }),
      });
      responseData = await response.json();
      setAllow(true);
    } catch (err) {
      console.log(err);
    }
  };

  const getGrade = (e) => {
    setGrade(e.target.value);
  };

  const getNotes = async () => {
    let responseData;
    try {
      const response = await fetch(
        `http://localhost:5000/gettingFile?adminType=${adminType}&grade=${grade}`
      );
      responseData = await response.json();
      if (responseData.status === "404" || responseData.notes === undefined) {
        console.log(responseData.status, responseData.notes);

        setShowText(() => true);
      }
    } catch (err) {
      console.log(err);
    }

    if (responseData) {
      setNotes(responseData.notes);
      return;
    }
  };

  return (
    <>
      <div
        style={{
          // background: "black",
          minWidth: "100%",
          minHeight: "100%",
          backgroundSize: "cover",
          paddingBottom: "200px",
          // paddingTop:"23px"
        }}
      >
        {(adminType === "English Admin" ||
          adminType === "Science Admin" ||
          adminType === "Computer Admin" ||
          adminType === "Mathematics Admin") && (
          <nav className="NavbarItems-approvedNotes">
            <NavLink to="/admin">
              <img className="logo " src={logo} alt="Logo" />
            </NavLink>
            <h1 className="navbar-logo-approvedNotes">Admin's Portal</h1>
            <ul className="nav-menu-approvedNotes ">
              <div className="nav-links-approvedNotes">
                <li>
                  <NavLink to="/admin" className="nav-links-approvedNotes">
                    Home
                  </NavLink>
                </li>
              </div>

              <div className="nav-links-approvedNotes">
                <li>
                  <NavLink
                    to="/ConfirmVideos"
                    className="nav-links-approvedNotes"
                  >
                    Video-Lectures
                  </NavLink>
                </li>
              </div>

              <div className="nav-links-approvedNotes">
                <li>
                  <NavLink
                    to="/confirmWorksheets"
                    className="nav-links-approvedNotes"
                  >
                    Worksheets
                  </NavLink>
                </li>
              </div>
            </ul>
            <NavLink to="/#">
              {" "}
              <button className="button-approvedNotes">Log out</button>
            </NavLink>
          </nav>
        )}

        {(adminType === "Urdu Admin" || adminType === "Islamiate Admin") && (
          <nav className="NavbarItems-approvedNotes">
            <NavLink to="/admin">
              <img className="logo " src={logo} alt="Logo" />
            </NavLink>
            <h1 className="navbar-logo-approvedNotes">Admin's Portal</h1>
            <ul className="nav-menu-approvedNotes ">
              <div className="nav-links-approvedNotes">
                <li>
                  <NavLink to="/admin" className="nav-links-approvedNotes">
                    Home
                  </NavLink>
                </li>
              </div>

              <div className="nav-links-approvedNotes">
                <li>
                  <NavLink
                    to="/ConfirmVideos"
                    className="nav-links-approvedNotes"
                  >
                    Video-Lectures
                  </NavLink>
                </li>
              </div>
            </ul>
            <NavLink to="/#">
              {" "}
              <button className="button-approvedNotes">Log out</button>
            </NavLink>
          </nav>
        )}

        <div
          style={{
            marginRight: "0px",
            paddingTop: "20px",
            // paddingBottom: "20px",
            backgroundColor: "white",
          }}
        >
          {" "}
        </div>

        <div
          style={{
            backgroundColor: "black",
            marginTop: "2px",
            paddingBottom: "10px",
          }}
        >
          <p
            style={{
              color: "rgb(245, 87, 13)",
              fontSize: "50px",
              fontWeight: "bolder",
              marginLeft: "270px",
              paddingTop: "5px",
            }}
          >
            Approve/Disapprove Lecture Notes
          </p>
        </div>
        <h2
          style={{ marginLeft: "400px", marginTop: "5rem", fontWeight: "bold" }}
        >
          Please Select Grade To View Notes
        </h2>
        <FormControl
          variant="outlined"
          style={{ marginLeft: "870px", marginTop: "-2rem" }}
        >
          <InputLabel required>Grade</InputLabel>
          <Select
            native
            // value={state.age}
            onChange={getGrade}
            label="Select Grade"
          >
            <option value=" "></option>
            <option value="Grade-1">Grade-1</option>
            <option value="Grade-2">Grade-2</option>
            <option value="Grade-3">Grade-3</option>
            <option value="Grade-4">Grade-4</option>
            <option value="Grade-5">Grade-5</option>
          </Select>
        </FormControl>
        {notes && (
          <>
            <div
              style={{
                marginRight: "0px",
                paddingTop: "20px",
                // paddingBottom: "20px",
                backgroundColor: "white",
              }}
            >
              {" "}
            </div>

            <div style={{ paddingTop: "23px" }}></div>

            <div style={{ display: "flex" }}>
              <div className="all-divs-confirmNotes">
                <div>
                  {notes.map((n) => (
                    <>
                      <p className="body-div-confirmNotes" key={uuid()}>
                        <p key={uuid()}>
                          <a
                            className="text-StudentNotes"
                            href={n.uploadedFile}
                          >
                            {n.uploadedFile}
                          </a>
                        </p>
                      </p>
                    </>
                  ))}
                </div>
              </div>

              <div className="all-divs-confirmNotes2">
                <div>
                  {notes.map((n) => (
                    <p
                      className="body-div-confirmNotes2"
                      onClick={() => approveNote(n.uploadedFile)}
                    >
                      {" "}
                      <div>
                        <a className="text-confirmNotes2">approve</a>
                      </div>
                    </p>
                  ))}
                </div>
                {/* </div>

      <div className="all-divs-confirmNotes2">      */}
                <div>
                  {notes.map((n) => (
                    <p
                      className="body-div-confirmNotes2"
                      onClick={() => disapproveNote(n.uploadedFile)}
                    >
                      {" "}
                      <div>
                        <a className="text-confirmNotes2">disapprove</a>
                      </div>
                    </p>
                  ))}
                </div>
                {/* </div>


<div className="all-divs-confirmNotes2">      */}
                <div>
                  {notes.map((n) => (
                    <p className="body-div-confirmNotes2">
                      {" "}
                      <div>
                        <a
                          className="text-confirmNotes2"
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
          </>
        )}
        <ApprovedModal
          modalisOpen={modalisOpen}
          closeModal={() => setModalisOPen(false)}
          successMsg="NOTES APPROVED SUCCESSFULLY "
          reload="donot reload"
        />
        <DisapprovedModal
          modalisOpen={errModal}
          // error={error}
          msg="DISAPPROVED SUCCESSFULLY"
          closeModal={() => seterrModal(false)}
          reload="donot reload"
        />

        {showText && !notes && (
          <div
            style={{
              borderWidth: "thick",
              borderStyle: "solid",
              borderRadius: "7px",
              borderColor: " black",
              width: "700px",
              height: "400px",
              marginLeft: "360px",
              marginTop: "60px",
              color: "white",
            }}
          >
            <h1
              style={{
                marginTop: "7rem",
                textAlign: "center",
                borderColor: " black",
                color: "black",
              }}
            >
              NO NOTES AVAILABLE
            </h1>
            <SentimentVeryDissatisfiedOutlinedIcon
              style={{
                fontSize: "80px",
                marginTop: "2rem",
                marginLeft: "19rem",
                borderColor: " black",
                color: "black",
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ConfirmNotes;

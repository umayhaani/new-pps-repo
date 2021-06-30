import React, { useState, useEffect, useRef } from "react";
import { MenuItems } from "./MenuItems-teacher";
//import { USERNAME } from "../../Auth";
import { NavLink, useHistory } from "react-router-dom";
import logo from "../../assets/PPS5.jpeg";
import "./notesHistory.css";
import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined";
import { useForm } from "react-hook-form";
import axios, { post } from "axios";
import uuid from "react-uuid";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import GetAppIcon from "@material-ui/icons/GetApp";
import { useLocalStorage } from "../../LocalStorage/Local";
import DisapprovedModal from "../../components/Worksheets/DisapprovedModal";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

const NotesHistory = () => {
  const [email, setuserEmail] = useLocalStorage("email", "null");
  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
  const [tt, settt] = useState([]);
  const [subject, setSubject] = useState("no-value");
  const [grade, setGrade] = useState("no-value");
  // const [showText, setShowText] = useState(() => false);
  const [errModal, seterrModal] = useState(() => false);
  const [showText, setShowText] = useState(() => false);

  useEffect(() => {
    noteHistoryHandler();
  }, []);

  const deleteHandler = async (searchId) => {
    //console.log(topic);
    seterrModal(() => true);

    // setModalisOPen(() => true);
    try {
      const response = await fetch("http://localhost:5000/deleteNotes", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          searchId,
        }),
      });

      if (response.deleted === "ALL DELETED") {
        return setShowText(() => true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const noteHistoryHandler = async () => {
    let responseData;
    let sent = "appear";
    try {
      const response = await fetch(
        `http://localhost:5000/gettingFile?show=${sent}&&creator=${email}`
      );
      responseData = await response.json();
      if (responseData.status === "404") {
        console.log(responseData.status);
        return setShowText(() => true);
      }

      function GetSortOrder(prop) {
        return function (a, b) {
          if (a[prop] > b[prop]) {
            return 1;
          } else if (a[prop] < b[prop]) {
            return -1;
          }
          return 0;
        };
      }

      if (responseData.notes && responseData.status !== "404") {
        //console.log("   avaiable    ", responseData);
        setShowText(() => false);
        responseData.notes.sort(GetSortOrder("grade"));
        return settt(responseData.notes);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const renderTable = () => {
    return tt.map((hh) => {
      return (
        <>
          <tr key={uuid()}>
            <td>{hh.uploadedFile}</td>
            <td>
              {" "}
              {hh.approved.toString() === "false"
                ? "disapproved"
                : "approved"}{" "}
            </td>
            <td>{hh.grade}</td>
            <td>{hh.subject}</td>
            <td>
              <a href={hh.uploadedFile} download>
                <GetAppIcon id="deleteWSBtn" />
              </a>
            </td>
            <td>
              <DeleteForeverIcon
                onClick={() => deleteHandler(hh.uploadedFile)}
                id="deleteWSBtn"
              />
            </td>
          </tr>
        </>
      );
    });
  };

  const getHistory = async () => {
    let responseData;
    let sent = "appear";
    try {
      const response = await fetch(
        `http://localhost:5000/gettingFile?show=${sent}&&creator=${email}&&grade=${grade}&&subject=${subject}`
      );
      responseData = await response.json();
      if (responseData.status === "404" || responseData.notes.length === 0) {
        console.log(responseData.status);
        return setShowText(() => true);
      }
      if (responseData.notes && responseData.status !== "404") {
        //console.log("   avaiable    ", responseData);
        setShowText(() => false);
        return settt(responseData.notes);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <nav className="NavbarItems-History">
        <NavLink to="/teacher">
          <img className=" logo" src={logo} alt="Logo" />
        </NavLink>
        <h1 className="navbar-logo-History">{USERNAME}</h1>

        <ul className="nav-menu-History ">
          <div className="nav-links-History">
            <li>
              <NavLink to="/teacher" className="nav-links-History">
                Home
              </NavLink>
            </li>
          </div>

          <div className="nav-links-History">
            <li>
              <NavLink to="/LectureNotes" className="nav-links-History">
                Upload
              </NavLink>
            </li>
          </div>
        </ul>

        <NavLink to="/#">
          {" "}
          <button className="button-History">Log out</button>
        </NavLink>
      </nav>

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
            fontSize: "60px",
            fontWeight: "bolder",
            marginLeft: "400px",
            paddingTop: "5px",
          }}
        >
          Lecture-Notes History
        </p>
      </div>

      <div
        style={{
          marginRight: "0px",
          paddingTop: "20px",
          // paddingBottom: "50px",

          // marginBottom: "50px",
          backgroundColor: "white",
        }}
      >
        {" "}
      </div>

      <FormControl
        variant="outlined"
        style={{ marginLeft: "35rem", marginTop: "2rem" }}
      >
        <InputLabel required>Grade</InputLabel>
        <Select
          native
          // value={state.age}
          onChange={(e) => setGrade(e.target.value)}
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
      <FormControl
        variant="outlined"
        style={{ marginLeft: "3rem", marginTop: "2rem" }}
      >
        <InputLabel required>Subject</InputLabel>
        <Select
          native
          // value={state.age}
          onChange={(e) => setSubject(e.target.value)}
          label="Select Subject"
        >
          <option value=" "></option>
          <option value="Computer">Computer</option>
          <option value="English">English</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Science">Science</option>
          <option value="Urdu">Urdu</option>
          <option value="Islamiate">Islamiate</option>
        </Select>

        <button
          className="signbutton"
          style={{
            marginTop: "2rem",
            marginLeft: "-9rem",
            backgroundColor: "white",
          }}
          onClick={getHistory}
        >
          Search
        </button>
      </FormControl>

      <div
        style={{
          //  marginRight: "0px",
          paddingTop: "5px",
          // marginBottom: "250px",
          paddingBottom: "36px",
          backgroundColor: "white",
        }}
      >
        {!showText && (
          <div id="tableID">
            <table id="users" key={uuid()}>
              <thead>
                <tr>
                  <th>TITLE</th>
                  <th>STATUS</th>
                  <th>GRADE</th>
                  <th>SUBJECT</th>
                  <th>DOWNLOAD</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>{renderTable()}</tbody>
            </table>
          </div>
        )}

        <DisapprovedModal
          modalisOpen={errModal}
          // error={error}
          msg="NOTES DELETED SUCCESSFULLY"
          closeModal={() => seterrModal(false)}
        />

        {showText && (
          <div
            style={{
              borderWidth: "thick",
              borderStyle: "solid",
              borderRadius: "7px",
              borderColor: " black",
              width: "700px",
              height: "400px",
              marginLeft: "360px",
              marginTop: "10px",
            }}
          >
            <h1
              style={{
                marginTop: "7rem",
                textAlign: "center",
                color: "black",
              }}
            >
              NO NOTES HISTORY AVAILABLE
            </h1>
            <SentimentVeryDissatisfiedOutlinedIcon
              style={{
                fontSize: "80px",
                marginTop: "2rem",
                marginLeft: "19rem",
                color: "black",
              }}
            />
          </div>
        )}
      </div>

      {/* <a href= {receivedFile.current}> Click to download </a> */}
    </React.Fragment>
  );
};

export default NotesHistory;

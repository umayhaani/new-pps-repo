import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import { NavLink } from "react-router-dom";
import DisapprovedModal from "../Worksheets/DisapprovedModal";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined";
import { useLocalStorage } from "../../LocalStorage/Local";

import logo from "../../assets/PPS5.jpeg";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import "./table.css";
//import { USERNAME } from "../../Auth";

const BasicTable = () => {
  const [email, setuserEmail] = useLocalStorage("email", "null");

  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
  const [tt, settt] = useState([]);
  const [showText, setShowText] = useState(() => false);
  const [errModal, seterrModal] = useState(() => false);
  const [subject, setSubject] = useState("no-value");
  const [grade, setGrade] = useState("no-value");
  useEffect(() => {
    worksheetHistoryHandler();
  }, []);

  const deleteHandler = async (topic) => {
    console.log(topic);
    seterrModal(() => true);
    try {
      const response = await fetch("http://localhost:5000/deleteWorksheets", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          searchId: topic,
        }),
      });

      if (response.deleted === "ALL DELETED") {
        return setShowText(() => true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const worksheetHistoryHandler = async () => {
    let responseData;
    let sent = "appear";
    try {
      const response = await fetch(
        `http://localhost:5000/gettingHTML?show=${sent}&&creator=${email}`
      );
      responseData = await response.json();
      if (
        responseData.status === "404" ||
        responseData.worksheets.length === 0
      ) {
        // console.log("    not avaiable    ", responseData);
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

      if (responseData.worksheets && responseData.status !== "404") {
        //console.log("   avaiable    ", responseData);
        setShowText(() => false);
        responseData.worksheets.sort(GetSortOrder("grade"));
        return settt(responseData.worksheets);
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
            <td>{hh.title}</td>
            <td>
              {hh.approved.toString() === "false" ? "disapproved" : "approved"}
            </td>
            <td>{hh.grade}</td>
            <td>{hh.subject}</td>
            <td>
              <DeleteForeverIcon
                onClick={() => deleteHandler(hh.code)}
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
        `http://localhost:5000/gettingHTML?show=${sent}&&creator=${email}&&grade=${grade}&&subject=${subject}`
      );
      responseData = await response.json();
      if (
        responseData.status === "404" ||
        responseData.worksheets.length === 0
      ) {
        console.log(responseData.status);
        return setShowText(() => true);
      }
      if (responseData.worksheets && responseData.status !== "404") {
        //console.log("   avaiable    ", responseData);
        setShowText(() => false);
        return settt(responseData.worksheets);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <nav className="NavbarItems-teacher">
        <NavLink to="/teacher">
          <img className="logo" src={logo} alt="Logo" />
        </NavLink>
        <h1 className="navbar-logo-teacher">{USERNAME}</h1>
        <ul className="nav-menu-teachers ">
          <div className="nav-links-teachers">
            <li>
              <NavLink to="/Teacher" className="nav-links-teachers">
                Home
              </NavLink>
            </li>
          </div>
          <div className="nav-links-teachers">
            <li>
              <NavLink to="/CreateWorksheets" className="nav-links-teachers">
                Templates
              </NavLink>
            </li>
          </div>
          <div className="nav-links-teachers">
            <li>
              <NavLink to="/MyWorksheets" className="nav-links-WS">
                My-Worksheets
              </NavLink>
            </li>
          </div>

          {/* <div className="nav-links-teachers">
            <li>
              <NavLink to="/WorksheetsHistory" className="nav-links-teachers">
                History
              </NavLink>
            </li>
          </div> */}
        </ul>
        <NavLink to="/#">
          {" "}
          <button className="button-teacher">Log out</button>
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
          Worksheet History
        </p>
      </div>

      <div
        style={{
          paddingTop: "5px",
          marginTop: "30px",
          backgroundColor: "white",
          paddingBottom: "230px",
        }}
      >
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

        {!showText && (
          <div id="tableID">
            <table id="users" key={uuid()}>
              <thead>
                <tr>
                  <th>TITLE</th>
                  <th>STATUS</th>
                  <th>GRADE</th>
                  <th>SUBJECT</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>{renderTable()}</tbody>
            </table>
            <DisapprovedModal
              modalisOpen={errModal}
              // error={error}
              msg="DELETED SUCCESSFULLY"
              closeModal={() => seterrModal(false)}
            />
          </div>
        )}
        {showText && (
          <div
            style={{
              borderWidth: "thick",
              borderStyle: "solid",
              borderRadius: "7px",
              borderColor: " black",
              width: "700px",
              height: "360px",
              marginLeft: "350px",
              marginTop: "60px",
              color: "black",
            }}
          >
            <h1
              style={{
                marginTop: "7rem",
                textAlign: "center",
                color: "black",
              }}
            >
              NO HISTORY AVAILABLE
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
    </>
  );
};

export default BasicTable;

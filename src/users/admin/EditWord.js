import React, { useState, useEffect } from "react";

import { MenuItems } from "./Menu";
import { NavLink } from "react-router-dom";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import DisapprovedModal from "../../components/Worksheets/DisapprovedModal";
import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined";
import uuid from "react-uuid";
import EditWordModal from "./EditWordModal";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import logo from "../../assets/PPS5.jpeg";
const EditWord = () => {
  const [tt, settt] = useState([]);

  const [word, setWord] = useState();
  const [spell, setSpell] = useState();
  const [description, setDescription] = useState();
  const [errModal, seterrModal] = useState(() => false);
  const [showText, setShowText] = useState(() => false);
  const [showEdit, setShowEdit] = useState(() => false);
  const [adminGrade, setAdminGrade] = useState();

  useEffect(() => {
    noteHistoryHandler();
  }, [adminGrade]);

  useEffect(() => {
    firstCallHandler();
  }, []);

  const getGrade = (e) => {
    setAdminGrade(e.target.value);
  };

  const deleteHandler = async (searchId) => {
    seterrModal(() => true);
    try {
      const response = await fetch("http://localhost:5000/deleteWords", {
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

  const editHandler = (searchid, sp, des) => {
    console.log(searchid);

    setShowEdit(() => true);
    setWord(searchid);
    setSpell(sp);
    setDescription(des);
  };

  const firstCallHandler = async () => {
    let responseData;
    let role = "admin";

    try {
      const response = await fetch(`http://localhost:5000/word?role=${role}`);
      responseData = await response.json();
      console.log(responseData.words);
      if (responseData.status === "401" || responseData.words.length === 0) {
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

      if (responseData.words && responseData.status !== "404") {
        setShowText(() => false);
        responseData.words.sort(GetSortOrder("grade"));
        return settt(responseData.words);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const noteHistoryHandler = async () => {
    let responseData;
    let role = "admin";

    try {
      const response = await fetch(
        `http://localhost:5000/word?role=${role}&adminGrade=${adminGrade}`
      );
      responseData = await response.json();
      console.log(responseData);
      if (responseData.status === "401" || responseData.words.length === 0) {
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

      if (responseData.words && responseData.status !== "404") {
        setShowText(() => false);
        responseData.words.sort(GetSortOrder("level"));
        return settt(responseData.words);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const renderTable = () => {
    return tt.map((hh, index) => {
      return (
        <>
          <tr key={uuid()}>
            <td>{index + 1}</td>
            <td>{hh.spell}</td>
            <td>{hh.description}</td>
            <td>{hh.grade}</td>
            <td>{hh.level}</td>
            <td>
              <EditIcon
                id="editWordBtn"
                onClick={() => editHandler(hh._id, hh.spell, hh.description)}
              />
            </td>
            <td>
              <DeleteForeverIcon
                onClick={() => deleteHandler(hh.spell)}
                id="deleteWSBtn"
              />
            </td>
          </tr>
        </>
      );
    });
  };

  return (
    <React.Fragment>
      <nav className="NavbarItems-ad">
        <NavLink to="/admin">
          <img className="logo-ad" src={logo} alt="Logo" />
        </NavLink>
        <h1 className="navbar-logo-ad">Admin's Portal</h1>

        <ul className="nav-menu-ad">
          {MenuItems.map((item) => {
            return (
              <div className="nav-links-ad" key={uuid()}>
                <li>
                  <NavLink to={item.url} className={item.cName}>
                    {" "}
                    {item.title}
                  </NavLink>
                </li>
              </div>
            );
          })}
        </ul>
        <NavLink to="/#">
          {" "}
          <button className="button-ad">Log out</button>
        </NavLink>
      </nav>
      <div className="admin-body" style={{ fontFamily: "Times New Roman" }}>
        {" "}
        EDIT WORDS
      </div>

      <h2
        style={{ marginLeft: "400px", marginTop: "5rem", fontWeight: "bold" }}
      >
        Please Select Grade To View Words
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
          <div id="tableID" style={{ marginTop: "-6rem" }}>
            <table id="users" key={uuid()}>
              <thead key={uuid()}>
                <tr>
                  <th style={{ fontFamily: "Times New Roman", width: "33rem" }}>
                    Serial
                  </th>
                  <th style={{ fontFamily: "Times New Roman" }}>Word</th>
                  <th style={{ fontFamily: "Times New Roman", width: "23rem" }}>
                    Description
                  </th>
                  <th
                    style={{
                      fontFamily: "Times New Roman",
                      width: "13rem",
                    }}
                  >
                    Grade
                  </th>
                  <th style={{ fontFamily: "Times New Roman" }}>Level</th>
                  <th style={{ fontFamily: "Times New Roman", width: "23rem" }}>
                    Edit
                  </th>
                  <th style={{ fontFamily: "Times New Roman", width: "23rem" }}>
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>{renderTable()}</tbody>
            </table>
          </div>
        )}
        {showEdit && (
          <div style={{ color: "white" }}>
            <EditWordModal
              word={word}
              spell={spell}
              description={description}
            />
          </div>
        )}
        <DisapprovedModal
          modalisOpen={errModal}
          // error={error}
          msg="WORD DELETED SUCCESSFULLY"
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
    </React.Fragment>
  );
};

export default EditWord;

import React, { useState } from "react";
import { MenuItems } from "./MenuItems-teacher";
import UploadNotesModal from "./UploadNotesModal";

//import { USERNAME } from "../../Auth";
import { NavLink } from "react-router-dom";
import { useLocalStorage } from "../../LocalStorage/Local";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
//import TextField from "@material-ui/core/TextField";
import logo from "../../assets/PPS5.jpeg";
import "./lectureNote.css";

const UploadVideo = () => {
  const [file, setFile] = useState();
  //const [uploadedfile, setUploadedfile] = useState();
  const [NotesmodalisOpen, setNotesModalisOPen] = useState(() => false);
  const [grade, setGrade] = useState("no-value");

  const [subject, setSubject] = useState("no-value");
  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");

  const changeFileHandler = (e) => {
    const file1 = e.target.files[0];
    console.log(file1);
    setFile(file1);
  };

  console.log(file);

  const submitFileHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("grade", grade);
    formData.append("subject", subject);
    // console.log(formData);
    //setNotesModalisOPen(() => true);
    try {
      const response = await fetch("http://localhost:5000/uploadVideo", {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json();
      console.log(responseData);
      if (responseData.message || !responseData.result) {
        window.alert("big file");
      }
      if (!responseData.message || responseData.result) {
        setNotesModalisOPen(() => true);
      }
      // setUploadedfile(responseData.result.name);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <React.Fragment>
      <nav className="NavbarItems-lectureNote">
        <NavLink to="/teacher">
          <img className="logo" src={logo} alt="Logo" />
        </NavLink>
        <h1 className="navbar-logo-lectureNote">{USERNAME}</h1>

        <ul className="nav-menu-lectureNote ">
          {MenuItems.map((item, index) => {
            return (
              <ul className="nav-menu-lectureNote ">
                <div className="nav-links-lectureNote">
                  <li>
                    <NavLink to="/teacher" className="nav-links-lectureNote">
                      Home
                    </NavLink>
                  </li>
                </div>

                <div className="nav-links-lectureNote">
                  <li>
                    <NavLink
                      to="/VideosHistory"
                      className="nav-links-lectureNote"
                    >
                      Videos-History
                    </NavLink>
                  </li>
                </div>
              </ul>
            );
          })}
        </ul>
        <NavLink to="/#">
          {" "}
          <button className="button-lectureNote">Log out</button>
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
        <p className="templateWS">Upload Video Lectures </p>
      </div>

      <div
        style={{
          paddingBottom: "100px",
          paddingTop: "5px",
          marginTop: "30px",
          // backgroundColor: "black",
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
        </FormControl>
        <div className="upload-box">
          <form onSubmit={submitFileHandler}>
            <div>
              {" "}
              <input
                className="Inputchoose"
                // ref={register}
                type="file"
                id="file"
                name="file"
                onChange={changeFileHandler}
                accept="application/msword,video/mp4"
              />
            </div>
            <div>
              <button
                className="button-lectureNote1"
                type="button"
                onClick={submitFileHandler}
              >
                Submit
              </button>{" "}
            </div>

            <UploadNotesModal
              NotesmodalisOpen={NotesmodalisOpen}
              closeModal={() => setNotesModalisOPen(false)}
              msg=" video lecture uploaded"
            />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UploadVideo;

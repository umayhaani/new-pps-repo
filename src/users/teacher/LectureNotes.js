// import React, { useEffect, useState } from "react";
// import { TextField } from "@material-ui/core";
// import { MenuItems } from "./MenuItems-teacher";
// import { USERNAME } from "../../Auth";
// import { NavLink } from "react-router-dom";
// import ProgressBar from "../../components/UIElements/ProgressBar";
// import useForm from "../../utils/useForm";

// import logo from "../../assets/PPS5.jpeg";
// import "./lectureNote.css";
// import axios from "axios";

// const LectureNotes = () => {
//   const [file, setFile] = useState();
//   const [uploadPercentage, setUploadPercentage] = useState(() => 0);
//   const [inputValue, handleChangeForInputs, clear] = useForm();

//   const changeFileHandler = (e) => {
//     const file1 = e.target.files[0];
//     setFile(file1);
//   };

//   const submitFileHandler = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("title", inputValue.fileTitle);

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/uploadFile",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//           onUploadProgress: (progressEvent) => {
//             setUploadPercentage(
//               //  Math.floor((progressEvent.loaded * 100) / progressEvent.total)
//               parseInt(
//                 Math.round(progressEvent.loaded * 100) / progressEvent.total
//               )
//             );
//           },
//         }
//       );
//       console.log(res);
//     } catch (err) {
//       console.log(err);
//     }

//     clear();
//   };

//   return (
//     <React.Fragment>
//       <nav className="NavbarItems-lectureNote">
//         <NavLink to="/teacher">
//           <img className="logo" src={logo} alt="Logo" />
//         </NavLink>
//         <h1 className="navbar-logo-lectureNote">{USERNAME}</h1>

//         <ul className="nav-menu-lectureNote ">
//           {MenuItems.map((item, index) => {
//             return (
//               <div className="nav-links-lectureNote" key={index}>
//                 <li>
//                   <NavLink to={item.url} className={item.cName}>
//                     {" "}
//                     {item.title}
//                   </NavLink>
//                 </li>
//               </div>
//             );
//           })}
//         </ul>
//         <NavLink to="/#">
//           {" "}
//           <button className="button-lectureNote">Log out</button>
//         </NavLink>
//       </nav>

//       <p className="upload">Upload Lecture Notes</p>
//       <div style={{ width: "40rem", marginLeft: "30rem" }}>
//         <ProgressBar percentage={uploadPercentage} />
//       </div>

//       <div className="upload-box">
//         <form>
//           <div>
//             <TextField
//               type="text"
//               name="fileTitle"
//               label="Enter title for file"
//               value={inputValue.fileTitle || ""}
//               onChange={handleChangeForInputs}
//             />

//             <input
//               className="Inputchoose"
//               // ref={register}
//               type="file"
//               id="file"
//               name="submitFileHandler"
//               onChange={changeFileHandler}
//               accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf,application/vnd.ms-powerpoint"
//             />
//           </div>

//           <div>
//             <button className="button-lectureNote1" onClick={submitFileHandler}>
//               Upload
//             </button>{" "}
//           </div>
//         </form>
//       </div>
//     </React.Fragment>
//   );
// };

// export default LectureNotes;

import React, { useState } from "react";
import { MenuItems } from "./MenuItems-teacher";
import UploadNotesModal from "./UploadNotesModal";
import useForm from "../../utils/useForm";
//import { USERNAME } from "../../Auth";
import { NavLink } from "react-router-dom";
import { useLocalStorage } from "../../LocalStorage/Local";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
//import TextField from "@material-ui/core/TextField";
import logo from "../../assets/PPS5.jpeg";
import "./lectureNote.css";

const LectureNotes = () => {
  const [file, setFile] = useState();
  //const [uploadedfile, setUploadedfile] = useState();
  const [NotesmodalisOpen, setNotesModalisOPen] = useState(() => false);
  const [grade, setGrade] = useState("no-value");
  const [inputValue, handleChangeForInputs, clear] = useForm();
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
    setNotesModalisOPen(() => true);
    try {
      const response = await fetch("http://localhost:5000/uploadFile", {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json();
      console.log(responseData.result);
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
                      to="/NotesHistory"
                      className="nav-links-lectureNote"
                    >
                      Notes-History
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
        <p className="templateWS">Upload Lecture Notes </p>
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
                // name="submitFileHandler"
                onChange={changeFileHandler}
                // accept="application/msword,video/mp4"
                accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf,.ppt, .pptx"
              />
            </div>
            <div>
              <button
                className="button-lectureNote1"
                onClick={submitFileHandler}
              >
                Submit
              </button>{" "}
            </div>

            <UploadNotesModal
              NotesmodalisOpen={NotesmodalisOpen}
              closeModal={() => setNotesModalisOPen(false)}
              msg="Lecture Notes Uploaded"
            />
          </form>
        </div>
      </div>
      {/* <p className="upload">Upload Lecture Notes</p> */}

      {/*    
      <a href={uploadedfile} download>
        {uploadedfile}
      </a> */}
    </React.Fragment>
  );
};

export default LectureNotes;

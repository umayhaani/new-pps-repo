import React, { useState } from "react";
import useForm from "../../../src/utils/useForm";
import { useLocalStorage } from "../../LocalStorage/Local";
//import { useHistory } from "react-router-dom";
import uuid from "react-uuid";
import CreateWorksheetdModal from "./CreatedWorksheetModal";
import CodeForTestWS from "../UIElements/CodeForTestWS";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import "./CSS/FillInTheBlanks.css";
//import { USERNAME } from "../../Auth";
import logo from "../../assets/PPS5.jpeg";
import { NavLink } from "react-router-dom";
const FillInTheBlanks = () => {
  const [grade, setGrade] = useState("no-value");
  const [subject, setSubject] = useState("no-value");
  const [inputValue, handleChangeForInputs, clear] = useForm();
  const [showCodeWin, setShowCodeWin] = useState(false);
  const [modalisOpen, setModalisOPen] = useState(() => false);
  const [code, setCode] = useState("im code");
  // const [userName, setuserName] = useLocalStorage("userName", "null");
  const [email, setuserEmail] = useLocalStorage("email", "null");

  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
  console.log(email);
  //const history = useHistory();

  const PracWsHandler = async (e, type) => {
    //e.preventDefault();
    // clear();
    let responseData;
    // console.log(inputValue.inp1);
    // console.log(inputValue.inp2);
    // console.log(inputValue.inp3);
    // console.log(inputValue.inp4);
    // console.log(inputValue.inp5);
    // console.log(type);
    const Title = document.getElementById("topicHeading").innerText;
    console.log(Title, "lineeee225");
    try {
      const response = await fetch("http://localhost:5000/savingHTML", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          html: document.getElementById("blanksDiv").innerHTML,
          type: type,
          inp1: inputValue.inp1,
          inp2: inputValue.inp2,
          inp3: inputValue.inp3,
          inp4: inputValue.inp4,
          inp5: inputValue.inp5,
          code: uuid(),
          // approved: false,
          //  title: document.getElementById("topicHeading").innerText,
          title: inputValue.TitleForWorksheet,
          creator: email,
          grade,
          subject,
        }),
      });

      responseData = await response.json();

      console.log(responseData);
    } catch (err) {
      console.log(err);
    }
    if (type === "test worksheet") {
      setShowCodeWin(() => true);
      setCode(responseData.result);
    }

    if (type === "practice worksheet") {
      // window.location.reload();
      setModalisOPen(() => true);
    }
  };

  const dragHandler = (e) => {
    let id = e.target.id;
    console.log(id);
    console.log(document.getElementById(id));
    e.preventDefault();
    let dragValue = e.target;

    function move(e) {
      // e.preventDefault();

      let element = document.getElementById(id);
      element.style.position = "relative";
      element.onClick = function () {
        dragValue = element;
      };
    }

    document.ondblclick = function (e) {
      e.preventDefault();
      console.log(e.target.value);
      // document.getElementById("input").value = e.target.value;

      document.getElementById(id).blur();
      //document.getElementById("main").appendChild(dd);

      //dragValue = null;
      document.onmousemove = null;
    };
    document.onmousemove = function (e) {
      e.preventDefault();
      console.log(e);

      dragValue.focus();
      let x = e.clientX;
      let y = e.clientY;
      dragValue.style.left = x + "px";
      dragValue.style.top = y + "px";
    };
    move();
  };

  return (
    <>
      <nav className="NavbarItems-WS">
        <NavLink to="/Teacher">
          <img className="logo-WS" src={logo} alt="Logo" />
        </NavLink>
        <h1 className="navbar-logo-WS">{USERNAME}</h1>
        <ul className="nav-menu-WS ">
          <div className="nav-links-WS">
            <li>
              <NavLink to="/Teacher" className="nav-links-WS">
                Home
              </NavLink>
            </li>
          </div>
          <div className="nav-links-WS">
            <li>
              <NavLink to="/CreateWorksheets" className="nav-links-WS">
                Templates
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
          <button className="button-WS">Log out</button>
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
          // borderWidth: "thick",
          // borderStyle: "solid",
          // borderRadius: "7px",
          // borderColor: "white",
          // width: "725px",
          // height: "470px",
          // marginLeft: "330px",
          // marginTop: "60px",
          // paddingLeft: "17px"
          borderWidth: "thick",
          borderStyle: "solid",
          borderRadius: "7px",
          borderColor: " black",
          width: "700px",
          height: "550px",
          marginLeft: "360px",
          marginTop: "60px",
        }}
      >
        <TextField
          id="standard-basic"
          label="Enter title for worksheet"
          name="TitleForWorksheet"
          autoComplete="off"
          style={{ marginLeft: "2rem", marginTop: "2rem" }}
          value={inputValue.TitleForWorksheet || ""}
          onChange={handleChangeForInputs}
        />

        <FormControl
          variant="outlined"
          style={{ marginLeft: "3rem", marginTop: "2rem" }}
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
          </Select>
        </FormControl>
        <div
          style={{ marginLeft: "20px" }}
          id="blanksDiv"
          contentEditable={true}
          suppressContentEditableWarning={true}
        >
          <h2 id="topicHeading">TOPIC NAME OR HEADING</h2>
          <br></br>
          <div>
            1) write content for blank here and provide correct answer in text
            field{" "}
            <div>
              <input
                id="inp1"
                className="inp1"
                autoComplete="off"
                name="inp1"
                type="text"
                placeholder="provide correct answer"
                onClick={dragHandler}
                value={inputValue.inp1 || ""}
                onChange={handleChangeForInputs}
              />
            </div>
          </div>
          <br />
          <div>
            2) write content for blank here and provide correct answer in text
            field{" "}
            <div>
              <input
                id="inp2"
                className="inp1"
                autoComplete="off"
                name="inp2"
                type="text"
                placeholder="provide correct answer"
                onClick={dragHandler}
                value={inputValue.inp2 || ""}
                onChange={handleChangeForInputs}
              />
            </div>
          </div>
          <br />
          <div>
            3) write content for blank here and provide correct answer in text
            field{" "}
            <div>
              <input
                id="inp3"
                className="inp1"
                type="text"
                autoComplete="off"
                name="inp3"
                onClick={dragHandler}
                placeholder="provide correct answer"
                value={inputValue.inp3 || ""}
                onChange={handleChangeForInputs}
              />
            </div>
          </div>
          <br />
          <div>
            4) write content for blank here and provide correct answer in text
            field{" "}
            <div>
              <input
                id="inp4"
                className="inp1"
                autoComplete="off"
                name="inp4"
                onClick={dragHandler}
                type="text"
                placeholder="provide correct answer"
                value={inputValue.inp4 || ""}
                onChange={handleChangeForInputs}
              />
            </div>
          </div>
          <br />
          <div>
            5) write content for blank here and provide correct answer in text
            field{" "}
            <div>
              <input
                id="inp5"
                className="inp1"
                autoComplete="off"
                name="inp5"
                onClick={dragHandler}
                type="text"
                placeholder="provide correct answer"
                value={inputValue.inp5 || ""}
                onChange={handleChangeForInputs}
              />
            </div>
          </div>
          <br />
        </div>
      </div>
      <button
        style={{ marginLeft: "420px" }}
        className="pracWsBtn"
        onClick={(e) => PracWsHandler(e, "practice worksheet")}
      >
        Save As Practice WORKSHEET
      </button>
      <button
        style={{ marginLeft: " 70px" }}
        className="testWsBtn"
        onClick={(e) => PracWsHandler(e, "test worksheet")}
      >
        Save As Test WORKSHEET
      </button>

      <CodeForTestWS
        openModal={showCodeWin}
        closeModal={() => setShowCodeWin(false)}
        code={code}
      />
      <CreateWorksheetdModal
        modalisOpen={modalisOpen}
        closeModal={() => setModalisOPen(false)}
      />
    </>
  );
};

export default FillInTheBlanks;

// import React, { useState } from "react";
// import useForm from "../../../src/utils/useForm";
// import { useLocalStorage } from "../../LocalStorage/Local";
// //import { useHistory } from "react-router-dom";
// import uuid from "react-uuid";
// import CreateWorksheetdModal from "./CreatedWorksheetModal";
// import CodeForTestWS from "../UIElements/CodeForTestWS";
// import InputLabel from "@material-ui/core/InputLabel";
// import Select from "@material-ui/core/Select";
// import FormControl from "@material-ui/core/FormControl";
// import TextField from "@material-ui/core/TextField";
// import { makeStyles } from "@material-ui/core/styles";
// import "./CSS/FillInTheBlanks.css";

// const FillInTheBlanks = () => {
//   const [inputValue, handleChangeForInputs, clear] = useForm();
//   const [showCodeWin, setShowCodeWin] = useState(false);
//   const [modalisOpen, setModalisOPen] = useState(() => false);
//   const [grade, setGrade] = useState("no-value");
//   const [subject, setSubject] = useState("no-value");
//   const [code, setCode] = useState("im code");
//   // const [userName, setuserName] = useLocalStorage("userName", "null");
//   const [email, setuserEmail] = useLocalStorage("email", "null");
//   console.log(email);
//   //const history = useHistory();

//   const PracWsHandler = async (e, type) => {
//     e.preventDefault();
//     clear();
//     let responseData;
//     // console.log(inputValue.inp1);
//     // console.log(inputValue.inp2);
//     // console.log(inputValue.inp3);
//     // console.log(inputValue.inp4);
//     // console.log(inputValue.inp5);
//     // console.log(type);
//     //const Title = document.getElementById("topicHeading").innerText;
//     //console.log(Title, "lineeee225");
//     try {
//       const response = await fetch("http://localhost:5000/savingHTML", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           html: document.getElementById("blanksDiv").innerHTML,
//           type: type,
//           inp1: inputValue.inp1,
//           inp2: inputValue.inp2,
//           inp3: inputValue.inp3,
//           inp4: inputValue.inp4,
//           inp5: inputValue.inp5,
//           code: uuid(),
//           title: inputValue.TitleForWorksheet,
//           creator: email,
//           grade,
//           subject,
//         }),
//       });

//       responseData = await response.json();

//       console.log(responseData);
//     } catch (err) {
//       console.log(err);
//     }
//     if (type === "test worksheet") {
//       setShowCodeWin(() => true);
//       setCode(responseData.result);
//     }

//     if (type === "practice worksheet") {
//       setModalisOPen(() => true);
//     }
//   };

//   const dragHandler = (e) => {
//     let id = e.target.id;
//     console.log(id);
//     console.log(document.getElementById(id));
//     e.preventDefault();
//     let dragValue = e.target;

//     function move(e) {
//       // e.preventDefault();

//       let element = document.getElementById(id);
//       element.style.position = "relative";
//       element.onClick = function () {
//         dragValue = element;
//       };
//     }

//     document.ondblclick = function (e) {
//       e.preventDefault();
//       console.log(e.target.value);
//       // document.getElementById("input").value = e.target.value;

//       document.getElementById(id).blur();
//       //document.getElementById("main").appendChild(dd);

//       //dragValue = null;
//       document.onmousemove = null;
//     };
//     document.onmousemove = function (e) {
//       e.preventDefault();
//       console.log(e);

//       dragValue.focus();
//       let x = e.clientX;
//       let y = e.clientY;
//       dragValue.style.left = x + "px";
//       dragValue.style.top = y + "px";
//     };
//     move();
//   };

//   return (
//     <>
//       <div
//         style={{
//           borderWidth: "thick",
//           borderStyle: "solid",
//           borderRadius: "7px",
//           borderColor: " black",
//           width: "700px",
//           height: "550px",
//           marginLeft: "360px",
//           marginTop: "60px",
//         }}
//       >
//         <TextField
//           id="standard-basic"
//           label="Enter title for worksheet"
//           name="TitleForWorksheet"
//           autoComplete="off"
//           style={{ marginLeft: "2rem", marginTop: "2rem" }}
//           value={inputValue.TitleForWorksheet || ""}
//           onChange={handleChangeForInputs}
//         />

//         <FormControl
//           variant="outlined"
//           style={{ marginLeft: "3rem", marginTop: "2rem" }}
//         >
//           <InputLabel required>Grade</InputLabel>
//           <Select
//             native
//             // value={state.age}
//             onChange={(e) => setGrade(e.target.value)}
//             label="Select Grade"
//           >
//             <option value=" "></option>
//             <option value="Grade-1">Grade-1</option>
//             <option value="Grade-2">Grade-2</option>
//             <option value="Grade-3">Grade-3</option>
//             <option value="Grade-4">Grade-4</option>
//             <option value="Grade-5">Grade-5</option>
//           </Select>
//         </FormControl>
//         <FormControl
//           variant="outlined"
//           style={{ marginLeft: "3rem", marginTop: "2rem" }}
//         >
//           <InputLabel required>Subject</InputLabel>
//           <Select
//             native
//             // value={state.age}
//             onChange={(e) => setSubject(e.target.value)}
//             label="Select Subject"
//           >
//             <option value=" "></option>
//             <option value="Computer">Computer</option>
//             <option value="English">English</option>
//             <option value="Mathematics">Mathematics</option>
//             <option value="Science">Science</option>
//           </Select>
//         </FormControl>
//         <div
//           style={{ marginLeft: "20px" }}
//           id="blanksDiv"
//           contentEditable={true}
//           suppressContentEditableWarning={true}
//         >
//           <h2 id="topicHeading">TOPIC NAME OR HEADING</h2>
//           <br></br>
//           <div>
//             1) write content for blank here and provide correct answer in text
//             field{" "}
//             <div>
//               <input
//                 id="inp1"
//                 className="inp1"
//                 autoComplete="off"
//                 name="inp1"
//                 type="text"
//                 placeholder="provide correct answer"
//                 onClick={dragHandler}
//                 value={inputValue.inp1 || ""}
//                 onChange={handleChangeForInputs}
//               />
//             </div>
//           </div>
//           <br />
//           <div>
//             2) write content for blank here and provide correct answer in text
//             field{" "}
//             <div>
//               <input
//                 id="inp2"
//                 className="inp1"
//                 autoComplete="off"
//                 name="inp2"
//                 type="text"
//                 placeholder="provide correct answer"
//                 onClick={dragHandler}
//                 value={inputValue.inp2 || ""}
//                 onChange={handleChangeForInputs}
//               />
//             </div>
//           </div>
//           <br />
//           <div>
//             3) write content for blank here and provide correct answer in text
//             field{" "}
//             <div>
//               <input
//                 id="inp3"
//                 className="inp1"
//                 type="text"
//                 autoComplete="off"
//                 name="inp3"
//                 onClick={dragHandler}
//                 placeholder="provide correct answer"
//                 value={inputValue.inp3 || ""}
//                 onChange={handleChangeForInputs}
//               />
//             </div>
//           </div>
//           <br />
//           <div>
//             4) write content for blank here and provide correct answer in text
//             field{" "}
//             <div>
//               <input
//                 id="inp4"
//                 className="inp1"
//                 autoComplete="off"
//                 name="inp4"
//                 onClick={dragHandler}
//                 type="text"
//                 placeholder="provide correct answer"
//                 value={inputValue.inp4 || ""}
//                 onChange={handleChangeForInputs}
//               />
//             </div>
//           </div>
//           <br />
//           <div>
//             5) write content for blank here and provide correct answer in text
//             field{" "}
//             <div>
//               <input
//                 id="inp5"
//                 className="inp1"
//                 autoComplete="off"
//                 name="inp5"
//                 onClick={dragHandler}
//                 type="text"
//                 placeholder="provide correct answer"
//                 value={inputValue.inp5 || ""}
//                 onChange={handleChangeForInputs}
//               />
//             </div>
//           </div>
//           <br />
//         </div>
//       </div>
//       <button
//         style={{ marginLeft: "420px" }}
//         className="pracWsBtn"
//         onClick={(e) => PracWsHandler(e, "practice worksheet")}
//       >
//         Save As Practice WORKSHEET
//       </button>
//       <button
//         style={{ marginLeft: " 70px" }}
//         className="testWsBtn"
//         onClick={(e) => PracWsHandler(e, "test worksheet")}
//       >
//         Save As Test WORKSHEET
//       </button>

//       <CodeForTestWS
//         openModal={showCodeWin}
//         closeModal={() => setShowCodeWin(false)}
//         code={code}
//       />
//       <CreateWorksheetdModal
//         modalisOpen={modalisOpen}
//         closeModal={() => setModalisOPen(false)}
//       />
//     </>
//   );
// };

// export default FillInTheBlanks;

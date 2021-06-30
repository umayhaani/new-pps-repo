import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ApprovedModal from "./ApprovedModal";
import DisapprovedModal from "./DisapprovedModal";
import { useLocalStorage } from "../../LocalStorage/Local";
import logo from "../../assets/PPS5.jpeg";
import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

import "../Worksheets/CSS/approvedWS.css";

const ApprovedWS = () => {
  const [modalisOpen, setModalisOPen] = useState(() => false);
  const [errModal, seterrModal] = useState(() => false);
  const [showText, setShowText] = useState(() => false);
  const [len, setLen] = useState(() => false);
  const [allow, setAllow] = useState(() => false);
  const [grade, setGrade] = useState("no-value");
  const [adminType, setAdminType] = useLocalStorage("adminType", "null");
  useEffect(() => {
    //console.log(WorksheetType);
    //window.location.reload();
    showWSHandler();
    console.log(allow, "from allow");
  }, [grade, allow]);

  const getGrade = (e) => {
    setGrade(e.target.value);
  };

  const showWSHandler = async (e) => {
    // let worksheet;
    let length;
    let responseData;
    let btn; //approve
    let btn1; //disapprove
    let searchId;

    try {
      const response = await fetch(
        `http://localhost:5000/gettingHTML?adminType=${adminType}&grade=${grade}`
      );
      responseData = await response.json();
      if (responseData.status === "404") {
        console.log(responseData.status, "slkdlsfksl");
        setLen(() => false);
        //setAllow(() => false);
        return setShowText(() => true);
      }
    } catch (err) {
      console.log(err);
    }
    /////////////for showing divs /////////////
    if (responseData.status !== "404") {
      length = responseData.ws.length;
      setShowText(() => false);
      setLen(() => true);
      for (let index = length - 1; index >= 0; index--) {
        console.log(length);

        let board = document.createElement("div");
        board.id = index.toString();
        console.log(board.id, " id of a div");

        //////////creating save button ////////////////////
        btn = document.createElement("input");
        btn1 = document.createElement("input");
        btn.type = "button";
        btn1.type = "button";
        btn.value = "APPROVE";
        btn1.value = "DISAPPROVE";
        btn.id = index.toString();
        btn1.id = index.toString();
        btn.style.padding = "0.5rem 1.5rem";
        btn.style.fontWeight = " bolder ";
        btn.style.marginLeft = "35rem";
        btn.style.marginTop = "10px ";
        btn.style.marginBottom = "1rem ";
        btn.style.background = "green";
        btn.style.color = "white";
        btn.style.borderRadius = "25px";

        btn1.style.padding = "0.5rem 1.5rem";
        btn1.style.fontWeight = " bolder ";
        btn1.style.marginLeft = "100px";
        btn1.style.marginTop = "10px ";
        btn1.style.marginBottom = "1rem ";
        btn1.style.background = "red";
        btn1.style.color = "white";
        btn1.style.borderRadius = "25px";
        // btn.onmouseover = function () {
        //   //console.log("im being hovered");

        //   btn.style.background = "white";
        //   btn.style.boxShadow = "0 2px 8px green";
        //   btn.style.color = "green";
        // };

        // btn.onmouseleave = function () {
        //   btn.style.background = "green";
        //   btn.style.boxShadow = "none";
        //   btn.style.color = "white";
        // };

        // btn1.onmouseover = function () {
        //   btn1.style.background = "white";
        //   btn1.style.boxShadow = "0 2px 8px red";
        //   btn1.style.color = "red";
        // };

        // btn1.onmouseleave = function () {
        //   btn1.style.background = "red";
        //   btn1.style.boxShadow = "none";
        //   btn1.style.color = "white";
        // };

        ///APPROVE WORKSHEETS BUTTON////////
        btn.onclick = async function (e) {
          e.preventDefault();
          setModalisOPen(() => true);

          if (e.target.id) {
            let divId = e.target.id;
            console.log(e.target.id);
            searchId = divId;
            console.log(searchId);
            console.log(document.getElementsByTagName("DIV"));
            console.log(document.getElementById(divId));

            if (
              document.getElementsByTagName("DIV") &&
              document.getElementById(divId)
            ) {
              try {
                const response = await fetch(
                  "http://localhost:5000/confirmWorksheets",
                  {
                    method: "PATCH",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      searchId: responseData.code[searchId],
                    }),
                  }
                );
              } catch (err) {
                console.log(err);
              }
              setAllow(true);
              setLen(false);
            }
          }
        };

        ///DISAPPROVE WORKSHEETS BUTTON////////

        btn1.onclick = async function (e) {
          e.preventDefault();
          seterrModal(() => true);
          setLen(() => true);
          setAllow(true);
          //////////GETTING ANSWERS FOR STUDENTS RESPONSES
          if (e.target.id) {
            let divId = e.target.id;
            console.log(e.target.id);
            searchId = divId;
            console.log(searchId);
            console.log(document.getElementsByTagName("DIV"));
            console.log(document.getElementById(divId));

            if (
              document.getElementsByTagName("DIV") &&
              document.getElementById(divId)
            ) {
              try {
                const response = await fetch(
                  "http://localhost:5000/disapprovedWorksheets",
                  {
                    method: "PATCH",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      searchId: responseData.code[searchId],
                    }),
                  }
                );

                //const rply = await response.json();
                //console.log(rply);
              } catch (err) {
                console.log(err);
              }
              setAllow(true);
              setLen(false);
            }
          }
        };

        /////////////all the styling for worksheets//////////
        board.className = "blah";

        board.style.color = "white";
        board.style.background = "#666666";
        board.style.height = "fit-content";
        board.style.width = "40rem";
        board.style.marginLeft = "25rem";
        board.style.marginTop = "60px";
        board.style.marginBottom = "30px";
        board.style.padding = "2rem";
        // board.style.boxShadow = "1px 1px 8px white";
        board.style.boxShadow = "-5px 0px 15px 0px white";
        board.style.transition = "0.3s";
        board.style.animation = "ease-in";
        board.style.overflow = "hidden";
        board.style.fontFamily = "Calibiri";
        board.style.fontStyle = "italic";
        console.log(index, "index isssssssssss");
        board.innerHTML = responseData.ws[index];

        document.getElementById("dis").appendChild(board);
        document.getElementById("dis").appendChild(btn);
        document.getElementById("dis").appendChild(btn1);

        board.onmouseover = function () {
          board.style.transform = "scale(1.1)";
          board.style.boxShadow = "0px 0px 15px 0px";
        };
        board.onmouseleave = function () {
          board.style.transform = "scale(1)";
          board.style.boxShadow = "0px 0px 15px 0px";
        };
      }
    }
    ///FOR SHOWING EMPTY FIELDS
    if (document.getElementsByClassName("inp1")) {
      console.log(document.getElementsByClassName("inp1"));
      let removableSaveBtn = document.getElementsByClassName("inp1").length;
      for (let index = 0; index < removableSaveBtn; index++) {
        const element = document.getElementsByClassName("inp1")[index];
        element.setAttribute("value", "");
        element.setAttribute("placeholder", "write answer");
      }
    }

    ////////////////for removing save btn from created worksheets/////////
    if (document.getElementsByClassName("mcqSaveBtn")) {
      let removableSaveBtn = document.getElementsByClassName("mcqSaveBtn");
      for (let index = 0; index < removableSaveBtn.length; index++) {
        const element = removableSaveBtn[index];
        element.style.display = "none";
      }
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
        }}
      >
        <nav className="NavbarItems-approvedWS">
          <NavLink to="/admin">
            <img className="logo " src={logo} alt="Logo" />
          </NavLink>
          <h1 className="navbar-logo-approvedWS">Admin's Portal</h1>
          <ul className="nav-menu-approvedWS ">
            <div className="nav-links-approvedWS">
              <li>
                <NavLink to="/admin" className="nav-links-approvedWS">
                  Home
                </NavLink>
              </li>
            </div>

            <div className="nav-links-approvedWS">
              <li>
                <NavLink to="/ConfirmNotes" className="nav-links-approvedWS">
                  Lecture-Notes
                </NavLink>
              </li>
            </div>

            <div className="nav-links-approvedWS">
              <li>
                <NavLink to="/ConfirmVideos" className="nav-links-approvedWS">
                  Video-Lectures
                </NavLink>
              </li>
            </div>
          </ul>
          <NavLink to="/#">
            {" "}
            <button className="button-approvedWS">Log out</button>
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
              fontSize: "50px",
              fontWeight: "bolder",
              marginLeft: "270px",
              paddingTop: "5px",
            }}
          >
            Approve/Disapprove Worksheets
          </p>
        </div>

        <div
          style={{
            marginRight: "0px",
            paddingTop: "20px",
            // paddingBottom: "20px",
            backgroundColor: "white",
          }}
        >
          <h2
            style={{
              marginLeft: "13rem",
              marginTop: "5rem",
              fontWeight: "bold",
              marginLeft: "400px",
            }}
          >
            Please Select Grade To View Worksheets
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
        </div>

        {len && <div id="dis"></div>}

        <ApprovedModal
          modalisOpen={modalisOpen}
          closeModal={() => setModalisOPen(false)}
          successMsg="WORKSHEET APPROVED "
          reload="donot reload"
        />
        <DisapprovedModal
          modalisOpen={errModal}
          // error={error}
          msg="DISAPPROVED SUCCESSFULLY"
          closeModal={() => seterrModal(false)}
          reload="donot reload"
        />
      </div>
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
            marginTop: "60px",
            marginBottom: "20px",
          }}
        >
          <h1
            style={{
              marginTop: "7rem",
              textAlign: "center",
            }}
          >
            NO WORKSHEET AVAILABLE
          </h1>
          <SentimentVeryDissatisfiedOutlinedIcon
            style={{ fontSize: "80px", marginTop: "2rem", marginLeft: "19rem" }}
          />
        </div>
      )}
    </>
  );
};

export default ApprovedWS;

// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import ApprovedModal from "./ApprovedModal";
// import DisapprovedModal from "./DisapprovedModal";
// import logo from "../../assets/PPS5.jpeg";
// import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined";
// import "../Worksheets/CSS/approvedWS.css";
// const ApprovedWS = () => {
//   const [modalisOpen, setModalisOPen] = useState(() => false);
//   const [errModal, seterrModal] = useState(() => false);
//   const [showText, setShowText] = useState(() => false);
//   useEffect(() => {
//     //console.log(WorksheetType);
//     showWSHandler();
//   }, []);

//   const showWSHandler = async (e) => {
//     // let worksheet;
//     let length;
//     let responseData;
//     let btn; //approve
//     let btn1; //disapprove
//     let searchId;

//     try {
//       const response = await fetch(`http://localhost:5000/gettingHTML`);
//       responseData = await response.json();
//       if (responseData.status === "404") {
//         console.log(responseData.status);
//         return setShowText(() => true);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//     /////////////for showing divs /////////////
//     if (responseData.status !== "404") {
//       length = responseData.ws.length;

//       for (let index = length - 1; index >= 0; index--) {
//         console.log(length);
//         let board = document.createElement("div");
//         board.id = index.toString();
//         console.log(board.id, " id of a div");

//         //////////creating save button ////////////////////
//         btn = document.createElement("input");
//         btn1 = document.createElement("input");
//         btn.type = "button";
//         btn1.type = "button";
//         btn.value = "APPROVE";
//         btn1.value = "DISAPPROVE";
//         btn.id = index.toString();
//         btn1.id = index.toString();
//         btn.style.padding = "0.5rem 1.5rem";
//         btn.style.fontWeight = " bolder ";
//         btn.style.marginLeft = "170px";
//         btn.style.marginTop = "10px ";
//         btn.style.marginBottom = "1rem ";
//         btn.style.background = "green";
//         btn.style.color = "white";
//         btn.style.borderRadius = "25px";

//         btn1.style.padding = "0.5rem 1.5rem";
//         btn1.style.fontWeight = " bolder ";
//         btn1.style.marginLeft = "100px";
//         btn1.style.marginTop = "10px ";
//         btn1.style.marginBottom = "1rem ";
//         btn1.style.background = "red";
//         btn1.style.color = "white";
//         btn1.style.borderRadius = "25px";
//         btn.onmouseover = function () {
//           //console.log("im being hovered");

//           btn.style.background = "white";
//           btn.style.boxShadow = "0 2px 8px green";
//           btn.style.color = "green";
//         };

//         btn.onmouseleave = function () {
//           btn.style.background = "green";
//           btn.style.boxShadow = "none";
//           btn.style.color = "white";
//         };

//         btn1.onmouseover = function () {
//           btn1.style.background = "white";
//           btn1.style.boxShadow = "0 2px 8px red";
//           btn1.style.color = "red";
//         };

//         btn1.onmouseleave = function () {
//           btn1.style.background = "red";
//           btn1.style.boxShadow = "none";
//           btn1.style.color = "white";
//         };

//         ///APPROVE WORKSHEETS BUTTON////////
//         btn.onclick = async function (e) {
//           e.preventDefault();
//           setModalisOPen(() => true);
//           if (e.target.id) {
//             let divId = e.target.id;
//             console.log(e.target.id);
//             searchId = divId;
//             console.log(searchId);
//             console.log(document.getElementsByTagName("DIV"));
//             console.log(document.getElementById(divId));

//             if (
//               document.getElementsByTagName("DIV") &&
//               document.getElementById(divId)
//             ) {
//               try {
//                 const response = await fetch(
//                   "http://localhost:5000/confirmWorksheets",
//                   {
//                     method: "PATCH",
//                     headers: {
//                       "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({
//                       searchId: responseData.code[searchId],
//                     }),
//                   }
//                 );
//               } catch (err) {
//                 console.log(err);
//               }
//             }
//           }
//         };

//         ///DISAPPROVE WORKSHEETS BUTTON////////

//         btn1.onclick = async function (e) {
//           e.preventDefault();
//           seterrModal(() => true);
//           //////////GETTING ANSWERS FOR STUDENTS RESPONSES
//           if (e.target.id) {
//             let divId = e.target.id;
//             console.log(e.target.id);
//             searchId = divId;
//             console.log(searchId);
//             console.log(document.getElementsByTagName("DIV"));
//             console.log(document.getElementById(divId));

//             if (
//               document.getElementsByTagName("DIV") &&
//               document.getElementById(divId)
//             ) {
//               try {
//                 const response = await fetch(
//                   "http://localhost:5000/disapprovedWorksheets",
//                   {
//                     method: "PATCH",
//                     headers: {
//                       "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({
//                       searchId: responseData.code[searchId],
//                     }),
//                   }
//                 );

//                 //const rply = await response.json();
//                 //console.log(rply);
//               } catch (err) {
//                 console.log(err);
//               }
//             }
//           }
//         };

//         /////////////all the styling for worksheets//////////
//         board.className = "blah";

//         board.style.color = "white";
//         board.style.background = "#666666";
//         board.style.height = "fit-content";
//         board.style.width = "40rem";
//         board.style.marginLeft = "5rem";
//         board.style.marginTop = "1rem";
//         board.style.marginBottom = "1rem";
//         board.style.padding = "2rem";
//         board.style.boxShadow = "1px 1px 8px black";
//         board.style.fontFamily = "Calibiri";
//         board.style.fontStyle = "italic";
//         console.log(index, "index isssssssssss");
//         board.innerHTML = responseData.ws[index];

//         document.getElementById("dis").appendChild(board);
//         document.getElementById("dis").appendChild(btn);
//         document.getElementById("dis").appendChild(btn1);
//       }
//     }
//     ///FOR SHOWING EMPTY FIELDS
//     if (document.getElementsByClassName("inp1")) {
//       console.log(document.getElementsByClassName("inp1"));
//       let removableSaveBtn = document.getElementsByClassName("inp1").length;
//       for (let index = 0; index < removableSaveBtn; index++) {
//         const element = document.getElementsByClassName("inp1")[index];
//         element.setAttribute("value", "");
//         element.setAttribute("placeholder", "write answer");
//       }
//     }

//     ////////////////for removing save btn from created worksheets/////////
//     if (document.getElementsByClassName("mcqSaveBtn")) {
//       let removableSaveBtn = document.getElementsByClassName("mcqSaveBtn");
//       for (let index = 0; index < removableSaveBtn.length; index++) {
//         const element = removableSaveBtn[index];
//         element.style.display = "none";
//       }
//     }
//   };

//   return (
//     <>
//       <div
//         style={{
//           background: "orange",
//           minWidth: "100%",
//           minHeight: "100%",
//           backgroundSize: "cover",
//         }}
//       >
//         <nav className="NavbarItems-approvedWS">
//           <NavLink to="/admin">
//             <img className="logo " src={logo} alt="Logo" />
//           </NavLink>
//           <h1 className="navbar-logo-approvedWS">Admin's Portal</h1>
//           <ul className="nav-menu-approvedWS ">
//             <div className="nav-links-approvedWS">
//               <li>
//                 <NavLink to="/addWord" className="nav-links-approvedWS">
//                   Home
//                 </NavLink>
//               </li>
//             </div>
//           </ul>
//           <NavLink to="/#">
//             {" "}
//             <button className="button-approvedWS">Log out</button>
//           </NavLink>
//         </nav>

//         <div id="dis"></div>
//         <ApprovedModal
//           modalisOpen={modalisOpen}
//           closeModal={() => setModalisOPen(false)}
//           successMsg="WORKSHEET APPROVED "
//         />
//         <DisapprovedModal
//           modalisOpen={errModal}
//           // error={error}
//           closeModal={() => seterrModal(false)}
//         />
//       </div>
//       {showText && (
//         <div
//           style={{
//             borderWidth: "thick",
//             borderStyle: "solid",
//             borderRadius: "7px",
//             borderColor: " black",
//             width: "700px",
//             height: "400px",
//             marginLeft: "360px",
//             marginTop: "60px",
//           }}
//         >
//           <h1
//             style={{
//               marginTop: "7rem",
//               textAlign: "center",
//             }}
//           >
//             NO WORKSHEET AVAILABLE
//           </h1>
//           <SentimentVeryDissatisfiedOutlinedIcon
//             style={{ fontSize: "80px", marginTop: "2rem", marginLeft: "19rem" }}
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default ApprovedWS;

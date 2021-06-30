import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ScoreModal from "../../ScoreModal";
import { WorksheetType } from "../../users/student/Student";
import { WorksheetCode } from "../UIElements/EnterCode";
import { TITLEP } from "./PracticeWSTitles";
import "../../users/student/student.css";
// import { USERNAME } from "../../Auth";
import logo from "../../assets/PPS5.jpeg";
import "./showWorksheet.css";
//import time from "../../assets/clock1.jpg";
import Timer, { COUNT } from "../UIElements/Timer";
import { GRADE, SUBJECT } from "../../users/student/PracticeWS";
//import backback from "../../assets/backback.jpg";
import { useLocalStorage } from "../../LocalStorage/Local";
import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined";

export let totalScores;
let finalCode;
let creator;
let title;
let grade;
let subject;
let length;
let mcqAns = [];

const ShowWorksheets = () => {
  let inp1;
  let inp2;
  let inp3;
  let inp4;
  let inp5;

  const [show, setShow] = useState(() => false);
  const [len, setLen] = useState();
  const [gradeWS, setGradeWS] = useState();
  const [subjectWS, setSubjectWS] = useState();
  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
  //const [wsType, setwsType] = useState();
  //const [timesup, setTimesup] = useState(() => false);
  const [stop, setStop] = useState(() => false);
  const [code, setCode] = useState();
  //const [score, setScores] = useState(() => 0);
  useEffect(() => {
    console.log(WorksheetType);
    showWSHandler();
  }, []);
  // useEffect(() => {
  //   // console.log(WorksheetType);
  //   timesUpHandler();
  // }, []);

  const focusHandler = (e) => {
    console.log("im called");
    //  console.log(e.target);
    ///////////FORRRRRRRRRRR QUESTION 1
    if (e.target.name === "q1") {
      if (e.target.id === "i1") {
        inp1 = document.getElementById("s1").innerText;
        mcqAns[0] = inp1;
      }
      if (e.target.id === "i2") {
        inp1 = document.getElementById("s2").innerText;
        mcqAns[0] = inp1;
      }
      if (e.target.id === "i3") {
        inp1 = document.getElementById("s3").innerText;
        mcqAns[0] = inp1;
      }
    }

    ///////////FORRRRRRRRRRR QUESTION 2
    if (e.target.name === "q2") {
      if (e.target.id === "i4") {
        inp2 = document.getElementById("s4").innerText;
        mcqAns[1] = inp2;
      }
      if (e.target.id === "i5") {
        inp2 = document.getElementById("s5").innerText;
        mcqAns[1] = inp2;
      }
      if (e.target.id === "i6") {
        inp2 = document.getElementById("s6").innerText;
        mcqAns[1] = inp2;
      }
    }

    ///////////FORRRRRRRRRRR QUESTION 3
    if (e.target.name === "q3") {
      if (e.target.id === "i7") {
        inp3 = document.getElementById("s7").innerText;
        mcqAns[2] = inp3;
      }
      if (e.target.id === "i8") {
        inp3 = document.getElementById("s8").innerText;
        mcqAns[2] = inp3;
      }
      if (e.target.id === "i9") {
        inp3 = document.getElementById("s9").innerText;
        mcqAns[2] = inp3;
      }
    }

    ///////////FORRRRRRRRRRR QUESTION 4
    if (e.target.name === "q4") {
      if (e.target.id === "i10") {
        inp4 = document.getElementById("s10").innerText;
        mcqAns[3] = inp4;
      }
      if (e.target.id === "i11") {
        inp4 = document.getElementById("s11").innerText;
        mcqAns[3] = inp4;
      }
      if (e.target.id === "i12") {
        inp4 = document.getElementById("s12").innerText;
        mcqAns[3] = inp4;
      }
    }
    ///////////FORRRRRRRRRRR QUESTION 5
    if (e.target.name === "q5") {
      if (e.target.id === "i13") {
        inp5 = document.getElementById("s13").innerText;
        mcqAns[4] = inp5;
      }
      if (e.target.id === "i14") {
        inp5 = document.getElementById("s14").innerText;
        mcqAns[4] = inp5;
      }
      if (e.target.id === "i15") {
        inp5 = document.getElementById("s15").innerText;
        mcqAns[4] = inp5;
      }
    }

    return mcqAns;
  };

  const showWSHandler = async (e) => {
    let responseData;
    let btn;
    let searchId;
    let inputLenght;
    let gradeP = GRADE;
    let subjectP = SUBJECT;

    try {
      const response = await fetch(
        `http://localhost:5000/gettingHTML?type=${WorksheetType}&code=${WorksheetCode}&grade=${gradeP}&subject=${subjectP}&title=${TITLEP}`
      );
      responseData = await response.json();

      length = responseData.ws.length;
      setLen(length);
      setGradeWS(responseData.grade[0]);
      setSubjectWS(responseData.subject[0]);
      //setwsType(responseData.type[0]);
      console.log(len, " length is......", responseData.type[0]);

      finalCode = responseData.code[0];
      totalScores = 0;
      creator = responseData.creator[0];
      title = responseData.title[0];
      grade = responseData.grade[0];
      subject = responseData.subject[0];
      console.log(responseData.code[0], responseData.grade[0]);
      // worksheet = responseData.ws.join("");
    } catch (err) {
      console.log(err);
    }

    /////////////for showing divs /////////////
    for (let index = length - 1; index >= 0; index--) {
      console.log(length);

      let titleDiv = document.createElement("div");
      let board = document.createElement("div");
      board.id = index.toString();
      console.log(board.id, " id of a div");

      //////////creating save button ////////////////////
      btn = document.createElement("input");

      btn.type = "button";

      btn.value = "FINISH";

      btn.id = index.toString();
      btn.style.padding = "0.7rem 17.8rem";
      btn.style.fontWeight = " bolder ";
      btn.style.marginLeft = "35px";
      btn.style.marginTop = "30px ";
      btn.style.marginBottom = "10px";
      btn.style.background = "#e63c44";
      btn.style.fontWeight = "bolder";
      btn.style.fontSize = "21px";

      btn.onclick = async function (e) {
        console.log("im finished");
        e.preventDefault();
        setStop(() => true);
        btn.style.outline = "none";
        //////////GETTING ANSWERS FOR STUDENTS RESPONSES
        if (e.target.id) {
          let divId = e.target.id;
          searchId = divId;
          if (
            document.getElementsByTagName("DIV") &&
            document.getElementById(divId)
          ) {
            console.log(document.getElementById(divId));

            let inputDiv = document
              .getElementById(divId)
              .getElementsByTagName("input");

            inputLenght = inputDiv.length;

            for (let index = 0; index < inputLenght; index++) {
              if (inputLenght === 5) {
                // inputDiv.style.position = "relative";
                if (index === 0) {
                  inp1 = inputDiv[index].value;
                  console.log(inp1);
                }

                if (index === 1) {
                  inp2 = inputDiv[index].value;
                  console.log(inp2);
                }
                if (index === 2) {
                  inp3 = inputDiv[index].value;
                  console.log(inp3);
                }
                if (index === 3) {
                  inp4 = inputDiv[index].value;
                  console.log(inp4);
                }
                if (index === 4) {
                  inp5 = inputDiv[index].value;
                  console.log(inp5);
                }
              }
              // if (inputLenght === 15) {
              //   focusHandler();
              // }
            }

            //for saving fill in the blanks responses

            if (inputLenght === 5) {
              try {
                const response = await fetch(
                  "http://localhost:5000/matchStudentResponse",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      inp1,
                      inp2,
                      inp3,
                      inp4,
                      inp5,
                      searchId: responseData.code[searchId],
                    }),
                  }
                );

                const res = await response.json();
                console.log(res.score);
                totalScores = res.score;
                finalCode = res.code;
                creator = res.creator;
                title = res.title;
                grade = res.grade;
                subject = res.subject;
                // setScores(res.score);
                // console.log(score);
                if (res) {
                  setShow(() => true);
                  console.log(show);
                }
              } catch (err) {
                console.log(err);
              }
            }

            ////////for mcqs ///////
            if (inputLenght === 15) {
              try {
                let response = await fetch(
                  "http://localhost:5000/matchStudentResponse",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      inp1: mcqAns[0],
                      inp2: mcqAns[1],
                      inp3: mcqAns[2],
                      inp4: mcqAns[3],
                      inp5: mcqAns[4],
                      searchId: responseData.code[searchId],
                    }),
                  }
                );
                const res = await response.json();
                console.log(res.score);
                totalScores = res.score;
                finalCode = res.code;
                creator = res.creator;
                title = res.title;
                grade = res.grade;
                subject = res.subject;
                if (res) {
                  setShow(() => true);
                  // console.log(show);
                }
              } catch (err) {
                console.log(err);
              }
            }
          }
        }
      };

      /////////////all the styling for worksheets//////////

      board.style.color = "white";
      board.style.background = "#666666";
      board.style.height = "fit-content";
      board.style.width = "40rem";
      board.style.marginLeft = "35px";
      board.style.marginTop = "20px";
      // board.style.marginBottom = "1rem";
      board.style.padding = "2rem";
      board.style.boxShadow = "1px 1px 8px black";
      board.style.fontFamily = "Calibiri";
      board.style.fontStyle = "italic";
      //board.style.position = "relative";
      console.log(index, "index isssssssssss");
      titleDiv.innerHTML = responseData.title[index];
      // <div style={{border:" 2px solid black", borderRadius:"19px"}}>
      board.innerHTML = responseData.ws[index];
      // </div>
      let para = document.createElement("h2");
      para.innerText = " ";
      para.style.marginLeft = "530px";
      if (responseData.type[0] !== WorksheetType) {
        setLen(0);
        console.log(responseData.ws);
        // document.getElementById("dis").appendChild(para);
      } else {
        // titleDiv.innerHTML = "Title: " + responseData.title[titleDiv];
        document.getElementById("dis1").appendChild(titleDiv);

        // titleDiv.style.background="pink";

        // titleDiv.style.paddingTop="10px";
        // titleDiv.style.paddingBottom="10px";
        titleDiv.style.marginBottom = "50px";
        titleDiv.style.marginTop = "40px";
        // titleDiv.style.textAlign="center";
        titleDiv.style.textDecoration = "Underline 5px solid";

        titleDiv.style.textShadow = " 3px 3px grey";
        // titleDiv.style.marginLeft="100px";
        // titleDiv.style.width="100%";
        // // titleDiv.style.backgroundColor="crimson";
        // titleDiv.style.float="left";
        // titleDiv.style.marginTop="120px";
        titleDiv.style.fontSize = "62px";
        titleDiv.style.fontWeight = "bolder";
        titleDiv.style.fontFamily = "serif";
        titleDiv.style.fontStyle = "oblique";
        // titleDiv.style.color="crimson";
        // titleDiv.style.opacity="0.6";

        // document.getElementById("dis").appendChild(time);

        // <div style={{border:" 2px solid black", borderRadius:"19px"}}>
        document.getElementById("dis").appendChild(board);
        document.getElementById("dis").appendChild(btn);
        // </div>
      }
    }

    ///FOR SHOWING EMPTY FIELDS
    if (document.getElementsByClassName("inp1")) {
      //console.log(document.getElementsByClassName("inp1"));
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
    <div
    // className="outerDivWS"
    // className="outerDivWS"
    // style={{
    //   // background: "white",
    //   minWidth: "100%",
    //   minHeight: "100%",
    //   backgroundSize: "cover",

    // }}
    >
      <nav className="NavbarItems-practiceWS">
        <NavLink to="/Student">
          <img className=" logo-practiceWS" src={logo} alt="Logo" />
        </NavLink>
        <h1 className="navbar-logo-practiceWS">{USERNAME}</h1>

        <ul className="nav-menu-practiceWS ">
          <div className="nav-links-practiceWS">
            <li>
              <NavLink to="/student" className="nav-links-practiceWS">
                Home
              </NavLink>
            </li>
          </div>
          {WorksheetType === "practice worksheet" && (
            <div className="nav-links-practiceWS">
              <li>
                <NavLink to="/PracticeWS" className="nav-links-practiceWS">
                  Grades
                </NavLink>
              </li>
            </div>
          )}

          {WorksheetType === "practice worksheet" && (
            <div className="nav-links-practiceWS">
              <li>
                <NavLink
                  to="/PracticeWSTitles"
                  className="nav-links-practiceWS"
                >
                  Titles
                </NavLink>
              </li>
            </div>
          )}
        </ul>

        <NavLink to="/#">
          {" "}
          <button className="button-practiceWS">Log out</button>
        </NavLink>
      </nav>

      <div
        style={{
          backgroundColor: "rgb(245, 87, 13)",
          position: "absolute",
          left: " 500px",
          marginTop: "50px",
          textAlign: "center",
          color: "white",
          opacity: "0.8",
        }}
      >
        <p
          style={{
            paddingLeft: "110px",
            paddingRight: "110px",
            paddingBottom: "10px",
            paddingTop: "20px",
            fontSize: "64px",
            fontWeight: "bolder",
            fontFamily: "serif",
            fontStyle: "oblique",
          }}
        >
          {gradeWS}
        </p>
        <p
          style={{
            fontSize: "58px",
            marginTop: "0px",
            color: "black",
            fontFamily: "Brush Script MT, Brush Script Std, cursive",
            fontStyle: "oblique",
          }}
        >
          {subjectWS}
        </p>{" "}
      </div>

      <div
        style={{
          marginTop: "150px",
          paddingBottom: "100px",
          background: "linear-gradient(to bottom right, #ff4382, #ffce00)",
          height: "100%",
        }}
      >
        <p
          style={{
            textAlign: "center",
            paddingTop: "120px",
            marginLeft: "50px",
            marginBottom: "20px",
            fontWeight: "bolder",
            fontSize: "46px",
            fontStyle: "times new roman",
          }}
        >
          {" "}
          Term's Practice Worksheets
        </p>

        <div
          style={{
            marginLeft: "150px",
            marginRight: "150px",
            paddingLeft: "120px",
            paddingTop: "50px",
            paddingBottom: "20px",
            backgroundColor: "white",
          }}
        >
          <div
            id="dis1"
            style={{
              marginTop: "0px",
              // marginleft:"160px",
            }}
          ></div>

          {WorksheetType === "practice worksheet" &&
            (len === 0 || len === undefined) && (
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
                  marginBottom: "30px",
                }}
              >
                <h2
                  style={{
                    marginTop: "7rem",
                    textAlign: "center",
                  }}
                >
                  NO WORKSHEET AVAILABLE{" "}
                </h2>
                <SentimentVeryDissatisfiedOutlinedIcon
                  style={{
                    fontSize: "80px",
                    marginTop: "2rem",
                    marginLeft: "19rem",
                  }}
                />
              </div>
            )}

          <h2>
            {len !== 0 && (
              <>
                <div
                  id="timer"
                  style={{
                    position: "absolute",
                    top: "430px",
                    left: " 880px",

                    float: "right",
                    textAlign: " center",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      marginTop: "120px",
                      display: "flex",
                      color: "crimson",
                    }}
                  >
                    <p>Time:</p>
                    <Timer
                      stop={stop}
                      //show={show}
                      finalCode={code}
                      totalScores={totalScores}
                      creator={creator}
                      title={title}
                      grade={grade}
                      subject={subject}
                    />
                    seconds
                  </div>
                </div>
              </>
            )}
          </h2>

          {WorksheetType === "test worksheet" && len === 0 && (
            <div
              style={{
                borderWidth: "thick",
                borderStyle: "solid",
                borderRadius: "7px",
                borderColor: " black",
                width: "700px",
                height: "400px",
                marginLeft: "80px",
                marginTop: "90px",
                marginBottom: "180px",
                paddingBottom: "180px",
              }}
            >
              <h2>
                <p style={{ marginTop: "7rem", textAlign: "center" }}>
                  Please Enter Correct Code
                </p>
              </h2>
              <SentimentVeryDissatisfiedOutlinedIcon
                style={{
                  fontSize: "80px",
                  marginTop: "2rem",
                  marginLeft: "19rem",
                }}
              />
            </div>
          )}

          {len !== 0 && (
            <div
              id="dis"
              onClick={focusHandler}
              onChange={focusHandler}
              style={{
                top: "880px",
                borderWidth: "thick",
                borderStyle: "solid",
                borderRadius: "7px",
                borderColor: " black",
                width: "750px",
                height: "fitContent",
                marginLeft: "30px",
                paddingTop: "30px",
                marginBottom: "90px",
                paddingBottom: "30px",
                // marginTop: "50px",
              }}
            ></div>
          )}
        </div>

        <ScoreModal
          openModal={show}
          code={finalCode}
          scores={totalScores}
          creator={creator}
          title={title}
          grade={grade}
          subject={subject}
          closeModal={() => setShow(false)}
        ></ScoreModal>
      </div>
    </div>
  );
};

export default ShowWorksheets;

// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import ScoreModal from "../../ScoreModal";
// import { WorksheetType } from "../../users/student/Student";
// import { WorksheetCode } from "../UIElements/EnterCode";
// import { TITLEP } from "./PracticeWSTitles";
// //import { USERNAME } from "../../Auth";
// import { useLocalStorage } from "../../LocalStorage/Local";

// import logo from "../../assets/PPS5.jpeg";
// import Timer, { COUNT } from "../UIElements/Timer";
// import { GRADE, SUBJECT } from "../../users/student/PracticeWS";
// import sheet from "../../assets/sheets.jpeg";
// import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined";

// import time from "../../assets/clock1.jpeg";
// import backback from "../../assets/backback.jpeg";
// import "./showWorksheet.css";
// export let totalScores;
// let finalCode;
// let creator;
// let title;
// let grade;
// let subject;
// let length;

// const ShowWorksheets = () => {
//   let inp1;
//   let inp2;
//   let inp3;
//   let inp4;
//   let inp5;

//   const [show, setShow] = useState(() => false);

//   const [len, setLen] = useState();
//   const [gradeWS, setGradeWS] = useState();
//   const [subjectWS, setSubjectWS] = useState();
//   //const [wsType, setwsType] = useState();

//   const [stop, setStop] = useState(() => false);
//   const [code, setCode] = useState();
//   const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
//   //const [score, setScores] = useState(() => 0);
//   useEffect(() => {
//     console.log(WorksheetType);
//     showWSHandler();
//   }, []);

//   // useEffect(() => {
//   //   // console.log(WorksheetType);
//   //   timesUpHandler();
//   // }, []);

//   const focusHandler = (e) => {
//     //  console.log(e.target);
//     ///////////FORRRRRRRRRRR QUESTION 1
//     if (e.target.name === "q1") {
//       if (e.target.id === "i1") {
//         inp1 = document.getElementById("s1").innerText;
//       }
//       if (e.target.id === "i2") {
//         inp1 = document.getElementById("s2").innerText;
//       }
//       if (e.target.id === "i3") {
//         inp1 = document.getElementById("s3").innerText;
//       }
//     }

//     ///////////FORRRRRRRRRRR QUESTION 2
//     if (e.target.name === "q2") {
//       if (e.target.id === "i4") {
//         inp2 = document.getElementById("s4").innerText;
//       }
//       if (e.target.id === "i5") {
//         inp2 = document.getElementById("s5").innerText;
//       }
//       if (e.target.id === "i6") {
//         inp2 = document.getElementById("s6").innerText;
//       }
//     }
//     console.log(inp2);
//     ///////////FORRRRRRRRRRR QUESTION 3
//     if (e.target.name === "q3") {
//       if (e.target.id === "i7") {
//         inp3 = document.getElementById("s7").innerText;
//       }
//       if (e.target.id === "i8") {
//         inp3 = document.getElementById("s8").innerText;
//       }
//       if (e.target.id === "i9") {
//         inp3 = document.getElementById("s9").innerText;
//       }
//     }
//     console.log(inp3);

//     ///////////FORRRRRRRRRRR QUESTION 4
//     if (e.target.name === "q4") {
//       if (e.target.id === "i10") {
//         inp4 = document.getElementById("s10").innerText;
//       }
//       if (e.target.id === "i11") {
//         inp4 = document.getElementById("s11").innerText;
//       }
//       if (e.target.id === "i12") {
//         inp4 = document.getElementById("s12").innerText;
//       }
//     }
//     console.log(inp4);
//     ///////////FORRRRRRRRRRR QUESTION 5
//     if (e.target.name === "q5") {
//       if (e.target.id === "i13") {
//         inp5 = document.getElementById("s13").innerText;
//       }
//       if (e.target.id === "i14") {
//         inp5 = document.getElementById("s14").innerText;
//       }
//       if (e.target.id === "i15") {
//         inp5 = document.getElementById("s15").innerText;
//       }
//     }
//     console.log(inp5);
//   };

//   const showWSHandler = async (e) => {
//     let responseData;
//     let btn;
//     let searchId;
//     let inputLenght;
//     let gradeP = GRADE;
//     let subjectP = SUBJECT;

//     try {
//       const response = await fetch(
//         `http://localhost:5000/gettingHTML?type=${WorksheetType}&code=${WorksheetCode}&grade=${gradeP}&subject=${subjectP}&title=${TITLEP}`
//       );
//       responseData = await response.json();

//       length = responseData.ws.length;
//       setLen(length);
//       setGradeWS(responseData.grade[0]);
//       setSubjectWS(responseData.subject[0]);
//       //setwsType(responseData.type[0]);
//       console.log(len, " length is......", responseData.type[0]);

//       finalCode = responseData.code[0];
//       totalScores = 0;
//       creator = responseData.creator[0];
//       title = responseData.title[0];
//       grade = responseData.grade[0];
//       subject = responseData.subject[0];
//       console.log(responseData.code[0], responseData.grade[0]);
//       // worksheet = responseData.ws.join("");
//     } catch (err) {
//       console.log(err);
//     }

//     // let worksheet;
//     //  let length;
//     // let responseData;
//     // let btn;
//     // let searchId;
//     // let inputLenght;
//     // let gradeP = GRADE;
//     // let subjectP = SUBJECT;

//     // try {
//     //   const response = await fetch(
//     //     `http://localhost:5000/gettingHTML?type=${WorksheetType}&&code=${WorksheetCode}&&grade=${gradeP}&&subject=${subjectP}`
//     //   );
//     //   responseData = await response.json();

//     //   length = responseData.ws.length;
//     //   setLen(length);
//     //   setGradeWS(responseData.grade[0]);
//     //   setSubjectWS(responseData.subject[0]);
//     //   //setwsType(responseData.type[0]);
//     //   console.log(len, " length is......", responseData.type[0]);

//     //   finalCode = responseData.code[0];
//     //   totalScores = 0;
//     //   creator = responseData.creator[0];
//     //   title = responseData.title[0];
//     //   grade = responseData.grade[0];
//     //   subject = responseData.subject[0];
//     //   console.log(responseData.code[0], responseData.grade[0]);
//     //   // worksheet = responseData.ws.join("");
//     // } catch (err) {
//     //   console.log(err);
//     // }

//     /////////////for showing divs /////////////
//     for (let index = length - 1; index >= 0; index--) {
//       console.log(length);

//       let titleDiv = document.createElement("div");
//       let board = document.createElement("div");
//       board.id = index.toString();
//       console.log(board.id, " id of a div");

//       //////////creating save button ////////////////////
//       btn = document.createElement("input");

//       btn.type = "button";

//       btn.value = "FINISH";

//       btn.id = index.toString();
//       btn.style.padding = "0.7rem 17.8rem";
//       btn.style.fontWeight = " bolder ";
//       btn.style.marginLeft = "35px";
//       btn.style.marginTop = "30px ";
//       btn.style.marginBottom = "10px";
//       btn.style.background = "#e63c44";
//       btn.style.fontWeight = "bolder";
//       btn.style.fontSize = "21px";

//       btn.onclick = async function (e) {
//         e.preventDefault();
//         setStop(() => true);
//         btn.style.outline = "none";
//         //////////GETTING ANSWERS FOR STUDENTS RESPONSES
//         if (e.target.id) {
//           let divId = e.target.id;
//           searchId = divId;
//           if (
//             document.getElementsByTagName("DIV") &&
//             document.getElementById(divId)
//           ) {
//             console.log(document.getElementById(divId));

//             let inputDiv = document
//               .getElementById(divId)
//               .getElementsByTagName("input");

//             inputLenght = inputDiv.length;

//             for (let index = 0; index < inputLenght; index++) {
//               if (inputLenght === 5) {
//                 // inputDiv.style.position = "relative";
//                 if (index === 0) {
//                   inp1 = inputDiv[index].value;
//                   console.log(inp1);
//                 }

//                 if (index === 1) {
//                   inp2 = inputDiv[index].value;
//                   console.log(inp2);
//                 }
//                 if (index === 2) {
//                   inp3 = inputDiv[index].value;
//                   console.log(inp3);
//                 }
//                 if (index === 3) {
//                   inp4 = inputDiv[index].value;
//                   console.log(inp4);
//                 }
//                 if (index === 4) {
//                   inp5 = inputDiv[index].value;
//                 }
//               }
//             }

//             //for saving fill in the blanks responses

//             if (inputLenght === 5) {
//               try {
//                 const response = await fetch(
//                   "http://localhost:5000/matchStudentResponse",
//                   {
//                     method: "POST",
//                     headers: {
//                       "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({
//                       inp1,
//                       inp2,
//                       inp3,
//                       inp4,
//                       inp5,
//                       searchId: responseData.code[searchId],
//                     }),
//                   }
//                 );

//                 const res = await response.json();
//                 console.log(res.score);
//                 totalScores = res.score;
//                 finalCode = res.code;
//                 creator = res.creator;
//                 title = res.title;
//                 grade = res.grade;
//                 subject = res.subject;
//                 // setScores(res.score);
//                 // console.log(score);
//                 if (res) {
//                   setShow(() => true);
//                   console.log(show);
//                 }
//               } catch (err) {
//                 console.log(err);
//               }
//             }

//             ////////for mcqs ///////
//             if (inputLenght === 15) {
//               console.log(inp1, inp2, inp3, inp4, inp5);
//               try {
//                 let response = await fetch(
//                   "http://localhost:5000/matchStudentResponse",
//                   {
//                     method: "POST",
//                     headers: {
//                       "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({
//                       inp1,
//                       inp2,
//                       inp3,
//                       inp4,
//                       inp5,
//                       searchId: responseData.code[searchId],
//                     }),
//                   }
//                 );
//                 const res = await response.json();
//                 console.log(res.score);
//                 totalScores = res.score;
//                 finalCode = res.code;
//                 creator = res.creator;
//                 title = res.title;
//                 grade = res.grade;
//                 subject = res.subject;
//                 if (res) {
//                   setShow(() => true);
//                   console.log(show);
//                 }
//               } catch (err) {
//                 console.log(err);
//               }
//               // console.log(count, "  ............count111........");
//             }
//           }
//         }
//       };

//       /////////////all the styling for worksheets//////////
//       // board.style.className = "blah";
//       // board.style.borderWidth= "thick";
//       // board.style.borderStyle= "solid";
//       // board.style.borderRadius= "7px";
//       // board.style.borderColor= " black";
//       // board.style.width= "700px";
//       // board.style.height="550px";
//       // board.style.marginLeft= "360px";
//       // board.style.marginTop= "60px";
//       board.style.color = "white";
//       board.style.background = "#666666";
//       board.style.height = "fit-content";
//       board.style.width = "40rem";
//       board.style.marginLeft = "35px";
//       board.style.marginTop = "20px";
//       // board.style.marginBottom = "1rem";
//       board.style.padding = "2rem";
//       board.style.boxShadow = "1px 1px 8px black";
//       board.style.fontFamily = "Calibiri";
//       board.style.fontStyle = "italic";
//       //board.style.position = "relative";
//       console.log(index, "index isssssssssss");
//       titleDiv.innerHTML = responseData.title[index];
//       // <div style={{border:" 2px solid black", borderRadius:"19px"}}>
//       board.innerHTML = responseData.ws[index];
//       // </div>
//       let para = document.createElement("h2");
//       para.innerText = " ";
//       para.style.marginLeft = "530px";
//       if (responseData.type[0] !== WorksheetType) {
//         setLen(0);
//         console.log(responseData.ws);
//         //document.getElementById("dis").appendChild(para);
//       } else {
//         // titleDiv.innerHTML = "Title: " + responseData.title[titleDiv];
//         document.getElementById("dis1").appendChild(titleDiv);

//         // titleDiv.style.background="pink";

//         // titleDiv.style.paddingTop="10px";
//         // titleDiv.style.paddingBottom="10px";
//         titleDiv.style.marginBottom = "50px";
//         titleDiv.style.marginTop = "40px";
//         titleDiv.style.textAlign = "center";
//         titleDiv.style.textDecoration = "Underline 5px solid";

//         titleDiv.style.textShadow = " 3px 3px grey";
//         // titleDiv.style.marginLeft="100px";
//         // titleDiv.style.width="100%";
//         // // titleDiv.style.backgroundColor="crimson";
//         // titleDiv.style.float="left";
//         // titleDiv.style.marginTop="120px";
//         titleDiv.style.fontSize = "62px";
//         titleDiv.style.fontWeight = "bolder";
//         titleDiv.style.fontFamily = "serif";
//         titleDiv.style.fontStyle = "oblique";
//         // titleDiv.style.color="crimson";
//         // titleDiv.style.opacity="0.6";

//         // document.getElementById("dis").appendChild(time);

//         // <div style={{border:" 2px solid black", borderRadius:"19px"}}>
//         document.getElementById("dis").appendChild(board);
//         document.getElementById("dis").appendChild(btn);
//         // </div>
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

//   // const timesUpHandler = async () => {
//   //   try {
//   //     const response = await fetch(
//   //       `http://localhost:5000/gettingHTML?type=${WorksheetType}&&code=${WorksheetCode}`
//   //     );
//   //     let responseData = await response.json();
//   //     if (responseData.type[0] !== WorksheetType) {
//   //       setLen(0);
//   //     } else {
//   //       length = responseData.ws.length;
//   //       setLen(length);
//   //       setwsType(responseData.type[0]);
//   //       console.log(length, " length is......", responseData.type[0]);
//   //       setCode(responseData.code[0]);
//   //       console.log(code, "from timesup");
//   //     }
//   //     // finalCode = responseData.code[0];
//   //     // totalScores = 0;
//   //     // creator = responseData.creator[0];
//   //     // title = responseData.title[0];
//   //     // grade = responseData.grade[0];
//   //     // subject = responseData.subject[0];
//   //     // console.log(responseData.code[0], responseData.grade[0]);
//   //     // worksheet = responseData.ws.join("");
//   //   } catch (err) {
//   //     console.log(err);
//   //   }
//   // };

//   return (
//     <div
//       // className="outerDivWS"
//       // className="outerDivWS"
//       style={{
//         // background: "white",
//         minWidth: "100%",
//         minHeight: "100%",
//         backgroundSize: "cover",
//       }}
//     >
//       <nav className="NavbarItems-practiceWS">
//         <NavLink to="/Student">
//           <img className=" logo-practiceWS" src={logo} alt="Logo" />
//         </NavLink>
//         <h1 className="navbar-logo-practiceWS">{USERNAME}</h1>

//         <ul className="nav-menu-practiceWS ">
//           <div className="nav-links-practiceWS">
//             <li>
//               <NavLink to="/student" className="nav-links-practiceWS">
//                 Home
//               </NavLink>
//             </li>
//           </div>
//           {WorksheetType === "practice worksheet" && (
//             <div className="nav-links-practiceWS">
//               <li>
//                 <NavLink to="/PracticeWS" className="nav-links-practiceWS">
//                   Grades
//                 </NavLink>
//               </li>
//             </div>
//           )}

//           {WorksheetType === "practice worksheet" && (
//             <div className="nav-links-practiceWS">
//               <li>
//                 <NavLink
//                   to="/PracticeWSTitles"
//                   className="nav-links-practiceWS"
//                 >
//                   Titles
//                 </NavLink>
//               </li>
//             </div>
//           )}

//           {/* <div className="nav-links-practiceWS">
//             <li>
//               <NavLink to="/" className="nav-links-practiceWS">
//                 OVERALL Progress
//               </NavLink>
//             </li>
//           </div> */}
//         </ul>

//         <NavLink to="/#">
//           {" "}
//           <button className="button-practiceWS">Log out</button>
//         </NavLink>
//       </nav>

//       {/* <div className="outerDivWS" > */}

//       <img
//         style={{
//           marginTop: "20px",
//           width: "100%",
//           height: "400px",
//           paddingLeft: "20px",

//           paddingRight: "20px",
//           // marginLeft: "40px",
//           // opacity:"0.9",
//         }}
//         // className="fade-in-image"
//         src={sheet}
//         alt="sheet"
//       />

//       {/* <div
//         style={{
//           paddingTop: "70px",
//           paddingBottom: "20px",
//           paddingLeft: "530px",
//           fontWeight: "bolder",
//           font: "4em sans-serif",
//           color: "#f85f06",
//         }}
//       >
//         <p> Worksheets..!</p>
//       </div> */}

//       <div
//         style={{
//           backgroundColor: "rgb(245, 87, 13)",
//           position: "absolute",
//           top: "280px",
//           left: " 500px",
//           marginTop: "80px",
//           textAlign: "center",
//           color: "white",
//           opacity: "0.8",
//         }}
//       >
//         <p
//           style={{
//             paddingLeft: "110px",
//             paddingRight: "110px",
//             paddingBottom: "10px",
//             paddingTop: "20px",
//             fontSize: "64px",
//             fontWeight: "bolder",
//             fontFamily: "serif",
//             fontStyle: "oblique",
//           }}
//         >
//           {gradeWS}
//         </p>
//         <p
//           style={{
//             fontSize: "58px",
//             marginTop: "0px",
//             fontFamily: "Brush Script MT, Brush Script Std, cursive",
//             fontStyle: "oblique",
//           }}
//         >
//           {subjectWS}
//         </p>{" "}
//       </div>

//       {/* <div style={{paddingTop:"10px",paddingBottom:"10px", marginBottom:"20px",
//        width:"100%", backgroundColor:"crimson", textAlign:"center",
//        marginTop:"110px", fontSize:"58px",
//           fontWeight:"bolder", fontFamily:"serif", fontStyle:"oblique",
//           color:"white" ,opacity:"0.6"  }}> </div> */}

//       {/* {len}
//       {wsType} */}

//       {WorksheetType === "practice worksheet" &&
//         (len === 0 || len === undefined) && (
//           <div
//             style={{
//               borderWidth: "thick",
//               borderStyle: "solid",
//               borderRadius: "7px",
//               borderColor: " black",
//               width: "700px",
//               height: "400px",
//               marginLeft: "360px",
//               marginTop: "60px",
//               marginBottom: "30px",
//             }}
//           >
//             <h2
//               style={{
//                 marginTop: "7rem",
//                 textAlign: "center",
//               }}
//             >
//               NO WORKSHEET AVAILABLE{" "}
//             </h2>
//             <SentimentVeryDissatisfiedOutlinedIcon
//               style={{
//                 fontSize: "80px",
//                 marginTop: "2rem",
//                 marginLeft: "19rem",
//               }}
//             />
//           </div>
//         )}

//       <h2>
//         {len !== 0 && (
//           <>
//             <div>
//               {" "}
//               <img
//                 style={{
//                   marginTop: "70px",
//                   // paddingTop:"50px",
//                   // height:"580px",
//                   width: "100%",
//                   height: "1300px",
//                   //  default: { duration: 2 }
//                 }}
//                 // className="d-block w-100"
//                 src={backback}
//                 alt="backback"
//               />
//             </div>

//             <div
//               id="timer"
//               style={{
//                 position: "absolute",
//                 top: "650px",
//                 left: " 880px",
//                 //  marginRight:"100px",
//                 float: "right",
//                 textAlign: " center",
//                 // marginTop:"40px",
//                 display: "flex",
//               }}
//             >
//               <img
//                 style={{
//                   textAlign: " center",
//                   width: "150px",
//                   height: "170px",
//                   // marginTop:"60px"
//                 }}
//                 src={time}
//                 alt="time"
//               />
//               <div
//                 style={{
//                   //   borderWidth: "thick",
//                   //   borderStyle: "solid",
//                   //   borderRadius: "7px",
//                   //   borderColor: " blue",
//                   // height: "fitContent",
//                   // width:"130px",
//                   marginTop: "120px",
//                   display: "flex",
//                   color: "blue",
//                 }}
//               >
//                 <p>Time:</p>
//                 <Timer
//                   stop={stop}
//                   //show={show}
//                   finalCode={code}
//                   totalScores={totalScores}
//                   creator={creator}
//                   title={title}
//                   grade={grade}
//                   subject={subject}
//                 />
//                 seconds
//               </div>
//             </div>
//           </>
//         )}
//       </h2>
//       {/* {wsType === "test worksheet" && len !== 0 && (
//         <>

//         </>
//       )} */}
//       {/* {wsType === "practice worksheet" && len !== 0 && (
//         <>
//           <p>{subject}</p>
//           <p>{grade}</p>
//         </>
//       )} */}
//       {WorksheetType === "test worksheet" && len === 0 && (
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
//             marginBottom: "180px",
//             paddingBottom: "180px",
//           }}
//         >
//           <h2>
//             <p style={{ marginTop: "7rem", textAlign: "center" }}>
//               Please Enter Correct Code
//             </p>
//           </h2>
//           <SentimentVeryDissatisfiedOutlinedIcon
//             style={{ fontSize: "80px", marginTop: "2rem", marginLeft: "19rem" }}
//           />
//         </div>
//       )}
//       {/*......................
//       <div
//         style={{
//           borderWidth: "thick",
//           borderStyle: "solid",
//           borderRadius: "7px",
//           borderColor: " black",
//           width: "700px",
//           height: "400px",
//           marginLeft: "360px",
//           marginTop: "60px",
//           marginBottom: "180px",
//           paddingBottom: "180px",
//         }}
//       >
//         <h2>
//           {WorksheetType === "test worksheet" && len === 0 && (
//             <p style={{ marginTop: "7rem", textAlign: "center" }}>
//               Please Enter Correct Code
//             </p>
//           )}
//         </h2>
//         <SentimentVeryDissatisfiedOutlinedIcon
//           style={{ fontSize: "80px", marginTop: "2rem", marginLeft: "19rem" }}
//         />
//       </div> ......*/}

//       {/* <h2>
//         {WorksheetType === "test worksheet" && len === 0 && (
//           <p style={{ marginLeft: "530px",
//           marginTop:"" }}>Please Enter Correct Code</p>
//         )}
//       </h2> */}

//       <div
//         id="dis1"
//         style={{
//           //   borderWidth: "thick",
//           //   borderStyle: "solid",
//           //   borderRadius: "7px",
//           //   borderColor: " blue",
//           // height: "fitContent",
//           // width:"130px",
//           marginTop: "0px",
//           display: "flex",
//           // marginLeft:"150px",
//           position: "absolute",
//           top: "690px",
//           left: "320px",
//           // color:"blue",
//         }}
//       ></div>
//       {len !== 0 && (
//         <div
//           id="dis"
//           onClick={focusHandler}
//           onChange={focusHandler}
//           style={{
//             // borderWidth: "thick",
//             // borderStyle: "solid",
//             // borderRadius: "7px",
//             // borderColor: "white",
//             // width: "725px",
//             // height: "470px",
//             // marginLeft: "330px",
//             // marginTop: "60px",
//             // paddingLeft: "17px"
//             top: "880px",
//             position: "absolute",
//             borderWidth: "thick",
//             borderStyle: "solid",
//             borderRadius: "7px",
//             borderColor: " black",
//             width: "750px",
//             height: "fitContent",
//             marginLeft: "340px",
//             paddingTop: "30px",
//             marginBottom: "90px",
//             paddingBottom: "30px",
//             // marginTop: "50px",
//           }}
//         ></div>
//       )}
//       <ScoreModal
//         openModal={show}
//         code={finalCode}
//         scores={totalScores}
//         creator={creator}
//         title={title}
//         grade={grade}
//         subject={subject}
//         closeModal={() => setShow(false)}
//       ></ScoreModal>
//     </div>
//     // </div>
//   );
// };

// export default ShowWorksheets;

// // export let totalScores;
// // let finalCode;
// // let creator;
// // let title;
// // let grade;
// // let subject;
// // let length;

// // const ShowWorksheets = () => {
// //   console.log(TITLEP);
// //   let inp1;
// //   let inp2;
// //   let inp3;
// //   let inp4;
// //   let inp5;

// //   const [show, setShow] = useState(() => false);
// //   const [len, setLen] = useState();
// //   const [gradeWS, setGradeWS] = useState();
// //   const [subjectWS, setSubjectWS] = useState();
// //   //const [wsType, setwsType] = useState();
// //   //const [timesup, setTimesup] = useState(() => false);
// //   const [stop, setStop] = useState(() => false);
// //   const [code, setCode] = useState();
// //   //const [score, setScores] = useState(() => 0);
// //   useEffect(() => {
// //     console.log(WorksheetType);
// //     showWSHandler();
// //   }, []);
// //   // useEffect(() => {
// //   //   // console.log(WorksheetType);
// //   //   timesUpHandler();
// //   // }, []);

// //   const focusHandler = (e) => {
// //     //  console.log(e.target);
// //     ///////////FORRRRRRRRRRR QUESTION 1
// //     if (e.target.name === "q1") {
// //       if (e.target.id === "i1") {
// //         inp1 = document.getElementById("s1").innerText;
// //       }
// //       if (e.target.id === "i2") {
// //         inp1 = document.getElementById("s2").innerText;
// //       }
// //       if (e.target.id === "i3") {
// //         inp1 = document.getElementById("s3").innerText;
// //       }
// //     }

// //     ///////////FORRRRRRRRRRR QUESTION 2
// //     if (e.target.name === "q2") {
// //       if (e.target.id === "i4") {
// //         inp2 = document.getElementById("s4").innerText;
// //       }
// //       if (e.target.id === "i5") {
// //         inp2 = document.getElementById("s5").innerText;
// //       }
// //       if (e.target.id === "i6") {
// //         inp2 = document.getElementById("s6").innerText;
// //       }
// //     }

// //     ///////////FORRRRRRRRRRR QUESTION 3
// //     if (e.target.name === "q3") {
// //       if (e.target.id === "i7") {
// //         inp3 = document.getElementById("s7").innerText;
// //       }
// //       if (e.target.id === "i8") {
// //         inp3 = document.getElementById("s8").innerText;
// //       }
// //       if (e.target.id === "i9") {
// //         inp3 = document.getElementById("s9").innerText;
// //       }
// //     }

// //     ///////////FORRRRRRRRRRR QUESTION 4
// //     if (e.target.name === "q4") {
// //       if (e.target.id === "i10") {
// //         inp4 = document.getElementById("s10").innerText;
// //       }
// //       if (e.target.id === "i11") {
// //         inp4 = document.getElementById("s11").innerText;
// //       }
// //       if (e.target.id === "i12") {
// //         inp4 = document.getElementById("s12").innerText;
// //       }
// //     }
// //     ///////////FORRRRRRRRRRR QUESTION 5
// //     if (e.target.name === "q5") {
// //       if (e.target.id === "i13") {
// //         inp5 = document.getElementById("s13").innerText;
// //       }
// //       if (e.target.id === "i14") {
// //         inp5 = document.getElementById("s14").innerText;
// //       }
// //       if (e.target.id === "i15") {
// //         inp5 = document.getElementById("s15").innerText;
// //       }
// //     }
// //   };

// //   const showWSHandler = async (e) => {
// //     // let worksheet;
// //     //  let length;
// //     let responseData;
// //     let btn;
// //     let searchId;
// //     let inputLenght;
// //     let gradeP = GRADE;
// //     let subjectP = SUBJECT;

// //     try {
// //       const response = await fetch(
// //         `http://localhost:5000/gettingHTML?type=${WorksheetType}&code=${WorksheetCode}&grade=${gradeP}&subject=${subjectP}&title=${TITLEP}`
// //       );
// //       responseData = await response.json();

// //       length = responseData.ws.length;
// //       setLen(length);
// //       setGradeWS(responseData.grade[0]);
// //       setSubjectWS(responseData.subject[0]);
// //       //setwsType(responseData.type[0]);
// //       console.log(len, " length is......", responseData.type[0]);

// //       finalCode = responseData.code[0];
// //       totalScores = 0;
// //       creator = responseData.creator[0];
// //       title = responseData.title[0];
// //       grade = responseData.grade[0];
// //       subject = responseData.subject[0];
// //       console.log(responseData.code[0], responseData.grade[0]);
// //       // worksheet = responseData.ws.join("");
// //     } catch (err) {
// //       console.log(err);
// //     }

// //     /////////////for showing divs /////////////
// //     for (let index = length - 1; index >= 0; index--) {
// //       console.log(length);

// //       let titleDiv = document.createElement("div");
// //       let board = document.createElement("div");
// //       board.id = index.toString();
// //       console.log(board.id, " id of a div");

// //       //////////creating save button ////////////////////
// //       btn = document.createElement("input");

// //       btn.type = "button";

// //       btn.value = "FINISH";

// //       btn.id = index.toString();
// //       btn.style.padding = "0.5rem 1.5rem";
// //       btn.style.fontWeight = " bolder ";
// //       btn.style.marginLeft = "710px";
// //       btn.style.marginTop = "10px ";
// //       btn.style.marginBottom = "1rem ";
// //       btn.style.background = "#e63c44";

// //       btn.onclick = async function (e) {
// //         e.preventDefault();
// //         setStop(() => true);
// //         btn.style.outline = "none";
// //         //////////GETTING ANSWERS FOR STUDENTS RESPONSES
// //         if (e.target.id) {
// //           let divId = e.target.id;
// //           searchId = divId;
// //           if (
// //             document.getElementsByTagName("DIV") &&
// //             document.getElementById(divId)
// //           ) {
// //             console.log(document.getElementById(divId));

// //             let inputDiv = document
// //               .getElementById(divId)
// //               .getElementsByTagName("input");

// //             inputLenght = inputDiv.length;

// //             for (let index = 0; index < inputLenght; index++) {
// //               if (inputLenght === 5) {
// //                 // inputDiv.style.position = "relative";
// //                 if (index === 0) {
// //                   inp1 = inputDiv[index].value;
// //                   console.log(inp1);
// //                 }

// //                 if (index === 1) {
// //                   inp2 = inputDiv[index].value;
// //                   console.log(inp2);
// //                 }
// //                 if (index === 2) {
// //                   inp3 = inputDiv[index].value;
// //                   console.log(inp3);
// //                 }
// //                 if (index === 3) {
// //                   inp4 = inputDiv[index].value;
// //                   console.log(inp4);
// //                 }
// //                 if (index === 4) {
// //                   inp5 = inputDiv[index].value;
// //                   console.log(inp5);
// //                 }
// //               }
// //             }

// //             //for saving fill in the blanks responses

// //             if (inputLenght === 5) {
// //               try {
// //                 const response = await fetch(
// //                   "http://localhost:5000/matchStudentResponse",
// //                   {
// //                     method: "POST",
// //                     headers: {
// //                       "Content-Type": "application/json",
// //                     },
// //                     body: JSON.stringify({
// //                       inp1,
// //                       inp2,
// //                       inp3,
// //                       inp4,
// //                       inp5,
// //                       searchId: responseData.code[searchId],
// //                     }),
// //                   }
// //                 );

// //                 const res = await response.json();
// //                 console.log(res.score);
// //                 totalScores = res.score;
// //                 finalCode = res.code;
// //                 creator = res.creator;
// //                 title = res.title;
// //                 grade = res.grade;
// //                 subject = res.subject;
// //                 // setScores(res.score);
// //                 // console.log(score);
// //                 if (res) {
// //                   setShow(() => true);
// //                   console.log(show);
// //                 }
// //               } catch (err) {
// //                 console.log(err);
// //               }
// //             }

// //             ////////for mcqs ///////
// //             if (inputLenght === 15) {
// //               try {
// //                 let response = await fetch(
// //                   "http://localhost:5000/matchStudentResponse",
// //                   {
// //                     method: "POST",
// //                     headers: {
// //                       "Content-Type": "application/json",
// //                     },
// //                     body: JSON.stringify({
// //                       inp1,
// //                       inp2,
// //                       inp3,
// //                       inp4,
// //                       inp5,
// //                       searchId: responseData.code[searchId],
// //                     }),
// //                   }
// //                 );
// //                 const res = await response.json();
// //                 console.log(res.score);
// //                 totalScores = res.score;
// //                 finalCode = res.code;
// //                 creator = res.creator;
// //                 title = res.title;
// //                 grade = res.grade;
// //                 subject = res.subject;
// //                 if (res) {
// //                   setShow(() => true);
// //                   console.log(show);
// //                 }
// //               } catch (err) {
// //                 console.log(err);
// //               }
// //               // console.log(count, "  ............count111........");
// //             }
// //           }
// //         }
// //       };

// //       /////////////all the styling for worksheets//////////
// //       board.className = "blah";

// //       board.style.color = "white";
// //       board.style.background = "#666666";
// //       board.style.height = "fit-content";
// //       board.style.width = "40rem";
// //       board.style.marginLeft = "420px";
// //       board.style.marginTop = "20px";
// //       // board.style.marginBottom = "1rem";
// //       board.style.padding = "2rem";
// //       board.style.boxShadow = "1px 1px 8px black";
// //       board.style.fontFamily = "Calibiri";
// //       board.style.fontStyle = "italic";
// //       //board.style.position = "relative";
// //       console.log(index, "index isssssssssss");
// //       titleDiv.innerHTML = responseData.title[index];
// //       board.innerHTML = responseData.ws[index];

// //       // let para = document.createElement("h2");
// //       // para.innerText = "NO WORKSHEET AVAILABLE";
// //       // para.style.marginLeft = "530px";
// //       if (responseData.type[0] === WorksheetType) {
// //         //   setLen(0);
// //         //   console.log(responseData.ws);
// //         //   document.getElementById("dis").appendChild(para);
// //         // } else {
// //         document.getElementById("dis").appendChild(titleDiv);
// //         // document.getElementById("dis").appendChild(time);
// //         document.getElementById("dis").appendChild(board);
// //         document.getElementById("dis").appendChild(btn);
// //       }
// //     }

// //     ///FOR SHOWING EMPTY FIELDS
// //     if (document.getElementsByClassName("inp1")) {
// //       console.log(document.getElementsByClassName("inp1"));
// //       let removableSaveBtn = document.getElementsByClassName("inp1").length;
// //       for (let index = 0; index < removableSaveBtn; index++) {
// //         const element = document.getElementsByClassName("inp1")[index];
// //         element.setAttribute("value", "");
// //         element.setAttribute("placeholder", "write answer");
// //       }
// //     }

// //     ////////////////for removing save btn from created worksheets/////////
// //     if (document.getElementsByClassName("mcqSaveBtn")) {
// //       let removableSaveBtn = document.getElementsByClassName("mcqSaveBtn");
// //       for (let index = 0; index < removableSaveBtn.length; index++) {
// //         const element = removableSaveBtn[index];
// //         element.style.display = "none";
// //       }
// //     }
// //   };

// //   // const timesUpHandler = async () => {
// //   //   try {
// //   //     const response = await fetch(
// //   //       `http://localhost:5000/gettingHTML?type=${WorksheetType}&&code=${WorksheetCode}`
// //   //     );
// //   //     let responseData = await response.json();
// //   //     if (responseData.type[0] !== WorksheetType) {
// //   //       setLen(0);
// //   //     } else {
// //   //       length = responseData.ws.length;
// //   //       setLen(length);
// //   //       setwsType(responseData.type[0]);
// //   //       console.log(length, " length is......", responseData.type[0]);
// //   //       setCode(responseData.code[0]);
// //   //       console.log(code, "from timesup");
// //   //     }
// //   //     // finalCode = responseData.code[0];
// //   //     // totalScores = 0;
// //   //     // creator = responseData.creator[0];
// //   //     // title = responseData.title[0];
// //   //     // grade = responseData.grade[0];
// //   //     // subject = responseData.subject[0];
// //   //     // console.log(responseData.code[0], responseData.grade[0]);
// //   //     // worksheet = responseData.ws.join("");
// //   //   } catch (err) {
// //   //     console.log(err);
// //   //   }
// //   // };

// //   return (
// //     <div
// //       style={{
// //         background: "white",
// //         minWidth: "100%",
// //         minHeight: "100%",
// //         backgroundSize: "cover",
// //       }}
// //     >
// //       <nav className="NavbarItems-lectureNote">
// //         <NavLink to="/teacher">
// //           <img className="logo" src={logo} alt="Logo" />
// //         </NavLink>
// //         <h1 className="navbar-logo-lectureNote">{USERNAME}</h1>

// //         <ul className="nav-menu-lectureNote ">
// //           <div className="nav-links-lectureNote">
// //             <li>
// //               <NavLink to="/student" className="nav-links-student">
// //                 Home
// //               </NavLink>
// //             </li>
// //           </div>
// //         </ul>
// //         <NavLink to="/#">
// //           {" "}
// //           <button className="button-lectureNote">Log out</button>
// //         </NavLink>
// //       </nav>
// //       <div
// //         style={{
// //           paddingTop: "70px",
// //           paddingBottom: "20px",
// //           paddingLeft: "530px",
// //           fontWeight: "bolder",
// //           font: "4em sans-serif",
// //           /* text-decoration: underline  ;  */
// //           color: "#f85f06",
// //         }}
// //       >
// //         <p>Worksheets..!</p>
// //       </div>
// //       {/* {len}
// //       {wsType} */}
// //       {WorksheetType === "practice worksheet" &&
// //         (len === 0 || len === undefined) && (
// //           <h2 style={{ marginLeft: "530px" }}>NO WORKSHEET AVAILABLE </h2>
// //         )}
// //       <h2>
// //         {len !== 0 && (
// //           <>
// //             <div id="timer">
// //               <Timer
// //                 stop={stop}
// //                 //show={show}
// //                 finalCode={code}
// //                 totalScores={totalScores}
// //                 creator={creator}
// //                 title={title}
// //                 grade={grade}
// //                 subject={subject}
// //               />
// //             </div>
// //             <p>{gradeWS}</p>
// //             <p>{subjectWS}</p>
// //           </>
// //         )}
// //       </h2>
// //       {/* {wsType === "test worksheet" && len !== 0 && (
// //         <>

// //         </>
// //       )} */}
// //       {/* {wsType === "practice worksheet" && len !== 0 && (
// //         <>
// //           <p>{subject}</p>
// //           <p>{grade}</p>
// //         </>
// //       )} */}

// //       <h2>
// //         {WorksheetType === "test worksheet" && len === 0 && (
// //           <p style={{ marginLeft: "530px" }}>Please Enter Correct Code</p>
// //         )}
// //       </h2>

// //       <div id="dis" onClick={focusHandler} onChange={focusHandler}></div>
// //       <ScoreModal
// //         openModal={show}
// //         code={finalCode}
// //         scores={totalScores}
// //         creator={creator}
// //         title={title}
// //         grade={grade}
// //         subject={subject}
// //         closeModal={() => setShow(false)}
// //       ></ScoreModal>
// //     </div>
// //   );
// // };

// // export default ShowWorksheets;

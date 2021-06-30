import React, { useEffect, useState } from "react";
import logo from "../../assets/PPS5.jpeg";
// import { USERNAME } from "../../Auth";
import { useLocalStorage } from "../../LocalStorage/Local";
import { NavLink } from "react-router-dom";
import "./practiceWS.css";
export let SUBJECT;
export let GRADE;

const PracticeWS = () => {
  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
  const callME = (e) => {
    ////////////////computer////////////
    if (e.target.id === "c1") {
      SUBJECT = "Computer";
      GRADE = "Grade-1";
    }

    if (e.target.id === "c2") {
      SUBJECT = "Computer";
      GRADE = "Grade-2";
    }
    if (e.target.id === "c3") {
      SUBJECT = "Computer";
      GRADE = "Grade-3";
    }
    if (e.target.id === "c4") {
      SUBJECT = "Computer";
      GRADE = "Grade-4";
    }
    if (e.target.id === "c5") {
      GRADE = "Grade-5";
      SUBJECT = "Computer";
    }

    ////////////////English////////////
    if (e.target.id === "e1") {
      SUBJECT = "English";
      GRADE = "Grade-1";
    }

    if (e.target.id === "e2") {
      SUBJECT = "English";
      GRADE = "Grade-2";
    }
    if (e.target.id === "e3") {
      SUBJECT = "English";
      GRADE = "Grade-3";
    }
    if (e.target.id === "e4") {
      SUBJECT = "English";
      GRADE = "Grade-4";
    }
    if (e.target.id === "e5") {
      SUBJECT = "English";
      GRADE = "Grade-5";
    }

    ////////////////Mathematics////////////
    if (e.target.id === "m1") {
      SUBJECT = "Mathematics";
      GRADE = "Grade-1";
    }

    if (e.target.id === "m2") {
      SUBJECT = "Mathematics";
      GRADE = "Grade-2";
    }
    if (e.target.id === "m3") {
      SUBJECT = "Mathematics";
      GRADE = "Grade-3";
    }
    if (e.target.id === "m4") {
      SUBJECT = "Mathematics";
      GRADE = "Grade-4";
    }
    if (e.target.id === "m5") {
      SUBJECT = "Mathematics";
      GRADE = "Grade-5";
    }

    ////////////////Science////////////
    if (e.target.id === "s1") {
      SUBJECT = "Science";
      GRADE = "Grade-1";
    }

    if (e.target.id === "s2") {
      SUBJECT = "Science";
      GRADE = "Grade-2";
    }
    if (e.target.id === "s3") {
      SUBJECT = "Science";
      GRADE = "Grade-3";
    }
    if (e.target.id === "s4") {
      SUBJECT = "Science";
      GRADE = "Grade-4";
    }
    if (e.target.id === "s5") {
      SUBJECT = "Science";
      GRADE = "Grade-5";
    }
  };

  return (
    <React.Fragment>
      <nav className="NavbarItems-practiceWS">
        <NavLink to="/student">
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
        </ul>

        <NavLink to="/#">
          {" "}
          <button className="button-practiceWS">Log out</button>
        </NavLink>
      </nav>

      <div
        style={{
          marginTop: "20px",
          paddingBottom: "100px",
          background: "linear-gradient(to bottom right, #ff4382, #ffce00)",
          height: "100%",
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "white",
            paddingTop: "30px",
            fontWeight: "bolder",
            fontSize: "40px",
            fontStyle: "times new roman",
          }}
        >
          Please Select Subject Under Each Grade <br></br> to View Practice
          Worksheet
        </div>

        <div style={{ display: "flex" }}>
          <div className="pinkDiv1">Grade-1</div>

          <div className="pinkDiv2"> Grade-2</div>

          <div className="pinkDiv2"> Grade-3</div>

          <div className="pinkDiv2"> Grade-4</div>

          <div className="pinkDiv2"> Grade-5</div>
        </div>
        <div style={{ display: "flex" }} onClick={callME}>
          <NavLink to="/PracticeWSTitles">
            <div className="whiteDiv2" style={{ marginLeft: "125px" }} id="c1">
              {" "}
              Computer
            </div>
          </NavLink>
          <NavLink to="/PracticeWSTitles">
            <div className="whiteDiv2" id="c2">
              Computer
            </div>
          </NavLink>

          <NavLink to="/PracticeWSTitles">
            <div className="whiteDiv2" id="c3" onClick={callME}>
              Computer
            </div>
          </NavLink>

          <NavLink to="/PracticeWSTitles">
            <div className="whiteDiv2" id="c4" onClick={callME}>
              {" "}
              Computer
            </div>
          </NavLink>

          <NavLink to="/PracticeWSTitles">
            <div className="whiteDiv2" id="c5" onClick={callME}>
              {" "}
              Computer
            </div>
          </NavLink>
        </div>
        <div style={{ display: "flex" }} onClick={callME}>
          <NavLink to="/PracticeWSTitles">
            <div className="whiteDiv1" id="e1">
              {" "}
              English
            </div>
          </NavLink>

          <NavLink to="/PracticeWSTitles">
            <div className="whiteDiv2" id="e2">
              {" "}
              English
            </div>
          </NavLink>

          <NavLink to="/PracticeWSTitles">
            <div className="whiteDiv2" id="e3">
              {" "}
              English
            </div>
          </NavLink>

          <NavLink to="/PracticeWSTitles">
            <div className="whiteDiv2" id="e4">
              {" "}
              English
            </div>
          </NavLink>

          <NavLink to="/PracticeWSTitles">
            <div className="whiteDiv2" id="e5">
              {" "}
              English
            </div>
          </NavLink>
        </div>

        <div style={{ display: "flex" }} onClick={callME}>
          <NavLink to="/PracticeWSTitles">
            <div className="whiteDiv2" style={{ marginLeft: "125px" }} id="m1">
              {" "}
              Mathematics
            </div>
          </NavLink>

          <NavLink to="/PracticeWSTitles">
            <div className="whiteDiv2" id="m2">
              {" "}
              Mathematics
            </div>
          </NavLink>

          <NavLink to="/PracticeWSTitles">
            <div className="whiteDiv2" id="m3">
              {" "}
              Mathematics
            </div>
          </NavLink>

          <NavLink to="/PracticeWSTitles">
            <div className="whiteDiv2" id="m4">
              {" "}
              Mathematics
            </div>
          </NavLink>

          <NavLink to="/PracticeWSTitles">
            <div className="whiteDiv2" id="m5">
              {" "}
              Mathematics
            </div>
          </NavLink>
        </div>

        <div style={{ display: "flex" }} onClick={callME}>
          <NavLink to="/PracticeWSTitles">
            <div className="whiteDiv2" style={{ marginLeft: "125px" }} id="s1">
              {" "}
              Science
            </div>
          </NavLink>

          <NavLink to="/PracticeWSTitles">
            <div className="whiteDiv2" id="s2">
              {" "}
              Science
            </div>
          </NavLink>

          <NavLink to="/PracticeWSTitles">
            <div className="whiteDiv2" id="s3">
              {" "}
              Science
            </div>
          </NavLink>

          <NavLink to="/PracticeWSTitles">
            <div className="whiteDiv2" id="s4">
              {" "}
              Science
            </div>
          </NavLink>

          <NavLink to="/PracticeWSTitles">
            <div className="whiteDiv2" id="s5">
              {" "}
              Science
            </div>
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PracticeWS;

// import React, { useEffect, useState } from "react";
// import logo from "../../assets/PPS5.jpeg";
// import { USERNAME } from "../../Auth";
// import { NavLink } from "react-router-dom";
// import "./practiceWS.css";
// export let SUBJECT;
// export let GRADE;

// const PracticeWS = () => {

//   const callME = (e) => {
//     ////////////////computer////////////
//     if (e.target.id === "c1") {
//       SUBJECT = "Computer";
//       GRADE = "Grade-1";
//     }

//     if (e.target.id === "c2") {
//       SUBJECT = "Computer";
//       GRADE = "Grade-2";
//     }
//     if (e.target.id === "c3") {
//       SUBJECT = "Computer";
//       GRADE = "Grade-3";
//     }
//     if (e.target.id === "c4") {
//       SUBJECT = "Computer";
//       GRADE = "Grade-4";
//     }
//     if (e.target.id === "c5") {
//       GRADE = "Grade-5";
//       SUBJECT = "Computer";
//     }

//     ////////////////English////////////
//     if (e.target.id === "e1") {
//       SUBJECT = "English";
//       GRADE = "Grade-1";
//     }

//     if (e.target.id === "e2") {
//       SUBJECT = "English";
//       GRADE = "Grade-2";
//     }
//     if (e.target.id === "e3") {
//       SUBJECT = "English";
//       GRADE = "Grade-3";
//     }
//     if (e.target.id === "e4") {
//       SUBJECT = "English";
//       GRADE = "Grade-4";
//     }
//     if (e.target.id === "e5") {
//       SUBJECT = "English";
//       GRADE = "Grade-5";
//     }

//     ////////////////Mathematics////////////
//     if (e.target.id === "m1") {
//       SUBJECT = "Mathematics";
//       GRADE = "Grade-1";
//     }

//     if (e.target.id === "m2") {
//       SUBJECT = "Mathematics";
//       GRADE = "Grade-2";
//     }
//     if (e.target.id === "m3") {
//       SUBJECT = "Mathematics";
//       GRADE = "Grade-3";
//     }
//     if (e.target.id === "m4") {
//       SUBJECT = "Mathematics";
//       GRADE = "Grade-4";
//     }
//     if (e.target.id === "m5") {
//       SUBJECT = "Mathematics";
//       GRADE = "Grade-5";
//     }

//     ////////////////Science////////////
//     if (e.target.id === "s1") {
//       SUBJECT = "Science";
//       GRADE = "Grade-1";
//     }

//     if (e.target.id === "s2") {
//       SUBJECT = "Science";
//       GRADE = "Grade-2";
//     }
//     if (e.target.id === "s3") {
//       SUBJECT = "Science";
//       GRADE = "Grade-3";
//     }
//     if (e.target.id === "s4") {
//       SUBJECT = "Science";
//       GRADE = "Grade-4";
//     }
//     if (e.target.id === "s5") {
//       SUBJECT = "Science";
//       GRADE = "Grade-5";
//     }
//   };

//   return (
//     <React.Fragment>
//       <nav className="NavbarItems-practiceWS">
//         <NavLink to="/student">
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

//            {/* <div className="nav-links-practiceWS">
//             <li>
//               <NavLink to="/student" className="nav-links-practiceWS">
//                 Test-Worksheets
//               </NavLink>
//             </li>
//           </div> */}
//         </ul>

//         <NavLink to="/#">
//           {" "}
//           <button className="button-practiceWS">Log out</button>
//         </NavLink>
//       </nav>

//       <div
//         style={{
//           marginTop: "20px",
//           paddingBottom: "100px",
//           background: "linear-gradient(to bottom right, #ff4382, #ffce00)",
//           height: "100%",
//         }}
//       >
//         <div
//           style={{
//             textAlign: "center",
//             color: "white",
//             paddingTop: "30px",
//             fontWeight: "bolder",
//             fontSize: "42px",
//             fontFamily: "algerian",
//           }}
//         >
//           Practice Worksheets
//         </div>

//         <div style={{ display: "flex" }}>
//           <div className="pinkDiv1">Grade-1</div>

//           <div className="pinkDiv2"> Grade-2</div>

//           <div className="pinkDiv2"> Grade-3</div>

//           <div className="pinkDiv2"> Grade-4</div>

//           <div className="pinkDiv2"> Grade-5</div>
//         </div>
//         <div style={{ display: "flex" }} onClick={callME}>
//           <NavLink to="/ShowWorksheets">
//             <div className="whiteDiv2" style={{ marginLeft: "125px" }} id="c1">
//               {" "}
//               Computer
//             </div>
//           </NavLink>
//           <NavLink to="/ShowWorksheets">
//             <div className="whiteDiv2" id="c2">
//               Computer
//             </div>
//           </NavLink>

//           <NavLink to="/ShowWorksheets">
//             <div className="whiteDiv2" id="c3" onClick={callME}>
//               Computer
//             </div>
//           </NavLink>

//           <NavLink to="/ShowWorksheets">
//             <div className="whiteDiv2" id="c4" onClick={callME}>
//               {" "}
//               Computer
//             </div>
//           </NavLink>

//           <NavLink to="/ShowWorksheets">
//             <div className="whiteDiv2" id="c5" onClick={callME}>
//               {" "}
//               Computer
//             </div>
//           </NavLink>
//         </div>
//         <div style={{ display: "flex" }} onClick={callME}>
//           <NavLink to="/ShowWorksheets">
//             <div className="whiteDiv1" id="e1">
//               {" "}
//               English
//             </div>
//           </NavLink>

//           <NavLink to="/ShowWorksheets">
//             <div className="whiteDiv2" id="e2">
//               {" "}
//               English
//             </div>
//           </NavLink>

//           <NavLink to="/ShowWorksheets">
//             <div className="whiteDiv2" id="e3">
//               {" "}
//               English
//             </div>
//           </NavLink>

//           <NavLink to="/ShowWorksheets">
//             <div className="whiteDiv2" id="e4">
//               {" "}
//               English
//             </div>
//           </NavLink>

//           <NavLink to="/ShowWorksheets">
//             <div className="whiteDiv2" id="e5">
//               {" "}
//               English
//             </div>
//           </NavLink>
//         </div>

//         <div style={{ display: "flex" }} onClick={callME}>
//           <NavLink to="/ShowWorksheets">
//             <div className="whiteDiv2" style={{ marginLeft: "125px" }} id="m1">
//               {" "}
//               Mathematics
//             </div>
//           </NavLink>

//           <NavLink to="/ShowWorksheets">
//             <div className="whiteDiv2" id="m2">
//               {" "}
//               Mathematics
//             </div>
//           </NavLink>

//           <NavLink to="/ShowWorksheets">
//             <div className="whiteDiv2" id="m3">
//               {" "}
//               Mathematics
//             </div>
//           </NavLink>

//           <NavLink to="/ShowWorksheets">
//             <div className="whiteDiv2" id="m4">
//               {" "}
//               Mathematics
//             </div>
//           </NavLink>

//           <NavLink to="/ShowWorksheets">
//             <div className="whiteDiv2" id="m5">
//               {" "}
//               Mathematics
//             </div>
//           </NavLink>
//         </div>

//         <div style={{ display: "flex" }} onClick={callME}>
//           <NavLink to="/ShowWorksheets">
//             <div className="whiteDiv2" style={{ marginLeft: "125px" }} id="s1">
//               {" "}
//               Science
//             </div>
//           </NavLink>

//           <NavLink to="/ShowWorksheets">
//             <div className="whiteDiv2" id="s2">
//               {" "}
//               Science
//             </div>
//           </NavLink>

//           <NavLink to="/ShowWorksheets">
//             <div className="whiteDiv2" id="s3">
//               {" "}
//               Science
//             </div>
//           </NavLink>

//           <NavLink to="/ShowWorksheets">
//             <div className="whiteDiv2" id="s4">
//               {" "}
//               Science
//             </div>
//           </NavLink>

//           <NavLink to="/ShowWorksheets">
//             <div className="whiteDiv2" id="s5">
//               {" "}
//               Science
//             </div>
//           </NavLink>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default PracticeWS;

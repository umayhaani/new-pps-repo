import React from "react";
import { useLocalStorage } from "../../LocalStorage/Local";
import { NavLink } from "react-router-dom";
import FillInTheBlanks from "./FillInTheBlanks";
import logo from "../../assets/PPS5.jpeg";
//import { USERNAME } from "../../Auth";
import "../../users/student/student.css";
import Mcqs from "./Mcqs";
import "./CSS/createWorksheets.css";
//import worksheets from "../../assets/Worksheets.png";
import FillInTheBlanks2 from "../../assets/FillInTheBlanks2.jpeg";
import mcq from "../../assets/mcq.jpeg";
const CreateWorksheets = () => {
  //const [userName, setuserName] = useLocalStorage("userName", "null");

  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
  //console.log(userName);
  return (
    <>
      <nav className="NavbarItems-WS">
        <NavLink to="/admin">
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
              <NavLink to="/MyWorksheets" className="nav-links-WS">
                My-Worksheets
              </NavLink>
            </li>
          </div>

          <div className="nav-links-teachers">
            <li>
              <NavLink to="/WorksheetsHistory" className="nav-links-teachers">
                History
              </NavLink>
            </li>
          </div>
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

      {/* ***************************
       *************************** */}

      <div
        style={{
          backgroundColor: "black",
          marginTop: "2px",
          paddingBottom: "10px",
        }}
      >
        <p className="templateWS">Worksheet Templates </p>
      </div>

      <div style={{ paddingTop: "5px", marginTop: "30px" }}>
        <div className="all-divs-WS">
          {/* **********Lecture Notes **************8 */}
          <NavLink to="/FillInTheBlanks">
            <div className="card-container1-WS">
              <div className="image-container-WS">
                <img src={FillInTheBlanks2} alt="image" />
              </div>

              <div className="card-content-WS">
                <div className="card-title-WS">
                  <h3>Fill In The Blanks </h3>
                </div>

                <div className="card-body-WS">
                  <h5>
                    This template consist of 5 Fill In The Blanks, You just have
                    to enter your statements of Fill In The Blanks. It can be
                    created as Practice Worksheets and Test Worksheets.
                  </h5>
                </div>
              </div>
              <div className="btn-WS">
                <button className="btn-WS">
                  {/* <NavLink to="/LectureNotes"  > */}
                  GO....
                  {/* </NavLink>   */}
                </button>
              </div>
            </div>
          </NavLink>

          {/* **********Video Lectures************8 */}
          <NavLink to="/Mcqs">
            <div className="card-container2-WS">
              <div className="image-container2-WS">
                <img src={mcq} alt="image" />
              </div>

              <div className="card-content-WS">
                <div className="card-title-WS">
                  <h3>MCQ'S</h3>
                </div>

                <div className="card-body-WS">
                  <h5>
                    This template consist of 5 MCQ'S, You just have to enter
                    your statements of MCQ'S along with their options. It can be
                    created as Practice Worksheets and Test Worksheets.
                  </h5>
                </div>
              </div>
              <div className="btn-WS">
                <button className="btn-WS">
                  {/* <NavLink to="/UploadVideo"  > */}
                  GO....
                  {/* </NavLink>   */}
                </button>
              </div>
            </div>
          </NavLink>
        </div>

        {/* <FillInTheBlanks /> */}
        {/* <Mcqs /> */}
      </div>
    </>
  );
};

export default CreateWorksheets;

// import React from "react";
// import { useLocalStorage } from "../../LocalStorage/Local";
// import { NavLink } from "react-router-dom";
// import FillInTheBlanks from "./FillInTheBlanks";
// import logo from "../../assets/PPS5.jpeg";
// import { USERNAME } from "../../Auth";
// import "../../users/student/student.css";
// import Mcqs from "./Mcqs";
// import "./CSS/createWorksheets.css";
// //import worksheets from "../../assets/Worksheets.png";
// const CreateWorksheets = () => {
//   const [userName, setuserName] = useLocalStorage("userName", "null");
//   console.log(userName);
//   return (
//     <>
//       <nav className="NavbarItems-WS">
//         <NavLink to="/admin">
//           <img className="logo-WS" src={logo} alt="Logo" />
//         </NavLink>
//         <h1 className="navbar-logo-WS">{USERNAME}</h1>
//         <ul className="nav-menu-WS ">
//           <div className="nav-links-WS">
//             <li>
//               <NavLink to="/Teacher" className="nav-links-WS">
//                 Home
//               </NavLink>
//             </li>
//           </div>
//           <div className="nav-links-WS">
//             <li>
//               <NavLink to="/MyWorksheets" className="nav-links-WS">
//                 My-Worksheets
//               </NavLink>
//             </li>
//           </div>

//           <div className="nav-links-teachers">
//             <li>
//               <NavLink to="/WorksheetsHistory" className="nav-links-teachers">
//                 History
//               </NavLink>
//             </li>
//           </div>
//         </ul>
//         <NavLink to="/#">
//           {" "}
//           <button className="button-WS">Log out</button>
//         </NavLink>
//       </nav>

//       <div
//         style={{
//           marginRight: "0px",
//           paddingTop: "20px",
//           // paddingBottom: "20px",
//           backgroundColor: "white",
//         }}
//       >
//         {" "}
//       </div>

//       {/* ***************************
//        *************************** */}

//       <div
//         style={{
//           backgroundColor: "black",
//           marginTop: "2px",
//           paddingBottom: "10px",
//         }}
//       >
//         <p className="templateWS">Worksheet Templates </p>
//       </div>

//       <div style={{ paddingTop: "5px", marginTop: "30px" }}>
//         <FillInTheBlanks />
//         <Mcqs />
//       </div>
//     </>
//   );
// };

// export default CreateWorksheets;

// // import React from "react";
// // import { useLocalStorage } from "../../LocalStorage/Local";
// // import { NavLink } from "react-router-dom";
// // import FillInTheBlanks from "./FillInTheBlanks";
// // import logo from "../../assets/PPS5.jpeg";
// // import { USERNAME } from "../../Auth";
// // import "../../users/student/student.css";
// // import Mcqs from "./Mcqs";

// // const CreateWorksheets = () => {
// //   const [userName, setuserName] = useLocalStorage("userName", "null");
// //   console.log(userName);
// //   return (
// //     <>
// //       <nav className="NavbarItems-student">
// //         {/* <NavLink>
// //           <img className="logo-stu" src={logo} alt="LOGO" />
// //         </NavLink> */}
// //         <NavLink to="/admin">
// //           <img className="logo-admin" src={logo} alt="Logo" />
// //         </NavLink>
// //         <h1 className="navbar-logo-teacher">{USERNAME}</h1>
// //         <ul className="nav-menu-student ">
// //           <div className="nav-links-student">
// //             <li>
// //               <NavLink to="/Teacher" className="nav-links-student">
// //                 Home
// //               </NavLink>
// //             </li>
// //           </div>
// //           <div className="nav-links-student">
// //             <li>
// //               <NavLink to="/MyWorksheets" className="nav-links-student">
// //                 My-Worksheets
// //               </NavLink>
// //             </li>
// //           </div>
// //         </ul>
// //         <NavLink to="/#">
// //           {" "}
// //           <button className="button-teacher">Log out</button>
// //         </NavLink>
// //       </nav>
// //       <FillInTheBlanks />
// //       <Mcqs />
// //     </>
// //   );
// // };

// // export default CreateWorksheets;

// // import React from "react";
// // import { useLocalStorage } from "../../LocalStorage/Local";
// // import { NavLink } from "react-router-dom";
// // import FillInTheBlanks from "./FillInTheBlanks";
// // import logo from "../../assets/PPS5.jpeg";
// // import { USERNAME } from "../../Auth";

// // import "../../users/student/student.css";
// // import Mcqs from "./Mcqs";
// // import "./CSS/createWorksheets.css";

// // const CreateWorksheets = () => {
// //   const [userName, setuserName] = useLocalStorage("userName", "null");
// //   console.log(userName);
// //   return (
// //     <>
// //       <nav className="NavbarItems-student">
// //         <NavLink to="/admin">
// //           <img className="logo-admin" src={logo} alt="Logo" />
// //         </NavLink>
// //         <h1 className="navbar-logo-teacher">{USERNAME}</h1>
// //         <ul className="nav-menu-student ">
// //           <div className="nav-links-student">
// //             <li>
// //               <NavLink to="/Teacher" className="nav-links-student">
// //                 Home
// //               </NavLink>
// //             </li>
// //           </div>
// //           <div className="nav-links-student">
// //             <li>
// //               <NavLink to="/MyWorksheets" className="nav-links-student">
// //                 My-Worksheets
// //               </NavLink>
// //             </li>
// //           </div>
// //         </ul>
// //         <NavLink to="/#">
// //           {" "}
// //           <button className="button-teacher">Log out</button>
// //         </NavLink>
// //       </nav>

// //       <div className="templates">
// //         <p>Templates..!</p>
// //       </div>

// //       <FillInTheBlanks />
// //       <Mcqs />
// //     </>
// //   );
// // };

// // export default CreateWorksheets;

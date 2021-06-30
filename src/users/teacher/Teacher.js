import React from "react";
import { MenuItems } from "./MenuItems-teacher";
//import { USERNAME } from "../../Auth";
import { useLocalStorage } from "../../LocalStorage/Local";
import { NavLink, useHistory } from "react-router-dom";
import DropDown from "./../../DropDown";
import logo from "../../assets/PPS5.jpeg";
import "./teacher.css";
//import "./auth.css";
import lecturenote from "../../assets/Lecture-note.jpeg";
import videolecture from "../../assets/video-lecture.jpeg";
import worksheets from "../../assets/Worksheets.jpeg";
//import { TextField } from "@material-ui/core";

const Teacher = ({ title, imageUrl, body }) => {
  const history = useHistory();
  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
  const navigateTo = (path) => {
    if (path === "Lecture Notes") {
      return history.push("/LectureNotes");
    }
    if (path === "Worksheets") {
      return history.push("/CreateWorksheets");
    }
    // console.log(grade);
  };
  return (
    <React.Fragment>
      <nav className="NavbarItems-teacher">
        <NavLink to="/teacher">
          <img className="logo" src={logo} alt="Logo" />
        </NavLink>
        <h1 className="navbar-logo-teacher">{USERNAME}</h1>

        <ul className="nav-menu-teachers">
          <div className="nav-links-student">
            <li>
              <DropDown />
            </li>
          </div>
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

      {/* ***************************
       *************************** */}

      <div
        style={{
          backgroundColor: "black",
          marginTop: "2px",
          paddingBottom: "10px",
        }}
      >
        <p className="pps"> PPS </p>

        <nav
          style={{
            paddingTop: "5px",
            marginTop: "5px",
            paddingLeft: "15px",
            fontSize: "32px",
            fontWeight: "bolder",
            marginLeft: "200px",
            width: "1000px",
            height: "50px",
            // backgroundColor:"#19152c",
            backgroundColor: "#fff",
            //  color:"#fff"
          }}
        >
          <ul className="nav2-menu">
            <NavLink
              to="/teacher"
              style={{
                fontSize: "32px",
                marginRight: "200px",
                paddingTop: "10px",
                marginLeft: "0px",
                color: "#000",
                textDecoration: "none",
                listStyle: "none",
              }}
            >
              Teach
            </NavLink>

            <NavLink to="/LectureNotes" className="nav2-links">
              Lecture Notes
            </NavLink>

            <NavLink to="/UploadVideo" className="nav2-links">
              Video Lectures
            </NavLink>

            <NavLink to="/CreateWorksheets" className="nav2-links">
              Worksheets
            </NavLink>
          </ul>
        </nav>
        {/* </div> */}
      </div>

      <div className="all-divs">
        {/* **********Lecture Notes **************8 */}
        <NavLink to="/LectureNotes">
          <div className="card-container1">
            <div className="image-container">
              <img src={lecturenote} alt="lecture" />
            </div>

            <div className="card-content">
              <div className="card-title">
                <h3>Lecture Notes</h3>
              </div>

              <div className="card-body">
                <h5>
                  Upload Lecture Notes for Grades 1-5, according to the
                  curriculum of Federal Board. Deliver term’s key topics in the
                  classroom or at home.
                </h5>
              </div>
            </div>
            <div className="btn">
              <button className="btn">
                {/* <NavLink to="/LectureNotes"  > */}
                GO....
                {/* </NavLink>   */}
              </button>
            </div>
          </div>
        </NavLink>

        {/* **********Video Lectures************8 */}
        <NavLink to="/UploadVideo">
          <div className="card-container2">
            <div className="image-container">
              <img src={videolecture} alt="video" />
            </div>

            <div className="card-content">
              <div className="card-title">
                <h3>Video Lectures</h3>
              </div>

              <div className="card-body">
                <h5>
                  Upload Video Lectures for Grades 1-5, according to the
                  curriculum of Federal Board. Deliver term’s key topics in the
                  classroom or at home.
                </h5>
              </div>
            </div>
            <div className="btn">
              <button className="btn">
                {/* <NavLink to="/UploadVideo"  > */}
                GO....
                {/* </NavLink>   */}
              </button>
            </div>
          </div>
        </NavLink>

        {/* **********Worksheets************8 */}
        <NavLink to="/CreateWorksheets">
          <div className="card-container1">
            <div className="image-container">
              <img src={worksheets} alt="image" />
            </div>

            <div className="card-content">
              <div className="card-title">
                <h3>Worksheets</h3>
              </div>

              <div className="card-body">
                <h5>
                  Create Worksheets for Grades 1-5, according to the curriculum
                  of Federal Board. Deliver term’s key topics in the classroom
                  or at home.
                </h5>
              </div>
            </div>
            <div className="btn">
              <button className="btn">
                {/* <NavLink to="/CreateWorksheets"  > */}
                GO....
                {/* </NavLink>   */}
              </button>
            </div>
          </div>
        </NavLink>
      </div>

      {/* <div className="all-divs">
        <div className="body-div-teacher">
          <p className="text-teacher">Lecture Notes </p>
          <div className="button-div">
            <button
              className="button-teacher"
              onClick={() => navigateTo("Lecture Notes")}
            >
              Go
            </button>
          </div>
        </div>

        <div className="body-div-teacher">
          <p className="text-teacher">Video Lectures </p>
          <div className="button-div">
            <button className="button-teacher">Go</button>
          </div>
        </div>

        <div className="body-div-teacher">
          <p className="text-teacher">Worksheets </p>
          <div className="button-div">
            <button
              className="button-teacher"
              onClick={() => navigateTo("Worksheets")}
            >
              Go
            </button>
          </div>
        </div>
      </div> */}
    </React.Fragment>
  );
};
export default Teacher;

// import React from "react";
// import { MenuItems } from "./MenuItems-teacher";
// import { USERNAME } from "../../Auth";
// import { NavLink, useHistory } from "react-router-dom";
// import logo from "../../assets/PPS5.jpeg";
// import lecturenote from "../../assets/Lecture-note.jpeg";
// import videolecture from "../../assets/video-lecture.jpeg";
// import worksheets from "../../assets/Worksheets.jpeg";
// import "./teacher.css";
// import DropDown, { ShowCard } from "../../DropDown";

// //import "./auth.css";
// //import {image} from "./images";
// //import { TextField } from "@material-ui/core";

// // const Teacher = () => {
// //   const history = useHistory();

// //   const navigateTo = (path) => {
// //     if (path === "Lecture Notes") {
// //       return history.push("/LectureNotes");
// //     }
// //     if (path === "Worksheets") {
// //       return history.push("/CreateWorksheets");
// //     }
// //     // console.log(grade);
// //   };
// const Teacher = ({ title, imageUrl, body }) => {
//   const history = useHistory();

//   const navigateTo = (path) => {
//     if (path === "Lecture Notes") {
//       return history.push("/LectureNotes");
//     }
//     if (path === "Worksheets") {
//       return history.push("/CreateWorksheets");
//     }
//     // console.log(grade);
//   };
//   console.log(ShowCard);
//   return (
//     <React.Fragment>
//       <nav className="NavbarItems-teacher">
//         <NavLink to="/teacher">
//           <img className="logo" src={logo} alt="Logo" />
//         </NavLink>
//         <h1 className="navbar-logo-teacher">{USERNAME}</h1>

//         <ul className="nav-menu-teachers">
//           <div className="nav-links-student">
//             <li>
//               <DropDown />
//             </li>
//           </div>
//         </ul>
//         <NavLink to="/#">
//           {" "}
//           <button className="button-teacher">Log out</button>
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
//           // backgroundColor: "#4682B4",
//           marginTop: "2px",
//           paddingBottom: "10px",
//         }}
//       >
//         <p className="pps"> PPS </p>

//         <nav
//           style={{
//             paddingTop: "5px",
//             marginTop: "5px",
//             paddingLeft: "15px",
//             fontSize: "32px",
//             fontWeight: "bolder",
//             marginLeft: "200px",
//             width: "1000px",
//             height: "50px",
//             // backgroundColor:"#19152c",
//             backgroundColor: "#fff",
//             //  color:"#fff"
//           }}
//         >
//           <ul className="nav2-menu">
//             <NavLink
//               to="/teacher"
//               style={{
//                 fontSize: "32px",
//                 marginRight: "200px",
//                 paddingTop: "10px",
//                 marginLeft: "0px",
//                 color: "#000",
//                 textDecoration: "none",
//                 listStyle: "none",
//               }}
//             >
//               Teach
//             </NavLink>

//             <NavLink to="/LectureNotes" className="nav2-links">
//               Lecture Notes
//             </NavLink>

//             <NavLink to="/UploadVideo" className="nav2-links">
//               Video Lectures
//             </NavLink>

//             <NavLink to="/CreateWorksheets" className="nav2-links">
//               Worksheets
//             </NavLink>
//           </ul>
//         </nav>
//         {/* </div> */}
//       </div>

//       <div className="all-divs">
//         {/* **********Lecture Notes **************8 */}

//         <div className="card-container1">
//           <div className="image-container">
//             <img src={lecturenote} alt="image" />
//           </div>

//           <div className="card-content">
//             <div className="card-title">
//               <h3>Lecture Notes</h3>
//             </div>

//             <div className="card-body">
//               <h5>
//                 Upload Lecture Notes for Grades 1-5, according to the curriculum
//                 of Federal Board. Deliver term’s key topics in the classroom or
//                 at home.
//               </h5>
//             </div>
//           </div>
//           <div className="btn">
//             <button>
//               <NavLink to="/LectureNotes">View More</NavLink>
//             </button>
//           </div>
//         </div>

//         {/* **********Video Lectures************8 */}

//         <div className="card-container2">
//           <div className="image-container">
//             <img src={videolecture} alt="image" />
//           </div>

//           <div className="card-content">
//             <div className="card-title">
//               <h3>Video Lectures</h3>
//             </div>

//             <div className="card-body">
//               <h5>
//                 Upload Video Lectures for Grades 1-5, according to the
//                 curriculum of Federal Board. Deliver term’s key topics in the
//                 classroom or at home.
//               </h5>
//             </div>
//           </div>
//           <div className="btn">
//             <button>
//               <NavLink to="/UploadVideo">View More</NavLink>
//             </button>
//           </div>
//         </div>

//         {/* **********Worksheets************8 */}

//         <div className="card-container1">
//           <div className="image-container">
//             <img src={worksheets} alt="image" />
//           </div>

//           <div className="card-content">
//             <div className="card-title">
//               <h3>Worksheets</h3>
//             </div>

//             <div className="card-body">
//               <h5>
//                 Create Worksheets for Grades 1-5, according to the curriculum of
//                 Federal Board. Deliver term’s key topics in the classroom or at
//                 home.
//               </h5>
//             </div>
//           </div>
//           <div className="btn">
//             <button>
//               <NavLink to="/CreateWorksheets">View More</NavLink>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* <div className="all-divs">
//         <div className="body-div-teacher">
//           <p className="text-teacher">Lecture Notes </p>
//           <div className="button-div">
//             <button
//               className="button-teacher"
//               onClick={() => navigateTo("Lecture Notes")}
//             >
//               Go
//             </button>
//           </div>
//         </div>

//         <div className="body-div-teacher">
//           <p className="text-teacher">Video Lectures </p>
//           <div className="button-div">
//             <button className="button-teacher">Go</button>
//           </div>
//         </div>

//         <div className="body-div-teacher">
//           <p className="text-teacher">Worksheets </p>
//           <div className="button-div">
//             <button
//               className="button-teacher"
//               onClick={() => navigateTo("Worksheets")}
//             >
//               Go
//             </button>
//           </div>
//         </div>
//       </div> */}
//     </React.Fragment>
//   );
// };

// // <React.Fragment>

// //       <nav className="NavbarItems-student">
// //         <NavLink to="/Student">
// //           <img className=" logo-stu" src={logo} alt="Logo" />
// //         </NavLink>
// //         <h1 className="navbar-logo-student">{USERNAME}</h1>

// //         <ul className="nav-menu-student ">
// //           {/* <div className="nav-links-student">
// //             <li>
// //               <NavLink to="/Teacher" className="nav-links-student">
// //                 Home
// //               </NavLink>
// //             </li>
// //           </div> */}

// //           <div className="nav-links-student">
// //             <li>
// //               <DropDown />
// //             </li>
// //           </div>

// //           <div className="nav-links-student">
// //             <li>
// //               <NavLink to="/notesHistory" className="nav-links-student">
// //                 Notes
// //               </NavLink>
// //             </li>
// //           </div>
// //           <div className="nav-links-student">
// //             <li>
// //               <NavLink to="/CreateWorksheets" className="nav-links-student">
// //                 Worksheets
// //               </NavLink>
// //             </li>
// //           </div>
// //         </ul>

// //         <NavLink to="/#">
// //           {" "}
// //           <button className="button-student">Log out</button>
// //         </NavLink>
// //       </nav>

// //       <div className="all-divs">
// //         <div className="body-div-teacher">
// //           <p className="text-teacher">Lecture Notes </p>
// //           <div className="button-div">
// //             <button
// //               className="button-teacher"
// //               onClick={() => navigateTo("Lecture Notes")}
// //             >
// //               Go
// //             </button>
// //           </div>
// //         </div>

// //         <div className="body-div-teacher">
// //           <p className="text-teacher">Video Lectures </p>
// //           <div className="button-div">
// //             <button className="button-teacher">Go</button>
// //           </div>
// //         </div>

// //         <div className="body-div-teacher">
// //           <p className="text-teacher">Worksheets </p>
// //           <div className="button-div">
// //             <button
// //               className="button-teacher"
// //               onClick={() => navigateTo("Worksheets")}
// //             >
// //               Go
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </React.Fragment>
// //   );
// // };

// export default Teacher;

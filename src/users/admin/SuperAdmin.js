import React from "react";

import { NavLink } from "react-router-dom";
import { useLocalStorage } from "../../LocalStorage/Local";
import logo from "../../assets/PPS5.jpeg";
import lecturenote from "../../assets/Lecture-note.jpeg";
import videolecture from "../../assets/video-lecture.jpeg";
// import { useLocalStorage } from "../../LocalStorage/Local";
import worksheets from "../../assets/Worksheets.jpeg";
import "./admin.css";
//import {image} from "./images";
//import { TextField } from "@material-ui/core";

const SuperAdmin = () => {
  const [adminType, setAdminType] = useLocalStorage("adminType", "null");
  // const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
  //console.log(MenuItems);
  return (
    <React.Fragment>
      <nav className="NavbarItems-ad">
        <NavLink to="/Student">
          <img className=" logo-ad" src={logo} alt="Logo" />
        </NavLink>
        <h1 className="navbar-logo-ad">Admin's Portal</h1>

        <ul className="nav-menu-ad">
          <div className="nav-links-ad">
            <li>
              <NavLink
                to="/admin"
                className="nav-links-ad"
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "rgb(245, 87, 13)",
                  textDecorationThickness: "5px",
                }}
              >
                Home
              </NavLink>
            </li>
          </div>
        </ul>

        <NavLink to="/#">
          {" "}
          <button className="button-ad">Log out</button>
        </NavLink>
      </nav>

      {/* <nav className="NavbarItems-ad">
        <NavLink to="/admin">
          <img className="logo-ad" src={logo} alt="Logo" />
        </NavLink>
        <h1 className="navbar-logo-ad">Admin's Portal</h1>
        <ul className="nav-menu-ad">
          {MenuItems.map((item, index) => {
            return (
              <div className="nav-links-ad" key={index}>
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
      </nav> */}

      <div className="admin-body"> Welcome Admin</div>
      <div
        //className="nav2-menu"
        //className="admin-tagline"
        style={{
          paddingTop: "7px",
          paddingLeft: "100px",
          fontSize: "25px",

          marginLeft: "200px",
          width: "1000px",
          height: "50px",
          color: "white",

          backgroundColor: "black",
        }}
      >
        <p>Here You Can Manage Admins Detail,Registered Users and Spell Bee</p>
      </div>

      <div
        style={{
          paddingTop: "10px",
          backgroundColor: "black",
          marginTop: "2px",
          paddingBottom: "10px",
        }}
      >
        <nav
          style={{
            paddingTop: "5px",
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
                fontWeight: "bold",
                fontSize: "32px",
                marginRight: "200px",
                marginLeft: "0px",
                color: "rgb(245, 87, 13)",
                textDecoration: "none",
                listStyle: "none",
              }}
            >
              PPS
            </NavLink>

            <NavLink to="/GetUsers" className="nav2-links">
              Registered Users
            </NavLink>

            <NavLink to="/AdminsDetail" className="nav2-links">
              Admins Detail
            </NavLink>

            <NavLink to="/addWord" className="nav2-links">
              Spell Bee
            </NavLink>
          </ul>
        </nav>
      </div>

      <div className="all-divs">
        {/* ***Lecture Notes *******8 */}

        <NavLink to="/GetUsers">
          <div className="card-container1">
            <div className="image-container">
              <img src={lecturenote} alt="image" />
            </div>

            <div className="card-content">
              <div className="card-title">
                <h3>Registered Users</h3>
              </div>

              <div className="card-body">
                <h5>
                  Here you can view email and Role of all the registered users
                  including Teacher and Students
                </h5>
              </div>
            </div>
            <div className="btn">
              <button className="btn">
                {/* <NavLink to="/confirmNotes"  > */}
                GO....
                {/* </NavLink>   */}
              </button>
            </div>
          </div>
        </NavLink>

        {/* ***Video Lectures*****8 */}
        <NavLink to="/AdminsDetail">
          <div className="card-container2">
            <div className="image-container">
              <img src={videolecture} alt="image" />
            </div>

            <div className="card-content">
              <div className="card-title">
                <h3>Admins Detail</h3>
              </div>

              <div className="card-body">
                <h5>
                  Simple to manage all registered Admins of the system. Here you
                  can view email and Role of all the registered Admins, can edit
                  them and delete them.
                </h5>
              </div>
            </div>
            <div className="btn">
              <button className="btn">
                {/* <NavLink to="/ConfirmVideos"  > */}
                GO....
                {/* </NavLink>   */}
              </button>
            </div>
          </div>
        </NavLink>

        {/* ***Worksheets*****8 */}
        <NavLink to="/addWord">
          <div className="card-container1">
            <div className="image-container">
              <img src={worksheets} alt="image" />
            </div>

            <div className="card-content">
              <div className="card-title">
                <h3>Spell Bee</h3>
              </div>

              <div className="card-body">
                <h5>
                  Simple way to provide (add/edit) spellings For spell Bee.
                  Provide words, their description, grade and difficulty Level.
                </h5>
              </div>
            </div>
            <div className="btn">
              <button className="btn">
                {/* <NavLink to="/confirmWorksheets"  > */}
                GO....
                {/* </NavLink>   */}
              </button>
            </div>
          </div>
        </NavLink>
      </div>
    </React.Fragment>
  );
};
export default SuperAdmin;

// import React from "react";
// import { MenuItems } from "./Menu";
// import { NavLink } from "react-router-dom";
// import { useLocalStorage } from "../../LocalStorage/Local";
// import logo from "../../assets/PPS5.jpeg";
// import lecturenote from "../../assets/Lecture-note.jpeg";
// import videolecture from "../../assets/video-lecture.jpeg";
// import worksheets from "../../assets/Worksheets.jpeg";
// import "./admin.css";
// //import {image} from "./images";
// //import { TextField } from "@material-ui/core";

// const SuperAdmin = () => {
//   //console.log(MenuItems);
//   return (
//     <React.Fragment>
//       <nav className="NavbarItems-ad">
//         <NavLink to="/Student">
//           <img className=" logo-ad" src={logo} alt="Logo" />
//         </NavLink>
//         <h1 className="navbar-logo-ad">Admin's Portal</h1>
//         <ul className="nav-menu-ad">
//           <div className="nav-links-ad">
//             <li>
//               <NavLink
//                 to="/admin"
//                 className="nav-links-ad"
//                 style={{
//                   textDecoration: "underline",
//                   textDecorationColor: "rgb(245, 87, 13)",
//                   textDecorationThickness: "5px",
//                 }}
//               >
//                 Home
//               </NavLink>
//             </li>
//           </div>
//         </ul>

//         <NavLink to="/#">
//           {" "}
//           <button className="button-ad">Log out</button>
//         </NavLink>
//       </nav>

//       <div className="admin-body"> Welcome Admin</div>
//       <div
//         //className="nav2-menu"
//         //className="admin-tagline"
//         style={{
//           paddingTop: "7px",
//           paddingLeft: "100px",
//           fontSize: "25px",

//           marginLeft: "200px",
//           width: "1000px",
//           height: "50px",
//           color: "white",

//           backgroundColor: "black",
//         }}
//       >
//         <p>Here You Can Manage Admins Detail,Registered Users and Spell Bee</p>
//       </div>

//       <div
//         style={{
//           paddingTop: "10px",
//           backgroundColor: "black",
//           marginTop: "2px",
//           paddingBottom: "10px",
//         }}
//       >
//         <nav
//           style={{
//             paddingTop: "5px",
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
//                 fontWeight: "bold",
//                 fontSize: "32px",
//                 marginRight: "200px",
//                 marginLeft: "0px",
//                 color: "rgb(245, 87, 13)",
//                 textDecoration: "none",
//                 listStyle: "none",
//               }}
//             >
//               PPS
//             </NavLink>

//             <NavLink to="/GetUsers" className="nav2-links">
//               Registered Users
//             </NavLink>

//             <NavLink to="/AdminsDetail" className="nav2-links">
//               Admins Detail
//             </NavLink>

//             <NavLink to="/addWord" className="nav2-links">
//               Spell Bee
//             </NavLink>
//           </ul>
//         </nav>
//       </div>

//       <div className="all-divs">
//         {/* **********Lecture Notes **************8 */}

//         <NavLink to="/GetUsers">
//           <div className="card-container1">
//             <div className="image-container">
//               <img src={lecturenote} alt="image" />
//             </div>

//             <div className="card-content">
//               <div className="card-title">
//                 <h3>Registered Users</h3>
//               </div>

//               <div className="card-body">
//                 <h5>
//                   Confirm (Approave/Disapproave) Lecture Notes for Grades 1-5,
//                   uploaded by teachers whether they are according to the
//                   curriculum of Federal Board.
//                 </h5>
//               </div>
//             </div>
//             <div className="btn">
//               <button className="btn">
//                 {/* <NavLink to="/confirmNotes"  > */}
//                 GO....
//                 {/* </NavLink>   */}
//               </button>
//             </div>
//           </div>
//         </NavLink>

//         {/* **********Video Lectures************8 */}
//         <NavLink to="/AdminsDetail">
//           <div className="card-container2">
//             <div className="image-container">
//               <img src={videolecture} alt="image" />
//             </div>

//             <div className="card-content">
//               <div className="card-title">
//                 <h3>Admins Detail</h3>
//               </div>

//               <div className="card-body">
//                 <h5>
//                   Confirm (Approave/Disapproave) Video Lectures for Grades 1-5,
//                   uploaded by teachers whether they are according to the
//                   curriculum of Federal Board.
//                 </h5>
//               </div>
//             </div>
//             <div className="btn">
//               <button className="btn">
//                 {/* <NavLink to="/ConfirmVideos"  > */}
//                 GO....
//                 {/* </NavLink>   */}
//               </button>
//             </div>
//           </div>
//         </NavLink>

//         {/* **********Worksheets************8 */}
//         <NavLink to="/addWord">
//           <div className="card-container1">
//             <div className="image-container">
//               <img src={worksheets} alt="image" />
//             </div>

//             <div className="card-content">
//               <div className="card-title">
//                 <h3>Spell Bee</h3>
//               </div>

//               <div className="card-body">
//                 <h5>
//                   Confirm (Approave/Disapproave) Worksheets for Grades 1-5,
//                   created by teachers whether they are according to the
//                   curriculum of Federal Board.
//                 </h5>
//               </div>
//             </div>
//             <div className="btn">
//               <button className="btn">
//                 {/* <NavLink to="/confirmWorksheets"  > */}
//                 GO....
//                 {/* </NavLink>   */}
//               </button>
//             </div>
//           </div>
//         </NavLink>
//       </div>
//     </React.Fragment>
//   );
// };
// export default SuperAdmin;
// // import React from "react";

// // import { MenuItems } from "./MenuItems-admin";
// // import { NavLink } from "react-router-dom";
// // import logo from "../../assets/PPS5.jpeg";
// // import lecturenote from "../../assets/Lecture-note.jpeg";
// // import videolecture from "../../assets/video-lecture.jpeg";
// // import worksheets from "../../assets/Worksheets.jpeg";
// // import "./admin.css";
// // //import {image} from "./images";
// // //import { TextField } from "@material-ui/core";

// // const Admin = () => {
// //   return (
// //     <React.Fragment>
// //       <nav className="NavbarItems-ad">
// //         <NavLink to="/admin">
// //           <img className="logo-ad" src={logo} alt="Logo" />
// //         </NavLink>
// //         <h1 className="navbar-logo-ad">Admin's Portal</h1>

// //         <ul className="nav-menu-ad">
// //           {MenuItems.map((item, index) => {
// //             return (
// //               <div className="nav-links-ad" key={index}>
// //                 <li>
// //                   <NavLink to={item.url} className={item.cName}>
// //                     {" "}
// //                     {item.title}
// //                   </NavLink>
// //                   {/* <a className={item.cName} href={item.url}>
// //                       {item.title}
// //                     </a> */}
// //                 </li>
// //               </div>
// //             );
// //           })}
// //         </ul>
// //         <NavLink to="/#">
// //           {" "}
// //           <button className="button-ad">Log out</button>
// //         </NavLink>
// //       </nav>
// //       <div className="admin-body"> Welcome Admin</div>

// //       {/* ****************************8
// //        ***************************** */}

// //       <div
// //         style={{
// //           paddingTop: "10px",
// //           backgroundColor: "black",
// //           marginTop: "2px",
// //           paddingBottom: "10px",
// //         }}
// //       >
// //         {/* <p className="pps"> PPS </p> */}

// //         <nav
// //           style={{
// //             paddingTop: "5px",
// //             paddingLeft: "15px",
// //             fontSize: "32px",
// //             fontWeight: "bolder",
// //             marginLeft: "200px",
// //             width: "1000px",
// //             height: "50px",
// //             // backgroundColor:"#19152c",
// //             backgroundColor: "#fff",
// //             //  color:"#fff"
// //           }}
// //         >
// //           <ul className="nav2-menu">
// //             <NavLink
// //               to="/admin"
// //               style={{
// //                 fontWeight: "bold",
// //                 fontSize: "32px",
// //                 marginRight: "200px",
// //                 marginLeft: "0px",
// //                 color: "rgb(245, 87, 13)",
// //                 textDecoration: "none",
// //                 listStyle: "none",
// //               }}
// //             >
// //               PPS
// //             </NavLink>

// //             <NavLink to="/confirmNotes" className="nav2-links">
// //               Lecture Notes
// //             </NavLink>

// //             <NavLink to="/ConfirmVideos" className="nav2-links">
// //               Video Lectures
// //             </NavLink>

// //             <NavLink to="/confirmWorksheets" className="nav2-links">
// //               Worksheets
// //             </NavLink>
// //           </ul>
// //         </nav>
// //         {/* </div> */}
// //       </div>

// //       <div className="all-divs">
// //         {/* **********Lecture Notes **************8 */}

// //         <div className="card-container1">
// //           <div className="image-container">
// //             <img src={lecturenote} alt="image" />
// //           </div>

// //           <div className="card-content">
// //             <div className="card-title">
// //               <h3>Lecture Notes</h3>
// //             </div>

// //             <div className="card-body">
// //               <h5>
// //                 Confirm (Approave/Disapproave) Lecture Notes for Grades 1-5,
// //                 uploaded by teachers whether they are according to the
// //                 curriculum of Federal Board.
// //               </h5>
// //             </div>
// //           </div>
// //           <div className="btn">
// //             <button>
// //               <NavLink to="/confirmNotes">View More</NavLink>
// //             </button>
// //           </div>
// //         </div>

// //         {/* **********Video Lectures************8 */}

// //         <div className="card-container2">
// //           <div className="image-container">
// //             <img src={videolecture} alt="image" />
// //           </div>

// //           <div className="card-content">
// //             <div className="card-title">
// //               <h3>Video Lectures</h3>
// //             </div>

// //             <div className="card-body">
// //               <h5>
// //                 Confirm (Approave/Disapproave) Video Lectures for Grades 1-5,
// //                 uploaded by teachers whether they are according to the
// //                 curriculum of Federal Board.
// //               </h5>
// //             </div>
// //           </div>
// //           <div className="btn">
// //             <button>
// //               <NavLink to="/ConfirmVideos">View More</NavLink>
// //             </button>
// //           </div>
// //         </div>

// //         {/* **********Worksheets************8 */}

// //         <div className="card-container1">
// //           <div className="image-container">
// //             <img src={worksheets} alt="image" />
// //           </div>

// //           <div className="card-content">
// //             <div className="card-title">
// //               <h3>Worksheets</h3>
// //             </div>

// //             <div className="card-body">
// //               <h5>
// //                 Confirm (Approave/Disapproave) Worksheets for Grades 1-5,
// //                 created by teachers whether they are according to the curriculum
// //                 of Federal Board.
// //               </h5>
// //             </div>
// //           </div>
// //           <div className="btn">
// //             <button>
// //               <NavLink to="/confirmWorksheets">View More</NavLink>
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </React.Fragment>
// //   );
// // };
// // export default Admin;

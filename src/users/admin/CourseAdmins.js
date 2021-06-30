import React from "react";

import { MenuItems } from "./Menu";
import { NavLink } from "react-router-dom";
import { useLocalStorage } from "../../LocalStorage/Local";
import logo from "../../assets/PPS5.jpeg";
import lecturenote from "../../assets/Lecture-note.jpeg";
import videolecture from "../../assets/video-lecture.jpeg";
import worksheets from "../../assets/Worksheets.jpeg";
import "./admin.css";

const CourseAdmins = () => {
  const [adminType, setAdminType] = useLocalStorage("adminType", "null");
  console.log(MenuItems);
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

      <div className="admin-body"> Welcome Admin</div>
      <div
        //className="nav2-menu"
        //className="admin-tagline"
        style={{
          paddingTop: "7px",
          paddingLeft: "130px",
          fontSize: "25px",

          marginLeft: "200px",
          width: "1000px",
          height: "50px",
          color: "white",

          backgroundColor: "black",
        }}
      >
        {" "}
        {adminType === "English Admin" && (
          <p>Here You Can Manage Content Related To Subject English</p>
        )}
        {adminType === "Science Admin" && (
          <p>Here You Can Manage Content Related To Subject Science</p>
        )}
        {adminType === "Computer Admin" && (
          <p>Here You Can Manage Content Related To Subject Computer</p>
        )}
        {adminType === "Mathematics Admin" && (
          <p>Here You Can Manage Content Related To Subject Mathematics</p>
        )}
        {adminType === "Urdu Admin" && (
          <p>Here You Can Manage Content Related To Subject Urdu</p>
        )}
        {adminType === "Islamiate Admin" && (
          <p>Here You Can Manage Content Related To Subject Islamiate</p>
        )}
      </div>

      {(adminType === "English Admin" ||
        adminType === "Science Admin" ||
        adminType === "Computer Admin" ||
        adminType === "Mathematics Admin") && (
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

              <NavLink to="/confirmNotes" className="nav2-links">
                Lecture Notes
              </NavLink>

              <NavLink to="/ConfirmVideos" className="nav2-links">
                Video Lectures
              </NavLink>
              <NavLink to="/confirmWorksheets" className="nav2-links">
                Worksheets
              </NavLink>
            </ul>
          </nav>
        </div>
      )}
      {(adminType === "Urdu Admin" || adminType === "Islamiate Admin") && (
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
                  marginRight: "400px",
                  marginLeft: "0px",
                  color: "rgb(245, 87, 13)",
                  textDecoration: "none",
                  listStyle: "none",
                }}
              >
                PPS
              </NavLink>

              <NavLink to="/confirmNotes" className="nav2-links">
                Lecture Notes
              </NavLink>

              <NavLink to="/ConfirmVideos" className="nav2-links">
                Video Lectures
              </NavLink>
            </ul>
          </nav>
        </div>
      )}

      {(adminType === "English Admin" ||
        adminType === "Science Admin" ||
        adminType === "Computer Admin" ||
        adminType === "Mathematics Admin") && (
        <div className="all-divs">
          {/* ***Lecture Notes *******8 */}

          <NavLink to="/confirmNotes">
            <div className="card-container1">
              <div className="image-container">
                <img src={lecturenote} alt="image" />
              </div>

              <div className="card-content">
                <div className="card-title">
                  <h3>Lecture Notes</h3>
                </div>

                <div className="card-body">
                  <h5>
                    Confirm (Approave/Disapproave) Lecture Notes for Grades 1-5,
                    uploaded by teachers whether they are according to the
                    curriculum of Federal Board.
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
          <NavLink to="/ConfirmVideos">
            <div className="card-container2">
              <div className="image-container">
                <img src={videolecture} alt="image" />
              </div>

              <div className="card-content">
                <div className="card-title">
                  <h3>Video Lectures</h3>
                </div>

                <div className="card-body">
                  <h5>
                    Confirm (Approave/Disapproave) Video Lectures for Grades
                    1-5, uploaded by teachers whether they are according to the
                    curriculum of Federal Board.
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
          <NavLink to="/confirmWorksheets">
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
                    Confirm (Approave/Disapproave) Worksheets for Grades 1-5,
                    created by teachers whether they are according to the
                    curriculum of Federal Board.
                  </h5>
                </div>
              </div>
              <div className="btn">
                <button className="btn">GO....</button>
              </div>
            </div>
          </NavLink>
        </div>
      )}

      {(adminType === "Urdu Admin" || adminType === "Islamiate Admin") && (
        <div className="all-divs">
          {/* ***Lecture Notes *******8 */}

          <NavLink to="/confirmNotes">
            <div className="card-container3">
              <div className="image-container">
                <img src={lecturenote} alt="image" />
              </div>

              <div className="card-content">
                <div className="card-title">
                  <h3>Lecture Notes</h3>
                </div>

                <div className="card-body">
                  <h5>
                    Confirm (Approave/Disapproave) Lecture Notes for Grades 1-5,
                    uploaded by teachers whether they are according to the
                    curriculum of Federal Board.
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

          {/* ***Worksheets*****8 */}
          <NavLink to="/ConfirmVideos">
            <div className="card-container3">
              <div className="image-container">
                <img src={worksheets} alt="image" />
              </div>

              <div className="card-content">
                <div className="card-title">
                  <h3>Video Lectures</h3>
                </div>

                <div className="card-body">
                  <h5>
                    Confirm (Approave/Disapproave) Video Lectures for Grades
                    1-5, uploaded by teachers whether they are according to the
                    curriculum of Federal Board.
                  </h5>
                </div>
              </div>
              <div className="btn">
                <button className="btn">GO....</button>
              </div>
            </div>
          </NavLink>
        </div>
      )}
    </React.Fragment>
  );
};
export default CourseAdmins;

// const CourseAdmins = () => {
//   const [adminType, setAdminType] = useLocalStorage("adminType", "null");
//   console.log(MenuItems);
//   return (
//     <React.Fragment>
//       <nav className="NavbarItems-ad">
//         <NavLink to="/admin">
//           <img className="logo-ad" src={logo} alt="Logo" />
//         </NavLink>
//         <h1 className="navbar-logo-ad">Admin's Portal</h1>

//         <ul className="nav-menu-ad">
//           {MenuItems.map((item, index) => {
//             return (
//               <div className="nav-links-ad" key={index}>
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
//           <button className="button-ad">Log out</button>
//         </NavLink>
//       </nav>

//       <div className="admin-body"> Welcome Admin</div>
//       <div
//         //className="nav2-menu"
//         //className="admin-tagline"
//         style={{
//           paddingTop: "7px",
//           paddingLeft: "130px",
//           fontSize: "25px",

//           marginLeft: "200px",
//           width: "1000px",
//           height: "50px",
//           color: "white",

//           backgroundColor: "black",
//         }}
//       >
//         {" "}
//         {adminType === "English Admin" && (
//           <p>Here You Can Manage Content Related To Subject English</p>
//         )}
//         {adminType === "Science Admin" && (
//           <p>Here You Can Manage Content Related To Subject Science</p>
//         )}
//         {adminType === "Computer Admin" && (
//           <p>Here You Can Manage Content Related To Subject Computer</p>
//         )}
//         {adminType === "Mathematics Admin" && (
//           <p>Here You Can Manage Content Related To Subject Mathematics</p>
//         )}
//         {adminType === "Urdu Admin" && (
//           <p>Here You Can Manage Content Related To Subject Urdu</p>
//         )}
//         {adminType === "Islamiate Admin" && (
//           <p>Here You Can Manage Content Related To Subject Islamiate</p>
//         )}
//       </div>

//       {(adminType === "English Admin" ||
//         adminType === "Science Admin" ||
//         adminType === "Computer Admin" ||
//         adminType === "Mathematics Admin") && (
//         <div
//           style={{
//             paddingTop: "10px",
//             backgroundColor: "black",
//             marginTop: "2px",
//             paddingBottom: "10px",
//           }}
//         >
//           <nav
//             style={{
//               paddingTop: "5px",
//               paddingLeft: "15px",
//               fontSize: "32px",
//               fontWeight: "bolder",
//               marginLeft: "200px",
//               width: "1000px",
//               height: "50px",
//               // backgroundColor:"#19152c",
//               backgroundColor: "#fff",
//               //  color:"#fff"
//             }}
//           >
//             <ul className="nav2-menu">
//               <NavLink
//                 to="/teacher"
//                 style={{
//                   fontWeight: "bold",
//                   fontSize: "32px",
//                   marginRight: "200px",
//                   marginLeft: "0px",
//                   color: "rgb(245, 87, 13)",
//                   textDecoration: "none",
//                   listStyle: "none",
//                 }}
//               >
//                 PPS
//               </NavLink>

//               <NavLink to="/confirmNotes" className="nav2-links">
//                 Lecture Notes
//               </NavLink>

//               <NavLink to="/ConfirmVideos" className="nav2-links">
//                 Video Lectures
//               </NavLink>
//               <NavLink to="/confirmWorksheets" className="nav2-links">
//                 Worksheets
//               </NavLink>
//             </ul>
//           </nav>
//         </div>
//       )}
//       {(adminType === "Urdu Admin" || adminType === "Islamiate Admin") && (
//         <div
//           style={{
//             paddingTop: "10px",
//             backgroundColor: "black",
//             marginTop: "2px",
//             paddingBottom: "10px",
//           }}
//         >
//           <nav
//             style={{
//               paddingTop: "5px",
//               paddingLeft: "15px",
//               fontSize: "32px",
//               fontWeight: "bolder",
//               marginLeft: "200px",
//               width: "1000px",
//               height: "50px",
//               // backgroundColor:"#19152c",
//               backgroundColor: "#fff",
//               //  color:"#fff"
//             }}
//           >
//             <ul className="nav2-menu">
//               <NavLink
//                 to="/teacher"
//                 style={{
//                   fontWeight: "bold",
//                   fontSize: "32px",
//                   marginRight: "200px",
//                   marginLeft: "0px",
//                   color: "rgb(245, 87, 13)",
//                   textDecoration: "none",
//                   listStyle: "none",
//                 }}
//               >
//                 PPS
//               </NavLink>

//               <NavLink to="/confirmNotes" className="nav2-links">
//                 Lecture Notes
//               </NavLink>

//               <NavLink to="/ConfirmVideos" className="nav2-links">
//                 Video Lectures
//               </NavLink>
//             </ul>
//           </nav>
//         </div>
//       )}

//       {(adminType === "English Admin" ||
//         adminType === "Science Admin" ||
//         adminType === "Computer Admin" ||
//         adminType === "Mathematics Admin") && (
//         <div className="all-divs">
//           {/* **********Lecture Notes **************8 */}

//           <NavLink to="/confirmNotes">
//             <div className="card-container1">
//               <div className="image-container">
//                 <img src={lecturenote} alt="image" />
//               </div>

//               <div className="card-content">
//                 <div className="card-title">
//                   <h3>Lecture Notes</h3>
//                 </div>

//                 <div className="card-body">
//                   <h5>
//                     Confirm (Approave/Disapproave) Lecture Notes for Grades 1-5,
//                     uploaded by teachers whether they are according to the
//                     curriculum of Federal Board.
//                   </h5>
//                 </div>
//               </div>
//               <div className="btn">
//                 <button className="btn">
//                   {/* <NavLink to="/confirmNotes"  > */}
//                   GO....
//                   {/* </NavLink>   */}
//                 </button>
//               </div>
//             </div>
//           </NavLink>

//           {/* **********Video Lectures************8 */}
//           <NavLink to="/ConfirmVideos">
//             <div className="card-container2">
//               <div className="image-container">
//                 <img src={videolecture} alt="image" />
//               </div>

//               <div className="card-content">
//                 <div className="card-title">
//                   <h3>Video Lectures</h3>
//                 </div>

//                 <div className="card-body">
//                   <h5>
//                     Confirm (Approave/Disapproave) Video Lectures for Grades
//                     1-5, uploaded by teachers whether they are according to the
//                     curriculum of Federal Board.
//                   </h5>
//                 </div>
//               </div>
//               <div className="btn">
//                 <button className="btn">
//                   {/* <NavLink to="/ConfirmVideos"  > */}
//                   GO....
//                   {/* </NavLink>   */}
//                 </button>
//               </div>
//             </div>
//           </NavLink>

//           {/* **********Worksheets************8 */}
//           <NavLink to="/confirmWorksheets">
//             <div className="card-container1">
//               <div className="image-container">
//                 <img src={worksheets} alt="image" />
//               </div>

//               <div className="card-content">
//                 <div className="card-title">
//                   <h3>Worksheets</h3>
//                 </div>

//                 <div className="card-body">
//                   <h5>
//                     Confirm (Approave/Disapproave) Worksheets for Grades 1-5,
//                     created by teachers whether they are according to the
//                     curriculum of Federal Board.
//                   </h5>
//                 </div>
//               </div>
//               <div className="btn">
//                 <button className="btn">GO....</button>
//               </div>
//             </div>
//           </NavLink>
//         </div>
//       )}

//       {(adminType === "Urdu Admin" || adminType === "Islamiate Admin") && (
//         <div className="all-divs">
//           {/* **********Lecture Notes **************8 */}

//           <NavLink to="/confirmNotes">
//             <div className="card-container1">
//               <div className="image-container">
//                 <img src={lecturenote} alt="image" />
//               </div>

//               <div className="card-content">
//                 <div className="card-title">
//                   <h3>Lecture Notes</h3>
//                 </div>

//                 <div className="card-body">
//                   <h5>
//                     Confirm (Approave/Disapproave) Lecture Notes for Grades 1-5,
//                     uploaded by teachers whether they are according to the
//                     curriculum of Federal Board.
//                   </h5>
//                 </div>
//               </div>
//               <div className="btn">
//                 <button className="btn">
//                   {/* <NavLink to="/confirmNotes"  > */}
//                   GO....
//                   {/* </NavLink>   */}
//                 </button>
//               </div>
//             </div>
//           </NavLink>

//           {/* **********Video Lectures************8 */}

//           {/* **********Worksheets************8 */}
//           <NavLink to="/ConfirmVideos">
//             <div className="card-container1">
//               <div className="image-container">
//                 <img src={worksheets} alt="image" />
//               </div>

//               <div className="card-content">
//                 <div className="card-title">
//                   <h3>Video Lectures</h3>
//                 </div>

//                 <div className="card-body">
//                   <h5>
//                     Confirm (Approave/Disapproave) Video Lectures for Grades
//                     1-5, uploaded by teachers whether they are according to the
//                     curriculum of Federal Board.
//                   </h5>
//                 </div>
//               </div>
//               <div className="btn">
//                 <button className="btn">GO....</button>
//               </div>
//             </div>
//           </NavLink>
//         </div>
//       )}
//     </React.Fragment>
//   );
// };
// export default CourseAdmins;

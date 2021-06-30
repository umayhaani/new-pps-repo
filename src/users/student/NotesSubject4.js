// import React, { useState, useEffect } from "react";
// import "./studentGrade.css";
// import logo from "../../assets/PPS5.jpeg";
// import { useLocalStorage } from "../../LocalStorage/Local";
// import { NavLink, useHistory } from "react-router-dom";
// import image2 from "../../assets/contentPic2.jpeg";
// import image3 from "../../assets/notess.jpeg";
// import EnterCode from "../../components/UIElements/EnterCode";

// export let WorksheetType;

// const NotesSubject4 = () => {
//   const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
//   const [showCodeWin, setShowCodeWin] = useState(false);
//   const [code, setCode] = useState("im code");

//   const [studentContent, setstudentContent] = useState();
//   useEffect(() => {
//     displayStudentContent();
//   }, []);
//   const history = useHistory();

//   const displayStudentContent = () => {
//     return setstudentContent(
//       <React.Fragment>
//         <div
//           style={{
//             marginTop: "70px",
//             marginLeft: "210px",
//             marginRight: "170px",
//             backgroundColor: "white",
//             paddingBottom: "150px",
//           }}
//         >
//           <div>
//             <img style={{ width: "970px" }} src={image2} alt="image2" />
//             <img
//               style={{
//                 paddingTop: "  0px",
//                 float: "right",
//                 marginBottom: " 0px",
//               }}
//               src={image3}
//               alt="image3"
//             />
//             <p
//               style={{
//                 //   textAlign:"center",
//                 paddingTop: " 50px",
//                 marginLeft: "20px",
//                 marginBottom: "20px",
//                 fontWeight: "bolder",
//                 fontSize: "46px",
//                 fontStyle: "times new roman",
//               }}
//             >
//               {" "}
//               Term's Lecture Notes
//             </p>
//           </div>

//           <p
//             style={{
//               // textDecoration: "underline",
//               //   textAlign:"center",
//               //   paddingTop: "10px",
//               marginLeft: "20px",
//               marginBottom: "20px",
//               //   paddingBottom: " 50px",
//               // fontWeight:"bolder",
//               fontSize: "18px",
//               color: "grey",
//               fontStyle: "times new roman",
//             }}
//           >
//             Simple-to-follow Lecture Notes of the selected Grade and Subject.
//             <br></br>
//             After you select Grade and Subject, related Lecture Notes will
//             appear.<br></br>
//             You can download them to have them offline.
//             <br></br>
//             <br></br>
//             Pick your Grade and subject to get started!
//           </p>

//           <p
//             style={{
//               // textDecoration: "underline",
//               //   textAlign:"center",
//               paddingTop: "30px",
//               marginLeft: "20px",
//               //   marginBottom: "20px",
//               //   paddingBottom: " 50px",
//               fontWeight: "bolder",
//               fontSize: "40px",
//               //   color:"grey",
//               fontStyle: "times new roman",
//             }}
//           >
//             I'am In....
//           </p>

//           <div style={{ display: "flex" }}>
//             <NavLink to="/NotesSubject1">
//               <div className="gradeDiv"> GRADE - 1</div>
//             </NavLink>

//             <NavLink to="/NotesSubject2">
//               <div className="gradeDiv"> GRADE - 2</div>
//             </NavLink>

//             <NavLink to="/NotesSubject3">
//               <div className="gradeDiv"> GRADE - 3</div>
//             </NavLink>

//             <NavLink to="/NotesSubject4">
//               <div
//                 className="gradeDiv"
//                 style={{
//                   color: "white",
//                   backgroundColor: "#E5640F",
//                   border: "4px solid #c54f01",
//                 }}
//               >
//                 {" "}
//                 GRADE - 4
//               </div>
//             </NavLink>

//             <NavLink to="/NotesSubject5">
//               <div className="gradeDiv"> GRADE - 5</div>
//             </NavLink>
//           </div>

//           <p
//             style={{
//               paddingTop: "50px",
//               marginLeft: "20px",
//               fontWeight: "bolder",
//               fontSize: "34px",
//               fontStyle: "times new roman",
//             }}
//           >
//             Subjects...!
//           </p>
//           <div style={{ display: "flex" }}>
//             <div
//               id="English1"
//               style={{
//                 marginTop: "50px",
//                 marginLeft: "20px",
//                 width: "250px",
//                 height: "130px",
//                 backgroundColor: "#5d4192",
//               }}
//             >
//               <NavLink to="/NotesContent">
//                 <p
//                   style={{
//                     textAlign: "center",
//                     fontWeight: "bolder",
//                     marginTop: "40px",
//                     fontSize: "30px",
//                     color: "white",
//                   }}
//                 >
//                   Go
//                 </p>
//               </NavLink>

//               <div
//                 style={{
//                   marginTop: "50px",
//                   // marginLeft:"20px",
//                   // width:"250px",
//                   height: "100px",
//                   backgroundColor: "rgb(230, 229, 229)",
//                 }}
//               >
//                 <p
//                   style={{
//                     paddingTop: "20px",
//                     marginLeft: "10px",
//                     fontWeight: "bolder",
//                   }}
//                 >
//                   English
//                 </p>

//                 <p
//                   style={{
//                     paddingTop: "30px",
//                     marginLeft: "10px",
//                   }}
//                 >
//                   Grade 4
//                 </p>
//               </div>
//             </div>

//             <div
//               id="Computer1"
//               style={{
//                 marginTop: "50px",
//                 marginLeft: "20px",
//                 width: "250px",
//                 height: "130px",
//                 backgroundColor: "#7634a1",
//               }}
//             >
//               <NavLink to="/NotesContent">
//                 <p
//                   style={{
//                     textAlign: "center",
//                     fontWeight: "bolder",
//                     marginTop: "40px",
//                     fontSize: "30px",
//                     color: "white",
//                   }}
//                 >
//                   Go
//                 </p>
//               </NavLink>
//               <div
//                 style={{
//                   marginTop: "50px",
//                   // marginLeft:"20px",
//                   // width:"250px",
//                   height: "100px",
//                   backgroundColor: "rgb(230, 229, 229)",
//                 }}
//               >
//                 <p
//                   style={{
//                     paddingTop: "20px",
//                     marginLeft: "10px",
//                     fontWeight: "bolder",
//                   }}
//                 >
//                   Computer
//                 </p>
//                 <p
//                   style={{
//                     paddingTop: "30px",
//                     marginLeft: "10px",
//                   }}
//                 >
//                   {" "}
//                   Grade 4
//                 </p>
//               </div>
//             </div>

//             <div
//               id="Mathematics1"
//               style={{
//                 marginTop: "50px",
//                 marginLeft: "20px",
//                 width: "250px",
//                 height: "130px",
//                 backgroundColor: "#5d4192",
//               }}
//             >
//               <NavLink to="/NotesContent">
//                 <p
//                   style={{
//                     textAlign: "center",
//                     fontWeight: "bolder",
//                     marginTop: "40px",
//                     fontSize: "30px",
//                     color: "white",
//                   }}
//                 >
//                   Go
//                 </p>
//               </NavLink>
//               <div
//                 style={{
//                   marginTop: "50px",
//                   // marginLeft:"20px",
//                   // width:"250px",
//                   height: "100px",
//                   backgroundColor: "rgb(230, 229, 229)",
//                 }}
//               >
//                 <p
//                   style={{
//                     paddingTop: "20px",
//                     marginLeft: "10px",
//                     fontWeight: "bolder",
//                   }}
//                 >
//                   Mathematics
//                 </p>
//                 <p
//                   style={{
//                     paddingTop: "30px",
//                     marginLeft: "10px",
//                   }}
//                 >
//                   {" "}
//                   Grade 4
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div id="Science1" style={{ display: "flex" }}>
//             <div
//               style={{
//                 marginTop: "120px",
//                 marginLeft: "20px",
//                 width: "250px",
//                 height: "130px",
//                 backgroundColor: "#7634a1",
//               }}
//             >
//               <NavLink to="/NotesContent">
//                 <p
//                   style={{
//                     textAlign: "center",
//                     fontWeight: "bolder",
//                     marginTop: "40px",
//                     fontSize: "30px",
//                     color: "white",
//                   }}
//                 >
//                   Go
//                 </p>
//               </NavLink>
//               <div
//                 style={{
//                   marginTop: "50px",
//                   // marginLeft:"20px",
//                   // width:"250px",
//                   height: "100px",
//                   backgroundColor: "rgb(230, 229, 229)",
//                 }}
//               >
//                 <p
//                   style={{
//                     paddingTop: "20px",
//                     marginLeft: "10px",
//                     fontWeight: "bolder",
//                   }}
//                 >
//                   Science
//                 </p>
//                 <p
//                   style={{
//                     paddingTop: "30px",
//                     marginLeft: "10px",
//                   }}
//                 >
//                   {" "}
//                   Grade 4
//                 </p>
//               </div>
//             </div>

//             <div
//               id="Islamiyat1"
//               style={{
//                 marginTop: "120px",
//                 marginLeft: "20px",
//                 width: "250px",
//                 height: "130px",
//                 backgroundColor: "#5d4192",
//               }}
//             >
//               <NavLink to="/NotesContent">
//                 <p
//                   style={{
//                     textAlign: "center",
//                     fontWeight: "bolder",
//                     marginTop: "40px",
//                     fontSize: "30px",
//                     color: "white",
//                   }}
//                 >
//                   Go
//                 </p>
//               </NavLink>
//               <div
//                 style={{
//                   marginTop: "50px",
//                   // marginLeft:"20px",
//                   // width:"250px",
//                   height: "100px",
//                   backgroundColor: "rgb(230, 229, 229)",
//                 }}
//               >
//                 <p
//                   style={{
//                     paddingTop: "20px",
//                     marginLeft: "10px",
//                     fontWeight: "bolder",
//                   }}
//                 >
//                   Islamiyat
//                 </p>
//                 <p
//                   style={{
//                     paddingTop: "30px",
//                     marginLeft: "10px",
//                   }}
//                 >
//                   {" "}
//                   Grade 4
//                 </p>
//               </div>
//             </div>

//             <div
//               id="Urdu1"
//               style={{
//                 marginTop: "120px",
//                 marginLeft: "20px",
//                 width: "250px",
//                 height: "130px",
//                 backgroundColor: "#7634a1",
//               }}
//             >
//               <NavLink to="/NotesContent">
//                 <p
//                   style={{
//                     textAlign: "center",
//                     fontWeight: "bolder",
//                     marginTop: "40px",
//                     fontSize: "30px",
//                     color: "white",
//                   }}
//                 >
//                   Go
//                 </p>
//               </NavLink>
//               <div
//                 style={{
//                   marginTop: "50px",
//                   // marginLeft:"20px",
//                   // width:"250px",
//                   height: "100px",
//                   backgroundColor: "rgb(230, 229, 229)",
//                 }}
//               >
//                 <p
//                   style={{
//                     paddingTop: "20px",
//                     marginLeft: "10px",
//                     fontWeight: "bolder",
//                   }}
//                 >
//                   Urdu
//                 </p>
//                 <p
//                   style={{
//                     paddingTop: "30px",
//                     marginLeft: "10px",
//                   }}
//                 >
//                   {" "}
//                   Grade 4
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div
//           style={{
//             marginRight: "0px",
//             paddingTop: "50px",
//             paddingBottom: "20px",
//             backgroundColor: "white",
//           }}
//         ></div>
//       </React.Fragment>
//     );
//   };

//   const worksheetOptHandler = (e) => {
//     console.log(e.target.value);
//     if (e.target.value === "practice worksheet") {
//       WorksheetType = e.target.value;
//       history.push("/PracticeWS");
//     }

//     if (e.target.value === "test worksheet") {
//       WorksheetType = e.target.value;
//       setShowCodeWin(() => true);
//     }
//   };
//   const closingModal = () => {
//     setShowCodeWin(false);
//   };

//   const progressOptHandler = (e) => {
//     console.log(e.target.value);
//     if (e.target.value === "SubjectWise Progress")
//       history.push("/ChooseSubject");
//     if (e.target.value === "OverAll Progress") history.push("/SelectSubject");
//   };

//   return (
//     <div
//       style={{
//         marginTop: "",
//         background: " linear-gradient(to bottom right, #ff4382, #ffce00)",
//         //   paddingBottom:"30px",
//       }}
//     >
//       <React.Fragment>
//         <nav className="NavbarItems-StudentNotes">
//           <NavLink to="/Student">
//             <img className=" logo " src={logo} alt="Logo" />
//           </NavLink>
//           <h1 className="navbar-logo-StudentNotes">{USERNAME}</h1>

//           <ul className="nav-menu-StudentNotes ">
//             <div className="nav-links-StudentNotes">
//               <li>
//                 <NavLink to="/Student" className="nav-links-StudentNotes">
//                   Home
//                 </NavLink>
//               </li>
//             </div>

//             <div className="nav-links-StudentNotes">
//               <li>
//                 <NavLink to="/StudentNotes" className="nav-links-StudentNotes">
//                   Grades
//                 </NavLink>
//               </li>
//             </div>

//             <div className="nav-links-student">
//               <li>
//                 <NavLink to="/videos" className="nav-links-student">
//                   Video-Lectures{" "}
//                 </NavLink>
//               </li>
//             </div>
//           </ul>

//           <NavLink to="/#">
//             {" "}
//             <button className="button-StudentNotes">Log out</button>
//           </NavLink>
//         </nav>

//         <div
//           style={{
//             marginRight: "0px",
//             paddingTop: "20px",
//             paddingBottom: "20px",
//             backgroundColor: "white",
//           }}
//         >
//           {" "}
//         </div>

//         <div>{studentContent}</div>

//         <EnterCode
//           openModal={showCodeWin}
//           closeModal={closingModal}
//           code={code}
//         />
//       </React.Fragment>
//     </div>
//   );
// };

// export default NotesSubject4;

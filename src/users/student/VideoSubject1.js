import React, { useState, useEffect } from "react";
import "./studentGrade.css";
import logo from "../../assets/PPS5.jpeg";
import { prevGrade } from "./StudentVideo";
import { useLocalStorage } from "../../LocalStorage/Local";
import { NavLink, useHistory } from "react-router-dom";
import image2 from "../../assets/contentPic2.jpeg";
import image3 from "../../assets/notess.jpeg";

// import image3 from "../../assets/notess.jpeg";

export let prevSubject;

const VideoSubject1 = () => {
  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");

  const [code, setCode] = useState(false);
  const history = useHistory();
  const [subSubject, setSubSubject] = useState("no-val");
  const [subGrade, setSubGrade] = useState("no-val");

  const getSubject = (e) => {
    console.log(e.target.id);
    prevSubject = e.target.id;
    console.log(prevSubject);
    // setSubSubject(e.target.id);
    history.push("/VideoContent");
  };

  return (
    <div
      style={{
        marginTop: "",
        background: " linear-gradient(to bottom right, #ff4382, #ffce00)",
        //   paddingBottom:"30px",
      }}
    >
      <React.Fragment>
        <nav className="NavbarItems-StudentNotes">
          <NavLink to="/Student">
            <img className=" logo " src={logo} alt="Logo" />
          </NavLink>
          <h1 className="navbar-logo-StudentNotes">{USERNAME}</h1>

          <ul className="nav-menu-StudentNotes ">
            <div className="nav-links-StudentNotes">
              <li>
                <NavLink to="/Student" className="nav-links-StudentNotes">
                  Home
                </NavLink>
              </li>
            </div>

            <div className="nav-links-StudentNotes">
              <li>
                <NavLink to="/videos" className="nav-links-StudentNotes">
                  Grades
                </NavLink>
              </li>
            </div>

            <div className="nav-links-student">
              <li>
                <NavLink to="/StudentNotes" className="nav-links-student">
                  Lecture-Notes{" "}
                </NavLink>
              </li>
            </div>
          </ul>

          <NavLink to="/#">
            {" "}
            <button className="button-StudentNotes">Log out</button>
          </NavLink>
        </nav>

        <div
          style={{
            marginRight: "0px",
            paddingTop: "30px",
            paddingBottom: "20px",
            backgroundColor: "white",
          }}
        ></div>
        <div
          style={{
            marginTop: "70px",
            marginLeft: "210px",
            marginRight: "170px",
            backgroundColor: "white",
            paddingBottom: "150px",
          }}
        >
          <div>
            <img style={{ width: "1119px" }} src={image2} alt="image2" />
            <img
              style={{
                paddingTop: "  0px",
                float: "right",
                marginBottom: " 0px",
              }}
              src={image3}
              alt="image3"
            />
            <p
              style={{
                //   textAlign:"center",
                paddingTop: " 50px",
                marginLeft: "20px",
                marginBottom: "20px",
                fontWeight: "bolder",
                fontSize: "46px",
                fontStyle: "times new roman",
              }}
            >
              {" "}
              Term's Video Lectures
            </p>
          </div>

          <p
            style={{
              // textDecoration: "underline",
              //   textAlign:"center",
              //   paddingTop: "10px",
              marginLeft: "20px",
              marginBottom: "20px",
              //   paddingBottom: " 50px",
              // fontWeight:"bolder",
              fontSize: "18px",
              color: "grey",
              fontStyle: "times new roman",
            }}
          >
            Simple-to-follow Video Lecturesof the selected Grade and Subject.
            <br></br>
            After you select Grade and Subject, related Video Lectures will
            appear.
            <br></br>
            You can download them to have them offline.
            <br></br>
            <br></br>
            <span style={{ fontWeight: "bold", color: "#E5640F" }}>
              Pick your Subject to get started!
            </span>
          </p>

          <p
            style={{
              // textDecoration: "underline",
              //   textAlign:"center",
              paddingTop: "30px",
              marginLeft: "20px",
              //   marginBottom: "20px",
              //   paddingBottom: " 50px",
              fontWeight: "bolder",
              fontSize: "40px",
              //   color:"grey",
              fontStyle: "times new roman",
            }}
          >
            Want To Study Notes of...
          </p>
        </div>
        {/* <div
            style={{
              marginRight: "0px",
              paddingTop: "20px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          >
            {" "}
          </div> */}

        <div
          style={{
            marginTop: "-150px",
            marginLeft: "210px",
            marginRight: "170px",
            backgroundColor: "white",
            paddingBottom: "150px",
          }}
        >
          <p
            style={{
              marginLeft: "20px",
              fontWeight: "bolder",
              fontSize: "34px",
              fontStyle: "times new roman",
            }}
          >
            Subjects...!
          </p>
          <div style={{ display: "flex" }} onClick={getSubject}>
            <div
              // id="English"
              style={{
                marginTop: "50px",
                marginLeft: "20px",
                width: "250px",
                height: "130px",

                backgroundColor: "#5d4192",
              }}
            >
              <p
                id="English"
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  marginTop: "40px",
                  fontSize: "30px",
                  color: "white",
                }}
              >
                Go
              </p>

              <div
                style={{
                  marginTop: "50px",
                  // marginLeft:"20px",
                  // width:"250px",
                  height: "100px",
                  backgroundColor: "rgb(230, 229, 229)",
                }}
              >
                <p
                  style={{
                    paddingTop: "20px",
                    marginLeft: "10px",
                    fontWeight: "bolder",
                  }}
                >
                  English
                </p>

                <p
                  style={{
                    paddingTop: "30px",
                    marginLeft: "10px",
                  }}
                >
                  {prevGrade}
                </p>
              </div>
            </div>

            <div
              // id="Computer"
              style={{
                marginTop: "50px",
                marginLeft: "20px",
                width: "250px",
                height: "130px",
                backgroundColor: "#7634a1",
                // "#E5640F"
              }}
            >
              <p
                id="Computer"
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  marginTop: "40px",
                  fontSize: "30px",
                  color: "white",
                }}
              >
                Go
              </p>

              <div
                style={{
                  marginTop: "50px",
                  // marginLeft:"20px",
                  // width:"250px",
                  height: "100px",
                  backgroundColor: "rgb(230, 229, 229)",
                }}
              >
                <p
                  style={{
                    paddingTop: "20px",
                    marginLeft: "10px",
                    fontWeight: "bolder",
                  }}
                >
                  Computer
                </p>
                <p
                  style={{
                    paddingTop: "30px",
                    marginLeft: "10px",
                  }}
                >
                  {" "}
                  {prevGrade}
                </p>
              </div>
            </div>

            <div
              // id="Mathematics"
              style={{
                marginTop: "50px",
                marginLeft: "20px",
                width: "250px",
                height: "130px",
                backgroundColor: "#5d4192",
              }}
            >
              <p
                id="Mathematics"
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  marginTop: "40px",
                  fontSize: "30px",
                  color: "white",
                }}
              >
                Go
              </p>

              <div
                style={{
                  marginTop: "50px",
                  // marginLeft:"20px",
                  // width:"250px",
                  height: "100px",
                  backgroundColor: "rgb(230, 229, 229)",
                }}
              >
                <p
                  style={{
                    paddingTop: "20px",
                    marginLeft: "10px",
                    fontWeight: "bolder",
                  }}
                >
                  Mathematics
                </p>
                <p
                  style={{
                    paddingTop: "30px",
                    marginLeft: "10px",
                  }}
                >
                  {" "}
                  {prevGrade}
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: "flex" }} onClick={getSubject}>
            <div
              // id="Science"
              style={{
                marginTop: "120px",
                marginLeft: "20px",
                width: "250px",
                height: "130px",
                backgroundColor: "#7634a1",
              }}
            >
              <p
                id="Science"
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  marginTop: "40px",
                  fontSize: "30px",
                  color: "white",
                }}
              >
                Go
              </p>

              <div
                style={{
                  marginTop: "50px",
                  // marginLeft:"20px",
                  // width:"250px",
                  height: "100px",
                  backgroundColor: "rgb(230, 229, 229)",
                }}
              >
                <p
                  style={{
                    paddingTop: "20px",
                    marginLeft: "10px",
                    fontWeight: "bolder",
                  }}
                >
                  Science
                </p>
                <p
                  style={{
                    paddingTop: "30px",
                    marginLeft: "10px",
                  }}
                >
                  {" "}
                  {prevGrade}
                </p>
              </div>
            </div>

            <div
              // id="Islamiate"
              style={{
                marginTop: "120px",
                marginLeft: "20px",
                width: "250px",
                height: "130px",
                backgroundColor: "#5d4192",
              }}
            >
              <p
                id="Islamiate"
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  marginTop: "40px",
                  fontSize: "30px",
                  color: "white",
                }}
              >
                Go
              </p>

              <div
                style={{
                  marginTop: "50px",
                  // marginLeft:"20px",
                  // width:"250px",
                  height: "100px",
                  backgroundColor: "rgb(230, 229, 229)",
                }}
              >
                <p
                  style={{
                    paddingTop: "20px",
                    marginLeft: "10px",
                    fontWeight: "bolder",
                  }}
                >
                  Islamiate
                </p>
                <p
                  style={{
                    paddingTop: "30px",
                    marginLeft: "10px",
                  }}
                >
                  {" "}
                  {prevGrade}
                </p>
              </div>
            </div>

            <div
              // id="Urdu"
              style={{
                marginTop: "120px",
                marginLeft: "20px",
                width: "250px",
                height: "130px",
                backgroundColor: "#7634a1",
              }}
            >
              <p
                id="Urdu"
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  marginTop: "40px",
                  fontSize: "30px",
                  color: "white",
                }}
              >
                Go
              </p>

              <div
                style={{
                  marginTop: "50px",
                  // marginLeft:"20px",
                  // width:"250px",
                  height: "100px",
                  backgroundColor: "rgb(230, 229, 229)",
                }}
              >
                <p
                  style={{
                    paddingTop: "20px",
                    marginLeft: "10px",
                    fontWeight: "bolder",
                  }}
                >
                  Urdu
                </p>
                <p
                  style={{
                    paddingTop: "30px",
                    marginLeft: "10px",
                  }}
                >
                  {" "}
                  {prevGrade}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginRight: "0px",
            paddingTop: "50px",
            paddingBottom: "20px",
            backgroundColor: "white",
          }}
        ></div>
      </React.Fragment>
    </div>
  );
};

export default VideoSubject1;

// export let WorksheetType;

// export let prevSubject;
// const NotesSubject1 = () => {
//   const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");

//   const [code, setCode] = useState(false);
//   const history = useHistory();
//   const [subSubject, setSubSubject] = useState("no-val");
//   const [subGrade, setSubGrade] = useState("no-val");

//   const getSubject = (e) => {
//     console.log(e.target.id);
//     prevSubject = e.target.id;
//     console.log(prevSubject);
//     // setSubSubject(e.target.id);
//     history.push("/NotesContent");
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
//             paddingTop: "30px",
//             paddingBottom: "20px",
//             backgroundColor: "white",
//           }}
//         ></div>
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
//             appear.
//             <br></br>
//             You can download them to have them offline.
//             <br></br>
//             <br></br>
//             <span style={{ fontWeight: "bold", color: "#E5640F" }}>
//               Pick your Subject to get started!
//             </span>
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
//             Want To Study Notes of...
//           </p>
//         </div>
//         {/* <div
//           style={{
//             marginRight: "0px",
//             paddingTop: "20px",
//             paddingBottom: "20px",
//             backgroundColor: "white",
//           }}
//         >
//           {" "}
//         </div> */}

//         <div
//           style={{
//             marginTop: "-150px",
//             marginLeft: "210px",
//             marginRight: "170px",
//             backgroundColor: "white",
//             paddingBottom: "150px",
//           }}
//         >
//           <p
//             style={{
//               marginLeft: "20px",
//               fontWeight: "bolder",
//               fontSize: "34px",
//               fontStyle: "times new roman",
//             }}
//           >
//             Subjects...!
//           </p>
//           <div style={{ display: "flex" }} onClick={getSubject}>
//             <div
//               // id="English"
//               style={{
//                 marginTop: "50px",
//                 marginLeft: "20px",
//                 width: "250px",
//                 height: "130px",

//                 backgroundColor: "#5d4192",
//               }}
//             >
//               <p
//                 id="English"
//                 style={{
//                   textAlign: "center",
//                   fontWeight: "bolder",
//                   marginTop: "40px",
//                   fontSize: "30px",
//                   color: "white",
//                 }}
//               >
//                 Go
//               </p>

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
//                   {prevGrade}
//                 </p>
//               </div>
//             </div>

//             <div
//               // id="Computer"
//               style={{
//                 marginTop: "50px",
//                 marginLeft: "20px",
//                 width: "250px",
//                 height: "130px",
//                 backgroundColor: "#7634a1",
//                 // "#E5640F"
//               }}
//             >
//               <p
//                 id="Computer"
//                 style={{
//                   textAlign: "center",
//                   fontWeight: "bolder",
//                   marginTop: "40px",
//                   fontSize: "30px",
//                   color: "white",
//                 }}
//               >
//                 Go
//               </p>

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
//                   {prevGrade}
//                 </p>
//               </div>
//             </div>

//             <div
//               // id="Mathematics"
//               style={{
//                 marginTop: "50px",
//                 marginLeft: "20px",
//                 width: "250px",
//                 height: "130px",
//                 backgroundColor: "#5d4192",
//               }}
//             >
//               <p
//                 id="Mathematics"
//                 style={{
//                   textAlign: "center",
//                   fontWeight: "bolder",
//                   marginTop: "40px",
//                   fontSize: "30px",
//                   color: "white",
//                 }}
//               >
//                 Go
//               </p>

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
//                   {prevGrade}
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div style={{ display: "flex" }} onClick={getSubject}>
//             <div
//               // id="Science"
//               style={{
//                 marginTop: "120px",
//                 marginLeft: "20px",
//                 width: "250px",
//                 height: "130px",
//                 backgroundColor: "#7634a1",
//               }}
//             >
//               <p
//                 id="Science"
//                 style={{
//                   textAlign: "center",
//                   fontWeight: "bolder",
//                   marginTop: "40px",
//                   fontSize: "30px",
//                   color: "white",
//                 }}
//               >
//                 Go
//               </p>

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
//                   {prevGrade}
//                 </p>
//               </div>
//             </div>

//             <div
//               // id="Islamiate"
//               style={{
//                 marginTop: "120px",
//                 marginLeft: "20px",
//                 width: "250px",
//                 height: "130px",
//                 backgroundColor: "#5d4192",
//               }}
//             >
//               <p
//                 id="Islamiate"
//                 style={{
//                   textAlign: "center",
//                   fontWeight: "bolder",
//                   marginTop: "40px",
//                   fontSize: "30px",
//                   color: "white",
//                 }}
//               >
//                 Go
//               </p>

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
//                   Islamiate
//                 </p>
//                 <p
//                   style={{
//                     paddingTop: "30px",
//                     marginLeft: "10px",
//                   }}
//                 >
//                   {" "}
//                   {prevGrade}
//                 </p>
//               </div>
//             </div>

//             <div
//               // id="Urdu"
//               style={{
//                 marginTop: "120px",
//                 marginLeft: "20px",
//                 width: "250px",
//                 height: "130px",
//                 backgroundColor: "#7634a1",
//               }}
//             >
//               <p
//                 id="Urdu"
//                 style={{
//                   textAlign: "center",
//                   fontWeight: "bolder",
//                   marginTop: "40px",
//                   fontSize: "30px",
//                   color: "white",
//                 }}
//               >
//                 Go
//               </p>

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
//                   {prevGrade}
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
//     </div>
//   );
// };

// export default NotesSubject1;

// export let WorksheetType;

// export let prevSubject;
// const NotesSubject1 = () => {
//   const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");

//   const [code, setCode] = useState(false);
//   const history = useHistory();
//   const [subSubject, setSubSubject] = useState("no-val");
//   const [subGrade, setSubGrade] = useState("no-val");

//   const getSubject = (e) => {
//     prevSubject = e.target.id;
//     console.log(e.target.id, "kldsfkdsjfldsf");
//     // setSubSubject(e.target.id);
//     history.push("/NotesContent");
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
//             appear.
//             <br></br>
//             You can download them to have them offline.
//             <br></br>
//             <br></br>
//             <span style={{ fontWeight: "bold", color: "#E5640F" }}>
//               Pick your Subject to get started!
//             </span>
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
//             Want To Study Notes of...
//           </p>
//         </div>
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

//         <div
//           style={{
//             marginTop: "-150px",
//             marginLeft: "210px",
//             marginRight: "170px",
//             backgroundColor: "white",
//             paddingBottom: "150px",
//           }}
//         >
//           <p
//             style={{
//               marginLeft: "20px",
//               fontWeight: "bolder",
//               fontSize: "34px",
//               fontStyle: "times new roman",
//             }}
//           >
//             Subjects...!
//           </p>
//           <div style={{ display: "flex" }} onClick={getSubject}>
//             <div
//               style={{
//                 marginTop: "50px",
//                 marginLeft: "20px",
//                 width: "250px",
//                 height: "130px",

//                 backgroundColor: "#5d4192",
//               }}
//             >
//               <p
//                 style={{
//                   textAlign: "center",
//                   fontWeight: "bolder",
//                   marginTop: "40px",
//                   fontSize: "30px",
//                   color: "white",
//                 }}
//               >
//                 Go
//               </p>

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
//                   id="English"
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
//                   {prevGrade}
//                 </p>
//               </div>
//             </div>

//             <div
//               style={{
//                 marginTop: "50px",
//                 marginLeft: "20px",
//                 width: "250px",
//                 height: "130px",
//                 backgroundColor: "#7634a1",
//                 // "#E5640F"
//               }}
//             >
//               <p
//                 id="Computer"
//                 style={{
//                   textAlign: "center",
//                   fontWeight: "bolder",
//                   marginTop: "40px",
//                   fontSize: "30px",
//                   color: "white",
//                 }}
//               >
//                 Go
//               </p>

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
//                   {prevGrade}
//                 </p>
//               </div>
//             </div>

//             <div
//               style={{
//                 marginTop: "50px",
//                 marginLeft: "20px",
//                 width: "250px",
//                 height: "130px",
//                 backgroundColor: "#5d4192",
//               }}
//             >
//               <p
//                 id="Mathematics"
//                 style={{
//                   textAlign: "center",
//                   fontWeight: "bolder",
//                   marginTop: "40px",
//                   fontSize: "30px",
//                   color: "white",
//                 }}
//               >
//                 Go
//               </p>

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
//                   {prevGrade}
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div style={{ display: "flex" }} onClick={getSubject}>
//             <div
//               style={{
//                 marginTop: "120px",
//                 marginLeft: "20px",
//                 width: "250px",
//                 height: "130px",
//                 backgroundColor: "#7634a1",
//               }}
//             >
//               <p
//                 id="Science"
//                 style={{
//                   textAlign: "center",
//                   fontWeight: "bolder",
//                   marginTop: "40px",
//                   fontSize: "30px",
//                   color: "white",
//                 }}
//               >
//                 Go
//               </p>

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
//                   {prevGrade}
//                 </p>
//               </div>
//             </div>

//             <div
//               style={{
//                 marginTop: "120px",
//                 marginLeft: "20px",
//                 width: "250px",
//                 height: "130px",
//                 backgroundColor: "#5d4192",
//               }}
//             >
//               <p
//                 id="Islamiate"
//                 style={{
//                   textAlign: "center",
//                   fontWeight: "bolder",
//                   marginTop: "40px",
//                   fontSize: "30px",
//                   color: "white",
//                 }}
//               >
//                 Go
//               </p>

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
//                   Islamiate
//                 </p>
//                 <p
//                   style={{
//                     paddingTop: "30px",
//                     marginLeft: "10px",
//                   }}
//                 >
//                   {" "}
//                   {prevGrade}
//                 </p>
//               </div>
//             </div>

//             <div
//               style={{
//                 marginTop: "120px",
//                 marginLeft: "20px",
//                 width: "250px",
//                 height: "130px",
//                 backgroundColor: "#7634a1",
//               }}
//             >
//               <p
//                 id="Urdu"
//                 style={{
//                   textAlign: "center",
//                   fontWeight: "bolder",
//                   marginTop: "40px",
//                   fontSize: "30px",
//                   color: "white",
//                 }}
//               >
//                 Go
//               </p>

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
//                   {prevGrade}
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
//     </div>
//   );
// };

// export default NotesSubject1;

// export let WorksheetType;
// export let prevGrade;
// export let prevSubject;
// const NotesSubject1 = () => {
//   const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");

//   const [code, setCode] = useState(false);
//   const history = useHistory();
//   const [subSubject, setSubSubject] = useState("no-val");
//   const [subGrade, setSubGrade] = useState("no-val");

//   const getGrade = (e) => {
//     console.log(e.target.innerText);
//     prevGrade = e.target.innerText;
//     console.log(prevGrade);
//     setSubGrade(e.target.innerText);
//   };

//   const getSubject = (e) => {
//     prevSubject = e.target.id;
//     setSubSubject(e.target.id);
//     history.push("/NotesContent");
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
//             appear.
//             <br></br>
//             You can download them to have them offline.
//             <br></br>
//             <br></br>
//             <span style={{ fontWeight: "bold", color: "#E5640F" }}>
//               Pick your Grade and subject to get started!
//             </span>
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

//           <div style={{ display: "flex" }} onClick={getGrade}>
//             <div className="gradeDiv" id="g1">
//               Grade-1
//             </div>

//             <div className="gradeDiv" id="g2">
//               {" "}
//               Grade-2
//             </div>

//             <div className="gradeDiv" id="g3">
//               {" "}
//               Grade-3
//             </div>

//             <div className="gradeDiv" id="g4">
//               {" "}
//               Grade-4
//             </div>

//             <div className="gradeDiv" id="g5">
//               {" "}
//               Grade-5
//             </div>
//           </div>
//         </div>
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

//         <div
//           style={{
//             marginTop: "-150px",
//             marginLeft: "210px",
//             marginRight: "170px",
//             backgroundColor: "white",
//             paddingBottom: "150px",
//           }}
//         >
//           <p
//             style={{
//               marginLeft: "20px",
//               fontWeight: "bolder",
//               fontSize: "34px",
//               fontStyle: "times new roman",
//             }}
//           >
//             Subjects...!
//           </p>
//           <div style={{ display: "flex" }} onClick={getSubject}>
//             <div
//               id="English"
//               style={{
//                 marginTop: "50px",
//                 marginLeft: "20px",
//                 width: "250px",
//                 height: "130px",

//                 backgroundColor: "#5d4192",
//               }}
//             >
//               <p
//                 style={{
//                   textAlign: "center",
//                   fontWeight: "bolder",
//                   marginTop: "40px",
//                   fontSize: "30px",
//                   color: "white",
//                 }}
//               >
//                 Go
//               </p>

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
//                   {subGrade}
//                 </p>
//               </div>
//             </div>

//             <div
//               id="Computer"
//               style={{
//                 marginTop: "50px",
//                 marginLeft: "20px",
//                 width: "250px",
//                 height: "130px",
//                 backgroundColor: "#7634a1",
//                 // "#E5640F"
//               }}
//             >
//               <p
//                 style={{
//                   textAlign: "center",
//                   fontWeight: "bolder",
//                   marginTop: "40px",
//                   fontSize: "30px",
//                   color: "white",
//                 }}
//               >
//                 Go
//               </p>

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
//                   {subGrade}
//                 </p>
//               </div>
//             </div>

//             <div
//               id="Mathematics"
//               style={{
//                 marginTop: "50px",
//                 marginLeft: "20px",
//                 width: "250px",
//                 height: "130px",
//                 backgroundColor: "#5d4192",
//               }}
//             >
//               <p
//                 style={{
//                   textAlign: "center",
//                   fontWeight: "bolder",
//                   marginTop: "40px",
//                   fontSize: "30px",
//                   color: "white",
//                 }}
//               >
//                 Go
//               </p>

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
//                   {subGrade}
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div id="Science" style={{ display: "flex" }} onClick={getSubject}>
//             <div
//               style={{
//                 marginTop: "120px",
//                 marginLeft: "20px",
//                 width: "250px",
//                 height: "130px",
//                 backgroundColor: "#7634a1",
//               }}
//             >
//               <p
//                 style={{
//                   textAlign: "center",
//                   fontWeight: "bolder",
//                   marginTop: "40px",
//                   fontSize: "30px",
//                   color: "white",
//                 }}
//               >
//                 Go
//               </p>

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
//                   {subGrade}
//                 </p>
//               </div>
//             </div>

//             <div
//               id="Islamiate"
//               style={{
//                 marginTop: "120px",
//                 marginLeft: "20px",
//                 width: "250px",
//                 height: "130px",
//                 backgroundColor: "#5d4192",
//               }}
//             >
//               <p
//                 style={{
//                   textAlign: "center",
//                   fontWeight: "bolder",
//                   marginTop: "40px",
//                   fontSize: "30px",
//                   color: "white",
//                 }}
//               >
//                 Go
//               </p>

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
//                   Islamiate
//                 </p>
//                 <p
//                   style={{
//                     paddingTop: "30px",
//                     marginLeft: "10px",
//                   }}
//                 >
//                   {" "}
//                   {subGrade}
//                 </p>
//               </div>
//             </div>

//             <div
//               id="Urdu"
//               style={{
//                 marginTop: "120px",
//                 marginLeft: "20px",
//                 width: "250px",
//                 height: "130px",
//                 backgroundColor: "#7634a1",
//               }}
//             >
//               <p
//                 style={{
//                   textAlign: "center",
//                   fontWeight: "bolder",
//                   marginTop: "40px",
//                   fontSize: "30px",
//                   color: "white",
//                 }}
//               >
//                 Go
//               </p>

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
//                   {subGrade}
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
//     </div>
//   );
// };

// export default NotesSubject1;

// import React, { useState, useEffect } from "react";
// import "./studentGrade.css";
// import logo from "../../assets/PPS5.jpeg";
// import { useLocalStorage } from "../../LocalStorage/Local";
// import { NavLink, useHistory } from "react-router-dom";
// import image2 from "../../assets/contentPic2.jpeg";
// import image3 from "../../assets/notesss.jpeg";
// import EnterCode from "../../components/UIElements/EnterCode";

// export let WorksheetType;

// const VideoSubject1 = () => {
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
//               Term's Video Lectures
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
//             Simple-to-follow Video Lectures of the selected Grade and Subject.
//             <br></br>
//             After you select Grade and Subject, related Video Lecture will
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
//             <NavLink to="/VideoSubject1">
//               <div
//                 className="gradeDiv"
//                 style={{
//                   color: "white",
//                   backgroundColor: "#E5640F",
//                   border: "4px solid #c54f01",
//                 }}
//               >
//                 GRADE - 1
//               </div>
//             </NavLink>

//             <NavLink to="/VideoSubject2">
//               <div className="gradeDiv"> GRADE - 2</div>
//             </NavLink>

//             <NavLink to="/VideoSubject3">
//               <div className="gradeDiv"> GRADE - 3</div>
//             </NavLink>

//             <NavLink to="/VideoSubject4">
//               <div className="gradeDiv"> GRADE - 4</div>
//             </NavLink>

//             <NavLink to="/VideoSubject5">
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
//               <NavLink to="/VideoContent">
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
//                   Grade 1
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
//                 // "#E5640F"
//               }}
//             >
//               <NavLink to="/VideoContent">
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
//                   Grade 1
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
//               <NavLink to="/VideoContent">
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
//                   Grade 1
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
//               <NavLink to="/VideoContent">
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
//                   Grade 1
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
//               <NavLink to="/VideoContent">
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
//                   Grade 1
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
//               <NavLink to="/VideoContent">
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
//                   Grade 1
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
//                 <NavLink to="/videos" className="nav-links-StudentNotes">
//                   Grades
//                 </NavLink>
//               </li>
//             </div>

//             <div className="nav-links-student">
//               <li>
//                 <NavLink to="/StudentNotes" className="nav-links-student">
//                   Lecture-Notes{" "}
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

// export default VideoSubject1;

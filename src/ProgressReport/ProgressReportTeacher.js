import React, { useEffect, useState } from "react";
import ScorePRforTeacher from "./ScorePRforTeacher";
import TimePRforTeacher from "./TimePRforTeacher";
import { Grade, Subject } from "../DropDown";
import { useLocalStorage } from "../LocalStorage/Local";
import { NavLink } from "react-router-dom";
import logo from "../assets/PPS5.jpeg";

const ProgressReportTeacher = () => {
  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");

  return (
    <div>
      <nav className="NavbarItems-PR">
        <NavLink to="/Teacher">
          <img className=" logo-PR" src={logo} alt="Logo" />
        </NavLink>
        <h1 className="navbar-logo-PR">{USERNAME}</h1>

        <ul className="nav-menu-PR ">
          <div className="nav-links-PR">
            <li>
              <NavLink to="/Teacher" className="nav-links-PR">
                Home
              </NavLink>
            </li>
          </div>

          <div className="nav-links-PR">
            <li>
              <NavLink to="/ListOfProgressReport" className="nav-links-PR">
                Topics
              </NavLink>
            </li>
          </div>
          {/* 
            <div className="nav-links-PR">
              <li>
                <NavLink to="/StudentNotes" className="nav-links-PR">
                  Notes
                </NavLink>
              </li>
            </div>
  
  
            <div className="nav-links-PR">
              <li>
                <NavLink to="/Student/SpellBee" className="nav-links-PR">
                  Spell Bee
                </NavLink>
              </li>
            </div>
           */}
        </ul>

        <NavLink to="/#">
          {" "}
          <button className="button-PR">Log out</button>
        </NavLink>
      </nav>

      <div
        style={{
          paddingTop: "10px",
          paddingBottom: "10px",
          marginBottom: "10px",
          width: "100%",
          backgroundColor: "rgb(250, 113, 50)",
          textAlign: "center",
          marginTop: "40px",
          fontSize: "64px",
          fontWeight: "bolder",
          fontFamily: "serif",
          fontStyle: "oblique",
          color: "white",
          opacity: "0.7",
        }}
      >
        {Grade}
      </div>

      <div
        style={{
          paddingTop: "10px",
          paddingBottom: "10px",
          marginBottom: "20px",
          width: "100%",
          backgroundColor: "crimson",
          textAlign: "center",
          marginTop: "20px",
          fontSize: "58px",
          fontWeight: "bolder",
          fontFamily: "serif",
          fontStyle: "oblique",
          color: "white",
          opacity: "0.6",
        }}
      >
        {Subject}
      </div>

      {/*  */}

      {/* <div style={{display:"flex"  }}> */}

      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "red",
            width: "48px",
            height: "20px",
            marginLeft: "410px",
            marginTop: "70px",
          }}
        ></div>

        <div
          style={{
            color: "black",
            fontWeight: "bolder",
            fontSize: "16px",
            marginLeft: "15px",
            marginTop: "73px",
          }}
        >
          Scores: 0
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "yellow",
            width: "48px",
            height: "20px",
            marginLeft: "410px",
            marginTop: "15px",
          }}
        ></div>

        <div
          style={{
            color: "black",
            fontWeight: "bolder",
            fontSize: "16px",
            marginLeft: "15px",
            marginTop: "19px",
          }}
        >
          Scores greater than 0
        </div>
      </div>

      {/* // </div> */}

      {/* <div style={{display:"flex" }}>  
  <div style={{border:"2px solid blue",paddingRight:"10px",paddingLeft:"10px", paddingTop:"10px",
    paddingBottom:"10px",   marginLeft:"180px", marginTop:"10px"  }}>
  
      <div style={{color:"black", fontWeight:"bolder", "fontStyle":"oblique", 
         marginTop:"10px",paddingRight:"0px" }} > Scale:
      </div>
  
      <div style={{color:"black", fontWeight:"bolder",   
       marginTop:"10px"}} >On x-axis: Student's Names
      </div>
  
      <div style={{color:"black", fontWeight:"bolder",   
       marginTop:"10px" }} > On y-axis: Scores
      </div>
   
  </div> */}

      {/* <div style={{border:"2px solid blue",paddingRight:"10px",paddingLeft:"10px", paddingTop:"10px",
  marginTop:"10px", paddingBottom:"10px",   marginLeft:"440px",   }}>
  
      <div style={{color:"black", fontWeight:"bolder", "fontStyle":"oblique", 
         marginTop:"10px",paddingRight:"0px" }} > Scale:
      </div>
  
      <div style={{color:"black", fontWeight:"bolder",   
       marginTop:"10px"}} >On x-axis: Student's Names
      </div>
  
      <div style={{color:"black", fontWeight:"bolder",   
       marginTop:"10px" }} > On y-axis: Time in seconds
      </div>
  
      
  
  </div>   */}

      {/* </div>   */}

      {/* <div style={{ display: "flex",}}> */}
      <div
        style={{
          marginLeft: "340px",
          width: "40rem",
          height: "40rem",
          marginTop: "70px",
        }}
      >
        <ScorePRforTeacher />
      </div>

      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "red",
            width: "48px",
            height: "20px",
            marginLeft: "540px",
            marginTop: "-70px",
          }}
        ></div>

        <div
          style={{
            color: "black",
            fontWeight: "bolder",
            fontSize: "16px",
            marginLeft: "15px",
            marginTop: "-70px",
          }}
        >
          Time: More than 10 min
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "blue",
            width: "48px",
            height: "20px",
            marginLeft: "540px",
            marginTop: "-37px",
          }}
        ></div>

        <div
          style={{
            color: "black",
            fontWeight: "bolder",
            fontSize: "16px",
            marginLeft: "17px",
            marginTop: "-37px",
            marginBottom: "70px",
          }}
        >
          Time Less than 10 min
        </div>
      </div>

      <div
        style={
          {
            // display: "flex",
          }
        }
      >
        <div
          style={{
            width: "40rem",
            height: "40rem",
            marginLeft: "300px",
            // textAlign:"center",
            marginTop: "-1px",
          }}
        >
          <TimePRforTeacher />
        </div>
      </div>

      {/* <div style={{
            // display: "flex", 
          }}>
        <div
          style={{
            width: "40rem",
            height: "40rem",
            marginLeft: "300px",
            // textAlign:"center",
            marginTop: "-200px",
          }}
        >   
  
          <TimePRforTeacher />
        </div>
  </div> */}

      {/* <div style={{display:"flex", marginTop: "-100px",}}> */}
      {/* <div> Student's Names</div> */}
      {/* <div> Student's Names</div> */}

      {/* </div> */}

      {/* // </div> */}
      {/* <Bar data={data} options={options} />
          <CsvFile data={csvData} /> */}
    </div>
  );
};

export default ProgressReportTeacher;

// const ProgressReportTeacher = () => {
//   const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
//   return (
//     <div>
//       <nav className="NavbarItems-PR">
//         <NavLink to="/Teacher">
//           <img className=" logo-PR" src={logo} alt="Logo" />
//         </NavLink>
//         <h1 className="navbar-logo-PR">{USERNAME}</h1>

//         <ul className="nav-menu-PR ">
//           <div className="nav-links-PR">
//             <li>
//               <NavLink to="/Teacher" className="nav-links-PR">
//                 Home
//               </NavLink>
//             </li>
//           </div>

//           <div className="nav-links-PR">
//             <li>
//               <NavLink to="/ListOfProgressReport" className="nav-links-PR">
//                 Topics
//               </NavLink>
//             </li>
//           </div>
//           {/*
//           <div className="nav-links-PR">
//             <li>
//               <NavLink to="/StudentNotes" className="nav-links-PR">
//                 Notes
//               </NavLink>
//             </li>
//           </div>

//           <div className="nav-links-PR">
//             <li>
//               <NavLink to="/Student/SpellBee" className="nav-links-PR">
//                 Spell Bee
//               </NavLink>
//             </li>
//           </div>
//          */}
//         </ul>

//         <NavLink to="/#">
//           {" "}
//           <button className="button-PR">Log out</button>
//         </NavLink>
//       </nav>

//       <div
//         style={{
//           paddingTop: "10px",
//           paddingBottom: "10px",
//           marginBottom: "10px",
//           width: "100%",
//           backgroundColor: "rgb(250, 113, 50)",
//           textAlign: "center",
//           marginTop: "40px",
//           fontSize: "64px",
//           fontWeight: "bolder",
//           fontFamily: "serif",
//           fontStyle: "oblique",
//           color: "white",
//           opacity: "0.7",
//         }}
//       >
//         {Grade}
//       </div>

//       <div
//         style={{
//           paddingTop: "10px",
//           paddingBottom: "10px",
//           marginBottom: "20px",
//           width: "100%",
//           backgroundColor: "crimson",
//           textAlign: "center",
//           marginTop: "20px",
//           fontSize: "58px",
//           fontWeight: "bolder",
//           fontFamily: "serif",
//           fontStyle: "oblique",
//           color: "white",
//           opacity: "0.6",
//         }}
//       >
//         {Subject}
//       </div>

//       {/*  */}
//       <div style={{ display: "flex" }}>
//         <div
//           style={{
//             backgroundColor: "red",
//             width: "48px",
//             height: "20px",
//             marginLeft: "540px",
//             marginTop: "70px",
//           }}
//         ></div>

//         <div
//           style={{
//             color: "black",
//             fontWeight: "bolder",
//             fontSize: "16px",
//             marginLeft: "15px",
//             marginTop: "73px",
//           }}
//         >
//           Scores: 0
//         </div>
//       </div>

//       <div style={{ display: "flex" }}>
//         <div
//           style={{
//             backgroundColor: "yellow",
//             width: "48px",
//             height: "20px",
//             marginLeft: "540px",
//             marginTop: "15px",
//           }}
//         ></div>

//         <div
//           style={{
//             color: "black",
//             fontWeight: "bolder",
//             fontSize: "16px",
//             marginLeft: "15px",
//             marginTop: "19px",
//           }}
//         >
//           Scores greater than 0
//         </div>
//       </div>

//       {/* <div style={{display:"flex" }}>
// <div style={{border:"2px solid blue",paddingRight:"10px",paddingLeft:"10px", paddingTop:"10px",
//   paddingBottom:"10px",   marginLeft:"180px", marginTop:"10px"  }}>

//     <div style={{color:"black", fontWeight:"bolder", "fontStyle":"oblique",
//        marginTop:"10px",paddingRight:"0px" }} > Scale:
//     </div>

//     <div style={{color:"black", fontWeight:"bolder",
//      marginTop:"10px"}} >On x-axis: Student's Names
//     </div>

//     <div style={{color:"black", fontWeight:"bolder",
//      marginTop:"10px" }} > On y-axis: Scores
//     </div>

// </div> */}

//       {/* <div style={{border:"2px solid blue",paddingRight:"10px",paddingLeft:"10px", paddingTop:"10px",
// marginTop:"10px", paddingBottom:"10px",   marginLeft:"440px",   }}>

//     <div style={{color:"black", fontWeight:"bolder", "fontStyle":"oblique",
//        marginTop:"10px",paddingRight:"0px" }} > Scale:
//     </div>

//     <div style={{color:"black", fontWeight:"bolder",
//      marginTop:"10px"}} >On x-axis: Student's Names
//     </div>

//     <div style={{color:"black", fontWeight:"bolder",
//      marginTop:"10px" }} > On y-axis: Time in seconds
//     </div>

// </div>   */}

//       {/* </div>   */}

//       {/* <div style={{ display: "flex",}}> */}
//       <div
//         style={{
//           marginLeft: "340px",
//           width: "40rem",
//           height: "40rem",
//           marginTop: "70px",
//         }}
//       >
//         <ScorePRforTeacher />
//       </div>

//       <div style={{ display: "flex" }}>
//         <div
//           style={{
//             backgroundColor: "red",
//             width: "48px",
//             height: "20px",
//             marginLeft: "540px",
//             marginTop: "-180px",
//           }}
//         ></div>

//         <div
//           style={{
//             color: "black",
//             fontWeight: "bolder",
//             fontSize: "16px",
//             marginLeft: "15px",
//             marginTop: "-180px",
//           }}
//         >
//           Time: More than 10 min
//         </div>
//       </div>

//       <div style={{ display: "flex" }}>
//         <div
//           style={{
//             backgroundColor: "blue",
//             width: "48px",
//             height: "20px",
//             marginLeft: "540px",
//             marginTop: "-140px",
//           }}
//         ></div>

//         <div
//           style={{
//             color: "black",
//             fontWeight: "bolder",
//             fontSize: "16px",
//             marginLeft: "17px",
//             marginTop: "-140px",
//           }}
//         >
//           Time Less than 10 min
//         </div>
//       </div>

//       <div
//         style={
//           {
//             // display: "flex",
//           }
//         }
//       >
//         <div
//           style={{
//             width: "40rem",
//             height: "40rem",
//             marginLeft: "300px",
//             // textAlign:"center",
//             marginTop: "-80px",
//           }}
//         >
//           <TimePRforTeacher />
//         </div>
//       </div>

//       {/* <div style={{
//           // display: "flex",
//         }}>
//       <div
//         style={{
//           width: "40rem",
//           height: "40rem",
//           marginLeft: "300px",
//           // textAlign:"center",
//           marginTop: "-200px",
//         }}
//       >

//         <TimePRforTeacher />
//       </div>
// </div> */}

//       {/* <div style={{display:"flex", marginTop: "-100px",}}> */}
//       {/* <div> Student's Names</div> */}
//       {/* <div> Student's Names</div> */}

//       {/* </div> */}

//       {/* // </div> */}
//       {/* <Bar data={data} options={options} />
//         <CsvFile data={csvData} /> */}
//     </div>
//   );
// };

// export default ProgressReportTeacher;

// import React, { useEffect, useState } from "react";
// import ScorePRforTeacher from "./ScorePRforTeacher";
// import TimePRforTeacher from "./TimePRforTeacher";
// import { Grade, Subject } from "../users/teacher/DropDown";

// const ProgressReportTeacher = () => {
//   return (
//     <div>
//       {Grade}
//       {Subject}
//       <div style={{ width: "40rem", height: "40rem", marginTop: "80px" }}>
//         <ScorePRforTeacher />
//       </div>
//       <div
//         style={{
//           width: "40rem",
//           height: "40rem",
//           marginLeft: "700px",
//           marginTop: "-600px",
//         }}
//       >
//         <TimePRforTeacher />
//       </div>

//       {/* <Bar data={data} options={options} />
//         <CsvFile data={csvData} /> */}
//     </div>
//   );
// };

// export default ProgressReportTeacher;

import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import logo from "../../assets/PPS5.jpeg";
// import { USERNAME } from "../../Auth";

import { useLocalStorage } from "../../LocalStorage/Local";
import { GRADE, SUBJECT } from "./SelectSubject";
import OverallScorePR from "./OverallScorePR";
import OverallTimePR from "./OverallTimePR";

const PercentilePR = () => {
  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
  return (
    <div>
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

          <div className="nav-links-practiceWS">
            <li>
              <NavLink to="/SelectSubject" className="nav-links-practiceWS">
                Grades/Subjects
              </NavLink>
            </li>
          </div>

          {/* <div className="nav-links-practiceWS">
            <li>
              <NavLink to="/" className="nav-links-practiceWS">
                OVERALL Progress
              </NavLink>
            </li>
          </div> */}
        </ul>

        <NavLink to="/#">
          {" "}
          <button className="button-practiceWS">Log out</button>
        </NavLink>
      </nav>

      {/* <div
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
        {GRADE}
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
        {SUBJECT}
      </div> */}

      <div
        style={{
          backgroundColor: "rgb(245, 87, 13)",
          position: "absolute",
          top: "45px",
          left: " 450px",
          marginTop: "80px",
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
          {GRADE}
        </p>

        <p
          style={{
            fontSize: "58px",
            marginTop: "0px",
            fontFamily: "Brush Script MT, Brush Script Std, cursive",
            fontStyle: "oblique",
            color: "black",
          }}
        >
          {" "}
          {SUBJECT}{" "}
        </p>
      </div>

      <div
        style={{
          marginTop: "150px",
          paddingTop: "10px",
          paddingBottom: "40px",
          background: "linear-gradient(to bottom right, #ff4382, #ffce00)",
          height: "100%",
        }}
      >
        <React.Fragment>
          {/* <div
        style={{
          marginTop: "70px",
          paddingTop: "30px",
          marginLeft: "210px",
          marginRight: "170px",
          backgroundColor: "white",
        }}
      > */}
          <div>
            <p
              style={{
                // textDecoration: "underline",
                textAlign: "center",
                paddingTop: "100px",
                marginLeft: "80px",
                // marginBottom: "20px",
                fontWeight: "bolder",
                fontSize: "46px",
                fontStyle: "times new roman",
              }}
            >
              {" "}
              Term's Overall Progress Reports
            </p>
          </div>

          <p
            style={{
              // textDecoration: "underline",
              textAlign: "center",
              paddingTop: "20px",
              marginLeft: "80px",
              marginBottom: "20px",
              paddingBottom: " 50px",
              // fontWeight:"bolder",
              fontSize: "25px",
              fontStyle: "times new roman",
            }}
          >
            To track the progress of students, we provide Simple-to-follow
            progress
            <br></br>
            reports for students of Grade 1-5. Keep track of your progress
            through
            <br></br>
            these visually appealing reports, showing overall scores and{" "}
            <br></br> time taken along with percentile.
          </p>

          {/* </div> */}
        </React.Fragment>
      </div>

      {/* <div style={{display:"flex"  }} >
    <div style={{ backgroundColor:"red", width:"48px", height:"20px", 
      marginLeft:"150px", marginTop:"70px", }} > */}
      {/* </div>

    <div style={{color:"black", fontWeight:"bolder", fontSize:"16px", 
      marginLeft:"15px", marginTop:"73px" }} >
      Scores: 0
    </div>

    

    <div style={{ backgroundColor:"red", width:"48px", height:"20px", 
      marginLeft:"540px", marginTop:"70px", }} >
    </div>

    <div style={{color:"black", fontWeight:"bolder", fontSize:"16px", 
      marginLeft:"15px", marginTop:"73px" }} >
      Time: More than 10 min
    </div>


</div>

<div style={{display:"flex"  }} >
    <div style={{ backgroundColor:"yellow", width:"48px", height:"20px", 
      marginLeft:"150px", marginTop:"15px", }} >
    </div>

    <div style={{color:"black", fontWeight:"bolder", fontSize:"16px", 
      marginLeft:"15px", marginTop:"19px" }} >
      Scores greater than 0
    </div>

    

    <div style={{ backgroundColor:"yellow", width:"48px", height:"20px", 
      marginLeft:"450px", marginTop:"15px", }} >
    </div>

    <div style={{color:"black", fontWeight:"bolder", fontSize:"16px", 
      marginLeft:"10px", marginTop:"19px" }} >
      Time: Less than 10 min
    </div>


</div> */}

      {/* <div style={{display:"flex" }}>  
<div style={{border:"2px solid blue",paddingRight:"10px",paddingLeft:"10px", paddingTop:"10px",
marginTop:"10px", paddingBottom:"10px",   marginLeft:"150px"  }}>

    <div style={{color:"black", fontWeight:"bolder", "fontStyle":"oblique", 
       marginTop:"10px",paddingRight:"0px" }} > Scale:
    </div>

    <div style={{color:"black", fontWeight:"bolder",   
     marginTop:"10px"}} >On x-axis: Worksheet's Names
    </div>

    <div style={{color:"black", fontWeight:"bolder",   
     marginTop:"10px" }} > On y-axis: Scores Percentile
    </div>
 
</div> */}

      {/* <div style={{border:"2px solid blue",paddingRight:"10px",paddingLeft:"10px", paddingTop:"10px",
marginTop:"10px", paddingBottom:"10px",   marginLeft:"420px",   }}>

    <div style={{color:"black", fontWeight:"bolder", "fontStyle":"oblique", 
       marginTop:"10px",paddingRight:"0px" }} > Scale:
    </div>

    <div style={{color:"black", fontWeight:"bolder",   
     marginTop:"10px"}} >On x-axis: Worksheet's Names
    </div>

    <div style={{color:"black", fontWeight:"bolder",   
     marginTop:"10px" }} > On y-axis: Time Percentile
    </div>

    

</div>   */}

      {/* </div>   */}

      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "red",
            width: "48px",
            height: "20px",
            marginLeft: "540px",
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
          Scores Percentile: 0
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "yellow",
            width: "48px",
            height: "20px",
            marginLeft: "540px",
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
          Score Percentile greater than 0
        </div>
      </div>

      <div
        style={{
          marginLeft: "340px",
          width: "40rem",
          height: "40rem",
          marginTop: "70px",
        }}
      >
        <OverallScorePR />
      </div>

      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "red",
            width: "48px",
            height: "20px",
            marginLeft: "540px",
            marginTop: "-180px",
          }}
        ></div>

        <div
          style={{
            color: "black",
            fontWeight: "bolder",
            fontSize: "16px",
            marginLeft: "15px",
            marginTop: "-180px",
          }}
        >
          Time Percentile: 0
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "yellow",
            width: "48px",
            height: "20px",
            marginLeft: "540px",
            marginTop: "-140px",
          }}
        ></div>

        <div
          style={{
            color: "black",
            fontWeight: "bolder",
            fontSize: "16px",
            marginLeft: "17px",
            marginTop: "-140px",
          }}
        >
          Time Percentile: More than 0
        </div>
      </div>

      <div
        style={{
          width: "40rem",
          height: "40rem",
          marginLeft: "300px",
          // textAlign:"center",
          marginTop: "-80px",
        }}
      >
        <OverallTimePR />
      </div>
    </div>
  );
};

export default PercentilePR;

// const PercentilePR = () => {
//   const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
//   return (
//     <div>
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

//           <div className="nav-links-practiceWS">
//             <li>
//               <NavLink to="/SelectSubject" className="nav-links-practiceWS">
//                 Grades/Subjects
//               </NavLink>
//             </li>
//           </div>

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

//       {/* <div
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
//         {GRADE}
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
//         {SUBJECT}
//       </div> */}

//  <div
//             style={{
//               backgroundColor: "rgb(245, 87, 13)",
//               position: "absolute",
//               top: "45px",
//               left: " 450px",
//               marginTop: "80px",
//               textAlign: "center",
//               color: "white",
//               opacity: "0.8",
//             }}
//           >
//             <p
//               style={{
//                 paddingLeft: "110px",
//                 paddingRight: "110px",
//                 paddingBottom: "10px",
//                 paddingTop: "20px",
//                 fontSize: "64px",
//                 fontWeight: "bolder",
//                 fontFamily: "serif",
//                 fontStyle: "oblique",
//               }}
//             >
//               {GRADE}
//             </p>

//             <p
//               style={{
//                 fontSize: "58px",
//                 marginTop: "0px",
//                 fontFamily: "Brush Script MT, Brush Script Std, cursive",
//                 fontStyle: "oblique",color:"black",
//               }}
//             >
//               {" "}
//               {SUBJECT}{" "}
//             </p>
//           </div>

//           <div
//         style={{
//           marginTop: "150px",
//           paddingTop: "10px",
//           paddingBottom: "40px",
//           background: "linear-gradient(to bottom right, #ff4382, #ffce00)",
//           height: "100%",
//         }}
//       >
//           <React.Fragment>
//       {/* <div
//         style={{
//           marginTop: "70px",
//           paddingTop: "30px",
//           marginLeft: "210px",
//           marginRight: "170px",
//           backgroundColor: "white",
//         }}
//       > */}
//         <div>

//           <p
//             style={{
//               // textDecoration: "underline",
//               textAlign:"center",
//               paddingTop: "100px",
//               marginLeft: "80px",
//               // marginBottom: "20px",
//               fontWeight:"bolder",
//               fontSize:"46px",
//               fontStyle:"times new roman"
//             }}
//           >
//             {" "}
//              Term's Overall Progress Reports
//           </p>

//         </div>

//         <p style={{
//               // textDecoration: "underline",
//               textAlign:"center",
//               paddingTop: "20px",
//               marginLeft: "80px",
//               marginBottom: "20px",
//               paddingBottom: " 50px",
//               // fontWeight:"bolder",
//               fontSize:"25px",
//               fontStyle:"times new roman"
//             }}>
//        To track the progress of students, we provide Simple-to-follow progress
//        <br></br>
//         reports for students of Grade 1-5. Keep track of your progress through
//         <br></br>
//        these visually appealing reports, showing overall scores and <br></br> time
//         taken

//        along with percentile.
//         </p>

//       {/* </div> */}

//     </React.Fragment>

//     </div>

//       {/* <div style={{display:"flex"  }} >
//     <div style={{ backgroundColor:"red", width:"48px", height:"20px",
//       marginLeft:"150px", marginTop:"70px", }} > */}
//     {/* </div>

//     <div style={{color:"black", fontWeight:"bolder", fontSize:"16px",
//       marginLeft:"15px", marginTop:"73px" }} >
//       Scores: 0
//     </div>

//     <div style={{ backgroundColor:"red", width:"48px", height:"20px",
//       marginLeft:"540px", marginTop:"70px", }} >
//     </div>

//     <div style={{color:"black", fontWeight:"bolder", fontSize:"16px",
//       marginLeft:"15px", marginTop:"73px" }} >
//       Time: More than 10 min
//     </div>

// </div>

// <div style={{display:"flex"  }} >
//     <div style={{ backgroundColor:"yellow", width:"48px", height:"20px",
//       marginLeft:"150px", marginTop:"15px", }} >
//     </div>

//     <div style={{color:"black", fontWeight:"bolder", fontSize:"16px",
//       marginLeft:"15px", marginTop:"19px" }} >
//       Scores greater than 0
//     </div>

//     <div style={{ backgroundColor:"yellow", width:"48px", height:"20px",
//       marginLeft:"450px", marginTop:"15px", }} >
//     </div>

//     <div style={{color:"black", fontWeight:"bolder", fontSize:"16px",
//       marginLeft:"10px", marginTop:"19px" }} >
//       Time: Less than 10 min
//     </div>

// </div> */}

//   {/* <div style={{display:"flex" }}>
// <div style={{border:"2px solid blue",paddingRight:"10px",paddingLeft:"10px", paddingTop:"10px",
// marginTop:"10px", paddingBottom:"10px",   marginLeft:"150px"  }}>

//     <div style={{color:"black", fontWeight:"bolder", "fontStyle":"oblique",
//        marginTop:"10px",paddingRight:"0px" }} > Scale:
//     </div>

//     <div style={{color:"black", fontWeight:"bolder",
//      marginTop:"10px"}} >On x-axis: Worksheet's Names
//     </div>

//     <div style={{color:"black", fontWeight:"bolder",
//      marginTop:"10px" }} > On y-axis: Scores Percentile
//     </div>

// </div> */}

// {/* <div style={{border:"2px solid blue",paddingRight:"10px",paddingLeft:"10px", paddingTop:"10px",
// marginTop:"10px", paddingBottom:"10px",   marginLeft:"420px",   }}>

//     <div style={{color:"black", fontWeight:"bolder", "fontStyle":"oblique",
//        marginTop:"10px",paddingRight:"0px" }} > Scale:
//     </div>

//     <div style={{color:"black", fontWeight:"bolder",
//      marginTop:"10px"}} >On x-axis: Worksheet's Names
//     </div>

//     <div style={{color:"black", fontWeight:"bolder",
//      marginTop:"10px" }} > On y-axis: Time Percentile
//     </div>

// </div>   */}

//   {/* </div>   */}

//   <div style={{display:"flex"  }} >
//     <div style={{ backgroundColor:"red", width:"48px", height:"20px",
//       marginLeft:"540px", marginTop:"70px", }} >
//     </div>

//     <div style={{color:"black", fontWeight:"bolder", fontSize:"16px",
//       marginLeft:"15px", marginTop:"73px" }} >
//       Scores:  0
//     </div>

//   </div>

// <div style={{display:"flex"  }} >
//     <div style={{ backgroundColor:"yellow", width:"48px", height:"20px",
//       marginLeft:"540px", marginTop:"15px", }} >
//     </div>

//     <div style={{color:"black", fontWeight:"bolder", fontSize:"16px",
//       marginLeft:"15px", marginTop:"19px" }} >
//       Scores greater than 0
//     </div>

//   </div>

//       <div
//         style={{marginLeft:"340px", width: "40rem", height: "40rem",
//        marginTop: "70px" }}
//       >
//         <OverallScorePR />
//       </div>

//       <div style={{display:"flex"  }} >

// <div style={{ backgroundColor:"red", width:"48px", height:"20px",
//   marginLeft:"540px", marginTop:"-180px", }} >
// </div>

// <div style={{color:"black", fontWeight:"bolder", fontSize:"16px",
//   marginLeft:"15px", marginTop:"-180px" }} >
//   Time: More than 10 min
// </div>

// </div>

// <div style={{display:"flex"  }} >

// <div style={{ backgroundColor:"yellow", width:"48px", height:"20px",
//   marginLeft:"540px", marginTop:"-140px", }} >
// </div>

// <div style={{color:"black", fontWeight:"bolder", fontSize:"16px",
//   marginLeft:"17px", marginTop:"-140px" }} >
//   Time Less than 10 min
// </div>

// </div>

//       <div
//         style={{
//           width: "40rem",
//           height: "40rem",
//           marginLeft: "300px",
//           // textAlign:"center",
//           marginTop: "-80px",
//         }}
//       >
//         <OverallTimePR />
//       </div>
//     </div>
//   );
// };

// export default PercentilePR;

import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// import { Grade, Subject } from "../../DropDown";
// import { USERNAME } from "../../Auth";
import { WorksheetType } from "../../users/student/Student";
import { GRADE, SUBJECT } from "../../users/student/PracticeWS";
import { useHistory } from "react-router";
import logo from "../../assets/PPS5.jpeg";
import { useLocalStorage } from "../../LocalStorage/Local";
// import { USERNAME } from "../../Auth";
import image2 from "../../assets/contentPic2.jpeg";
import image3 from "../../assets/contentPic3.jpeg";
import { NavLink } from "react-router-dom";
import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined";

export let TITLEP;

const useStyles = makeStyles({
  root: {
    // minWidth: 275,
    width: "100",
    // height: "210px",
    //width: 200,
    background: "orange",
    boxShadow: "10px 10px 5px #aaaaaa",
    margin: "20px",
    marginTop: "9rem",
    overflowY: "auto",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    //transform: "scale(1.8)",
  },
});

const PracticeWSTitles = () => {
  const [titles, setTitles] = useState([]);
  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");

  useEffect(() => {
    getTitle();
  }, []);

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const history = useHistory();

  const getTitle = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/gettingTitle?type=${WorksheetType}&grade=${GRADE}&subject=${SUBJECT}`
      );
      let responseData = await response.json();
      console.log(responseData.title);
      setTitles(responseData.title);
    } catch (err) {
      console.log(err);
    }
  };

  const getTopic = (e) => {
    console.log(e.target.innerText);
    TITLEP = e.target.innerText;
    history.push("/ShowWorksheets");
  };

  return (
    <React.Fragment>
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
              <NavLink to="/PracticeWS" className="nav-links-practiceWS">
                Grades
              </NavLink>
            </li>
          </div>
        </ul>

        <NavLink to="/#">
          {" "}
          <button className="button-practiceWS">Log out</button>
        </NavLink>
      </nav>

      <Card variant="outlined">
        <div
          style={{
            marginTop: "150px",
            paddingBottom: "100px",
            background: "linear-gradient(to bottom right, #ff4382, #ffce00)",
            height: "100%",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5">
              {/* <img
            style={{
              marginTop: "5px",
              width: "100%",
              height: "350px", 
            }} 
            src={pr}
            alt="pr"
          /> */}

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

              <React.Fragment>
                {/* <div
        style={{
          marginTop: "70px",
          marginLeft: "210px",
          marginRight: "170px",
          backgroundColor: "white",
        }}
      > */}
                <div>
                  {/* <img style={{ width:"970px"}} src={image2} alt="image2" />
          <img
            style={{
              paddingTop: "  0px",
              float: "right",
              marginBottom: " 0px",
            }}
            src={image3}
            alt="image3"
          /> */}
                  <p
                    style={{
                      // textDecoration: "underline",
                      textAlign: "center",
                      paddingTop: "90px",
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
                </div>

                <p
                  style={{
                    // textDecoration: "underline",
                    textAlign: "center",
                    paddingTop: "10px",
                    marginLeft: "60px",
                    marginBottom: "20px",
                    paddingBottom: " 50px",
                    // fontWeight:"bolder",
                    fontSize: "25px",
                    fontStyle: "times new roman",
                  }}
                >
                  Simple-to-follow Worksheets for students of Grade 1-5.
                  <br></br> Keep learning through worksheets that deliver this
                  term’s <br></br>key topics in the classroom or at home.
                </p>

                {/* <NavLink to="/StudentGrade"  > 
        <button className="start-button"> <span> Start a Lesson</span> 
       </button> 
       </NavLink> */}
                {/* </div> */}
              </React.Fragment>

              <div
                style={{
                  marginLeft: "150px",
                  marginRight: "150px",
                  paddingTop: "50px",
                  paddingBottom: "20px",
                  backgroundColor: "white",
                }}
              >
                <div
                  style={{
                    marginLeft: "130px",
                    marginTop: "10px",
                    fontSize: "68px",
                    fontWeight: "bolder",
                    fontFamily: "Brush Script MT, Brush Script Std, cursive",
                  }}
                >
                  Topics
                </div>

                <Typography>
                  {titles.map((s, index) => (
                    <div
                      className="list"
                      style={{
                        cursor: "pointer",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        width: "520px",
                        paddingLeft: "17px",
                        borderRadius: "35px",
                        border: "5px solid rgb(245, 87, 13)",
                        backgroundColor: "white",
                        marginLeft: "150px",
                        marginTop: "45px",
                        opacity: "0.8",
                        fontSize: "32px",
                        fontFamily: "Courier New, monospace",
                      }}
                    >
                      <li key={index} onClick={getTopic}>
                        {s}
                      </li>
                    </div>
                  ))}
                  {titles.length === 0 && (
                    <h1
                      style={{
                        borderWidth: "thick",
                        borderStyle: "solid",
                        borderRadius: "7px",
                        borderColor: " black",
                        width: "650px",
                        height: "400px",
                        marginLeft: "230px",
                        marginTop: "20px",
                        textAlign: "center",
                        paddingTop: "120px",
                      }}
                    >
                      NO TOPICS AVAILABLE <br></br>
                      <SentimentVeryDissatisfiedOutlinedIcon
                        style={{ fontSize: "80px", marginTop: "2rem" }}
                      />
                    </h1>
                  )}
                </Typography>
              </div>
            </Typography>

            {/* <Typography>
          {titles.map((s, index) => (
            <div
              className="list"
              style={{
                cursor: "pointer",
                paddingTop: "10px",
                paddingBottom: "10px",
                width: "520px",
                paddingLeft: "17px",
                borderRadius: "35px",
                border: "5px solid rgb(245, 87, 13)",
                backgroundColor: "white",
                marginLeft: "200px",
                marginTop: "45px",
                opacity: "0.8",
                fontSize: "32px",
                fontFamily: "Courier New, monospace",
              }}
            >
              <li key={index} onClick={getTopic}>
                {s}
              </li>
            </div>
          ))}
          {titles.length === 0 && (
            <h1
              style={{
                borderWidth: "thick",
                borderStyle: "solid",
                borderRadius: "7px",
                borderColor: " black",
                width: "650px",
                height: "400px",
                marginLeft: "390px",
                marginTop: "20px",
                textAlign: "center",
                paddingTop: "120px",
              }}
            >
              NO TOPICS AVAILABLE <br></br>
              <SentimentVeryDissatisfiedOutlinedIcon
                style={{ fontSize: "80px", marginTop: "2rem" }}
              />
            </h1>
          )}
         
        </Typography> */}
          </CardContent>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default PracticeWSTitles;

// import React, { useEffect, useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
// //import { USERNAME } from "../../Auth";
// import { WorksheetType } from "../../users/student/Student";
// import { GRADE, SUBJECT } from "../../users/student/PracticeWS";
// import { useLocalStorage } from "../../LocalStorage/Local";

// import { useHistory } from "react-router";
// import { NavLink } from "react-router-dom";
// import logo from "../../assets/PPS5.jpeg";
// import pr from "../../assets/pr.jpeg";
// import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined";

// export let TITLEP;

// const useStyles = makeStyles({
//   root: {
//     // minWidth: 275,
//     width: "100",
//     // height: "210px",
//     //width: 200,
//     background: "orange",
//     boxShadow: "10px 10px 5px #aaaaaa",
//     margin: "20px",
//     marginTop: "9rem",
//     overflowY: "auto",
//   },
//   bullet: {
//     display: "inline-block",
//     margin: "0 2px",
//     //transform: "scale(1.8)",
//   },
// });

// const PracticeWSTitles = () => {
//   const [titles, setTitles] = useState([]);

//   const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
//   useEffect(() => {
//     getTitle();
//   }, []);

//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

//   const history = useHistory();

//   const getTitle = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:5000/gettingTitle?type=${WorksheetType}&grade=${GRADE}&subject=${SUBJECT}`
//       );
//       let responseData = await response.json();
//       console.log(responseData.title);
//       setTitles(responseData.title);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const getTopic = (e) => {
//     console.log(e.target.innerText);
//     TITLEP = e.target.innerText;
//     history.push("/ShowWorksheets");
//   };

//   return (
//     <>
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
//               <NavLink to="/PracticeWS" className="nav-links-practiceWS">
//                 Grades
//               </NavLink>
//             </li>
//           </div>

//           {/* <div className="nav-links-practiceWS">
//         <li>
//           <NavLink to="/PracticeWSTitles" className="nav-links-practiceWS">
//            Titles
//           </NavLink>
//         </li>
//       </div>  */}

//           {/* <div className="nav-links-practiceWS">
//         <li>
//           <NavLink to="/" className="nav-links-practiceWS">
//             OVERALL Progress
//           </NavLink>
//         </li>
//       </div> */}
//         </ul>

//         <NavLink to="/#">
//           {" "}
//           <button className="button-practiceWS">Log out</button>
//         </NavLink>
//       </nav>

//       <Card
//         // className={classes.root}
//         variant="outlined"
//       >
//         <CardContent>
//           <Typography
//             // className={classes.title}
//             // color="textSecondary"
//             gutterBottom
//             variant="h5"
//           >
//             <img
//               style={{
//                 marginTop: "5px",
//                 width: "100%",
//                 height: "350px",
//                 // marginLeft: "40px",
//                 // opacity:"0.9",
//               }}
//               // className="fade-in-image"
//               src={pr}
//               alt="pr"
//             />

//             <div
//               style={{
//                 backgroundColor: "rgb(245, 87, 13)",
//                 position: "absolute",
//                 top: "310px",
//                 left: " 500px",
//                 marginTop: "80px",
//                 textAlign: "center",
//                 color: "white",
//                 opacity: "0.8",
//               }}
//             >
//               <p
//                 style={{
//                   paddingLeft: "110px",
//                   paddingRight: "110px",
//                   paddingBottom: "10px",
//                   paddingTop: "20px",
//                   fontSize: "64px",
//                   fontWeight: "bolder",
//                   fontFamily: "serif",
//                   fontStyle: "oblique",
//                 }}
//               >
//                 {GRADE}
//               </p>

//               <p
//                 style={{
//                   fontSize: "58px",
//                   marginTop: "0px",
//                   fontFamily: "Brush Script MT, Brush Script Std, cursive",
//                   fontStyle: "oblique",
//                 }}
//               >
//                 {" "}
//                 {SUBJECT}{" "}
//               </p>
//             </div>

//             <div
//               style={{
//                 marginLeft: "130px",
//                 marginTop: "190px",
//                 fontSize: "68px",
//                 fontWeight: "bolder",
//                 fontFamily: "Brush Script MT, Brush Script Std, cursive",
//               }}
//             >
//               Topics
//             </div>
//           </Typography>
//           <Typography>
//             {titles.map((s, index) => (
//               <div
//                 className="list"
//                 style={{
//                   cursor: "pointer",
//                   paddingTop: "10px",
//                   paddingBottom: "10px",
//                   width: "520px",
//                   paddingLeft: "17px",
//                   borderRadius: "35px",
//                   border: "5px solid rgb(245, 87, 13)",
//                   backgroundColor: "white",
//                   marginLeft: "200px",
//                   marginTop: "45px",
//                   opacity: "0.8",
//                   fontSize: "32px",
//                   fontFamily: "Courier New, monospace",
//                 }}
//               >
//                 <li key={index} onClick={getTopic}>
//                   {s}
//                 </li>
//               </div>
//             ))}
//             {titles.length === 0 && (
//               <h1
//                 style={{
//                   borderWidth: "thick",
//                   borderStyle: "solid",
//                   borderRadius: "7px",
//                   borderColor: " black",
//                   width: "650px",
//                   height: "400px",
//                   marginLeft: "390px",
//                   marginTop: "20px",
//                   textAlign: "center",
//                   paddingTop: "120px",
//                 }}
//               >
//                 NO TOPICS AVAILABLE <br></br>
//                 <SentimentVeryDissatisfiedOutlinedIcon
//                   style={{ fontSize: "80px", marginTop: "2rem" }}
//                 />
//               </h1>
//             )}
//           </Typography>
//         </CardContent>
//       </Card>
//     </>
//   );
// };

// export default PracticeWSTitles;

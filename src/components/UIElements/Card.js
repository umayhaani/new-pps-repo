import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grade, Subject } from "../../DropDown";
import { useHistory } from "react-router";
import pr from "../../assets/pr.jpeg";
import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined";

export let Title;
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

//console.log(Grade, Subject);
const ReactCard = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  console.log(props);
  const history = useHistory();
  const getTitle = (e) => {
    console.log(e.target.innerText);
    Title = e.target.innerText;
    history.push("/ProgressReportTeacher");
  };
  return (
    <Card
      // className={classes.root}
      variant="outlined"
    >
      <CardContent>
        <Typography
          // className={classes.title}
          // color="textSecondary"
          gutterBottom
          variant="h5"
        >
          <img
            style={{
              marginTop: "5px",
              width: "100%",
              height: "350px",
              // marginLeft: "40px",
              // opacity:"0.9",
            }}
            // className="fade-in-image"
            src={pr}
            alt="pr"
          />

          <div
            style={{
              backgroundColor: "rgb(245, 87, 13)",
              position: "absolute",
              top: "310px",
              left: " 500px",
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
              {Grade}
            </p>

            <p
              style={{
                fontSize: "58px",
                marginTop: "0px",
                fontFamily: "Brush Script MT, Brush Script Std, cursive",
                fontStyle: "oblique",
              }}
            >
              {" "}
              {Subject}{" "}
            </p>
          </div>

          <div
            style={{
              marginLeft: "130px",
              marginTop: "190px",
              fontSize: "68px",
              fontWeight: "bolder",
              fontFamily: "Brush Script MT, Brush Script Std, cursive",
            }}
          >
            Topics
          </div>
        </Typography>
        <Typography variant="h5" component="h1">
          {props.getList.map((s, index) => (
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
              <li key={index} onClick={getTitle}>
                {s}
              </li>
            </div>
          ))}
          {props.getList.length === 0 && (
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
        </Typography>
      </CardContent>
    </Card>
  );
};
export default ReactCard;

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
// import { Grade, Subject } from "../../DropDown";
// import { useHistory } from "react-router";
// export let Title;
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

// //console.log(Grade, Subject);
// const ReactCard = (props) => {
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;
//   console.log(props);
//   const history = useHistory();
//   const getTitle = (e) => {
//     console.log(e.target.innerText);
//     Title = e.target.innerText;
//     history.push("/ProgressReportTeacher");
//   };
//   return (
//     <Card className={classes.root} variant="outlined">
//       <CardContent>
//         <Typography
//           // className={classes.title}
//           // color="textSecondary"
//           gutterBottom
//           variant="h5"
//         >
//           {Grade} {Subject} Topics
//         </Typography>
//         <Typography variant="h5" component="h1">
//           {props.getList.map((s, index) => (
//             <li key={index} onClick={getTitle}>
//               {s}
//             </li>
//           ))}
//           {props.getList.length === 0 && (
//             <h1 style={{ textAlign: "center" }}>NO TOPIC AVAILABLE :(</h1>
//           )}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };
// export default ReactCard;

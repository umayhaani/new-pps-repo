import React, { useEffect, useState } from "react";

import { useLocalStorage } from "../LocalStorage/Local";
import { Bar } from "react-chartjs-2";
import CsvFile from "./CsvFile";
import { UEMAIL } from "../Auth";
import { Grade, Subject } from "../DropDown";
import ReactCard, { Title } from "../components/UIElements/Card";
import arrow from "../assets/arrowBar.JPG";
import arrow3 from "../assets/arrowBar3.JPG";

const ScorePRforTeacher = () => {
  // const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
  const [namesforXaxis, setnamesforXaxis] = useState([]);
  const [totalLength, setTotalLength] = useState(0);
  const [avgScores, setavgScore] = useState(0);
  const [scoresforYaxis, setscoresforYaxis] = useState([]);
  const [csvData, setcsvData] = useState([]);
  const [paint, setPaint] = useState([]);
  let color = [];
  //console.log(Grade, Subject, UEMAIL);
  useEffect(() => {
    displayHandler();
  }, []);

  const displayHandler = async () => {
    let responseData;
    let creator = UEMAIL;
    let grade = Grade;
    let subject = Subject;
    let title = Title;
    let act = "teacher";
    //console.log(Title);

    try {
      const response = await fetch(
        `http://localhost:5000/getAttemptedWSReport?creator=${creator}&grade=${grade}&subject=${subject}&title=${title}&act=${act}`
      );
      responseData = await response.json();
      console.log(responseData.report.map((s) => s.scores));

      //console.log(USERNAME);
    } catch (err) {
      console.log(err);
    }
    if (responseData) {
      setnamesforXaxis(responseData.report.map((n) => n.attempter));
      setcsvData(responseData.report);
      setTotalLength(responseData.report.length);
      setavgScore(responseData.averageScores);
      setscoresforYaxis(responseData.report.map((s) => s.scores));

      const colorHandler = () => {
        for (let index = 0; index < scoresforYaxis.length; index++) {
          const element = scoresforYaxis[index];
          if (scoresforYaxis[index] === 0.1) {
            color[index] = "red";
            // setPaint(color);
            console.log(element, "[[[[", color);
          } else {
            color[index] = "yellow";
            //setPaint(color);
            console.log(element, "[[[[", color);
          }
        }
        setPaint(color);
      };
      colorHandler();

      return;
    }
  };

  // console.log(csvData);
  console.log(paint);
  const data = {
    labels: namesforXaxis,
    datasets: [
      {
        label: "scores",
        data: scoresforYaxis,
        //backgroundColor: "rgba(248, 196, 113)",
        backgroundColor: paint,
        barPercentage: 0.2,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "PROGRESS REPORT OF TEST WORKSHEETS SHOWING SCORE ",
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            stepSize: 1,
          },
        },
      ],
    },
  };

  return (
    <div>
      <div>
        {" "}
        <div
          style={{
            // backgroundColor:"red",
            //  width:"48px",
            //  height:"20px",
            marginLeft: "430px",
            marginTop: "-130px",
            marginBottom: "97px",
            fontWeight: "bolder",
          }}
        >
          <div>{`Attempted by: ${totalLength} students`}</div>
          <div
            style={{ marginTop: "17px", display: "flex" }}
          >{`Average Scores:  ${avgScores} `}</div>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <img
          style={{
            marginLeft: "1px",
            marginRight: "15px",
            // marginT: "30px",
            marginTop: "40px",
            width: "200px",
            height: "240px",
          }}
          src={arrow3}
          alt="arrow3"
        />

        <Bar data={data} options={options} />
      </div>

      <div style={{ display: "flex" }}>
        <p
          style={{
            marginLeft: "198px",
            marginTop: "15px",
            fontFamily: "Optima, sans-serif",
            // fontStyle:"oblique",
            fontSize: "15px",
            color: "gray",
          }}
        >
          Student's Names
        </p>

        <img
          style={{
            marginLeft: "30px",
            marginTop: "17px",
            width: "130px",
          }}
          src={arrow}
          alt="arrow"
        />
      </div>

      <CsvFile data={csvData} />
    </div>
  );
};

export default ScorePRforTeacher;

// const ScorePRforTeacher = () => {
//   // const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
//   const [namesforXaxis, setnamesforXaxis] = useState([]);
//   const [totalLength, setTotalLength] = useState(0);
//   const [avgScores, setavgScore] = useState(0);
//   const [scoresforYaxis, setscoresforYaxis] = useState([]);
//   const [csvData, setcsvData] = useState([]);
//   const [paint, setPaint] = useState([]);
//   let color = [];
//   //console.log(Grade, Subject, UEMAIL);
//   useEffect(() => {
//     displayHandler();
//   }, []);

//   const displayHandler = async () => {
//     let responseData;
//     let creator = UEMAIL;
//     let grade = Grade;
//     let subject = Subject;
//     let title = Title;
//     let act = "teacher";
//     //console.log(Title);

//     try {
//       const response = await fetch(
//         `http://localhost:5000/getAttemptedWSReport?creator=${creator}&grade=${grade}&subject=${subject}&title=${title}&act=${act}`
//       );
//       responseData = await response.json();
//       console.log(responseData.report.map((s) => s.scores));

//       //console.log(USERNAME);
//     } catch (err) {
//       console.log(err);
//     }
//     if (responseData) {
//       setnamesforXaxis(responseData.report.map((n) => n.attempter));
//       setcsvData(responseData.report);
//       setTotalLength(responseData.report.length);
//       setavgScore(responseData.averageScores);
//       setscoresforYaxis(responseData.report.map((s) => s.scores));

//       const colorHandler = () => {
//         for (let index = 0; index < scoresforYaxis.length; index++) {
//           const element = scoresforYaxis[index];
//           if (scoresforYaxis[index] === 0.1) {
//             color[index] = "red";
//             // setPaint(color);
//             console.log(element, "[[[[", color);
//           } else {
//             color[index] = "yellow";
//             //setPaint(color);
//             console.log(element, "[[[[", color);
//           }
//         }
//         setPaint(color);
//       };
//       colorHandler();

//       return;
//     }
//   };

//   // console.log(csvData);
//   console.log(paint);
//   const data = {
//     labels: namesforXaxis,
//     datasets: [
//       {
//         label: "scores",
//         data: scoresforYaxis,
//         //backgroundColor: "rgba(248, 196, 113)",
//         backgroundColor: paint,
//         barPercentage: 0.2,
//       },
//     ],
//   };

//   const options = {
//     title: {
//       display: true,
//       text: "PROGRESS REPORT OF TEST WORKSHEETS SHOWING SCORE ",
//     },
//     legend: {
//       display: false,
//     },
//     scales: {
//       yAxes: [
//         {
//           stacked: true,
//           ticks: {
//             stepSize: 1,
//           },
//         },
//       ],
//     },
//   };

//   return (
//     <div>
//       <div>{`attempted by ${totalLength} students`}</div>
//       <div>{`average scores are ${avgScores} `}</div>

//       <div style={{ display: "flex" }}>
//         <img
//           style={{
//             marginLeft: "1px",
//             marginRight: "15px",
//             // marginT: "30px",
//             marginTop: "40px",
//             width: "200px",
//             height: "240px",
//           }}
//           src={arrow3}
//           alt="arrow3"
//         />

//         <Bar data={data} options={options} />
//       </div>

//       <div style={{ display: "flex" }}>
//         <p
//           style={{
//             marginLeft: "198px",
//             marginTop: "15px",
//             fontFamily: "Optima, sans-serif",
//             // fontStyle:"oblique",
//             fontSize: "15px",
//             color: "gray",
//           }}
//         >
//           Student's Names
//         </p>

//         <img
//           style={{
//             marginLeft: "30px",
//             marginTop: "17px",
//             width: "130px",
//           }}
//           src={arrow}
//           alt="arrow"
//         />
//       </div>

//       <CsvFile data={csvData} />
//     </div>
//   );
// };

// export default ScorePRforTeacher;

// import React, { useEffect, useState } from "react";

// import { Bar } from "react-chartjs-2";
// import CsvFile from "./CsvFile";
// import { UEMAIL } from "../Auth";
// import { Grade, Subject } from "../users/teacher/DropDown";
// import ReactCard, { Title } from "../components/UIElements/Card";
// import { arrayOf } from "prop-types";

// const ScorePRforTeacher = () => {
//   const [namesforXaxis, setnamesforXaxis] = useState([]);
//   const [scoresforYaxis, setscoresforYaxis] = useState([]);
//   const [csvData, setcsvData] = useState([]);
//   const [paint, setPaint] = useState([]);
//   let color = [];
//   //console.log(Grade, Subject, UEMAIL);
//   useEffect(() => {
//     displayHandler();
//   }, []);

//   const displayHandler = async () => {
//     let responseData;
//     let creator = UEMAIL;
//     let grade = Grade;
//     let subject = Subject;
//     let title = Title;
//     //console.log(Title);

//     try {
//       const response = await fetch(
//         `http://localhost:5000/getAttemptedWSReport?creator=${creator}&grade=${grade}&subject=${subject}&title=${title}`
//       );
//       responseData = await response.json();
//       console.log(responseData.report.map((s) => s.scores));
//       //console.log(USERNAME);
//     } catch (err) {
//       console.log(err);
//     }
//     if (responseData) {
//       setnamesforXaxis(responseData.report.map((n) => n.attempter));
//       setcsvData(responseData.report);
//       setscoresforYaxis(responseData.report.map((s) => s.scores));

//       const colorHandler = () => {
//         for (let index = 0; index < scoresforYaxis.length; index++) {
//           const element = scoresforYaxis[index];
//           if (scoresforYaxis[index] > 3) {
//             color[index] = "blue";
//             // setPaint(color);
//             console.log(element, "[[[[", color);
//           } else {
//             color[index] = "yellow";
//             //setPaint(color);
//             console.log(element, "[[[[", color);
//           }
//         }
//         setPaint(color);
//       };
//       colorHandler();

//       return;
//     }
//   };

//   // console.log(csvData);
//   console.log(paint);
//   const data = {
//     labels: namesforXaxis,
//     datasets: [
//       {
//         label: "scores",
//         data: scoresforYaxis,
//         //backgroundColor: "rgba(248, 196, 113)",
//         backgroundColor: paint,
//         barPercentage: 0.2,
//       },
//     ],
//   };

//   const options = {
//     title: {
//       display: true,
//       text: "PROGRESS REPORT OF TEST WORKSHEETS SHOWING SCORE ",
//     },
//     legend: {
//       display: false,
//     },
//     scales: {
//       yAxes: [
//         {
//           stacked: true,
//           ticks: {
//             stepSize: 1,
//           },
//         },
//       ],
//     },
//   };

//   return (
//     <div>
//       {/* <div style={{ width: "50rem", height: "40rem" }}> */}
//       <Bar data={data} options={options} />
//       <CsvFile data={csvData} />
//       {/* </div> */}
//     </div>
//   );
// };

// export default ScorePRforTeacher;

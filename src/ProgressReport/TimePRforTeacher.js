import React, { useEffect, useState } from "react";

import { useLocalStorage } from "../LocalStorage/Local";
import { Bar } from "react-chartjs-2";
import CsvFile from "./CsvFile";
import { UEMAIL } from "../Auth";
import { Grade, Subject } from "../DropDown";
import ReactCard, { Title } from "../components/UIElements/Card";
import arrow from "../assets/arrowBar.JPG";
import arrow2 from "../assets/arrowBar2.JPG";

const TimePRforTeacher = () => {
  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
  const [namesforXaxis, setnamesforXaxis] = useState([]);
  const [scoresforYaxis, setscoresforYaxis] = useState([]);
  const [paint, setPaint] = useState([]);
  const [csvData, setcsvData] = useState([]);
  let color = [];
  console.log(Grade, Subject, UEMAIL);
  useEffect(() => {
    displayHandler();
  }, []);

  const displayHandler = async () => {
    let responseData;
    let creator = UEMAIL;
    let grade = Grade;
    let subject = Subject;
    let title = Title;
    console.log(Title);
    try {
      const response = await fetch(
        `http://localhost:5000/getAttemptedWSReport?creator=${creator}&grade=${grade}&subject=${subject}&title=${title}`
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
      setscoresforYaxis(responseData.report.map((s) => s.time));

      const colorHandler = () => {
        for (let index = 0; index < scoresforYaxis.length; index++) {
          const element = scoresforYaxis[index];
          if (scoresforYaxis[index] === 601) {
            color[index] = "red";
            // setPaint(color);
            console.log(element, "[[[[", color);
          } else {
            color[index] = "blue";
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
  console.log(csvData);

  const data = {
    labels: namesforXaxis,
    datasets: [
      {
        label: "seconds",
        data: scoresforYaxis,
        backgroundColor: paint,
        barPercentage: 0.2,
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: "PROGRESS REPORT OF TEST WORKSHEETS SHOWING TIME",
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <img
          style={{
            marginLeft: "40px",
            marginRight: "15px",
            // marginT: "30px",
            marginTop: "40px",
            width: "200px",
            height: "240px",
          }}
          src={arrow2}
          alt="arrow2"
        />

        <Bar data={data} options={options} />
      </div>

      <div style={{ display: "flex" }}>
        <p
          style={{
            marginLeft: "240px",
            marginTop: "15px",
            fontFamily: "Optima, sans-serif",
            // fontStyle:"oblique",
            fontSize: "15px",
            // fontWeight:"bold",
            color: "grey",
          }}
        >
          Student's Names
        </p>

        <img
          style={{
            marginLeft: "35px",
            marginTop: "15px",
            width: "112px",
          }}
          src={arrow}
          alt="arrow"
        />
      </div>
      {/* <CsvFile dataTime={csvData} /> */}
    </div>
  );
};

export default TimePRforTeacher;

// const TimePRforTeacher = () => {
//   const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
//   const [namesforXaxis, setnamesforXaxis] = useState([]);
//   const [scoresforYaxis, setscoresforYaxis] = useState([]);
//   const [paint, setPaint] = useState([]);
//   const [csvData, setcsvData] = useState([]);
//   let color = [];
//   console.log(Grade, Subject, UEMAIL);
//   useEffect(() => {
//     displayHandler();
//   }, []);

//   const displayHandler = async () => {
//     let responseData;
//     let creator = UEMAIL;
//     let grade = Grade;
//     let subject = Subject;
//     let title = Title;
//     console.log(Title);
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
//       setscoresforYaxis(responseData.report.map((s) => s.time));

//       const colorHandler = () => {
//         for (let index = 0; index < scoresforYaxis.length; index++) {
//           const element = scoresforYaxis[index];
//           if (scoresforYaxis[index] === 601) {
//             color[index] = "red";
//             // setPaint(color);
//             console.log(element, "[[[[", color);
//           } else {
//             color[index] = "blue";
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
//   console.log(csvData);

//   const data = {
//     labels: namesforXaxis,
//     datasets: [
//       {
//         label: "seconds",
//         data: scoresforYaxis,
//         backgroundColor: paint,
//         barPercentage: 0.2,
//       },
//     ],
//   };
//   const options = {
//     title: {
//       display: true,
//       text: "PROGRESS REPORT OF TEST WORKSHEETS SHOWING TIME",
//     },
//     legend: {
//       display: false,
//     },
//     scales: {
//       yAxes: [
//         {
//           stacked: true,
//         },
//       ],
//     },
//   };

//   return (
//     <div>
//       <div style={{ display: "flex" }}>
//         <img
//           style={{
//             marginLeft: "40px",
//             marginRight: "15px",
//             // marginT: "30px",
//             marginTop: "40px",
//             width: "200px",
//             height: "240px",
//           }}
//           src={arrow2}
//           alt="arrow2"
//         />

//         <Bar data={data} options={options} />
//       </div>

//       <div style={{ display: "flex" }}>
//         <p
//           style={{
//             marginLeft: "240px",
//             marginTop: "15px",
//             fontFamily: "Optima, sans-serif",
//             // fontStyle:"oblique",
//             fontSize: "15px",
//             // fontWeight:"bold",
//             color: "grey",
//           }}
//         >
//           Student's Names
//         </p>

//         <img
//           style={{
//             marginLeft: "35px",
//             marginTop: "15px",
//             width: "112px",
//           }}
//           src={arrow}
//           alt="arrow"
//         />
//       </div>
//       {/* <CsvFile dataTime={csvData} /> */}
//     </div>
//   );
// };

// export default TimePRforTeacher;

// import React, { useEffect, useState } from "react";

// import { Bar } from "react-chartjs-2";
// import CsvFile from "./CsvFile";
// import { UEMAIL } from "../Auth";
// import { Grade, Subject } from "../users/teacher/DropDown";
// import ReactCard, { Title } from "../components/UIElements/Card";

// const TimePRforTeacher = () => {
//   const [namesforXaxis, setnamesforXaxis] = useState([]);
//   const [scoresforYaxis, setscoresforYaxis] = useState([]);
//   const [csvData, setcsvData] = useState([]);
//   console.log(Grade, Subject, UEMAIL);
//   useEffect(() => {
//     displayHandler();
//   }, []);

//   const displayHandler = async () => {
//     let responseData;
//     let creator = UEMAIL;
//     let grade = Grade;
//     let subject = Subject;
//     let title = Title;
//     console.log(Title);
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

//       setscoresforYaxis(responseData.report.map((s) => s.time));
//       return;
//     }
//   };
//   console.log(csvData);

//   const data = {
//     labels: namesforXaxis,
//     datasets: [
//       {
//         label: "seconds",
//         data: scoresforYaxis,
//         backgroundColor: "rgba(248, 196, 113)",
//         barPercentage: 0.2,
//       },
//     ],
//   };
//   const options = {
//     title: {
//       display: true,
//       text: "PROGRESS REPORT OF TEST WORKSHEETS SHOWING TIME",
//     },
//     legend: {
//       display: false,
//     },
//     scales: {
//       yAxes: [
//         {
//           stacked: true,
//           ticks: {
//             //suggestedMin: 50,
//             suggestedMax: 60,
//           },
//         },
//       ],
//     },
//   };

//   return (
//     <div>
//       <Bar data={data} options={options} />
//       {/* <CsvFile dataTime={csvData} /> */}
//     </div>
//   );
// };

// export default TimePRforTeacher;

import React, { useEffect, useState } from "react";
import "./csvFile.css";
import { useLocalStorage } from "../LocalStorage/Local";
const CsvFile = (props) => {
  
const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
  // useEffect(() => {
  //   getCsvData();
  // }, []);
  // const getCsvData = async () => {
  //   console.log(props.data);
  console.log(props.showType);
  // };

  const exportCsv = () => {
    var CsvRow = [];
    var A = [
      ["Serial", "StudentName", "Time(seconds)", "Score", "Grade", "Subject"],
    ];
    var re = props.data;
    console.log(re.length);
    for (var item = 0; item < re.length; item++) {
      // console.log(item);
      if (re[item].scores === 0.1) {
        re[item].scores = 0;
      } else {
        re[item].scores = re[item].scores;
      }
      A.push([
        item + 1,
        re[item].attempter,
        re[item].time,
        re[item].scores,

        re[item].grade,
        re[item].subject,
      ]);
    }
    console.log(A);

    for (var i = 0; i < A.length; ++i) {
      CsvRow.push(A[i].join(","));
    }

    console.log(CsvRow);
    var csvString = CsvRow.join("%0A");

    var a = document.createElement("a");
    a.href = "data:attachment/csv," + csvString;
    a.target = "_Blank";
    a.download = "testfile.csv";
    document.body.appendChild(a);
    a.click();
    //  console.warn(csvString);
  };

  const studentCsv = () => {
    var CsvRow = [];
    var A = [
      ["Serial", "Title", "Score", "Time(seconds)", "Type", "Grade", "Subject"],
    ];
    var re = props.data;
    console.log(re.length);
    for (var item = 0; item < re.length; item++) {
      // console.log(item);
      A.push([
        item + 1,
        re[item].title,
        re[item].scores,
        re[item].time,
        re[item].type,
        re[item].grade,
        re[item].subject,
      ]);
    }
    console.log(A);

    for (var i = 0; i < A.length; ++i) {
      CsvRow.push(A[i].join(","));
    }

    console.log(CsvRow);
    var csvString = CsvRow.join("%0A");

    var a = document.createElement("a");
    a.href = "data:attachment/csv," + csvString;
    a.target = "_Blank";
    a.download = "testfile.csv";
    document.body.appendChild(a);
    a.click();
    console.warn(csvString);
  };

  return (
    <>
      <div>
        <button
          className="button-csv"
          onClick={props.showType ? studentCsv : exportCsv}
        >
           Download 
           {/* <GetAppIcon></GetAppIcon> */}
        </button>
      </div>
      {/* <div>
        <button onClick={props.data ? exportCsv : exportCsvTime}>
          Export{" "}
        </button>
      </div> */}
    </>
  );
};

export default CsvFile;

// import React, { useEffect, useState } from "react";

// const CsvFile = (props) => {
//   // useEffect(() => {
//   //   getCsvData();
//   // }, []);
//   // const getCsvData = async () => {
//   //   console.log(props.data);
//   //   // console.log(props.dataTime);
//   // };

//   const exportCsv = () => {
//     var CsvRow = [];
//     var A = [
//       ["Serial", "StudentName", "Time(seconds)", "Score", "Grade", "Subject"],
//     ];
//     var re = props.data;
//     console.log(re.length);
//     for (var item = 0; item < re.length; item++) {
//       // console.log(item);
//       if (re[item].scores === 0.1) {
//         re[item].scores = 0;
//       } else {
//         re[item].scores = re[item].scores;
//       }
//       A.push([
//         item + 1,
//         re[item].attempter,
//         re[item].time,
//         re[item].scores,

//         re[item].grade,
//         re[item].subject,
//       ]);
//     }
//     console.log(A);

//     for (var i = 0; i < A.length; ++i) {
//       CsvRow.push(A[i].join(","));
//     }

//     console.log(CsvRow);
//     var csvString = CsvRow.join("%0A");

//     var a = document.createElement("a");
//     a.href = "data:attachment/csv," + csvString;
//     a.target = "_Blank";
//     a.download = "testfile.csv";
//     document.body.appendChild(a);
//     a.click();
//     //  console.warn(csvString);
//   };

//   // const exportCsvTime = () => {
//   //   var CsvRow = [];
//   //   var A = [["Serial", "StudentName", "Time", "Grade", "Subject"]];
//   //   var re = props.dataTime;
//   //   console.log(re.length);
//   //   for (var item = 0; item < re.length; item++) {
//   //     // console.log(item);
//   //     A.push([
//   //       item + 1,
//   //       re[item].attempter,
//   //       re[item].time,
//   //       re[item].grade,
//   //       re[item].subject,
//   //     ]);
//   //   }
//   //   console.log(A);

//   //   for (var i = 0; i < A.length; ++i) {
//   //     CsvRow.push(A[i].join(","));
//   //   }

//   //   console.log(CsvRow);
//   //   var csvString = CsvRow.join("%0A");

//   //   var a = document.createElement("a");
//   //   a.href = "data:attachment/csv," + csvString;
//   //   a.target = "_Blank";
//   //   a.download = "testfile.csv";
//   //   document.body.appendChild(a);
//   //   a.click();
//   //   console.warn(csvString);
//   // };

//   return (
//     <>
//       <div>
//         <button onClick={exportCsv}>Export </button>
//       </div>
//       {/* <div>
//         <button onClick={props.data ? exportCsv : exportCsvTime}>
//           Export{" "}
//         </button>
//       </div> */}
//     </>
//   );
// };

// export default CsvFile;










// import React, { useEffect, useState } from "react";
// import "./csvFile.css";

// const CsvFile = (props) => {
//   // useEffect(() => {
//   //   getCsvData();
//   // }, []);
//   // const getCsvData = async () => {
//   //   console.log(props.data);
//   //   // console.log(props.dataTime);
//   // };

//   const exportCsv = () => {
//     var CsvRow = [];
//     var A = [
//       ["Serial", "StudentName", "Time(seconds)", "Score", "Grade", "Subject"],
//     ];
//     var re = props.data;
//     console.log(re.length);
//     for (var item = 0; item < re.length; item++) {
//       // console.log(item);
//       if (re[item].scores === 0.1) {
//         re[item].scores = 0;
//       } else {
//         re[item].scores = re[item].scores;
//       }
//       A.push([
//         item + 1,
//         re[item].attempter,
//         re[item].time,
//         re[item].scores,

//         re[item].grade,
//         re[item].subject,
//       ]);
//     }
//     console.log(A);

//     for (var i = 0; i < A.length; ++i) {
//       CsvRow.push(A[i].join(","));
//     }

//     console.log(CsvRow);
//     var csvString = CsvRow.join("%0A");

//     var a = document.createElement("a");
//     a.href = "data:attachment/csv," + csvString;
//     a.target = "_Blank";
//     a.download = "testfile.csv";
//     document.body.appendChild(a);
//     a.click();
//     //  console.warn(csvString);
//   };

//   // const exportCsvTime = () => {
//   //   var CsvRow = [];
//   //   var A = [["Serial", "StudentName", "Time", "Grade", "Subject"]];
//   //   var re = props.dataTime;
//   //   console.log(re.length);
//   //   for (var item = 0; item < re.length; item++) {
//   //     // console.log(item);
//   //     A.push([
//   //       item + 1,
//   //       re[item].attempter,
//   //       re[item].time,
//   //       re[item].grade,
//   //       re[item].subject,
//   //     ]);
//   //   }
//   //   console.log(A);

//   //   for (var i = 0; i < A.length; ++i) {
//   //     CsvRow.push(A[i].join(","));
//   //   }

//   //   console.log(CsvRow);
//   //   var csvString = CsvRow.join("%0A");

//   //   var a = document.createElement("a");
//   //   a.href = "data:attachment/csv," + csvString;
//   //   a.target = "_Blank";
//   //   a.download = "testfile.csv";
//   //   document.body.appendChild(a);
//   //   a.click();
//   //   console.warn(csvString);
//   // };

//   return (
//     <>
//       <div>
//         <button className="button-csv" onClick={exportCsv}>Download Csv </button>
//       </div>
//       {/* <div>
//         <button onClick={props.data ? exportCsv : exportCsvTime}>
//           Export{" "}
//         </button>
//       </div> */}
//     </>
//   );
// };

// export default CsvFile;













// // import React, { useEffect, useState } from "react";

// // const CsvFile = (props) => {
// //   // useEffect(() => {
// //   //   getCsvData();
// //   // }, []);
// //   // const getCsvData = async () => {
// //   //   console.log(props.data);
// //   //   // console.log(props.dataTime);
// //   // };

// //   const exportCsv = () => {
// //     var CsvRow = [];
// //     var A = [["Serial", "StudentName", "Time", "Score", "Grade", "Subject"]];
// //     var re = props.data;
// //     console.log(re.length);
// //     for (var item = 0; item < re.length; item++) {
// //       // console.log(item);
// //       A.push([
// //         item + 1,
// //         re[item].attempter,
// //         re[item].time,
// //         re[item].scores,

// //         re[item].grade,
// //         re[item].subject,
// //       ]);
// //     }
// //     console.log(A);

// //     for (var i = 0; i < A.length; ++i) {
// //       CsvRow.push(A[i].join(","));
// //     }

// //     console.log(CsvRow);
// //     var csvString = CsvRow.join("%0A");

// //     var a = document.createElement("a");
// //     a.href = "data:attachment/csv," + csvString;
// //     a.target = "_Blank";
// //     a.download = "testfile.csv";
// //     document.body.appendChild(a);
// //     a.click();
// //     //  console.warn(csvString);
// //   };

// //   // const exportCsvTime = () => {
// //   //   var CsvRow = [];
// //   //   var A = [["Serial", "StudentName", "Time", "Grade", "Subject"]];
// //   //   var re = props.dataTime;
// //   //   console.log(re.length);
// //   //   for (var item = 0; item < re.length; item++) {
// //   //     // console.log(item);
// //   //     A.push([
// //   //       item + 1,
// //   //       re[item].attempter,
// //   //       re[item].time,
// //   //       re[item].grade,
// //   //       re[item].subject,
// //   //     ]);
// //   //   }
// //   //   console.log(A);

// //   //   for (var i = 0; i < A.length; ++i) {
// //   //     CsvRow.push(A[i].join(","));
// //   //   }

// //   //   console.log(CsvRow);
// //   //   var csvString = CsvRow.join("%0A");

// //   //   var a = document.createElement("a");
// //   //   a.href = "data:attachment/csv," + csvString;
// //   //   a.target = "_Blank";
// //   //   a.download = "testfile.csv";
// //   //   document.body.appendChild(a);
// //   //   a.click();
// //   //   console.warn(csvString);
// //   // };

// //   return (
// //     <>
// //       <div>
// //         <button onClick={exportCsv}>Export </button>
// //       </div>
// //       {/* <div>
// //         <button onClick={props.data ? exportCsv : exportCsvTime}>
// //           Export{" "}
// //         </button>
// //       </div> */}
// //     </>
// //   );
// // };

// // export default CsvFile;

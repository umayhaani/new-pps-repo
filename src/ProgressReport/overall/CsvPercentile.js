import React, { useEffect, useState } from "react";
//import "./csvFile.css";

const CsvPercentile = (props) => {
  const exportCsv = () => {
    console.log(props.scorePercentile, props.timePercentile, props.title);

    var CsvRow = [];
    var A = [
      [
        "Serial",
        "Title",
        "ScorePercentile",
        "TimePercentile",
        "Grade",
        "Subject",
      ],
    ];
    var title = props.title;
    var scorePercentile = props.scorePercentile;
    var timePercentile = props.timePercentile;

    console.log(title.length);
    for (var item = 0; item < title.length; item++) {
      if (scorePercentile[item] === 0.1) {
        scorePercentile[item] = 0;
      } else {
        scorePercentile[item] = scorePercentile[item];
      }
      if (timePercentile[item] === 0.1) {
        timePercentile[item] = 0;
      } else {
        timePercentile[item] = timePercentile[item];
      }
      A.push([
        item + 1,
        title[item],
        scorePercentile[item],
        timePercentile[item],
        props.grade,
        props.subject,
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

  return (
    <>
      <div>
        <button className="button-csv" onClick={exportCsv}>
        Download
        </button>
      </div>
    </>
  );
};

export default CsvPercentile;

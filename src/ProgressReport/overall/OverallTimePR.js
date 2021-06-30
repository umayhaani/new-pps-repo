import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import CsvFile from "../CsvFile";

import { useLocalStorage } from "../../LocalStorage/Local";
import { GRADE, SUBJECT } from "./SelectSubject";
// import { USERNAME } from "../../Auth";
import EmptyModal from "../subjectwise/EmptyModal";
import arrow from "../../assets/arrowBar.JPG";
import arrow5 from "../../assets/arrowBar5.JPG";

export let TimePercentile;
const OverallTimePR = () => {
  const [titlesforXaxis, settitlesforXaxis] = useState([]);
  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
  const [csvData, setcsvData] = useState([]);
  const [length, setlength] = useState(0);
  const [paint, setPaint] = useState([]);

  const [Percentile, setPercentile] = useState([]);
  let color = [];

  //console.log(Grade, Subject, UEMAIL);
  useEffect(() => {
    displayHandler();
  }, []);

  const displayHandler = async () => {
    let responseData;
    let attempter = USERNAME; //// UEMAIL;
    let grade = GRADE; ///////////Grade;
    let subject = SUBJECT; //////Subject;

    try {
      const response = await fetch(
        `http://localhost:5000/getTimePercentile?attempter=${attempter}&grade=${grade}&subject=${subject}`
      );
      responseData = await response.json();
      setlength(responseData.percentile.length);
    } catch (err) {
      console.log(err);
    }
    if (responseData) {
      settitlesforXaxis(responseData.titles.map((t) => t));
      setPercentile(responseData.percentile.map((p) => p));
      TimePercentile = responseData.percentile.map((p) => p);
      // setcsvData(responseData.percentile.map((p) => p));

      const colorHandler = () => {
        for (let index = 0; index < Percentile.length; index++) {
          if (Percentile[index] === 0.1) {
            color[index] = "red";
          } else {
            color[index] = "yellow";
          }
        }
        setPaint(color);
      };
      colorHandler();
    }
  };

  console.log(Percentile);
  const data = {
    labels: titlesforXaxis,
    datasets: [
      {
        label: "percentile",
        data: Percentile,
        backgroundColor: paint,
        barPercentage: 0.2,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "PROGRESSREPORT OF WORKSHEETS SHOWING TIME PERCENTILE ",
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
      <div style={{ display: "flex" }}>
        <img
          style={{
            marginLeft: "25px",
            // marginRight: "15px",
            // marginT: "30px",
            marginTop: "40px",
            width: "360px",
            height: "240px",
          }}
          src={arrow5}
          alt="arrow5"
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
          {/* Score's Percentile */}
          Worksheet's Names
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

      {length === 0 && <EmptyModal openModal={true} overAll="overAll" />}
    </div>
  );
};

export default OverallTimePR;

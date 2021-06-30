import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../../LocalStorage/Local";
import { Bar } from "react-chartjs-2";
import { USERNAME } from "../../Auth";
import { GRADE, SUBJECT } from "./ChooseSubject";
import arrow from "../../assets/arrowBar.JPG";
import arrow2 from "../../assets/arrowBar2.JPG";
export let TIMELENGTH;
//import { UEMAIL } from "../../Auth";

const TimeSubjectWisePR = () => {
  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
  const [titlesforXaxis, settitlesforXaxis] = useState([]);
  const [timeforYaxis, settimeforYaxis] = useState([]);
  const [length, setlength] = useState(0);
  const [paint, setPaint] = useState([]);
  let color = [];
  //console.log(Grade, Subject, UEMAIL);
  useEffect(() => {
    displayHandler();
    return () => {
      setlength({});
    };
  }, []);

  const displayHandler = async () => {
    let responseData;
    let attempter = USERNAME; //// UEMAIL;
    let grade = GRADE; ///////////Grade;
    let subject = SUBJECT; //////Subject;
    let subjectWise = "subjectWise";
    let act = "student";
    //console.log(Title);

    try {
      const response = await fetch(
        `http://localhost:5000/getAttemptedWSReport?attempter=${attempter}&grade=${grade}&subject=${subject}&act=${act}&subjectWise=${subjectWise}`
      );
      responseData = await response.json();
      setlength(responseData.report.length);
      TIMELENGTH = length;
      console.log(TIMELENGTH);
      //console.log(responseData.report.map((s) => s.scores));
      //console.log(USERNAME);
    } catch (err) {
      console.log(err);
    }
    if (responseData) {
      settitlesforXaxis(responseData.report.map((n) => n.title));
      //setcsvData(responseData.report);
      settimeforYaxis(responseData.report.map((s) => s.time));

      const colorHandler = () => {
        for (let index = 0; index < timeforYaxis.length; index++) {
          const element = timeforYaxis[index];
          if (timeforYaxis[index] === 601) {
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

  // console.log(csvData);
  console.log(paint);
  const data = {
    labels: titlesforXaxis,
    datasets: [
      {
        label: "Time",
        data: timeforYaxis,
        //backgroundColor: "rgba(248, 196, 113)",
        backgroundColor: paint,
        barPercentage: 0.2,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "SUBJECT WISE PROGRESSREPORT OF WORKSHEETS SHOWING TIME ",
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
            marginLeft: "40px",
            marginRight: "15px",
            // marginT: "30px",
            marginTop: "70px",
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
            marginLeft: "198px",
            marginTop: "25px",
            fontFamily: "Optima, sans-serif",
            // fontStyle:"oblique",
            fontSize: "15px",
            color: "gray",
          }}
        >
          Worksheet's Names
        </p>

        <img
          style={{
            marginLeft: "30px",
            marginTop: "22px",
            width: "130px",
          }}
          src={arrow}
          alt="arrow"
        />
      </div>

      {/* <Bar data={data} options={options} /> */}
    </div>
  );
};

export default TimeSubjectWisePR;

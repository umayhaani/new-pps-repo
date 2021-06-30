import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import CsvFile from "../CsvFile";
import { useLocalStorage } from "../../LocalStorage/Local";
import { GRADE, SUBJECT } from "./ChooseSubject";
import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined";
import { USERNAME } from "../../Auth";
import EmptyModal from "./EmptyModal";
import arrow from "../../assets/arrowBar.JPG";
import arrow3 from "../../assets/arrowBar3.JPG";
export let SCORELENGTH;
const ScoreSubjectWisePR = () => {
  const [titlesforXaxis, settitlesforXaxis] = useState([]);

  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
  const [scoresforYaxis, setscoresforYaxis] = useState([]);
  const [csvData, setcsvData] = useState([]);
  const [length, setlength] = useState(0);
  const [paint, setPaint] = useState([]);
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
    let subjectWise = "subjectWise";
    let act = "student";
    //console.log(Title);

    try {
      const response = await fetch(
        `http://localhost:5000/getAttemptedWSReport?attempter=${attempter}&grade=${grade}&subject=${subject}&act=${act}&subjectWise=${subjectWise}`
      );
      responseData = await response.json();
      console.log(responseData.report.map((s) => s.scores));
      setlength(responseData.report.length);
      SCORELENGTH = length;
      console.log(SCORELENGTH);
      //console.log(USERNAME);
    } catch (err) {
      console.log(err);
    }
    if (responseData) {
      settitlesforXaxis(responseData.report.map((n) => n.title));
      setcsvData(responseData.report);
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
    labels: titlesforXaxis,
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
      text: "SUBJECT WISE PROGRESSREPORT OF WORKSHEETS SHOWING SCORE ",
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
          Worksheet's Names
        </p>

        <img
          style={{
            marginLeft: "30px",
            marginTop: "15px",
            width: "130px",
          }}
          src={arrow}
          alt="arrow"
        />
      </div>

      <CsvFile data={csvData} showType={true} />
      {length === 0 && <EmptyModal openModal={true} />}
    </div>
  );
};

export default ScoreSubjectWisePR;

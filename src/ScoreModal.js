import React, { useEffect, useState } from "react";
import Modal from "react-modal";
//import { Scores } from "./spellBee/speechTotext/SpeechToText";
//import { attempted } from "./spellBee/speechTotext/SpeechToText";
import { totalScores } from "./components/Worksheets/ShowWorksheets";
//import { USERNAME } from "../src/Auth";
import { useLocalStorage } from "./LocalStorage/Local";
import { COUNT } from "./components/UIElements/Timer";
import { NavLink } from "react-router-dom";
import { WorksheetType } from "./users/student/Student";
import img from "./assets/stars4.jpg";
// /src/assets/star4.jpeg";
import "./scoreModal.css";

Modal.setAppElement("#root");

const ScoreModal = (props) => {
  const [modalisOpen, setModalisOPen] = useState(false);
  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
  // console.log(props);
  //console.log(COUNT, "frommmmmm line18 scoremodal");
  const closeWSHandler = async () => {
    let score;
    if (COUNT === 600 || props.scores === 0) {
      score = 0.1;
    } else {
      score = props.scores;
    }
    setModalisOPen(props.closeModal);
    try {
      const response = await fetch("http://localhost:5000/attemptedWS", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          creator: props.creator, ///FROM PROPS
          attempter: USERNAME, //LOGINEDIN USER
          title: props.title, ////FROM pROPS
          code: props.code,
          scores: score,
          grade: props.grade,
          subject: props.subject,
          time: COUNT,
          type: WorksheetType,
        }),
      });

      let responseData = await response.json();

      // console.log(responseData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {" "}
      <Modal
        isOpen={props.openModal}
        onRequestClose={() => setModalisOPen(props.closeModal)}
        shouldCloseOnOverlayClick={false}
        className="modalClass"
        style={{
          overlay: {
            background: "0 0 15 rgba(0,0,0,0.2)",
          },

          content: {
            color: "#rgb(11, 11, 12)",
            width: "350px",
            height: "330px",
            marginLeft: "30rem",
            backgroundImage: "url(" + img + ")",
            // backgroundImage: url("./assets/b12.jpg")  ,
            marginTop: "128px",
            //  paddingTop: "10px",
            textAlign: "center",
            // boxShadow: "0 5px 8px #f5f5f5",
            fontWeight: "bolder",
            boxShadow: " 5px 5px 10px  rgb(64, 92, 250)",
          },
        }}
      >
        <div>
          <p className="scoreText-score">Scores:</p>
        </div>
        <div>
          {/* <p className="score-score">{Scores}</p> */}
          <p className="score-score">{totalScores}</p>
        </div>
        {/* <div>attempted words: {attempted + 1} </div> */}

        <NavLink to="/ShowWorksheets">
          {" "}
          {/* <NavLink to="/Student"> */}
          <button
            // onClick={() => setModalisOPen(props.closeModal)}
            onClick={closeWSHandler}
            className="closeButton-score"
          >
            Close
          </button>
        </NavLink>
      </Modal>
    </div>
  );
};
export default ScoreModal;

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../utils/useForm";
import Modal from "react-modal";
import CloseIcon from "@material-ui/icons/Close";
import { useLocalStorage } from "../../LocalStorage/Local";
//import { USERNAME } from "../../Auth";
import "../../scoreModal.css";

Modal.setAppElement("#root");
export let WorksheetCode;

const EnterCode = (props) => {
  const [inputValue, handleChangeForInputs, clear] = useForm();
  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
  const [modalisOpen, setModalisOPen] = useState(props.openModal);
  const history = useHistory();
  //  const [codeVal, setCodeVal] = useState("");

  //   const CodeValueHandler = () => {
  //     setCodeVal(() => props.code);
  //   };

  const CodeReqHandler = async () => {
    WorksheetCode = inputValue.codeInp;
    let attempter = USERNAME;
    let type = "test worksheet";
    if (WorksheetCode === undefined)
      document.getElementById("code").innerText = "Please Enter Code";
    if (WorksheetCode !== undefined) {
      try {
        const response = await fetch(
          `http://localhost:5000/testWSConfirmation?attempter=${attempter}&searchid=${WorksheetCode}&type=${type}`
        );
        let responseData = await response.json();
        console.log(responseData.confirmed);
        if (responseData.confirmed === "ALREADY ATTEMPTED")
          document.getElementById("code").innerText =
            "You Already Attempted It";
        if (responseData.confirmed === "NOT ATTEMPTED")
          history.push("./ShowWorksheets");
      } catch (err) {
        console.log(err);
      }
    }

    // history.push("./ShowWorksheets");
    //console.log(inputValue.codeInp);
  };

  console.log(props.code);

  console.log(props.openModal);
  console.log(modalisOpen);
  console.log(props.closeModal);
  return (
    <div>
      {" "}
      <Modal
        isOpen={props.openModal || modalisOpen}
        onRequestClose={() => props.closeModal}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            background: "0 0 15 rgba(0,0,0,0.2)",
          },

          content: {
            color: "#rgb(11, 11, 12)",
            width: "350px",
            height: "330px",
            marginLeft: "30rem",
            // backgroundImage: "url(" + img + ")",
            // backgroundImage: url("./assets/b12.jpg")  ,
            marginTop: "8rem",
            paddingTop: "10p",
            textAlign: "center",
            // boxShadow: "0 5px 8px #f5f5f5",
            fontWeight: "bolder",
            boxShadow: " 5px 5px 10px  white",
          },
        }}
      >
        <div>
          <span>
            <CloseIcon
              onClick={() => window.location.reload()}
              style={{
                color: "red",
                float: "right",
                boxShadow: "2px 1px 7px red",
              }}
            />
          </span>
          <p>
            YOU HAVE{" "}
            <span style={{ fontWeight: "bolder", color: "hotpink" }}>
              10 MINUTES
            </span>{" "}
            TO ATTEMPT THIS WORKSHEET
          </p>

          <p className="scoreText-score" id="code">
            Enter Code
          </p>
        </div>
        <div>
          {/* <p className="score-score">{Scores}</p> */}
          <input
            name="codeInp"
            value={inputValue.codeInp || ""}
            onChange={handleChangeForInputs}
          />
        </div>
        {/* <div>attempted words: {attempted + 1} </div> */}{" "}
        {/* <NavLink to="/Student"> */}
        <button
          // onClick={() => setModalisOPen(props.closeModal)}
          onClick={CodeReqHandler}
          className="closeButton-score"
        >
          Enter
        </button>
      </Modal>
    </div>
  );
};
export default EnterCode;

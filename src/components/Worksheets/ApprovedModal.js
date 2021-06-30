import React, { useState } from "react";
import Modal from "react-modal";
//import "./modal.css";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";

Modal.setAppElement("#root");

const ApprovedModal = (props) => {
  const [modalisOpen, setModalisOPen] = useState(true);

  const okHandler = async () => {
    setModalisOPen(props.closeModal);
    if (!props.reload) window.location.reload();
  };

  return (
    <div>
      {" "}
      <Modal
        isOpen={props.modalisOpen}
        onRequestClose={() => setModalisOPen(props.closeModal)}
        style={{
          overlay: {
            background: "0 0 15 rgba(0,0,0,0.2)",
          },
          content: {
            color: "crimson",
            width: "300px",
            height: "250px",
            marginLeft: "35rem",
            marginTop: "8rem",
            textAlign: "center",
            boxShadow: "0 5px 8px #f5f5f5",
            fontWeight: "bolder",
          },
        }}
      >
        <div style={{ color: "green", fontSize: "large" }}>
          <CheckCircleOutlineRoundedIcon
            style={{ color: "green", fontSize: "60px" }}
          />
        </div>
        <h2> {props.successMsg}</h2>

        <button onClick={okHandler} className="closeButton">
          OK
        </button>
      </Modal>
    </div>
  );
};
export default ApprovedModal;

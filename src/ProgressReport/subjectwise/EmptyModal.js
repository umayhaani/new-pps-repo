import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";
import { useLocalStorage } from "../../LocalStorage/Local";
Modal.setAppElement("#root");

const EmptyModal = (props) => {
  
const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
  return (
    <div>
      {" "}
      <Modal
        isOpen={props.openModal}
        // onRequestClose={() => setModalisOPen(props.closeModal)}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            background: "0 0 15 rgba(0,0,0,0.2)",
          },

          content: {
            color: "#rgb(11, 11, 12)",
            width: "550px",
            height: "200px",
            marginLeft: "20rem",
            marginTop: "238px",

            textAlign: "center",

            fontWeight: "bolder",
            boxShadow: " 5px 5px 10px  rgb(64, 92, 250)",
          },
        }}
      >
        <h2
          style={{
            marginTop: "20px",
            color: "crimson",
            fontFamily: "algerian",
          }}
        >
          PROGRESS REPORT NOT AVAIABLE
        </h2>

        <NavLink to={props.overAll ? "/SelectSubject" : "ChooseSubject"}>
          <button className="closeButton-score">Close</button>
        </NavLink>
      </Modal>
    </div>
  );
};
export default EmptyModal;

// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import Modal from "react-modal";

// Modal.setAppElement("#root");

// const EmptyModal = (props) => {
//   return (
//     <div>
//       {" "}
//       <Modal
//         isOpen={props.openModal}
//         // onRequestClose={() => setModalisOPen(props.closeModal)}
//         shouldCloseOnOverlayClick={false}
//         style={{
//           overlay: {
//             background: "0 0 15 rgba(0,0,0,0.2)",
//           },

//           content: {
//             color: "#rgb(11, 11, 12)",
//             width: "550px",
//             height: "200px",
//             marginLeft: "20rem",
//             marginTop: "238px",

//             textAlign: "center",

//             fontWeight: "bolder",
//             boxShadow: " 5px 5px 10px  rgb(64, 92, 250)",
//           },
//         }}
//       >
//         <h2
//           style={{
//             marginTop: "20px",
//             color: "crimson",
//             fontFamily: "algerian",
//           }}
//         >
//           PROGRESS REPORT NOT AVAIABLE
//         </h2>

//         <NavLink to="/ChooseSubject">
//           <button className="closeButton-score">Close</button>
//         </NavLink>
//       </Modal>
//     </div>
//   );
// };
// export default EmptyModal;

import React, { useState } from "react";
import Modal from "react-modal";
import { TextField } from "@material-ui/core";
import useForm from "../../utils/useForm";
Modal.setAppElement("#root");

const EditWordModal = (props) => {
  const [modalisOpen, setModalisOPen] = useState(true);
  const [inputValue, handleChangeForInputs, clear] = useForm();

  const editBtnHandler = async () => {
    console.log(props.word);

    try {
      const response = await fetch("http://localhost:5000/editUsers", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          searchId: props.search,
          mail: document.getElementById("ew").value,
          name: document.getElementById("ed").value,
        }),
      });
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
  };

  return (
    <div>
      {" "}
      <Modal
        isOpen={true}
        onRequestClose={() => setModalisOPen(false)}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            background: "0 0 15 rgba(0,0,0,0.2)",
          },
          content: {
            width: "300px",
            height: "300px",
            marginLeft: "35rem",
            marginTop: "8rem",
            textAlign: "center",
            boxShadow: "0 5px 8px #f5f5f5",
            fontWeight: "bolder",
          },
        }}
      >
        <h2> Edit Information</h2>
        <form>
          <TextField
            id="ew"
            type="text"
            name="editEmail"
            label="Enter email"
            value={inputValue.editEmail || props.mail}
            onChange={handleChangeForInputs}
          />
          <br />
          <TextField
            id="ed"
            type="text"
            name="editName"
            label="Enter description"
            value={inputValue.editName || props.name}
            onChange={handleChangeForInputs}
          />
        </form>
        <button className="addBtn" onClick={editBtnHandler}>
          Done
        </button>{" "}
      </Modal>
    </div>
  );
};
export default EditWordModal;

// const EditWordModal = () => {
//   const [level, setLevel] = useState(() => "");
//   const [grade, setGrade] = useState(() => "");
//   const [error, setError] = useState(""); //backend
//   const [open, setOpen] = useState(() => false);
//   const [errModal, seterrModal] = useState(() => false);
//   const [err, setErr] = useState(() => false);
//   const [modalShow, setModalShow] = useState(() => true);
//   const [inputValue, handleChangeForInputs, clear] = useForm();

//   const addHandler = async (e) => {
//     clear();
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/admin/addWord", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           spell: inputValue.adminWord,
//           description: inputValue.adminDescription,
//           grade: grade,
//           level: level,
//         }),
//       });

//       const responseData = await response.json();
//       if (responseData.result) {
//         console.log(responseData.result.spell);

//         setErr(() => false);
//         setOpen(() => true);
//       }
//       if (responseData.err) {
//         console.log(responseData.err);
//         setErr(() => true);
//         seterrModal(() => true);
//         setOpen(() => false);
//       }
//       // console.log(responseData);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div style={{ background: "red", marginTop: "-500px" }}>
//       <form>
//         <TextField
//           type="text"
//           name="adminWord"
//           label="Enter word"
//           value={inputValue.adminWord || ""}
//           onChange={handleChangeForInputs}
//         />
//         <br />
//         <TextField
//           type="text"
//           name="adminDescription"
//           label="Enter description"
//           value={inputValue.adminDescription || ""}
//           onChange={handleChangeForInputs}
//         />
//       </form>
//       <button className="addBtn" onClick={addHandler}>
//         ADD
//       </button>{" "}
//     </div>
//   );
// };

// export default EditWordModal;

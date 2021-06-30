import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../../LocalStorage/Local";
import { MenuItems } from "./Menu";
import { NavLink } from "react-router-dom";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import DisapprovedModal from "../../components/Worksheets/DisapprovedModal";
import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined";
import uuid from "react-uuid";
import EditWordModal from "./EditUser";
import logo from "../../assets/PPS5.jpeg";

const AdminsDetail = () => {
  const [tt, settt] = useState([]);
  const [adminType, setAdminType] = useLocalStorage("adminType", "null");
  const [search, setSearch] = useState();
  const [mail, setMail] = useState();
  const [name, setName] = useState();
  const [errModal, seterrModal] = useState(() => false);
  const [showText, setShowText] = useState(() => false);
  const [showEdit, setShowEdit] = useState(() => false);

  useEffect(() => {
    getAdmins();
  }, []);

  const deleteHandler = async (searchId) => {
    seterrModal(() => true);
    try {
      const response = await fetch("http://localhost:5000/deleteUsers", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          searchId,
        }),
      });

      if (response.deleted === "ALL DELETED") {
        return setShowText(() => true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const editHandler = (searchid, email, name) => {
    console.log(searchid);

    setShowEdit(() => true);
    setSearch(searchid);
    setMail(email);
    setName(name);
  };

  const getAdmins = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/gettingUsers?adminType=${adminType}`
      );
      let responseData = await response.json();
      if (responseData.user.length === 0) {
        // console.log("    not avaiable    ", responseData);
        return setShowText(() => true);
      }
      if (responseData.status !== "404") {
        // console.log("    not avaiable    ", responseData);
        setShowText(() => false);
        return settt(responseData.user);
      }
      console.log(responseData);
    } catch (err) {
      console.log(err);
    }
  };

  const renderTable = () => {
    return tt.map((hh) => {
      return (
        <>
          <tr key={uuid()}>
            <td>{hh.name}</td>
            <td>{hh.email}</td>
            <td>{hh.role}</td>
            <td>
              <EditIcon
                id="editWordBtn"
                onClick={() => editHandler(hh._id, hh.email, hh.name)}
              />
            </td>
            <td>
              <DeleteForeverIcon
                onClick={() => deleteHandler(hh.email)}
                id="deleteWSBtn"
              />
            </td>
          </tr>
        </>
      );
    });
  };

  return (
    <React.Fragment>
      <nav className="NavbarItems-ad">
        <NavLink to="/Student">
          <img className=" logo-ad" src={logo} alt="Logo" />
        </NavLink>
        <h1 className="navbar-logo-ad">Admin's Portal</h1>

        <ul className="nav-menu-ad">
          <div className="nav-links-ad">
            <li>
              <NavLink
                to="/admin"
                className="nav-links-ad"
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "rgb(245, 87, 13)",
                  textDecorationThickness: "5px",
                }}
              >
                Home
              </NavLink>
            </li>
          </div>
        </ul>

        <NavLink to="/#">
          {" "}
          <button className="button-ad">Log out</button>
        </NavLink>
      </nav>
      <div className="admin-body" style={{ fontFamily: "Times New Roman" }}>
        {" "}
        ADMINS DETAIL
      </div>
      <div
        style={{
          //  marginRight: "0px",
          paddingTop: "5px",
          // marginBottom: "250px",
          paddingBottom: "36px",
          backgroundColor: "black",
        }}
      >
        {!showText && (
          <div id="tableID" style={{ marginTop: "-6rem" }}>
            <table id="users" key={uuid()}>
              <thead key={uuid()}>
                <tr>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>ROLE</th>
                  <th>EDIT</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>{renderTable()}</tbody>
            </table>
          </div>
        )}
        {showEdit && (
          <div style={{ color: "white" }}>
            <EditWordModal search={search} mail={mail} name={name} />
          </div>
        )}
        <DisapprovedModal
          modalisOpen={errModal}
          // error={error}
          msg="ADMIN DELETED SUCCESSFULLY"
          closeModal={() => seterrModal(false)}
        />
        {showText && (
          <div
            style={{
              borderWidth: "thick",
              borderStyle: "solid",
              borderRadius: "7px",
              borderColor: " white",
              width: "700px",
              height: "400px",
              marginLeft: "360px",
              marginTop: "10px",
            }}
          >
            <h1
              style={{
                marginTop: "7rem",
                textAlign: "center",
                color: "white",
              }}
            >
              NO ADMIN AVAILABLE
            </h1>
            <SentimentVeryDissatisfiedOutlinedIcon
              style={{
                fontSize: "80px",
                marginTop: "2rem",
                marginLeft: "19rem",
                color: "white",
              }}
            />
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default AdminsDetail;

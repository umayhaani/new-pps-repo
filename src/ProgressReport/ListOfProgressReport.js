import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { UEMAIL } from "../Auth";
import { Grade, Subject } from "../../src/DropDown";
import ReactCard from "../components/UIElements/Card";
import "./listOfProgressReport.css";
import { useLocalStorage } from "../LocalStorage/Local";
import logo from "../assets/PPS5.jpeg";
import { USERNAME } from "../Auth";
const ListOfProgressReport = () => {
  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
  const [getList, setgetList] = useState([]);

  useEffect(() => {
    getListOfPR();
  }, []);

  const getListOfPR = async () => {
    let creator = UEMAIL;
    let grade = Grade;
    let subject = Subject;
    try {
      const response = await fetch(
        `http://localhost:5000/getAttemptedWSReport?creator=${creator}&grade=${grade}&subject=${subject}`
      );
      let responseData = await response.json();
      let arr = Array.from(new Set(responseData.report.map((s) => s.title)));
      //console.log(arr, ".........");
      setgetList(arr);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(getList.concat, "///");

  return (
    <>
      <nav className="NavbarItems-PR">
        <NavLink to="/Teacher">
          <img className=" logo-PR" src={logo} alt="Logo" />
        </NavLink>
        <h1 className="navbar-logo-PR">{USERNAME}</h1>

        <ul className="nav-menu-PR ">
          <div className="nav-links-PR">
            <li>
              <NavLink to="/Teacher" className="nav-links-PR">
                Home
              </NavLink>
            </li>
          </div>

          {/* <div className="nav-links-PR">
            <li>
              <NavLink to="/ProgressReport" className="nav-links-PR">
                Progress Report
              </NavLink>
            </li>
          </div> */}
          {/* 
          <div className="nav-links-PR">
            <li>
              <NavLink to="/StudentNotes" className="nav-links-PR">
                Notes
              </NavLink>
            </li>
          </div>


          <div className="nav-links-PR">
            <li>
              <NavLink to="/Student/SpellBee" className="nav-links-PR">
                Spell Bee
              </NavLink>
            </li>
          </div>
         */}
        </ul>

        <NavLink to="/#">
          {" "}
          <button className="button-PR">Log out</button>
        </NavLink>
      </nav>

      <ReactCard getList={getList} />
    </>
  );
};

export default ListOfProgressReport;

// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { UEMAIL } from "../Auth";
// import { Grade, Subject } from "../users/teacher/DropDown";
// import ReactCard from "../components/UIElements/Card";

// const ListOfProgressReport = () => {
//   const [getList, setgetList] = useState([]);

//   useEffect(() => {
//     getListOfPR();
//   }, []);

//   const getListOfPR = async () => {
//     let creator = UEMAIL;
//     let grade = Grade;
//     let subject = Subject;
//     try {
//       const response = await fetch(
//         `http://localhost:5000/getAttemptedWSReport?creator=${creator}&grade=${grade}&subject=${subject}`
//       );
//       let responseData = await response.json();
//       let arr = Array.from(new Set(responseData.report.map((s) => s.title)));
//       //console.log(arr, ".........");
//       setgetList(arr);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   // console.log(getList.concat, "///");

//   return (
//     <>
//       <ReactCard getList={getList} />
//     </>
//   );
// };

// export default ListOfProgressReport;

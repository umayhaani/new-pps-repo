import React, { useState, useEffect } from "react";
// *****************************************
import useForm from "../../../utils/useForm";
// *****************************************
import "./science1.css";
import logo from "../../../assets/PPS5.jpeg";
// import { USERNAME } from "../../../Auth";
// *****************************************
import { TextField } from "@material-ui/core";
import image2 from "../../../assets/contentPic2.jpeg";
import image3 from "../../../assets/contentPic3.jpeg";
// *****************************************
import { NavLink, useHistory } from "react-router-dom";

import { useLocalStorage } from "../../../LocalStorage/Local";
// import bow from "../assets/bow.jpeg";
// import Admin from "./users/admin/Admin";

export let Scienceval;

export let WorksheetType;
const Science1 = () => {
  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
  // const [chapter, setChapter] = useState( () => "");
  const history = useHistory();
  // *****************************************
  const [inputValue, handleChangeForInputs, clear] = useForm();
  // *****************************************

  const [showCodeWin, setShowCodeWin] = useState(false);

  const worksheetOptHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value === "practice worksheet") {
      WorksheetType = e.target.value;
      history.push("/PracticeWS");
    }

    if (e.target.value === "test worksheet") {
      WorksheetType = e.target.value;
      setShowCodeWin(() => true);
    }
  };

  const searchHandler = (e) => {
    console.log("i am called");
    Scienceval = inputValue.search;
    console.log(Scienceval);
    // console.log(inputValue.search)

    if (inputValue.search === "Bones") {
      history.push("/ScienceContent");
    }

    if (inputValue.search === "Skeleton of the Human") {
      history.push("/ScienceContent");
    }

    if (inputValue.search === "Staying safe") {
      history.push("/ScienceContent");
    }
    if (inputValue.search === "Safety At Home") {
      history.push("/ScienceContent");
    }

    //   if   (inputValue.search ===   "Sounds of Letters A to Z"){
    //     history.push("/EnglishContent")
    //   }
  };

  const ScienceHandler1 = (e) => {
    console.log(e.target.value);
    Scienceval = e.target.value;
    console.log(Scienceval);

    if (e.target.value === "Bones") {
      history.push("/ScienceContent");
    }

    if (e.target.value === "Skeleton of the Human") {
      history.push("/ScienceContent");
    }

    // if   (e.target.value === "Alphabet (Aa to Zz capital and small)" ){
    //   history.push("/EnglishContent")
    // }

    // if   (e.target.value === "English1Topic4" ){
    //   history.push("/English1Topic1")
    // }

    // if   (e.target.value === "English1Topic5" ){
    //   history.push("/English1Topic1")
    // }
  };

  const ScienceHandler2 = (e) => {
    console.log(e.target.value);
    Scienceval = e.target.value;
    console.log(Scienceval);

    if (e.target.value === "Staying safe") {
      history.push("/ScienceContent");
    }

    if (e.target.value === "Safety At Home") {
      history.push("/ScienceContent");
    }
  };

  return (
    <React.Fragment>
      <nav className="NavbarItems-student">
        <NavLink to="/Student">
          <img className=" logo-stu" src={logo} alt="Logo" />
        </NavLink>
        <h1 className="navbar-logo-student">{USERNAME}</h1>

        <ul className="nav-menu-student ">
          <div className="nav-links-student">
            <li>
              <NavLink to="/Student" className="nav-links-student">
                Home
              </NavLink>
            </li>
          </div>
          <div className="nav-links-student">
            <li>
              <NavLink to="/StudentGrade" className="nav-links-student">
                Grades
              </NavLink>
            </li>
          </div>
        </ul>

        <NavLink to="/#">
          {" "}
          <button className="button-student">Log out</button>
        </NavLink>
      </nav>

      <React.Fragment>
        <div
          style={{
            marginTop: "50px",
            marginLeft: "250px",
            marginRight: "200px",
            backgroundColor: "white",
          }}
        >
          <div>
            <img style={{ width: "1049px" }} src={image2} alt="image2" />
            <img
              style={{
                paddingTop: "  0px",
                float: "right",
                marginBottom: " 0px",
              }}
              src={image3}
              alt="image3"
            />

            <h1
              style={{
                // textDecoration: "underline",
                paddingTop: " 50px",
                marginLeft: "80px",
                marginBottom: "20px",
                fontWeight: "bolder",
                fontSize: "46px",
                fontStyle: "times new roman",
              }}
            >
              {" "}
              Science Related Topics
            </h1>

            <p
              style={{
                // textAlign:"center",
                //  marginLeft: "20px",
                marginLeft: "80px",
                marginBottom: "20px",
                fontSize: "18px",
                color: "grey",
                fontStyle: "times new roman",
              }}
            >
              Content consists of Lecture Notes, option to download them along
              with related videos to understand topics in more depth.
            </p>

            <p
              style={{
                marginLeft: "80px",
                paddingTop: "30px",
                // marginLeft: "20px",
                fontWeight: "bolder",
                fontSize: "40px",
                fontStyle: "times new roman",
              }}
            >
              I Want To Learn....
            </p>

            <p
              style={{
                marginTop: "20px",
                marginLeft: "80px",
                marginBottom: "20px",
                fontSize: "18px",
                color: "grey",
                fontStyle: "times new roman",
              }}
            >
              Select topic (given Chapter-vise), from below mention dropdowns or
              type <br></br>
              topic name in the search bar to get started.
            </p>
          </div>

          <form className="searchBox-sciences1">
            <TextField
              type="text"
              name="search"
              label="Search Topic"
              // onClick={searchHandler}
              value={inputValue.search || ""}
              onChange={handleChangeForInputs}
            />
          </form>

          <button className="searchBtn-sciences1" onClick={searchHandler}>
            {" "}
            Search{" "}
          </button>
        </div>

        <div
          style={{
            marginRight: "0px",
            paddingTop: "50px",
            paddingBottom: "20px",
            backgroundColor: "white",
          }}
        ></div>
      </React.Fragment>

      {/* // *****************************************  */}
      {/* // *****************************************  */}

      <div className="outerDiv-science1">
        <div className="all-divs-science1">
          <div className="body-div-science1">
            <select
              className="text-science1"
              id="Chapter - 1"
              onChange={ScienceHandler1}
            >
              <option value="ScienceChapter1"> Chapter - 1: Human Body </option>
              <option value="Bones">1.1: Bones </option>
              <option value="Skeleton of the Human">
                1.2: Skeleton of the Human
              </option>
              {/* <option value="Alphabet (Aa to Zz capital and small)">1.3: Alphabet (Aa to Zz capital and small) </option> */}
              {/* <option value="English1Topic4">1.4: Sing the ABC Song (A to Z) </option>
                <option value="English1Topic5">1.5: Listen and Repeat (Names of Objects)</option> */}
            </select>
          </div>

          <div className="body-div-science1">
            <select
              className="text-science1"
              id="Chapter - 2"
              onChange={ScienceHandler2}
            >
              {/* <br> </br>  */}
              <option value="ScienceChapter2">
                {" "}
                Chapter - 2: Health and Safety
              </option>
              <option value="Staying safe">2.1: Staying safe </option>
              <option value="Safety At Home">2.2: Safety At Home </option>
            </select>
          </div>
        </div>
        {/* <img className="bow-english1" src={bow} alt="bow" /> */}
      </div>
    </React.Fragment>
  );
};

export default Science1;

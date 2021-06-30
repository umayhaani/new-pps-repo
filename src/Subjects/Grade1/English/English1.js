import React, { useState, useEffect } from "react";
import useForm from "../../../utils/useForm";
import "./english1.css";
import logo from "../../../assets/PPS5.jpeg";
import { TextField } from "@material-ui/core";
import { NavLink, useHistory } from "react-router-dom";
import image2 from "../../../assets/contentPic2.jpeg";
import image3 from "../../../assets/contentPic3.jpeg";

import { useLocalStorage } from "../../../LocalStorage/Local";

export let Eng1val;

export let WorksheetType;
const English1 = () => {
  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
  const history = useHistory();
  const [inputValue, handleChangeForInputs, clear] = useForm();

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
    Eng1val = inputValue.search;
    console.log(Eng1val);

    if (
      inputValue.search === "Greetings (Good Morning/Afternoon/Evening)" ||
      "Greetings  "
    ) {
      history.push("/EnglishContent");
    }

    if (inputValue.search === "Greeting Teachers and Elders") {
      history.push("/EnglishContent");
    }

    if (
      inputValue.search === "Alphabet (Aa to Zz capital and small)" ||
      "Alphabet"
    ) {
      history.push("/EnglishContent");
    }
    if (inputValue.search === "Small and Capital Letters (A to Z)") {
      history.push("/EnglishContent");
    }

    if (inputValue.search === "Sounds of Letters A to Z") {
      history.push("/EnglishContent");
    }
  };

  const EnglishHandler1 = (e) => {
    console.log(e.target.value);
    Eng1val = e.target.value;
    console.log(Eng1val);

    if (e.target.value === "Greetings (Good Morning/Afternoon/Evening)") {
      history.push("/EnglishContent");
    }

    if (e.target.value === "Greeting Teachers and Elders") {
      history.push("/EnglishContent");
    }

    if (e.target.value === "Alphabet (Aa to Zz capital and small)") {
      history.push("/EnglishContent");
    }
  };

  const EnglishHandler2 = (e) => {
    console.log(e.target.value);
    Eng1val = e.target.value;
    console.log(Eng1val);

    if (e.target.value === "Small and Capital Letters (A to Z)") {
      history.push("/EnglishContent");
    }

    if (e.target.value === "Sounds of Letters A to Z") {
      history.push("/EnglishContent");
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
              English Related Topics
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
          <form className="searchBox-english1">
            <TextField
              type="text"
              name="search"
              label="Search Topic"
              // onClick={searchHandler}
              value={inputValue.search || ""}
              onChange={handleChangeForInputs}
            />
          </form>

          <button className="searchBtn-english1" onClick={searchHandler}>
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

      <div className="outerDiv-english1">
        <div className="all-divs-english1">
          <div className="body-div-english1">
            <select
              className="text-english1"
              id="Chapter - 1"
              onChange={EnglishHandler1}
            >
              <option value="EnglishGrade1Chapter1">
                {" "}
                Chapter - 1: Ice Breaking/ Greetings/ Alphabets{" "}
              </option>
              <option value="Greetings (Good Morning/Afternoon/Evening)">
                1.1: Greetings (Good Morning/Afternoon/Evening){" "}
              </option>
              <option value="Greeting Teachers and Elders">
                1.2: Greeting Teachers and Elders
              </option>
              <option value="Alphabet (Aa to Zz capital and small)">
                1.3: Alphabet (Aa to Zz capital and small){" "}
              </option>
              {/* <option value="English1Topic4">1.4: Sing the ABC Song (A to Z) </option>
                <option value="English1Topic5">1.5: Listen and Repeat (Names of Objects)</option> */}
            </select>
          </div>

          <div className="body-div-english1">
            <select
              className="text-english1"
              id="Chapter - 2"
              onChange={EnglishHandler2}
            >
              {/* <br> </br>  */}
              <option value="EnglishGrade1Chapter2">
                {" "}
                Chapter - 2: The Alphabet Picture Gallery (A to Z)
              </option>
              <option value="Small and Capital Letters (A to Z)">
                2.1: Small and Capital Letters (A to Z){" "}
              </option>
              <option value="Sounds of Letters A to Z">
                2.2: Sounds of Letters A to Z
              </option>
            </select>
          </div>
        </div>
        {/* <img className="bow-english1" src={bow} alt="bow" /> */}
      </div>
    </React.Fragment>
  );
};

export default English1;

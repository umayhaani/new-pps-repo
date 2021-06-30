import React, { useState, useEffect } from "react";
// *****************************************
import useForm from "../../utils/useForm";
// *****************************************
import "./computer4.css";
import logo from "../../assets/PPS5.jpeg";
// import { USERNAME } from "../../../Auth";
// *****************************************
import { TextField } from "@material-ui/core";
// *****************************************
import { NavLink, useHistory } from "react-router-dom";
import image2 from "../../assets/contentPic2.jpeg";
import image3 from "../../assets/contentPic3.jpeg";

import { useLocalStorage } from "../../LocalStorage/Local";
// import bow from "../assets/bow.jpeg";
// import Admin from "./users/admin/Admin";

export let ComputeVal2;

export let WorksheetType;
const Computer4 = () => {
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
    ComputeVal2 = inputValue.search;
    console.log(ComputeVal2);
    // console.log(inputValue.search)

    if (inputValue.search === "Difference between data and information") {
      history.push("/ComputerContent2");
    }

    if (inputValue.search === "Output devices of Computer and example") {
      history.push("/ComputerContent2");
    }

    //   if   (inputValue.search === "Types of Computer" ){
    //     history.push("/ComputerContent")
    //   }
    //   if (inputValue.search ===  "Uses Of Computers" ){
    //     history.push("/ComputerContent")}

    //   if   (inputValue.search ===   "Sounds of Letters A to Z"){
    //     history.push("/EnglishContent")
    //   }
  };

  const ComputerHandler1 = (e) => {
    console.log(e.target.value);
    ComputeVal2 = e.target.value;
    console.log(ComputeVal2);

    if (e.target.value === "Difference between data and information") {
      history.push("/ComputerContent2");
    }

    // if   (e.target.value ===  "Parts of Computer" ){
    //   history.push("/ComputerContent")
    // }

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

  const ComputerHandler2 = (e) => {
    console.log(e.target.value);
    ComputeVal2 = e.target.value;
    console.log(ComputeVal2);

    if (e.target.value === "Output devices of Computer and example") {
      history.push("/ComputerContent2");
    }

    // if   (e.target.value ===   "Uses Of Computers"){
    //   history.push("/ComputerContent")
    // }
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
              Computer Related Topics
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

          <form className="searchBox-computer4">
            <TextField
              type="text"
              name="search"
              label="Search Topic"
              // onClick={searchHandler}
              value={inputValue.search || ""}
              onChange={handleChangeForInputs}
            />
          </form>

          <button className="searchBtn-computer4" onClick={searchHandler}>
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

      <div className="outerDiv-computer4">
        <div className="all-divs-computer4">
          <div className="body-div-computer4">
            <select
              className="text-computer4"
              id="Chapter - 1"
              onChange={ComputerHandler1}
            >
              <option value="Computer45Chapter1">
                {" "}
                Chapter - 1: Introduction To Computer{" "}
              </option>
              <option value="Difference between data and information">
                1.1: Difference between data and information
              </option>
              {/* <option value="Parts of Computer">1.2: Parts of Computer </option> */}
              {/* <option value="Alphabet (Aa to Zz capital and small)">1.3: Alphabet (Aa to Zz capital and small) </option> */}
              {/* <option value="English1Topic4">1.4: Sing the ABC Song (A to Z) </option>
                <option value="English1Topic5">1.5: Listen and Repeat (Names of Objects)</option> */}
            </select>
          </div>

          <div className="body-div-computer4">
            <select
              className="text-computer4"
              id="Chapter - 2"
              onChange={ComputerHandler2}
            >
              {/* <br> </br>  */}
              <option value="ComputerChapter2">
                {" "}
                Chapter - 2: Computer Basics
              </option>
              <option value="Output devices of Computer and example">
                2.1: Output devices of Computer and example
              </option>
              {/* <option value="Uses Of Computers"  >2.2: Uses Of Computers </option>    */}
            </select>
          </div>
        </div>
        {/* <img className="bow-english1" src={bow} alt="bow" /> */}
      </div>
    </React.Fragment>
  );
};

export default Computer4;

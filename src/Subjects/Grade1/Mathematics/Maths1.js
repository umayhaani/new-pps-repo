import React, { useState } from "react";
import "./maths1.css";
import logo from "../../../assets/PPS5.jpeg";
// import { USERNAME } from "../../../Auth";
import { useLocalStorage } from "../../../LocalStorage/Local";
import useForm from "../../../utils/useForm";
import { NavLink, useHistory } from "react-router-dom";
import image2 from "../../../assets/contentPic2.jpeg";
import image3 from "../../../assets/contentPic3.jpeg";
// import bow from "../assets/bow.jpeg";
// import Admin from "./users/admin/Admin";
import { TextField } from "@material-ui/core";
export let Math2valuee;

export let WorksheetType;
const Maths2 = () => {
  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
  // const [chapter, setChapter] = useState( () => "");
  const history = useHistory();
  const [inputValue, handleChangeForInputs, clear] = useForm();
  // *****************************************

  const [showCodeWin, setShowCodeWin] = useState(false);
  const worksheetOptHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value === "practice worksheet") {
      WorksheetType = e.target.value;
      history.push("/ShowWorksheets");
    }

    if (e.target.value === "test worksheet") {
      WorksheetType = e.target.value;
      setShowCodeWin(() => true);
    }
  };

  const searchHandler = (e) => {
    console.log("i am called");
    Math2valuee = inputValue.search;
    console.log(Math2valuee);
    // console.log(inputValue.search)

    if (inputValue.search === "Skip counting by 5s, 10s, 100s") {
      history.push("/MathContent");
    }

    if (inputValue.search === "Ordinal counting") {
      history.push("/MathContent");
    }

    if (inputValue.search === "Multiplication") {
      history.push("/MathContent");
    }
    if (inputValue.search === "Division") {
      history.push("/MathContent");
    }
  };

  const MathHandler1 = (e) => {
    console.log(e.target.value);
    Math2valuee = e.target.value;
    console.log(Math2valuee);

    if (e.target.value === "Skip counting by 5s, 10s, 100s") {
      history.push("/MathContent");
    }

    if (e.target.value === "Ordinal counting") {
      history.push("/MathContent");
    }
  };
  const MathHandler2 = (e) => {
    console.log(e.target.value);
    Math2valuee = e.target.value;
    console.log(Math2valuee);

    if (e.target.value === "Multiplication") {
      history.push("/MathContent");
    }

    if (e.target.value === "Division") {
      history.push("/MathContent");
    }
  };

  return (
    <React.Fragment>
      <nav className="NavbarItems-math2">
        <NavLink to="/Student">
          <img className="logo-math2" src={logo} alt="Logo" />
        </NavLink>
        <h1 className="navbar-logo-math2">{USERNAME}</h1>

        <ul className="nav-menu-math2 ">
          <div className="nav-links-math2">
            <li>
              <NavLink to="/Student" className="nav-links-math2">
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
          {/* <div className="nav-links-student">
            <li>
              <select
                className="navworksheets"
                id="Worksheets"
                onChange={worksheetOptHandler}
              >
                <option
                  value="Worksheets"
                  style={{
                    color: "white",
                    backgroundColor: "#e63c44",
                  }}
                >
                  {" "}
                  Worksheets{" "}
                </option> */}
          {/* <option
                  style={{
                    color: "black",
                    backgroundColor: "rgb(158, 154, 158)",
                  }}
                  value="practice worksheet"
                >
                  {" "}
                  Worksheets{" "}
                </option> */}
          {/* <option
                  style={{
                    color: "white",
                    backgroundColor: "#e63c44",
                  }}
                  value="practice worksheet"
                >
                  Practice Worksheets{" "}
                </option>
                <option
                  style={{
                    color: "white",
                    backgroundColor: "#e63c44",
                  }}
                  value="test worksheet"
                >
                  Test Worksheets{" "}
                </option>
              </select> */}
          {/* </NavLink> */}
          {/* </li>
          </div>

                <div className="nav-links-math2">
                    <li>
                    <NavLink to="/#" className="nav-links-math2">
                    Progress Report
                    </NavLink>
                    </li>
                </div>

                <div className="nav-links-math2">
                    <li>
                    <NavLink to="/#" className="nav-links-math2">
                    Notes
                    </NavLink>
                    </li>
                </div>

                <div className="nav-links-math2">
                    <li>
                    <NavLink to="/Student/SpellBee" className="nav-links-math2">
                    Spell Bee
                    </NavLink>
                    </li>
                </div> */}
        </ul>
        <NavLink to="/#">
          {" "}
          <button className="button-math2">Log out</button>
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
              Math Related Topics
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
          <form className="searchBox-math2">
            <TextField
              type="text"
              name="search"
              label="Search Topic"
              // onClick={searchHandler}
              value={inputValue.search || ""}
              onChange={handleChangeForInputs}
            />
          </form>

          <button className="searchBtn-math2" onClick={searchHandler}>
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

      <div className="outerDiv-math2">
        <div className="all-divs-math2">
          <div className="body-div-math2">
            <select
              className="text-math2"
              id="Chapter - 1"
              onChange={MathHandler1}
            >
              <option value="MathGrade2Chapter1"> Chapter -1: Numbers</option>
              <option value="Skip counting by 5s, 10s, 100s">
                1.1: Skip counting by 5s, 10s, 100s{" "}
              </option>
              <option value="Ordinal counting">1.2: Ordinal counting </option>
              {/* https://www.youtube.com/watch?v=Bg7mcuaw3o0  */}
            </select>
          </div>

          <div className="body-div-math2">
            <select
              className="text-math2"
              id="Chapter - 2"
              onChange={MathHandler2}
            >
              {/* <br> </br>  */}
              <option value="MathGrade2Chapter2">
                {" "}
                Chapter - 2: Arithmetic Operations
              </option>
              <option value="Multiplication">2.1: Multiplication </option>
              <option value="Division">2.2:Division</option>
            </select>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Maths2;

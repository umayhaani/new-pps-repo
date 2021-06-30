import React, { useState } from "react";
import "./english5.css";
import logo from "../../../assets/PPS5.jpeg";
// import { USERNAME } from "../../../Auth";
import { useLocalStorage } from "../../../LocalStorage/Local";
import { NavLink, useHistory } from "react-router-dom";
import useForm from "../../../utils/useForm";
import { TextField } from "@material-ui/core";
import image2 from "../../../assets/contentPic2.jpeg";
import image3 from "../../../assets/contentPic3.jpeg";
// import bow from "../assets/bow.jpeg";
// import Admin from "./users/admin/Admin";
export let Eng5Valueeee;

export let WorksheetType;
const English5 = () => {
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
    Eng5Valueeee = inputValue.search;
    console.log(Eng5Valueeee);
    // console.log(inputValue.search)

    if (inputValue.search === "Synonyms (Similar)") {
      history.push("/EnglishContent2");
    }

    if (inputValue.search === "Antonyms (Opposite)") {
      history.push("/EnglishContent2");
    }

    if (inputValue.search === "Types of Pronouns") {
      history.push("/EnglishContent2");
    }
    if (inputValue.search === "Types of Prepositions") {
      history.push("/EnglishContent2");
    }
  };

  const EnglishHandler1 = (e) => {
    console.log(e.target.value);
    Eng5Valueeee = e.target.value;
    console.log(Eng5Valueeee);

    if (e.target.value === "Synonyms (Similar)") {
      history.push("/EnglishContent2");
    }

    if (e.target.value === "Antonyms (Opposite)") {
      history.push("/EnglishContent2");
    }
  };
  const EnglishHandler2 = (e) => {
    console.log(e.target.value);
    Eng5Valueeee = e.target.value;
    console.log(Eng5Valueeee);

    if (e.target.value === "Types of Pronouns") {
      history.push("/EnglishContent2");
    }

    if (e.target.value === "Types of Prepositions") {
      history.push("/EnglishContent2");
    }
  };

  return (
    <React.Fragment>
      <nav className="NavbarItems-english5">
        <NavLink to="/Student">
          <img className="logo-english5" src={logo} alt="Logo" />
        </NavLink>
        <h1 className="navbar-logo-english5">{USERNAME}</h1>

        <ul className="nav-menu-english5 ">
          <div className="nav-links-english5">
            <li>
              <NavLink to="/Student" className="nav-links-english5">
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
              </select>
              {/* </NavLink> */}
          {/* </li>
          </div>

                <div className="nav-links-english5">
                    <li>
                    <NavLink to="/#" className="nav-links-english5">
                    Progress Report
                    </NavLink>
                    </li>
                </div> */}

          {/* <div className="nav-links-english5">
                    <li>
                    <NavLink to="/#" className="nav-links-english5">
                    Notes
                    </NavLink>
                    </li>
                </div>

                <div className="nav-links-english5">
                    <li>
                    <NavLink to="/Student/SpellBee" className="nav-links-english5">
                    Spell Bee
                    </NavLink>
                    </li> */}
          {/* </div>   */}
        </ul>
        <NavLink to="/#">
          {" "}
          <button className="button-english5">Log out</button>
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

          <form className="searchBox-english5">
            <TextField
              type="text"
              name="search"
              label="Search Topic"
              // onClick={searchHandler}
              value={inputValue.search || ""}
              onChange={handleChangeForInputs}
            />
          </form>

          <button className="searchBtn-english5" onClick={searchHandler}>
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

      <div className="outerDiv-english5">
        <div className="all-divs-english5">
          <div className="body-div-english5">
            <select
              className="text-english5"
              id="Chapter - 1"
              onChange={EnglishHandler1}
            >
              <option value="EnglishGrade5Chapter1">
                {" "}
                Chapter -1: Vocabulary{" "}
              </option>
              <option value="Synonyms (Similar)">
                1.1: Synonyms (Similar){" "}
              </option>
              <option value="Antonyms (Opposite)">
                1.2: Antonyms (Opposite){" "}
              </option>
            </select>
          </div>

          <div className="body-div-english5">
            <select
              className="text-english5"
              id="Chapter - 2"
              onChange={EnglishHandler2}
            >
              <option value="EnglishGrade5Chapter1">
                {" "}
                Chapter -2: Grammar{" "}
              </option>
              <option value="Types of Pronouns">1.1: Types of Pronouns </option>
              <option value="Types of Prepositions">
                1.2: Types of Prepositions{" "}
              </option>
            </select>
          </div>
        </div>
        {/* <img className="bow-english1" src={bow} alt="bow" /> */}
      </div>
    </React.Fragment>
  );
};

export default English5;

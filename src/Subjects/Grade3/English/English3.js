import React, { useState } from "react";
import "./english3.css";
import logo from "../../../assets/PPS5.jpeg";
// import { USERNAME } from "../../../Auth";
import { useLocalStorage } from "../../../LocalStorage/Local";
import { NavLink, useHistory } from "react-router-dom";
import useForm from "../../../utils/useForm";
import image2 from "../../../assets/contentPic2.jpeg";
import image3 from "../../../assets/contentPic3.jpeg";
import { TextField } from "@material-ui/core";
// import bow from "../assets/bow.jpeg";
// import Admin from "./users/admin/Admin";
export let Eng3Va;

export let WorksheetType;
const English3 = () => {
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
    Eng3Va = inputValue.search;
    console.log(Eng3Va);
    // console.log(inputValue.search)

    if (inputValue.search === "Complete English Alphabet Aa to Zz") {
      history.push("/Grade3EnglishContent");
    }

    if (inputValue.search === "Vocabulary (words/meanings)") {
      history.push("/Grade3EnglishContent");
    }

    if (inputValue.search === "Vowels (a-e-i-o-u/sounds)") {
      history.push("/Grade3EnglishContent");
    }

    if (inputValue.search === "Diagraphs/Common Blends") {
      history.push("/Grade3EnglishContent");
    }
  };

  const EnglishHandler1 = (e) => {
    console.log(e.target.value);
    Eng3Va = e.target.value;
    console.log(Eng3Va);

    if (e.target.value === "Complete English Alphabet Aa to Zz") {
      history.push("/Grade3EnglishContent");
    }

    if (e.target.value === "Vocabulary (words/meanings)") {
      history.push("/Grade3EnglishContent");
    }
  };
  const EnglishHandler2 = (e) => {
    console.log(e.target.value);
    Eng3Va = e.target.value;
    console.log(Eng3Va);

    if (e.target.value === "Vowels (a-e-i-o-u/sounds)") {
      history.push("/Grade3EnglishContent");
    }

    if (e.target.value === "Diagraphs/Common Blends") {
      history.push("/Grade3EnglishContent");
    }
  };

  return (
    <React.Fragment>
      <nav className="NavbarItems-english3">
        <NavLink to="/Student">
          <img className="logo-english3" src={logo} alt="Logo" />
        </NavLink>
        <h1 className="navbar-logo-english3">{USERNAME}</h1>

        <ul className="nav-menu-english3 ">
          <div className="nav-links-english3">
            <li>
              <NavLink to="/Student" className="nav-links-english3">
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
                  Worksheets{" "} */}
          {/* </option> */}
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
          {/* </li> */}
          {/* </div> */}

          {/* <div className="nav-links-english3">
                    <li>
                    <NavLink to="/#" className="nav-links-english3">
                    Progress Report
                    </NavLink>
                    </li>
                </div>

                <div className="nav-links-english3">
                    <li>
                    <NavLink to="/#" className="nav-links-english3">
                    Notes
                    </NavLink>
                    </li>
                </div>

                <div className="nav-links-english3">
                    <li>
                    <NavLink to="/Student/SpellBee" className="nav-links-english3">
                    Spell Bee
                    </NavLink>
                    </li>
                </div> */}
        </ul>
        <NavLink to="/#">
          {" "}
          <button className="button-english3">Log out</button>
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

          <form className="searchBox-english3">
            <TextField
              type="text"
              name="search"
              label="Search Topic"
              // onClick={searchHandler}
              value={inputValue.search || ""}
              onChange={handleChangeForInputs}
            />
          </form>

          <button className="searchBtn-english3" onClick={searchHandler}>
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

      <div className="outerDiv-english3">
        <div className="all-divs-english3">
          <div className="body-div-english3">
            <select
              className="text-english3"
              id="Chapter - 1"
              onChange={EnglishHandler1}
            >
              <option value="EnglishGrade3Chapter1">
                {" "}
                Chapter -1: English Alphabet{" "}
              </option>
              <option value="Complete English Alphabet Aa to Zz">
                1.1: Complete English Alphabet Aa to Zz{" "}
              </option>
              <option value="Vocabulary (words/meanings)">
                1.2: Vocabulary (words/meanings){" "}
              </option>
            </select>
          </div>

          <div className="body-div-english3">
            <select
              className="text-english3"
              id="Chapter - 2"
              onChange={EnglishHandler2}
            >
              <option value="EnglishGrade3Chapter1">
                {" "}
                Chapter -2: Pronunciation and Spelling{" "}
              </option>
              <option value="Vowels (a-e-i-o-u/sounds)">
                1.1: Vowels (a-e-i-o-u/sounds){" "}
              </option>
              <option value="Diagraphs/Common Blends">
                1.2: Diagraphs/Common Blends{" "}
              </option>
            </select>
          </div>
        </div>
        {/* <img className="bow-english1" src={bow} alt="bow" /> */}
      </div>
    </React.Fragment>
  );
};

export default English3;

import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
//import ReactCard from "./components/UIElements/Card";
import "./dropdown.css";

export let Grade;
export let Subject;
export let ShowCard;

const DropDown = () => {
  const [showCard, setShowCard] = useState(() => false);
  const history = useHistory();

  const getGrade = (e) => {
    let grade = e.target.text;

    if (grade) {
      switch (grade) {
        case "Grade-1":
          console.log("im grade 1");
          // setGrade("Grade-1")
          Grade = "Grade-1";

          break;
        case "Grade-2":
          console.log("in grade2 thank u");
          Grade = "Grade-2";
          break;
        case "Grade-3":
          console.log("in grade3 thank u");
          Grade = "Grade-3";
          break;
        case "Grade-4":
          console.log("in grade4 thank u");
          Grade = "Grade-4";
          break;
        case "Grade-5":
          console.log("in grade5 thank u");
          Grade = "Grade-5";
          break;
        // case "English":
        //   console.log("English selected");
      }
    }
    // if (subject) {
    //   switch (subject) {
    //     case "Computer":
    //       console.log("Computer selected");
    //       Subject = "Computer";
    //       history.push("/ProgressReportTeacher");

    //       break;
    //     case "English":
    //       console.log("English selected");
    //       Subject = "English";
    //       history.push("/ProgressReportTeacher");
    //       break;
    //     case "Mathematics":
    //       console.log("Mathematics selected");
    //       Subject = "Mathematics";
    //       history.push("/ProgressReportTeacher");
    //       break;
    //     case "Science":
    //       console.log("Science selected");
    //       Subject = "Science";
    //       history.push("/ProgressReportTeacher");
    //       break;
    //   }
    // }
    // if (Subject === "Computer") {

    // }
    //   console.log(Grade);
    // if (e.target.text === "Grade-1") setGrade("Grade-1");
    // else if (e.target.text === "Grade-2") setGrade("Grade-2");
    // else if (e.target.text === "Grade-3") setGrade("Grade-3");
    //else setGrade(e.target.text);
  };
  const getSubject = (e) => {
    let subject = e.target.text;
    if (subject) {
      switch (subject) {
        case "Computer":
          console.log("Computer selected");
          Subject = "Computer";
          history.push("/ListOfProgressReport"); ////////////////

          break;
        case "English":
          console.log("English selected");
          Subject = "English";
          history.push("/ListOfProgressReport");
          setShowCard(() => true);
          ShowCard = showCard;
          //history.push("/ProgressReportTeacher");
          break;
        case "Mathematics":
          console.log("Mathematics selected");
          Subject = "Mathematics";
          history.push("/ListOfProgressReport");
          break;
        case "Science":
          console.log("Science selected");
          Subject = "Science";
          history.push("/ListOfProgressReport");
          break;
      }
    }
  };
  return (
    <>
      {/* <div className="container"> */}
      {/* <div className="logo-container">
          <h3 className="logo">
            Brand<span>Name</span>
          </h3>
        </div> */}

      {/* <div className="nav-btn">
        <div className="nav-links"> */}
      <ul onMouseOver={getGrade} onClick={getSubject}>
        {/* <li className="nav-link">
                <a href="#">Home</a>
              </li> */}
        <li className="nav-link">
          <NavLink to="#">
            Progress Report<i className="fas fa-caret-down"></i>
          </NavLink>
          <div className="dropdown">
            <ul>
              <li className="dropdown-link">
                <NavLink to="#">Grade-1</NavLink>
                <div className="dropdown second">
                  <ul>
                    <li className="dropdown-link">
                      <NavLink to="#">Computer</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#">English</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#">Mathematics</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#">Science</NavLink>
                    </li>

                    <div className="arrow"></div>
                  </ul>
                </div>
              </li>
              <li className="dropdown-link">
                <NavLink to="#">Grade-2</NavLink>
                <div className="dropdown second">
                  <ul>
                    <li className="dropdown-link">
                      <NavLink to="#">Computer</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#">English</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#">Mathematics</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#">Science</NavLink>
                    </li>

                    <div className="arrow"></div>
                  </ul>
                </div>
              </li>
              <li className="dropdown-link">
                <NavLink to="#">
                  Grade-3<i className="fas fa-caret-down"></i>
                </NavLink>
                <div className="dropdown second">
                  <ul>
                    <li className="dropdown-link">
                      <NavLink to="#">Computer</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#">English</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#">Mathematics</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#">Science</NavLink>
                    </li>

                    <div className="arrow"></div>
                  </ul>
                </div>
              </li>
              <li className="dropdown-link">
                <NavLink to="#">Grade-4</NavLink>
                <div className="dropdown second">
                  <ul>
                    <li className="dropdown-link">
                      <NavLink to="#">Computer</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#">English</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#">Mathematics</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#">Science</NavLink>
                    </li>

                    <div className="arrow"></div>
                  </ul>
                </div>
              </li>
              <li className="dropdown-link">
                <NavLink to="#">Grade-5</NavLink>
                <div className="dropdown second">
                  <ul>
                    <li className="dropdown-link">
                      <NavLink to="#">Computer</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#">English</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#">Mathematics</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#">Science</NavLink>
                    </li>

                    <div className="arrow"></div>
                  </ul>
                </div>
              </li>

              <div className="arrow"></div>
            </ul>
          </div>
        </li>
      </ul>

      {/* <li className="nav-link">
                <a href="#">
                  Services<i className="fas fa-caret-down"></i>
                </NavLink>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <a href="#">Link 1</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Link 2</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">
                        Link 3<i className="fas fa-caret-down"></i>
                      </a>
                      <div className="dropdown second">
                        <ul>
                          <li className="dropdown-link">
                            <a href="#">Link 1</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">Link 2</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">Link 3</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">
                              More<i className="fas fa-caret-down"></i>
                            </a>
                            <div className="dropdown second">
                              <ul>
                                <li className="dropdown-link">
                                  <a href="#">Link 1</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">Link 2</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">Link 3</a>
                                </li>
                                <div className="arrow"></div>
                              </ul>
                            </div>
                          </li>
                          <div className="arrow"></div>
                        </ul>
                      </div>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Link 4</a>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                </div>
              </li> */}
      {/* <li className="nav-link">
                <a href="#">About</a>
              </li> */}

      {/* </div> */}

      {/* <div className="log-sign">
            <a href="#" className="btn transparent">
              Log in
            </a>
            <a href="#" className="btn solid">
              Sign up
            </a>
            
          </div> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default DropDown;

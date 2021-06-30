import React, { useState, useEffect } from "react";
import "./studentGrade.css";
import logo from "../../assets/PPS5.jpeg";
import { useLocalStorage } from "../../LocalStorage/Local";
import { NavLink, useHistory } from "react-router-dom";
import image2 from "../../assets/contentPic2.jpeg";
import image3 from "../../assets/contentPic3.jpeg";
import EnterCode from "../../components/UIElements/EnterCode";

export let WorksheetType;

const Subject5 = () => {
  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
  const [showCodeWin, setShowCodeWin] = useState(false);
  const [code, setCode] = useState("im code");

  const [studentContent5, setstudentContent5] = useState();
  useEffect(() => {
    displayStudentContent5();
  }, []);
  const history = useHistory();

  const displayStudentContent5 = () => {
    return setstudentContent5(
      <React.Fragment>
        <div
          style={{
            marginTop: "70px",
            marginLeft: "210px",
            marginRight: "170px",
            backgroundColor: "white",
            paddingBottom: "150px",
          }}
        >
          <div>
            <img style={{ width: "1119px" }} src={image2} alt="image2" />
            <img
              style={{
                paddingTop: "  0px",
                float: "right",
                marginBottom: " 0px",
              }}
              src={image3}
              alt="image3"
            />
            <p
              style={{
                //   textAlign:"center",
                paddingTop: " 50px",
                marginLeft: "20px",
                marginBottom: "20px",
                fontWeight: "bolder",
                fontSize: "46px",
                fontStyle: "times new roman",
              }}
            >
              {" "}
              This Term's Lesson
            </p>
          </div>

          <p
            style={{
              // textDecoration: "underline",
              //   textAlign:"center",
              //   paddingTop: "10px",
              marginLeft: "20px",
              marginBottom: "20px",
              //   paddingBottom: " 50px",
              // fontWeight:"bolder",
              fontSize: "18px",
              color: "grey",
              fontStyle: "times new roman",
            }}
          >
            We’ve got lessons with videos to help you understand topics<br></br>
            in more depth. Pick your Grade and subject to get started!
          </p>

          <p
            style={{
              // textDecoration: "underline",
              //   textAlign:"center",
              paddingTop: "30px",
              marginLeft: "20px",
              //   marginBottom: "20px",
              //   paddingBottom: " 50px",
              fontWeight: "bolder",
              fontSize: "40px",
              //   color:"grey",
              fontStyle: "times new roman",
            }}
          >
            I'am In....
          </p>

          <div style={{ display: "flex" }}>
            <NavLink to="/Subjects1">
              <div className="gradeDiv"> GRADE - 1</div>
            </NavLink>

            <NavLink to="/Subjects2">
              <div className="gradeDiv"> GRADE - 2</div>
            </NavLink>

            <NavLink to="/Subjects3">
              <div className="gradeDiv"> GRADE - 3</div>
            </NavLink>
          </div>

          <div style={{ display: "flex" }}>
            <NavLink to="/Subjects4">
              <div className="gradeDiv"> GRADE - 4</div>
            </NavLink>

            <NavLink to="/Subjects5">
              <div
                className="gradeDiv"
                style={{
                  color: "white",
                  backgroundColor: "#E5640F",
                  border: "4px solid #c54f01",
                }}
              >
                {" "}
                GRADE - 5
              </div>
            </NavLink>
          </div>
          <p
            style={{
              paddingTop: "50px",
              marginLeft: "20px",
              fontWeight: "bolder",
              fontSize: "34px",
              fontStyle: "times new roman",
            }}
          >
            Subjects...!
          </p>
          <div style={{ display: "flex" }}>
            <div
              id="English1"
              style={{
                marginTop: "50px",
                marginLeft: "20px",
                width: "250px",
                height: "130px",
                backgroundColor: "yellow",
              }}
            >
              <NavLink to="/English45">
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "bolder",
                    marginTop: "40px",
                    fontSize: "30px",
                    color: "black",
                  }}
                >
                  Go
                </p>
              </NavLink>

              <div
                style={{
                  marginTop: "50px",
                  // marginLeft:"20px",
                  // width:"250px",
                  height: "100px",
                  backgroundColor: "rgb(230, 229, 229)",
                }}
              >
                <p
                  style={{
                    paddingTop: "20px",
                    marginLeft: "10px",
                    fontWeight: "bolder",
                  }}
                >
                  English
                </p>

                <p
                  style={{
                    paddingTop: "30px",
                    marginLeft: "10px",
                  }}
                >
                  Grade 5
                </p>
              </div>
            </div>

            <div
              id="Computer1"
              style={{
                marginTop: "50px",
                marginLeft: "20px",
                width: "250px",
                height: "130px",
                backgroundColor: "#E5640F",
              }}
            >
              <NavLink to="/Computer45">
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "bolder",
                    marginTop: "40px",
                    fontSize: "30px",
                    color: "black",
                  }}
                >
                  Go
                </p>
              </NavLink>
              <div
                style={{
                  marginTop: "50px",
                  // marginLeft:"20px",
                  // width:"250px",
                  height: "100px",
                  backgroundColor: "rgb(230, 229, 229)",
                }}
              >
                <p
                  style={{
                    paddingTop: "20px",
                    marginLeft: "10px",
                    fontWeight: "bolder",
                  }}
                >
                  Computer
                </p>
                <p
                  style={{
                    paddingTop: "30px",
                    marginLeft: "10px",
                  }}
                >
                  {" "}
                  Grade 5
                </p>
              </div>
            </div>

            <div
              id="Mathematics1"
              style={{
                marginTop: "50px",
                marginLeft: "20px",
                width: "250px",
                height: "130px",
                backgroundColor: "crimson",
              }}
            >
              <NavLink to="/Maths45">
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "bolder",
                    marginTop: "40px",
                    fontSize: "30px",
                    color: "black",
                  }}
                >
                  Go
                </p>
              </NavLink>
              <div
                style={{
                  marginTop: "50px",
                  // marginLeft:"20px",
                  // width:"250px",
                  height: "100px",
                  backgroundColor: "rgb(230, 229, 229)",
                }}
              >
                <p
                  style={{
                    paddingTop: "20px",
                    marginLeft: "10px",
                    fontWeight: "bolder",
                  }}
                >
                  Mathematics
                </p>
                <p
                  style={{
                    paddingTop: "30px",
                    marginLeft: "10px",
                  }}
                >
                  {" "}
                  Grade 5
                </p>
              </div>
            </div>
          </div>

          <div id="Science1" style={{ display: "flex" }}>
            <div
              style={{
                marginTop: "120px",
                marginLeft: "20px",
                width: "250px",
                height: "130px",
                backgroundColor: "#E5640F",
              }}
            >
              <NavLink to="/Science45">
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "bolder",
                    marginTop: "40px",
                    fontSize: "30px",
                    color: "black",
                  }}
                >
                  Go
                </p>
              </NavLink>
              <div
                style={{
                  marginTop: "50px",
                  // marginLeft:"20px",
                  // width:"250px",
                  height: "100px",
                  backgroundColor: "rgb(230, 229, 229)",
                }}
              >
                <p
                  style={{
                    paddingTop: "20px",
                    marginLeft: "10px",
                    fontWeight: "bolder",
                  }}
                >
                  Science
                </p>
                <p
                  style={{
                    paddingTop: "30px",
                    marginLeft: "10px",
                  }}
                >
                  {" "}
                  Grade 5
                </p>
              </div>
            </div>

            <div
              id="Islamiyat1"
              style={{
                marginTop: "120px",
                marginLeft: "20px",
                width: "250px",
                height: "130px",
                backgroundColor: "crimson",
              }}
            >
              <NavLink to="/Islamiyat45">
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "bolder",
                    marginTop: "40px",
                    fontSize: "30px",
                    color: "black",
                  }}
                >
                  Go
                </p>
              </NavLink>
              <div
                style={{
                  marginTop: "50px",
                  // marginLeft:"20px",
                  // width:"250px",
                  height: "100px",
                  backgroundColor: "rgb(230, 229, 229)",
                }}
              >
                <p
                  style={{
                    paddingTop: "20px",
                    marginLeft: "10px",
                    fontWeight: "bolder",
                  }}
                >
                  Islamiyat
                </p>
                <p
                  style={{
                    paddingTop: "30px",
                    marginLeft: "10px",
                  }}
                >
                  {" "}
                  Grade 5
                </p>
              </div>
            </div>

            <div
              id="Urdu1"
              style={{
                marginTop: "120px",
                marginLeft: "20px",
                width: "250px",
                height: "130px",
                backgroundColor: "yellow",
              }}
            >
              <NavLink to="/Urdu45">
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "bolder",
                    marginTop: "40px",
                    fontSize: "30px",
                    color: "black",
                  }}
                >
                  Go
                </p>
              </NavLink>
              <div
                style={{
                  marginTop: "50px",
                  // marginLeft:"20px",
                  // width:"250px",
                  height: "100px",
                  backgroundColor: "rgb(230, 229, 229)",
                }}
              >
                <p
                  style={{
                    paddingTop: "20px",
                    marginLeft: "10px",
                    fontWeight: "bolder",
                  }}
                >
                  Urdu
                </p>
                <p
                  style={{
                    paddingTop: "30px",
                    marginLeft: "10px",
                  }}
                >
                  {" "}
                  Grade 5
                </p>
              </div>
            </div>
          </div>
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
    );
  };

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

  const closingModal = () => {
    setShowCodeWin(false);
  };
  // const closingModal = () => {
  //   setShowCodeWin(false);
  // };
  // const onChangeHandler1 = (e) => {
  //   console.log(e.target.value);

  //   if (e.target.value === "English1") {
  //     history.push("/English");
  //   }

  //   if (e.target.value === "Urdu1") {
  //     history.push("/Urdu");
  //   }
  //   if (e.target.value === "Computer1") {
  //     history.push("/Computer");
  //   }

  //   if (e.target.value === "Mathematics1") {
  //     history.push("/Maths");
  //   }

  //   if (e.target.value === "Science1") {
  //     history.push("/Science");
  //   }

  //   if (e.target.value === "Islamiyat1") {
  //     history.push("/Islamiyat");
  //   }
  // };

  // const onChangeHandler2 = (e) => {
  //   console.log(e.target.value);

  //   if (e.target.value === "English2") {
  //     history.push("/English");
  //   }

  //   if (e.target.value === "Computer2") {
  //     history.push("/Computer");
  //   }

  //   if (e.target.value === "Urdu2") {
  //     history.push("/Urdu");
  //   }

  //   if (e.target.value === "Mathematics2") {
  //     history.push("/Maths");
  //   }

  //   if (e.target.value === "Science2") {
  //     history.push("/Science");
  //   }

  //   if (e.target.value === "Islamiyat2") {
  //     history.push("/Islamiyat");
  //   }
  // };

  // const onChangeHandler3 = (e) => {
  //   console.log(e.target.value);

  //   if (e.target.value === "English3") {
  //     history.push("/English3");
  //   }

  //   if (e.target.value === "Computer3") {
  //     history.push("/Computer");
  //   }

  //   if (e.target.value === "Urdu3") {
  //     history.push("/Urdu");
  //   }

  //   if (e.target.value === "Mathematics3") {
  //     history.push("/Maths");
  //   }

  //   if (e.target.value === "Science3") {
  //     history.push("/Science");
  //   }

  //   if (e.target.value === "Islamiyat3") {
  //     history.push("/Islamiyat");
  //   }
  // };

  // const onChangeHandler4 = (e) => {
  //   console.log(e.target.value);

  //   if (e.target.value === "English4") {
  //     history.push("/English45");
  //   }

  //   if (e.target.value === "Computer4") {
  //     history.push("/Computer45");
  //   }

  //   if (e.target.value === "Urdu4") {
  //     history.push("/Urdu45");
  //   }

  //   if (e.target.value === "Mathematics4") {
  //     history.push("/Maths45");
  //   }

  //   if (e.target.value === "Science4") {
  //     history.push("/Science45");
  //   }

  //   if (e.target.value === "Islamiyat4") {
  //     history.push("/Islamiyat45");
  //   }
  // };

  // const onChangeHandler5 = (e) => {
  //   console.log(e.target.value);

  //   if (e.target.value === "English5") {
  //     history.push("/English45");
  //   }

  //   if (e.target.value === "Urdu5") {
  //     history.push("/Urdu45");
  //   }

  //   if (e.target.value === "Computer5") {
  //     history.push("/Computer45");
  //   }

  //   if (e.target.value === "Mathematics5") {
  //     history.push("/Maths45");
  //   }

  //   if (e.target.value === "Science5") {
  //     history.push("/Science45");
  //   }

  //   if (e.target.value === "Islamiyat5") {
  //     history.push("/Islamiyat45");
  //   }
  // };

  const progressOptHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value === "SubjectWise Progress")
      history.push("/ChooseSubject");
    if (e.target.value === "OverAll Progress") history.push("/SelectSubject");
  };

  return (
    <div
      style={{
        marginTop: "",
        background: " linear-gradient(to bottom right, #ff4382, #ffce00)",
        //   paddingBottom:"30px",
      }}
    >
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
                <NavLink to="/StudentNotes" className="nav-links-student">
                  Notes
                </NavLink>
              </li>
            </div>
            <div className="nav-links-student">
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
                    WORKSHEETS{" "}
                  </option>

                  <option
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
              </li>
            </div>

            <div className="nav-links-student">
              <li>
                <NavLink to="/DemoSpellBee" className="nav-links-student">
                  Spell Bee
                </NavLink>
              </li>
            </div>

            <div className="nav-links-student">
              <li>
                <select
                  className="navworksheets"
                  id="Worksheets"
                  onChange={progressOptHandler}
                >
                  <option
                    value="Worksheets"
                    style={{
                      color: "white",
                      backgroundColor: "#e63c44",
                    }}
                  >
                    {" "}
                    PROGRESS REPORT{" "}
                  </option>

                  <option
                    style={{
                      color: "white",
                      backgroundColor: "#e63c44",
                    }}
                    value="SubjectWise Progress"
                  >
                    SubjectWise Progress{" "}
                  </option>
                  <option
                    style={{
                      color: "white",
                      backgroundColor: "#e63c44",
                    }}
                    value="OverAll Progress"
                  >
                    OverAll Progress{" "}
                  </option>
                </select>
                {/* </NavLink> */}
              </li>
            </div>
          </ul>

          <NavLink to="/#">
            {" "}
            <button className="button-student">Log out</button>
          </NavLink>
        </nav>

        <div
          style={{
            marginRight: "0px",
            paddingTop: "20px",
            paddingBottom: "20px",
            backgroundColor: "white",
          }}
        >
          {" "}
        </div>

        <div>{studentContent5}</div>

        <EnterCode
          openModal={showCodeWin}
          closeModal={closingModal}
          code={code}
        />
      </React.Fragment>
    </div>
  );
};

export default Subject5;

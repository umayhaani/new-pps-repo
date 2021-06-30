import React from "react";

import { NavLink } from "react-router-dom";

import grades from "./assets/grades.jpeg";
import subjects from "./assets/subjetss.jpeg";
import services from "./assets/servicess.jpeg";
import "./about.css";

export let USERNAME;

const About = () => {
  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: "black",
          marginTop: "20px",
          paddingBottom: "10px",
        }}
      >
        <p className="pps-About"> PPS </p>

        <nav
          style={{
            paddingTop: "5px",
            marginTop: "5px",
            paddingLeft: "15px",
            fontSize: "32px",
            fontWeight: "bolder",
            marginLeft: "200px",
            width: "1000px",
            height: "50px",
            // backgroundColor:"#19152c",
            backgroundColor: "#fff",
            //  color:"#fff"
          }}
        >
          <ul className="nav2-menu-About">
            <NavLink
              to="/teacher"
              style={{
                fontSize: "32px",
                marginRight: "270px",
                paddingTop: "10px",
                marginLeft: "0px",
                color: "#000",
                textDecoration: "none",
                listStyle: "none",
              }}
            >
              Learning
            </NavLink>

            <NavLink to="/" className="nav2-links-About">
              Home
            </NavLink>

            <NavLink
              to="/About"
              className="nav2-links-About"
              style={{
                textDecoration: "underline",
                textDecorationColor: "rgb(245, 87, 13)",
                textDecorationThickness: "5px",
              }}
            >
              About
            </NavLink>

            <NavLink to="/Contact" className="nav2-links-About">
              Contact
            </NavLink>

            <NavLink to="/Auth">
              {" "}
              <button className="button-About" style={{ marginLeft: "50px" }}>
                Register
              </button>
            </NavLink>
          </ul>
        </nav>
        {/* </div> */}
      </div>

      <p
        style={{
          marginTop: "45px",
          fontSize: "38px",
          fontWeight: "bolder",
          textAlign: "center",
          color: "rgb(20, 20, 47)",
        }}
      >
        What We Provide...
      </p>

      {/********** GRADES ***********/}
      <div
        style={{
          display: "flex",
        }}
      >
        <img
          style={{
            marginTop: "45px",
            width: "700px",
            height: "470px",
            marginLeft: "40px",
          }}
          className="fade-in-image"
          src={grades}
          alt="gradesImage"
        />

        <div className="card-container1-About">
          <div className="card-content-About">
            <div className="card-title-About">
              <h1>GRADES </h1>
            </div>
            <div className="card-body-About">
              <p>
                {" "}
                System is designed for school going kids and includes Grades
                1-5. It follows the Paistan's Curriculum of Federal Board.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/********** SUBJECTS ***********/}
      <div
        style={{
          display: "flex",
        }}
      >
        <div className="card-container2-About">
          <div className="card-content-About">
            <div className="card-title-About">
              <h1>SUBJECTS </h1>
            </div>
            <div className="card-body-About">
              <p>
                {" "}
                To facilitate school going kids (students) of grades 1-5, system
                is offering different subjects including English, Mathematics,
                Urdu, Computer, and Sciene{" "}
              </p>
            </div>
          </div>
        </div>

        <img
          style={{
            marginTop: "120px",
            width: "650px",
            height: "400px",
            marginLeft: "200px",
          }}
          // className="fade-in-image"
          src={subjects}
          alt="subjectsImage"
        />
      </div>

      {/********** SERVICES ***********/}
      <div
        style={{
          display: "flex",
        }}
      >
        <img
          style={{
            marginTop: "120px",
            width: "650px",
            height: "630px",
            marginLeft: "40px",
          }}
          // className="fade-in-image"
          src={services}
          alt="servicesImage"
        />

        <div className="card-container3-About">
          <div className="card-content-About">
            <div className="card-title-About">
              <h1>SERVICES </h1>
            </div>
            <div className="card-body-About">
              <p style={{ paddingBottom: "20px" }}>
                {" "}
                Website provides the facility of different services; provide the
                content in three different forms, i.e. LECTURE NOTES, VIDEO
                LECTURES and WORKSHEETS. Students can download the Leture Notes
                and Video Lectures as well. There is the Progress Report part
                which shows students their progress.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;

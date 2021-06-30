import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "./assets/PPS5.jpeg";
import "./contact.css";

export let USERNAME;

const Contact = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: "black",
          marginTop: "20px",
          paddingBottom: "10px",
        }}
      >
        <p className="pps-Contact"> PPS </p>

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
          <ul className="nav2-menu-Contact">
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

            <NavLink to="/" className="nav2-links-Contact">
              Home
            </NavLink>

            <NavLink to="/About" className="nav2-links-Contact">
              About
            </NavLink>

            <NavLink
              to="/Contact"
              className="nav2-links-Contact"
              style={{
                textDecoration: "underline",
                textDecorationColor: "rgb(245, 87, 13)",
                textDecorationThickness: "5px",
              }}
            >
              Contact
            </NavLink>

            <NavLink to="/Auth">
              {" "}
              <button className="button-Contact" style={{ marginLeft: "50px" }}>
                Register
              </button>
            </NavLink>
          </ul>
        </nav>
        {/* </div> */}
      </div>

      {/* <div className= "contactInfo">
    <div style={{
      marginTop: "5px",
     marginLeft:"5px",
     width: "370px",
     height:"370px",
     border:"5px solid black",
    }}></div>
</div> */}

      <p>
        <p
          style={{
            marginTop: "45px",
            fontSize: "38px",
            fontWeight: "bolder",
            textAlign: "center",
            color: "rgb(20, 20, 47)",
          }}
        >
          Contact Us
        </p>

        <p
          style={{
            marginTop: "10px",
            fontSize: "18px",
            textAlign: "center",
            color: "grey",
          }}
        >
          Have any questions? We'd love to hear from you :){" "}
        </p>
      </p>

      <div className="all-divs">
        {/* **********Lecture Notes **************8 */}
        {/* <NavLink to="/LectureNotes"  > */}
        <div className="card-container1-Contact">
          {/* <div className="image-container-Contact" */}
          {/* > */}
          {/* <img src={lecturenote} alt='image' /> */}
          {/* </div> */}

          <div className="card-content-Contact">
            <div className="card-title-Contact">
              <h3>Developer 1 </h3>
            </div>

            <div className="card-body-Contact">
              <p>Email:</p>
              <p> developer1@gmail.com</p>

              <p style={{ marginTop: "30px" }}>Contact:</p>
              <p style={{ marginTop: "5px" }}> +92 339 7118850</p>
            </div>
          </div>
          {/* <div className="btn-Contact"> */}
          {/* <button className="btn-Contact"> */}
          {/* <NavLink to="/LectureNotes"  > */}
          {/* GO.... */}
          {/* </NavLink>   */}

          {/* </button> */}
          {/* </div> */}
        </div>
        {/* // </NavLink>   */}

        {/* **********Video Lectures************8 */}
        {/* <NavLink to="/UploadVideo"  >  */}
        <div className="card-container2-Contact">
          {/* <div className="image-container-Contact">
              <img src={videolecture} alt='image' />
              </div> */}

          <div className="card-content-Contact">
            <div className="card-title-Contact">
              <h3>Supervisor</h3>
            </div>

            <div className="card-body-Contact">
              <p>Email:</p>
              <p> supervisor@gmail.com</p>

              <p style={{ marginTop: "30px" }}>Contact:</p>
              <p style={{ marginTop: "5px" }}> +92 229 8552207</p>
            </div>
          </div>
          {/* <div className="btn-Contact">
                          <button className="btn-Contact"> */}
          {/* <NavLink to="/UploadVideo"  > */}
          {/* GO.... */}
          {/* </NavLink>   */}

          {/* </button> */}
          {/* </div> */}
        </div>
        {/* </NavLink>   */}

        {/* **********Worksheets************8 */}
        {/* <NavLink to="/CreateWorksheets"  > */}
        <div
          className="card-container1-Contact"
          style={{
            border: "6px solid rgb(83, 130, 151)",

            boxShadow: "0px 0px 30px -5px rgb(83, 130, 151)",
          }}
        >
          {/* <div className="image-container-Contact">
              <img src={worksheets} alt='image' />
              </div> */}

          <div className="card-content-Contact">
            <div className="card-title-Contact">
              <h3>Developer 2</h3>
            </div>

            <div className="card-body-Contact">
              <p>Email:</p>
              <p> developer2@gmail.com</p>

              <p style={{ marginTop: "30px" }}>Contact:</p>
              <p style={{ marginTop: "5px" }}> +92 557 1225580</p>
            </div>
          </div>
          {/* <div className="btn-Contact">
                          <button className="btn-Contact"> */}
          {/* <NavLink to="/CreateWorksheets"  > */}
          {/* GO....  */}
          {/* </NavLink>   */}

          {/* </button> */}
          {/* </div> */}
        </div>
        {/* </NavLink>   */}
      </div>
    </React.Fragment>
  );
};

export default Contact;

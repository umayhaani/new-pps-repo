import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "./assets/PPS5.jpeg";
import slide1 from "./assets/slide1.jpeg";
import slide2 from "./assets/Slide2.jpeg";
import slide3 from "./assets/Slide3.jpeg";
import slide4 from "./assets/slide4.jpeg";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from "mdbreact";

import "./main.css";

export let USERNAME;

const Main = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      {/* <div style={{
        height:"5px",
        backgroundColor:"rgb(245, 87, 13)",
        width:"100%",
      }}></div>  */}

      {/* <nav className="NavbarItems-Main">
        <NavLink to="/">
          <img className=" logo-Main" src={logo} alt="Logo" />
        </NavLink> */}
      {/* <h1 className="navbar-logo-Main">{USERNAME}</h1> */}

      {/* <ul className="nav-menu-Main "> */}
      {/* <div className="nav-links-Main">
            <li >
            <p>
              <NavLink to="/" className="nav-links-Main" style={{ textDecoration: "underline overline"}}>
                Home
              </NavLink>
              </p>
            </li>
          </div> */}

      {/* <div className="nav-links-Main">
            <li>
              <NavLink to="/About" className="nav-links-Main">
                About
              </NavLink>
            </li>
          </div> */}

      {/* <div className="nav-links-Main">
            <li>
              <NavLink to="/Contact" className="nav-links-Main">
                Contact
              </NavLink>
            </li>
          </div> */}

      {/* <NavLink to="/Auth">
          {" "}
          <button className="button-Main" style={{ marginLeft:"50px"}} >Register</button>
        </NavLink>   */}
      {/* </ul> */}

      {/* </nav> */}

      {/* <div style={{
        height:"5px",
        backgroundColor:"rgb(245, 87, 13)",
        width:"100%",
      }}></div>  */}
      <div
        style={{
          backgroundColor: "black",
          paddingTop: "40px",
          marginTop: "20px",
          paddingBottom: "10px",
        }}
      >
        <p style={{ marginLeft: "210px" }} className="pps-Main">
          {" "}
          Pakistan Primary School{" "}
        </p>

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
          <ul className="nav2-menu-Main">
            <NavLink
              to="/#"
              style={{
                fontFamily: "Helvetica",
                fontSize: "32px",
                marginRight: "270px",
                marginLeft: "0px",
                color: "#000",
                textDecoration: "none",
                listStyle: "none",
              }}
            >
              Learning
            </NavLink>

            <NavLink
              to="/"
              className="nav2-links-Main"
              style={{
                textDecoration: "underline",
                textDecorationColor: "rgb(245, 87, 13)",
                textDecorationThickness: "5px",
              }}
            >
              Home
            </NavLink>

            <NavLink to="/About" className="nav2-links-Main">
              About
            </NavLink>

            <NavLink to="/Contact" className="nav2-links-Main">
              Contact
            </NavLink>

            <NavLink to="/Auth">
              {" "}
              <button className="button-Main" style={{ marginLeft: "50px" }}>
                Register
              </button>
            </NavLink>
          </ul>
        </nav>
        {/* </div> */}
      </div>

      <div className="outerDiv-Main">
        <MDBContainer>
          <MDBCarousel
            activeItem={1}
            length={4}
            showControls={false}
            showIndicators={false}
            className="z-depth-1"
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    style={{
                      // marginRight:"390px",
                      //  paddingTop:"50px",
                      height: "580px",
                      width: "1020px",
                      paddingBottom: "5px",
                      default: { duration: 2 },
                    }}
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                  />
                  <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                  <h1
                    className="h3-responsive"
                    style={{
                      fontFamily: "Cursive",
                      color: "white",
                      position: "absolute",
                      top: "130px",
                      left: " 50px",
                      fontSize: "44px",
                    }}
                  >
                    PPS SCHOOL SYSTEM
                  </h1>
                  <p
                    style={{
                      fontFamily: "Cursive",
                      color: "white",
                      position: "absolute",
                      top: "190px",
                      left: " 50px",
                      fontSize: "34px",
                      fontWeight: "bolder",
                    }}
                  >
                    A Learning Platform
                  </p>
                  <p
                    style={{
                      fontFamily: "Cursive",
                      color: "white",
                      position: "absolute",
                      top: "240px",
                      left: " 50px",
                      fontSize: "34px",
                      fontWeight: "bolder",
                    }}
                  >
                    {" "}
                    For Everyone...
                  </p>
                </MDBCarouselCaption>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    style={{
                      // marginRight:"390px",
                      // paddingTop:"50px",
                      height: "580px",
                      width: "1020px",
                      default: { duration: 2 },
                    }}
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                  />
                  <MDBMask overlay="black-strong" />
                </MDBView>
                <MDBCarouselCaption>
                  <h1
                    className="h3-responsive"
                    style={{
                      ontFamily: "Cursive",
                      color: "white",
                      position: "absolute",
                      top: "200px",
                      left: " 120px",
                      fontSize: "44px",
                    }}
                  >
                    PPS SCHOOL SYSTEM
                  </h1>
                  <p
                    style={{
                      ontFamily: "Cursive",
                      color: "white",
                      position: "absolute",
                      top: "250px",
                      left: " 120px",
                      fontSize: "34px",
                      fontWeight: "bolder",
                    }}
                  >
                    A Learning Platform
                  </p>
                  <p
                    style={{
                      ontFamily: "Cursive",
                      color: "white",
                      position: "absolute",
                      top: "290px",
                      left: " 120px",
                      fontSize: "34px",
                      fontWeight: "bolder",
                    }}
                  >
                    {" "}
                    For Everyone...
                  </p>
                </MDBCarouselCaption>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                    style={{
                      // marginRight:"390px",
                      // paddingTop:"50px",
                      height: "580px",
                      width: "1020px",
                      default: { duration: 2 },
                    }}
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                  />
                  <MDBMask overlay="black-slight" />
                </MDBView>
                <MDBCarouselCaption>
                  <h1
                    className="h3-responsive"
                    style={{
                      fontFamily: "Cursive",
                      color: "black",
                      position: "absolute",
                      top: "180px",
                      left: " 130px",
                      fontSize: "44px",
                    }}
                  >
                    PPS SCHOOL SYSTEM
                  </h1>
                  <p
                    style={{
                      fontFamily: "Cursive",
                      color: "black",
                      position: "absolute",
                      top: "230px",
                      left: " 130px",
                      fontSize: "34px",
                    }}
                  >
                    A Learning Platform
                  </p>
                  <p
                    style={{
                      fontFamily: "Cursive",
                      color: "black",
                      position: "absolute",
                      top: "270px",
                      left: " 130px",
                      fontSize: "34px",
                    }}
                  >
                    {" "}
                    For Everyone...
                  </p>
                </MDBCarouselCaption>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="4">
                <MDBView>
                  <img
                    style={{
                      // marginRight:"390px",
                      // paddingTop:"50px",
                      height: "580px",
                      width: "1020px",
                      default: { duration: 2 },
                    }}
                    className="d-block w-100"
                    src={slide4}
                    alt="Second slide"
                  />
                  <MDBMask overlay="black-strong" />
                </MDBView>
                <MDBCarouselCaption>
                  <h1
                    className="h3-responsive"
                    style={{
                      fontFamily: "Cursive",
                      color: "white",
                      position: "absolute",
                      top: "110px",
                      left: " 400px",
                      fontSize: "44px",
                    }}
                  >
                    PPS SCHOOL SYSTEM
                  </h1>
                  <p
                    style={{
                      fontFamily: "Cursive",
                      color: "white",
                      position: "absolute",
                      top: "160px",
                      left: " 400px",
                      fontSize: "34px",
                      fontWeight: "bolder",
                    }}
                  >
                    A Learning Platform
                  </p>
                  <p
                    style={{
                      fontFamily: "Cursive",
                      color: "white",
                      position: "absolute",
                      top: "200px",
                      left: " 400px",
                      fontSize: "34px",
                      fontWeight: "bolder",
                    }}
                  >
                    {" "}
                    For Everyone...
                  </p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
      </div>

      <div className="mission">
        <h1
          style={{
            textAlign: "center",
            marginTop: "30px",
            // fontSize:"34px",
            fontWeight: "bolder",
            color: "#271d52",
            fontFamily: "Cursive",
          }}
        >
          Our Mission <br></br>
        </h1>

        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "22px",
            fontFamily: "Cursive",
            // fontWeight:"bolder",
            paddingBottom: "20px",
            color: "rgb(91, 100, 104)",
          }}
        >
          PPS's mission is to provide free of cost high quality early education
          and all services
          <br></br>
          and means of eduation/learning i.e. Video Lectures, Lecture Notes
          <br></br>
          and Worksheets under single platform.
          <br></br>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;

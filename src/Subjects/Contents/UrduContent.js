import React, { useState, useEffect } from "react";
import "./contents.css";
import logo from "../../assets/PPS5.jpeg";
// import { USERNAME } from "../Auth";
import { useLocalStorage } from "../../LocalStorage/Local";
import { NavLink, Link, useHistory } from "react-router-dom";
import ReactPlayer from "react-player";
import image2 from "../../assets/contentPic2.jpeg";
import image3 from "../../assets/contentPic3.jpeg";

import pic1 from "../../assets/Urdu_Ch1_Topic1.JPG";
import pic2 from "../../assets/Urdu_Ch2_Topic1.JPG";

import UrduChapter1Topic1 from "../../assets/LECTURE NOTES/Urdu_Chapter1_Topic1.docx";
import UrduChapter2Topic1 from "../../assets/LECTURE NOTES/Urdu_Chapter2_Topic1.docx";

import { Urduval } from "../Grade1/Urdu/Urdu1";

export let WorksheetType;

const UrduContent = () => {
  const [content, setContent] = useState();
  useEffect(() => {
    displayContent();
  }, []);

  const history = useHistory();

  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
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

  const displayContent = () => {
    //"""""""""""""""""""Urdu CLASS1"""""""""""""""""""""""""""""""""
    console.log(Urduval);
    if (Urduval === "hamd") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
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
                  textDecoration: "underline",
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note
              </h1>

              <a className="button-download" href={UrduChapter1Topic1} download>
                Click to download
              </a>

              <img
                style={{ marginTop: "10px", marginLeft: "200px" }}
                src={pic1}
                alt="pic1"
              />
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
          {/* <h1
            style={{
              textDecoration: "underline",
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=zRvUrCBE0pY"
            />
          </div> */}
        </React.Fragment>
      );
    }
    console.log(content);

    if (Urduval === "Naat") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
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
                  textDecoration: "underline",
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note
              </h1>

              <a className="button-download" href={UrduChapter2Topic1} download>
                Click to download
              </a>
            </div>

            <img
              style={{ marginTop: "30px", marginLeft: "200px" }}
              src={pic2}
              alt="pic2"
            />
            {/* <img  style = {{ }} src={image2} alt="image2" /> */}
          </div>
          <div
            // className="English1Topic1"
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          {/* <h1
            style={{
              textDecoration: "underline",
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=dva-f_btvlk"
            />
          </div>{" "} */}
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    }
    console.log(content);

    // if (Scienceval === "Staying safe") {
    //   return setContent(
    //     <React.Fragment>
    //       <div
    //         style={{
    //           marginTop: "70px",
    //           marginLeft: "250px",
    //           marginRight: "200px",
    //           backgroundColor: "white",
    //         }}
    //       >
    //         <div>
    //           <img style={{}} src={image2} alt="image2" />
    //           <img
    //             style={{
    //               paddingTop: "  0px",
    //               float: "right",
    //               marginBottom: " 0px",
    //             }}
    //             src={image3}
    //             alt="image3"
    //           />
    //           <h1
    //             style={{
    //               textDecoration: "underline",
    //               paddingTop: " 30px",
    //               marginLeft: "80px",
    //               marginBottom: "20px",
    //             }}
    //           >
    //             {" "}
    //             Lecture Note
    //           </h1>

    //           <a
    //             className="button-download"
    //             href={ScienceChapter2Topic1}
    //             download
    //           >
    //             Click to download
    //           </a>
    //         </div>
    //         <img style={{marginTop:"0px"}} src={pic3} alt="pic3" />
    //         {/* <img  style = {{ }} src={image2} alt="image2" /> */}
    //       </div>

    //       <div
    //         style={{
    //           marginRight: "0px",
    //           paddingTop: "50px",
    //           paddingBottom: "20px",
    //           backgroundColor: "white",
    //         }}
    //       ></div>
    //       <h1
    //         style={{
    //           textDecoration: "underline",
    //           paddingTop: "25px",
    //           paddingBottom: "25px",
    //           marginLeft: " 350px",
    //         }}
    //       >
    //         {" "}
    //         Video{" "}
    //       </h1>
    //       <div className="Video">
    //         <ReactPlayer
    //           controls
    //           url="https://www.youtube.com/watch?v=BJfy0ixvib8"
    //         />
    //         {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
    //       </div>
    //     </React.Fragment>
    //   );
    // }

    // console.log(content);

    // if (Scienceval === "Safety At Home") {
    //   return setContent(
    //     <React.Fragment>
    //       <div
    //         style={{
    //           marginTop: "70px",
    //           marginLeft: "250px",
    //           marginRight: "200px",
    //           backgroundColor: "white",
    //         }}
    //       >
    //         <div>
    //           <img style={{}} src={image2} alt="image2" />
    //           <img
    //             style={{
    //               paddingTop: "  0px",
    //               float: "right",
    //               marginBottom: " 0px",
    //             }}
    //             src={image3}
    //             alt="image3"
    //           />
    //           <h1
    //             style={{
    //               textDecoration: "underline",
    //               paddingTop: " 30px",
    //               marginLeft: "80px",
    //               marginBottom: "20px",
    //             }}
    //           >
    //             {" "}
    //             Lecture Note{" "}
    //           </h1>

    //           <a
    //             className="button-download"
    //             href={ScienceChapter2Topic2}
    //             download
    //           >
    //             Click to download
    //           </a>
    //         </div>
    //         <img style={{marginTop:"0px"}} src={pic4} alt="pic4" />
    //         {/* <img  style = {{ }} src={image2} alt="image2" /> */}
    //       </div>

    //       <div
    //         style={{
    //           marginRight: "0px",
    //           paddingTop: "50px",
    //           paddingBottom: "20px",
    //           backgroundColor: "white",
    //         }}
    //       ></div>
    //       <h1
    //         style={{
    //           textDecoration: "underline",
    //           paddingTop: "25px",
    //           paddingBottom: "25px",
    //           marginLeft: " 350px",
    //         }}
    //       >
    //         {" "}
    //         Video{" "}
    //       </h1>
    //       <div className="Video">
    //         <ReactPlayer
    //           controls
    //           url="https://www.youtube.com/watch?v=KUB-4dTbhM8"
    //         />
    //       </div>
    //        </React.Fragment>
    //   );
    // }

    console.log(content);
  };

  return (
    <div
      style={{
        background: " linear-gradient(to bottom right, #ff4382, #ffce00)",
      }}
    >
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
              <NavLink to="/Urdu" className="nav-links-student">
                Topics
              </NavLink>
            </li>
          </div>

          {/* <div className="nav-links-student">
            <li>
              <NavLink to="/StudentNotes" className="nav-links-student">
                Notes
              </NavLink>
            </li>
          </div> */}
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

      <div>{content}</div>
    </div>
  );
};
export default UrduContent;

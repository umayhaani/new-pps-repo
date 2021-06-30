import React, { useEffect, useRef, useState } from "react";
import Confirmation from "./components/UIElements/Confirmation";
import { useHistory } from "react-router-dom";
import { useLocalStorage } from "./LocalStorage/Local";
import { TextField } from "@material-ui/core";
import useForm from "./utils/useForm";
import GoogleLogin from "react-google-login";
import { NavLink } from "react-router-dom";
// import DropDown from "./DropDown"
import logo from "./assets/PPS5.jpeg";
import ModalWin from "./modal";
import ErrorModal from "./ErrorModal";

import "./auth.css";

export let USERNAME;
export let UEMAIL;

const Auth = () => {
  // const history = useHistory();
  const [inputValue, handleChangeForInputs] = useForm();
  const [isLoginMode, setLoginMode] = useState(true);
  const [err, setErr] = useState(false); //for frontend error
  const [role, setRole] = useState("");
  const [modalisOpen, setModalisOPen] = useState(false);
  const [errModal, seterrModal] = useState(false);
  const [error, setError] = useState(""); //for backend error
  const [email, setuserEmail] = useLocalStorage("email", "null");
  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
  //const [userName, setuserName] = useLocalStorage("userName", "null");
  const history = useHistory();
  const [adminType, setAdminType] = useLocalStorage("adminType", "null");
  //username
  useEffect(() => {
    setError(error);
  }, [error]);

  const switchModeHandler = () => {
    setLoginMode((prevMode) => !prevMode);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (isLoginMode) {
      if (inputValue.password === undefined || inputValue.email === undefined) {
        setErr(true);
      }
    }
    if (!isLoginMode) {
      if (
        inputValue.name === undefined ||
        inputValue.password === undefined ||
        inputValue.email === undefined
      ) {
        setErr(true);
      }
      if (
        (inputValue.name || inputValue.password) &&
        inputValue.email &&
        role !== "Select Role"
      ) {
        setErr(false);

        if (!isLoginMode) {
          setModalisOPen(true);
        }
      }
    }

    if (isLoginMode) {
      try {
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: inputValue.email,
            password: inputValue.password,
          }),
        });
        const responseData = await response.json();

        if (responseData.status) {
          seterrModal(true);
          setError(() => responseData.err);
        }

        // if (!responseData.ok) {
        //   seterrModal(true);
        // }

        if (responseData.role === "Admin") {
          setAdminType(responseData.name);
          history.push("/admin");
          // console.log(responseData.role);
        }
        if (responseData.role === "Teacher") {
          // USERNAME = responseData.name;
          UEMAIL = responseData.email;
          setUSERNAME(responseData.name);
          setuserEmail(responseData.email);
          history.push("/teacher");
        }
        if (responseData.role === "Student") {
          //  USERNAME = responseData.name;
          setUSERNAME(responseData.name);
          UEMAIL = responseData.email;
          history.push("/student");
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const response = await fetch("http://localhost:5000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: inputValue.name,
            email: inputValue.email,
            password: inputValue.password,
            role: role,
          }),
        });

        const responseData = await response.json();
        if (responseData.status === 201) {
          setuserEmail(responseData.email);

          //console.log("email from res " + responseData.email + UEMAIL);
          <Confirmation style={{ display: "hidden" }} email={UEMAIL} />;
        }
        if (responseData.status !== "201") {
          seterrModal(true);
          setError(() => responseData.err);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const responseSuccessGoogle = async (response) => {
    // console.log(response);
    const email = response.profileObj.email; //from google

    //console.log(email);

    try {
      const response = await fetch("http://localhost:5000/gmailLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      const responseData = await response.json();
      // console.log(responseData.role);
      if (responseData.status) {
        seterrModal(true);
        setError(() => responseData.err);
      }
      if (responseData.role === "Teacher") {
        //USERNAME = responseData.name;
        setUSERNAME(responseData.name);
        history.push("/teacher");
      }
      if (responseData.role === "Student") {
        //USERNAME = responseData.name;
        setUSERNAME(responseData.name);
        history.push("/student");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const responseErrorGoogle = () => {
    console.log("failed to connect");
  };
  //console.log(email, "..............???????/.");
  return (
    <React.Fragment>
      <nav className="NavbarItems-Auth">
        <NavLink to="/Auth">
          <img className=" logo-Auth" src={logo} alt="Logo" />
        </NavLink>
        {/* <h1 className="navbar-logo-Auth">{USERNAME}</h1> */}

        <ul className="nav-menu-Auth ">
          <div className="nav-links-Auth">
            <li>
              <NavLink to="/" className="nav-links-Auth">
                Home
              </NavLink>
            </li>
          </div>

          <div className="nav-links-Auth">
            <li>
              <NavLink to="/About" className="nav-links-Auth">
                About
              </NavLink>
            </li>
          </div>

          <div className="nav-links-Auth">
            <li>
              <NavLink to="/Contact" className="nav-links-Auth">
                Contact
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>

      <div
        style={{
          paddingTop: "5px",
          // paddingLeft:"15px",
          // fontSize:"32px",
          // fontWeight:"bolder",
          // marginLeft:"200px",
          width: "1000px",
          height: "20px",
          backgroundColor: "#fff",
        }}
      ></div>

      <div className="outerDiv">
        <div className="card">
          <form className="text" onSubmit={submitHandler}>
            <h2 style={{ marginTop: "2rem" }}>
              {isLoginMode ? "LOGIN REQUIRED" : "SIGN-UP REQUIRED"}
            </h2>
            <hr />
            <br></br>
            <br></br>
            {err && (
              <span
                style={{
                  color: "red",
                  fontWeight: "bold",
                  marginTop: "0px",
                  marginLeft: "34px",
                  marginBottom: "20px",
                }}
              >
                please fill all fields
              </span>
            )}
            <TextField
              type="email"
              name="email"
              title="Please enter your email only"
              label="Enter Email"
              value={inputValue.email || ""}
              onChange={handleChangeForInputs}
            />
            <br></br>
            <TextField
              type="password"
              name="password"
              title="Enter atleast 8-digit Password"
              label="Enter Password"
              value={inputValue.password || ""}
              onChange={handleChangeForInputs}
            />
            <br></br>
            {!isLoginMode && (
              <div>
                <TextField
                  type="text"
                  name="name"
                  label="Enter Name"
                  title="Enter your appropriate username"
                  value={inputValue.name || ""}
                  onChange={handleChangeForInputs}
                />
                <br />
                <select id="role" onChange={(e) => setRole(e.target.value)}>
                  <option>Select role</option>
                  <option value="Student">Student</option>
                  <option value="Teacher">Teacher</option>
                </select>
              </div>
            )}
          </form>

          <button
            className="signbutton"
            onClick={submitHandler}
            style={{
              marginTop: isLoginMode ? "30px" : "0px",
              marginLeft: isLoginMode ? "89px" : "89px",
              // padding: isLoginMode ? "0.5rem 2rem" : "0.5rem 3rem",
              paddingLeft: isLoginMode ? "80px" : "3rem 3rem",

              paddingRight: isLoginMode ? "80px" : "80px",
              marginBottom: isLoginMode ? "0px" : "0px",
              display: "block",
            }}
          >
            {isLoginMode ? "LOGIN" : "SIGNUP"}
          </button>

          <div className="googleLogin">
            {isLoginMode && (
              <GoogleLogin
                className="signbutton"
                clientId="1034496854943-dbgivvgf14po4jv278ruhjr0hhebvgt0.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseSuccessGoogle}
                onFailure={responseErrorGoogle}
                cookiePolicy={"single_host_origin"}
              />
            )}
          </div>

          {!error ? (
            <ModalWin
              modalisOpen={modalisOpen}
              closeModal={() => setModalisOPen(false)}
            />
          ) : (
            <ErrorModal
              modalisOpen={errModal}
              error={error}
              closeModal={() => seterrModal(false)}
            />
          )}
        </div>
        {/* <div className="notice">
        <h1>Pakistan Primary School</h1>

        <div>
          <b>A LEARNING PLATFORM FOR EVERYONE....!</b>
        </div>
        <br></br>
        <div>
          <b>LEARN ANYTHING</b>
        </div> ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
        <br></br>
        <div>
          <b>LEARN ANYTIME</b>
        </div>
        <br></br>
        <div>
          <b>LEARN ANYWHERE</b>
        </div>
        <br></br>
        <div>
          <b>FOR FREE</b>
        </div>
        <br></br>
        <div>
          <b> Start where you are. Use what you have. Do what you can.</b>
        </div>
      </div> */}

        <button
          // className="signbutton"
          style={{
            marginTop: "120px",
            // marginBottom:  "1px",
            marginLeft: "770px",
            // padding:  "0.5rem 1.7rem" ,
            width: "180px",
            height: isLoginMode ? "178px" : "200px",
            display: "block",
            // backgroundColor: "#e63c44" ,
            backgroundColor: "#ffce00",
            // color:"white",
            color: "black",
            fontSize: "18px",
            fontWeight: "bolder",
            borderColor: "white",
          }}
        >
          {isLoginMode ? "LOGIN" : "SIGNUP"}
        </button>

        <button
          onClick={switchModeHandler}
          className="signbutton1"
          id="move"
          style={{
            marginTop: isLoginMode ? "  0px" : "0px",
            marginBottom: isLoginMode && "1px",
            marginLeft: isLoginMode ? "770px" : "770px",
            padding: isLoginMode ? "0.5rem 1.7rem" : "0.5rem 3.5rem",
            display: "block",
            width: isLoginMode ? "180px" : "180px",
            height: isLoginMode ? "179px" : "200px",
            fontSize: isLoginMode ? "18px" : "18px",
            fontWeight: isLoginMode ? "bolder" : "18px",
            borderColor: isLoginMode ? "white" : "18px",
          }}
        >
          {isLoginMode ? "SIGNUP" : "LOGIN"}
        </button>

        {/* <div><img className="books" src={books} alt="books" />  </div> */}
      </div>
    </React.Fragment>
  );
};

export default Auth;

// import React, { useEffect, useRef, useState } from "react";
// import Confirmation from "./components/UIElements/Confirmation";
// import { useHistory } from "react-router-dom";
// import { useLocalStorage } from "./LocalStorage/Local";
// import { TextField } from "@material-ui/core";
// import useForm from "./utils/useForm";
// import GoogleLogin from "react-google-login";
// import { NavLink } from "react-router-dom";
// // import DropDown from "./DropDown"
// import logo from "./assets/PPS5.jpeg";
// import ModalWin from "./modal";

// import ErrorModal from "./ErrorModal";
// //import books from "./assets/books.png";

// import "./auth.css";

// export let USERNAME;
// export let UEMAIL;

// const Auth = () => {
//   // const history = useHistory();
//   const [inputValue, handleChangeForInputs] = useForm();
//   const [isLoginMode, setLoginMode] = useState(true);
//   const [err, setErr] = useState(false); //for frontend error
//   const [role, setRole] = useState("");
//   const [modalisOpen, setModalisOPen] = useState(false);
//   const [errModal, seterrModal] = useState(false);
//   const [error, setError] = useState(""); //for backend error
//   const [email, setuserEmail] = useLocalStorage("email", "null");
//   const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
//   const [adminType, setAdminType] = useLocalStorage("adminType", "null");
//   //const [userName, setuserName] = useLocalStorage("userName", "null");
//   const history = useHistory();
//   //username
//   useEffect(() => {
//     setError(error);
//   }, [error]);

//   const switchModeHandler = () => {
//     setLoginMode((prevMode) => !prevMode);
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     if (isLoginMode) {
//       if (inputValue.password === undefined || inputValue.email === undefined) {
//         setErr(true);
//       }
//     }
//     if (!isLoginMode) {
//       if (
//         inputValue.name === undefined ||
//         inputValue.password === undefined ||
//         inputValue.email === undefined
//       ) {
//         setErr(true);
//       }
//       if (
//         (inputValue.name || inputValue.password) &&
//         inputValue.email &&
//         role !== "Select Role"
//       ) {
//         setErr(false);

//         if (!isLoginMode) {
//           setModalisOPen(true);
//         }
//       }
//     }

//     if (isLoginMode) {
//       try {
//         const response = await fetch("http://localhost:5000/login", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             email: inputValue.email,
//             password: inputValue.password,
//           }),
//         });
//         const responseData = await response.json();

//         if (responseData.status) {
//           seterrModal(true);
//           setError(() => responseData.err);
//         }

//         // if (!responseData.ok) {
//         //   seterrModal(true);
//         // }

//         if (responseData.role === "Admin") {
//           setAdminType(responseData.name);
//           history.push("/admin");
//           // console.log(responseData.role);
//         }
//         if (responseData.role === "Teacher") {
//           //USERNAME = responseData.name;
//           UEMAIL = responseData.email;
//           setuserEmail(responseData.email);
//           setUSERNAME(responseData.name);
//           history.push("/teacher");
//         }
//         if (responseData.role === "Student") {
//           //USERNAME = responseData.name;
//           UEMAIL = responseData.email;
//           setuserEmail(responseData.email);
//           setUSERNAME(responseData.name);
//           history.push("/student");
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     } else {
//       try {
//         const response = await fetch("http://localhost:5000/signup", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name: inputValue.name,
//             email: inputValue.email,
//             password: inputValue.password,
//             role: role,
//           }),
//         });

//         const responseData = await response.json();
//         if (responseData.status === 201) {
//           setuserEmail(responseData.email);

//           //console.log("email from res " + responseData.email + UEMAIL);
//           <Confirmation style={{ display: "hidden" }} email={UEMAIL} />;
//         }
//         if (responseData.status !== "201") {
//           seterrModal(true);
//           setError(() => responseData.err);
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   };

//   const responseSuccessGoogle = async (response) => {
//     // console.log(response);
//     const email = response.profileObj.email; //from google

//     //console.log(email);

//     try {
//       const response = await fetch("http://localhost:5000/gmailLogin", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: email,
//         }),
//       });
//       const responseData = await response.json();
//       // console.log(responseData.role);
//       if (responseData.status) {
//         seterrModal(true);
//         setError(() => responseData.err);
//       }
//       if (responseData.role === "Teacher") {
//         //USERNAME = responseData.name;
//         setUSERNAME(responseData.name);
//         history.push("/teacher");
//       }
//       if (responseData.role === "Student") {
//         //USERNAME = responseData.name;
//         setUSERNAME(responseData.name);
//         history.push("/student");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const responseErrorGoogle = () => {
//     console.log("failed to connect");
//   };
//   //console.log(email, "..............???????/.");
//   return (
//     <React.Fragment>
//       <nav className="NavbarItems-Auth">
//         <NavLink to="/Auth">
//           <img className=" logo-Auth" src={logo} alt="Logo" />
//         </NavLink>
//         {/* <h1 className="navbar-logo-Auth">{USERNAME}</h1> */}

//         <ul className="nav-menu-Auth ">
//           <div className="nav-links-Auth">
//             <li>
//               <NavLink to="/" className="nav-links-Auth">
//                 Home
//               </NavLink>
//             </li>
//           </div>

//           <div className="nav-links-Auth">
//             <li>
//               <NavLink to="/About" className="nav-links-Auth">
//                 About
//               </NavLink>
//             </li>
//           </div>

//           <div className="nav-links-Auth">
//             <li>
//               <NavLink to="/Contact" className="nav-links-Auth">
//                 Contact
//               </NavLink>
//             </li>
//           </div>
//         </ul>
//       </nav>

//       <div
//         style={{
//           paddingTop: "5px",
//           // paddingLeft:"15px",
//           // fontSize:"32px",
//           // fontWeight:"bolder",
//           // marginLeft:"200px",
//           width: "1000px",
//           height: "20px",
//           backgroundColor: "#fff",
//         }}
//       ></div>

//       <div className="outerDiv">
//         <div className="card">
//           <form className="text" onSubmit={submitHandler}>
//             <h2 style={{ marginTop: "2rem" }}>
//               {isLoginMode ? "LOGIN REQUIRED" : "SIGN-UP REQUIRED"}
//             </h2>
//             <hr />
//             <br></br>
//             <br></br>
//             {err && (
//               <span
//                 style={{ color: "red", fontWeight: "bold", marginTop: "0px" }}
//               >
//                 please fill all fields
//               </span>
//             )}
//             <TextField
//               type="email"
//               name="email"
//               title="Please enter your email only"
//               label="Enter Email"
//               value={inputValue.email || ""}
//               onChange={handleChangeForInputs}
//             />
//             <br></br>
//             <TextField
//               type="password"
//               name="password"
//               title="Enter atleast 8-digit Password"
//               label="Enter Password"
//               value={inputValue.password || ""}
//               onChange={handleChangeForInputs}
//             />
//             <br></br>
//             {!isLoginMode && (
//               <div>
//                 <TextField
//                   type="text"
//                   name="name"
//                   label="Enter Name"
//                   title="Enter your appropriate username"
//                   value={inputValue.name || ""}
//                   onChange={handleChangeForInputs}
//                 />
//                 <br />
//                 <select id="role" onChange={(e) => setRole(e.target.value)}>
//                   <option>Select role</option>
//                   <option value="Student">Student</option>
//                   <option value="Teacher">Teacher</option>
//                 </select>
//               </div>
//             )}
//           </form>

//           <button
//             data-testid="login-signup"
//             className="signbutton"
//             onClick={submitHandler}
//             style={{
//               marginTop: isLoginMode ? "30px" : "0px",
//               marginLeft: isLoginMode ? "89px" : "89px",
//               // padding: isLoginMode ? "0.5rem 2rem" : "0.5rem 3rem",
//               paddingLeft: isLoginMode ? "80px" : "3rem 3rem",

//               paddingRight: isLoginMode ? "80px" : "80px",
//               marginBottom: isLoginMode ? "0px" : "0px",
//               display: "block",
//             }}
//           >
//             {isLoginMode ? "LOGIN" : "SIGNUP"}
//           </button>

//           <div className="googleLogin">
//             {isLoginMode && (
//               <GoogleLogin
//                 className="signbutton"
//                 clientId="1034496854943-dbgivvgf14po4jv278ruhjr0hhebvgt0.apps.googleusercontent.com"
//                 buttonText="Login"
//                 onSuccess={responseSuccessGoogle}
//                 onFailure={responseErrorGoogle}
//                 cookiePolicy={"single_host_origin"}
//               />
//             )}
//           </div>

//           {!error ? (
//             <ModalWin
//               modalisOpen={modalisOpen}
//               closeModal={() => setModalisOPen(false)}
//             />
//           ) : (
//             <ErrorModal
//               modalisOpen={errModal}
//               error={error}
//               closeModal={() => seterrModal(false)}
//             />
//           )}
//         </div>
//         {/* <div className="notice">
//         <h1>Pakistan Primary School</h1>

//         <div>
//           <b>A LEARNING PLATFORM FOR EVERYONE....!</b>
//         </div>
//         <br></br>
//         <div>
//           <b>LEARN ANYTHING</b>
//         </div> ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
//         <br></br>
//         <div>
//           <b>LEARN ANYTIME</b>
//         </div>
//         <br></br>
//         <div>
//           <b>LEARN ANYWHERE</b>
//         </div>
//         <br></br>
//         <div>
//           <b>FOR FREE</b>
//         </div>
//         <br></br>
//         <div>
//           <b> Start where you are. Use what you have. Do what you can.</b>
//         </div>
//       </div> */}

//         <button
//           // className="signbutton"
//           style={{
//             marginTop: "120px",
//             // marginBottom:  "1px",
//             marginLeft: "620px",
//             // padding:  "0.5rem 1.7rem" ,
//             width: "180px",
//             height: isLoginMode ? "178px" : "200px",
//             display: "block",
//             // backgroundColor: "#e63c44" ,
//             backgroundColor: "#ffce00",
//             // color:"white",
//             color: "black",
//             fontSize: "18px",
//             fontWeight: "bolder",
//             borderColor: "white",
//           }}
//         >
//           {isLoginMode ? "LOGIN" : "SIGNUP"}
//         </button>

//         <button
//           data-testid="btntest"
//           onClick={switchModeHandler}
//           className="signbutton1"
//           id="move"
//           style={{
//             marginTop: isLoginMode ? "  0px" : "0px",
//             marginBottom: isLoginMode && "1px",
//             marginLeft: isLoginMode ? "620px" : "620px",
//             padding: isLoginMode ? "0.5rem 1.7rem" : "0.5rem 3.5rem",
//             display: "block",
//             width: isLoginMode ? "180px" : "180px",
//             height: isLoginMode ? "179px" : "200px",
//             fontSize: isLoginMode ? "18px" : "18px",
//             fontWeight: isLoginMode ? "bolder" : "18px",
//             borderColor: isLoginMode ? "white" : "18px",
//           }}
//         >
//           {isLoginMode ? "SIGNUP" : "LOGIN"}
//         </button>

//         {/* <div><img className="books" src={books} alt="books" />  </div> */}
//       </div>
//     </React.Fragment>
//   );
// };

// export default Auth;

// // import React, { useEffect, useRef, useState } from "react";
// // import Confirmation from "./components/UIElements/Confirmation";
// // import { useHistory } from "react-router-dom";
// // import { useLocalStorage } from "./LocalStorage/Local";
// // import { TextField } from "@material-ui/core";
// // import useForm from "./utils/useForm";
// // import GoogleLogin from "react-google-login";
// // import ModalWin from "./modal";
// // import ErrorModal from "./ErrorModal";

// // import "./auth.css";

// // export let USERNAME;
// // export let UEMAIL;

// // const Auth = () => {
// //   const [inputValue, handleChangeForInputs] = useForm();
// //   const [isLoginMode, setLoginMode] = useState(true);
// //   const [err, setErr] = useState(false); //for frontend error
// //   const [role, setRole] = useState("");
// //   const [modalisOpen, setModalisOPen] = useState(false);
// //   const [errModal, seterrModal] = useState(false);
// //   const [error, setError] = useState(""); //for backend error
// //   const [email, setuserEmail] = useLocalStorage("email", "null");
// //   //const [userName, setuserName] = useLocalStorage("userName", "null");
// //   const history = useHistory();
// //   //username
// //   useEffect(() => {
// //     setError(error);
// //   }, [error]);

// //   const switchModeHandler = () => {
// //     setLoginMode((prevMode) => !prevMode);
// //   };

// //   const submitHandler = async (e) => {
// //     e.preventDefault();
// //     if (isLoginMode) {
// //       if (inputValue.password === undefined || inputValue.email === undefined) {
// //         setErr(true);
// //       }
// //     }
// //     if (!isLoginMode) {
// //       if (
// //         inputValue.name === undefined ||
// //         inputValue.password === undefined ||
// //         inputValue.email === undefined
// //       ) {
// //         setErr(true);
// //       }
// //       if (
// //         (inputValue.name || inputValue.password) &&
// //         inputValue.email &&
// //         role !== "Select Role"
// //       ) {
// //         setErr(false);

// //         if (!isLoginMode) {
// //           setModalisOPen(true);
// //         }
// //       }
// //     }

// //     if (isLoginMode) {
// //       try {
// //         const response = await fetch("http://localhost:5000/login", {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({
// //             email: inputValue.email,
// //             password: inputValue.password,
// //           }),
// //         });
// //         const responseData = await response.json();

// //         if (responseData.status) {
// //           seterrModal(true);
// //           setError(() => responseData.err);
// //         }

// //         // if (!responseData.ok) {
// //         //   seterrModal(true);
// //         // }

// //         if (responseData.role === "Admin") {
// //           history.push("/admin");
// //           // console.log(responseData.role);
// //         }
// //         if (responseData.role === "Teacher") {
// //           USERNAME = responseData.name;
// //           UEMAIL = responseData.email;
// //           setuserEmail(responseData.email);
// //           history.push("/teacher");
// //         }
// //         if (responseData.role === "Student") {
// //           USERNAME = responseData.name;
// //           UEMAIL = responseData.email;
// //           history.push("/student");
// //         }
// //       } catch (err) {
// //         console.log(err);
// //       }
// //     } else {
// //       try {
// //         const response = await fetch("http://localhost:5000/signup", {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({
// //             name: inputValue.name,
// //             email: inputValue.email,
// //             password: inputValue.password,
// //             role: role,
// //           }),
// //         });

// //         const responseData = await response.json();
// //         if (responseData.status === 201) {
// //           setuserEmail(responseData.email);

// //           //console.log("email from res " + responseData.email + UEMAIL);
// //           <Confirmation style={{ display: "hidden" }} email={UEMAIL} />;
// //         }
// //         if (responseData.status !== "201") {
// //           seterrModal(true);
// //           setError(() => responseData.err);
// //         }
// //       } catch (err) {
// //         console.log(err);
// //       }
// //     }
// //   };

// //   const responseSuccessGoogle = async (response) => {
// //     // console.log(response);
// //     const email = response.profileObj.email; //from google

// //     //console.log(email);

// //     try {
// //       const response = await fetch("http://localhost:5000/gmailLogin", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           email: email,
// //         }),
// //       });
// //       const responseData = await response.json();
// //       // console.log(responseData.role);
// //       if (responseData.status) {
// //         seterrModal(true);
// //         setError(() => responseData.err);
// //       }
// //       if (responseData.role === "Teacher") {
// //         USERNAME = responseData.name;
// //         history.push("/teacher");
// //       }
// //       if (responseData.role === "Student") {
// //         USERNAME = responseData.name;
// //         history.push("/student");
// //       }
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   const responseErrorGoogle = () => {
// //     console.log("failed to connect");
// //   };
// //   //console.log(email, "..............???????/.");
// //   return (
// //     <div className="outerDiv">
// //       <div className="card">
// //         <form className="text" onSubmit={submitHandler}>
// //           <h2 style={{ marginTop: "2rem" }}>
// //             {isLoginMode ? "LOGIN REQUIRED" : "SIGN-UP REQUIRED"}
// //           </h2>
// //           <hr />
// //           <br></br>
// //           <br></br>
// //           {err && (
// //             <span
// //               style={{ color: "red", fontWeight: "bold", marginTop: "0px" }}
// //             >
// //               please fill all fields
// //             </span>
// //           )}
// //           <TextField
// //             type="email"
// //             name="email"
// //             title="Please enter your email only"
// //             label="Enter Email"
// //             value={inputValue.email || ""}
// //             onChange={handleChangeForInputs}
// //           />
// //           <br></br>
// //           <TextField
// //             type="password"
// //             name="password"
// //             title="Enter atleast 8-digit Password"
// //             label="Enter Password"
// //             value={inputValue.password || ""}
// //             onChange={handleChangeForInputs}
// //           />
// //           <br></br>
// //           {!isLoginMode && (
// //             <div>
// //               <TextField
// //                 type="text"
// //                 name="name"
// //                 label="Enter Name"
// //                 title="Enter your appropriate username"
// //                 value={inputValue.name || ""}
// //                 onChange={handleChangeForInputs}
// //               />
// //               <br />
// //               <select id="role" onChange={(e) => setRole(e.target.value)}>
// //                 <option>Select role</option>
// //                 <option value="Student">Student</option>
// //                 <option value="Teacher">Teacher</option>
// //               </select>
// //             </div>
// //           )}
// //           <br></br>
// //           <button
// //             className="signbutton"
// //             style={{
// //               marginTop: isLoginMode ? "1rem" : "5px",
// //               marginLeft: isLoginMode ? "3.5rem" : "2.5rem",
// //               padding: isLoginMode ? "0.5rem 2rem" : "0.5rem 3rem",
// //               marginBottom: isLoginMode ? "0px" : "0px",
// //               display: "block",
// //             }}
// //           >
// //             {isLoginMode ? "LOGIN" : "SIGNUP"}
// //           </button>{" "}
// //         </form>
// //         <div className="googleLogin">
// //           {isLoginMode && (
// //             <GoogleLogin
// //               className="signbutton"
// //               clientId="1034496854943-dbgivvgf14po4jv278ruhjr0hhebvgt0.apps.googleusercontent.com"
// //               buttonText="Login"
// //               onSuccess={responseSuccessGoogle}
// //               onFailure={responseErrorGoogle}
// //               cookiePolicy={"single_host_origin"}
// //             />
// //           )}
// //         </div>

// //         {!error ? (
// //           <ModalWin
// //             modalisOpen={modalisOpen}
// //             closeModal={() => setModalisOPen(false)}
// //           />
// //         ) : (
// //           <ErrorModal
// //             modalisOpen={errModal}
// //             error={error}
// //             closeModal={() => seterrModal(false)}
// //           />
// //         )}

// //         <button
// //           onClick={switchModeHandler}
// //           className="signbutton"
// //           id="move"
// //           style={{
// //             marginTop: isLoginMode ? "0.5rem" : "0px",
// //             marginBottom: isLoginMode && "1px",
// //             marginLeft: isLoginMode ? "3.5rem" : "2.5rem",
// //             padding: isLoginMode ? "0.5rem 1.7rem" : "0.5rem 3.5rem",
// //             display: "block",
// //           }}
// //         >
// //           {isLoginMode ? "SIGNUP" : "LOGIN"}
// //         </button>
// //       </div>
// //       <div className="notice">
// //         <h1>Pakistan Primary School</h1>

// //         <div>
// //           <b>A LEARNING PLATFORM FOR EVERYONE....!</b>
// //         </div>
// //         <br></br>
// //         <div>
// //           <b>LEARN ANYTHING</b>
// //         </div>
// //         <br></br>
// //         <div>
// //           <b>LEARN ANYTIME</b>
// //         </div>
// //         <br></br>
// //         <div>
// //           <b>LEARN ANYWHERE</b>
// //         </div>
// //         <br></br>
// //         <div>
// //           <b>FOR FREE</b>
// //         </div>
// //         <br></br>
// //         <div>
// //           <b> Start where you are. Use what you have. Do what you can.</b>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Auth;

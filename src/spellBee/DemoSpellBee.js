import React, { useState, useEffect, useRef } from "react";
import { grade } from "./MainPage";
import { level } from "./SpellLevel";
import { TextField } from "@material-ui/core";
import { Clear, Check } from "@material-ui/icons";
import Tooltip from "../components/UIElements/CustomTooltip";
import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";
import speaker from "../assets/speaker.png";
import useForm from "../../src/utils/useForm";
import ScoreModal from "../ScoreModal";
import abc from "../assets/spell.jpeg";
import { useLocalStorage } from "../LocalStorage/Local";
import ScoreBeeModal from "./speechTotext/ScoreBeeModal";

import { useSpeechSynthesis } from "react-speech-kit";
import "./demoSpellBee.css";
import { NavLink, useHistory } from "react-router-dom";
import logo from "../assets/PPS5.jpeg";

export let Scores;
export let attempted;

const speechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;
const mic = new speechRecognition();
mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

const DemoSpellBee = () => {
  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
  const [inputValue, handleChangeForInputs, clear] = useForm();
  const [isListening, setisListening] = useState(false);
  const [check, setCheck] = useState(false);
  const [hintVisibility, sethintVisiility] = useState(false);

  const [open, setOpen] = useState(() => false);
  // const [modalShow, setModalShow] = useState(() => true);

  const [visibility, setVisibility] = useState(false);
  const [word, setWord] = useState("");
  // const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const { speak } = useSpeechSynthesis();

  let wordTocompare = useRef("");
  let wordDescription = useRef("");
  let marks = useRef(0);
  let attemptedMarks = useRef(0);
  useEffect(() => {
    nextBtnHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  useEffect(() => {
    handleListen();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isListening]);

  const handleListen = async () => {
    if (isListening) {
      mic.start();
      // mic.onend = () => {
      //   console.log("continue........");
      //   mic.start();
      // };
    } else {
      mic.stop();

      mic.onend = () => {
        console.log("finished");
      };

      mic.onstart = () => {
        console.log("mic is on");
      };
      mic.onresult = (event) => {
        console.log(Array.from(event.results));
        const transcript = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join(" ");
        console.log(typeof transcript);
        let arrayOfTranscript = transcript.split("");
        console.log(arrayOfTranscript);

        const letters = arrayOfTranscript.filter((letter) => letter !== " ");
        const finalWord = letters.join("");
        console.log("from join " + letters.join(""));

        setWord(finalWord.toLowerCase());
        console.log("word " + word);
      };
      mic.onerror = (event) => {
        console.log(event.error);
      };
    }

    if (word !== null && !isListening) {
      try {
        const response = await fetch("http://localhost:5000/spell", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            spell: word,
          }),
        });

        const responseData = await response.json();
        if (responseData) {
          console.log(responseData.spell + " im from response of handleListen");
          if (word === responseData.spell) {
            console.log("both words are equl........");
            marks.current = marks.current + 1;
            Scores = marks.current;
            attemptedMarks.current = count;
            attempted = attemptedMarks.current;
            setCheck(() => true);
            setVisibility(() => true);
          } else {
            marks.current = marks.current;
            Scores = marks.current;
            attemptedMarks.current = count;
            attempted = attemptedMarks.current;
            setCheck(() => false);
            setVisibility(() => false);
          }
        }
        if (responseData.err) {
          console.log(responseData.err);
        }
        // console.log(responseData);
      } catch (err) {
        console.log(err);
      }
      //for last word
      if (count === 3) {
        console.log(count + " im from count");
        setOpen(() => true);
      }
    }
  };

  const clickHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/spell", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          spell: inputValue.spell,
        }),
      });

      const responseData = await response.json();
      if (responseData) {
        console.log("pokfkioerj " + responseData.spell);
        console.log("word to compare " + wordTocompare.current);
        if (wordTocompare.current === responseData.spell) {
          console.log("both words are equl");
          marks.current = marks.current + 1;
          Scores = marks.current;
          attemptedMarks.current = count;
          attempted = attemptedMarks.current;
          setCheck(() => true);
          setVisibility(() => true);
        } else {
          marks.current = marks.current;
          Scores = marks.current;
          attemptedMarks.current = count;
          attempted = attemptedMarks.current;
          setCheck(() => false);
          setVisibility(() => true);
        }
      }
      // console.log(responseData);
    } catch (err) {
      console.log(err);
    }
    //for last word
    if (count === 3) {
      console.log(count + " im from count");
      setOpen(() => true);
    }
  };

  const speakHandler = async () => {
    clear();
    setWord(() => null);
    setVisibility(() => false);
    console.log(count);
    sethintVisiility(() => false);
    try {
      const response = await fetch(
        `http://localhost:5000/word?grade=${grade}&level=${level}`
      );
      const responseData = await response.json();
      wordTocompare.current = responseData.text[count];
      wordDescription.current = responseData.description[count];
      speak({ text: responseData.text[count] });

      console.log(wordTocompare.current + ".................");
    } catch (err) {
      console.log(err);
    }
  };

  const nextBtnHandler = async () => {
    clear();
    // console.log("from next btn" + count);
    setWord(() => null);
    // setCheck(() => false);
    setVisibility(() => false);
    sethintVisiility(() => false);
    try {
      const response = await fetch(
        `http://localhost:5000/word?grade=${grade}&level=${level}`
      );
      const responseData = await response.json();
      wordTocompare.current = responseData.text[count];
      speak({ text: responseData.text[count] });
    } catch (err) {
      console.log(err);
    }
  };
  console.log(inputValue.spell);

  return (
    <React.Fragment>
      <nav className="NavbarItems-demo">
        <NavLink to="/Student">
          <img className="logo-demo" src={logo} alt="Logo" />
        </NavLink>
        <h1 className="navbar-logo-demo">Spell Bee</h1>
        <ul className="nav-menu-demo ">
          <div className="nav-links-demo">
            <li>
              <NavLink to="/Student" className="nav-links-demo">
                Home
              </NavLink>
            </li>
          </div>

          {/* <div className="nav-links-demo">
            <li>
              <NavLink to="/Student/SpellBee" className="nav-links-demo">
                Grades
              </NavLink>
            </li>
          </div> */}
        </ul>
      </nav>

      {/* <ScoreBeeModal
        openModal={open}
        closeModal={() => setOpen(false)}
      ></ScoreBeeModal> */}
      <div id="background-demo">
        <div>
          {" "}
          <img className="abc" src={abc} alt="abc" />
          <NavLink to="/Student/SpellBee">
            <button className="skip-button">
              {" "}
              <span> Skip</span>
            </button>
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DemoSpellBee;

// import React, { useState, useEffect, useRef } from "react";

// import abc from "../assets/spell.jpeg";

// import "./demoSpellBee.css";
// import { NavLink } from "react-router-dom";
// import logo from "../assets/PPS5.jpeg";

// const DemoSpellBee = () => {
//   return (
//     <React.Fragment>
//       <nav className="NavbarItems-demo">
//         <NavLink to="/Student">
//           <img className="logo-demo" src={logo} alt="Logo" />
//         </NavLink>
//         <h1 className="navbar-logo-demo">Spell Bee</h1>
//         <ul className="nav-menu-demo ">
//           <div className="nav-links-demo">
//             <li>
//               <NavLink to="/Student" className="nav-links-demo">
//                 Home
//               </NavLink>
//             </li>
//           </div>

//           {/* <div className="nav-links-demo">
//             <li>
//               <NavLink to="/Student/SpellBee" className="nav-links-demo">
//                 Grades
//               </NavLink>
//             </li>
//           </div> */}
//         </ul>
//       </nav>

//       {/* <ScoreBeeModal
//         openModal={open}
//         closeModal={() => setOpen(false)}
//       ></ScoreBeeModal> */}
//       <div id="background-demo">
//         <div>
//           {" "}
//           <img className="abc" src={abc} alt="abc" />
//           <NavLink to="/Student/SpellBee">
//             <button className="skip-button">
//               {" "}
//               <span> Skip</span>
//             </button>
//           </NavLink>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default DemoSpellBee;

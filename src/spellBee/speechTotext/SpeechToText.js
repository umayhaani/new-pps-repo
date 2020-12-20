import React, { useState, useEffect, useRef } from "react";
import ScoreModal from "../../ScoreModal";
import { grade } from "../MainPage";
import { level } from "../SpellLevel";
import { TextField } from "@material-ui/core";
import { Clear, Check } from "@material-ui/icons";
import Tooltip from "../../components/UIElements/CustomTooltip";
import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";
import speaker from "../../assets/speaker.png";
import useForm from "../../../src/utils/useForm";
import { useSpeechSynthesis } from "react-speech-kit";
import "./speechTotext.css";
import "../../scoreModal.css";

export let Scores;
export let attempted;
const speechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;
const mic = new speechRecognition();
mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";
const SpeechToText = () => {
  const [inputValue, handleChangeForInputs, clear] = useForm();
  const [isListening, setisListening] = useState(false);
  const [check, setCheck] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [hintVisibility, sethintVisiility] = useState(false);
  const [show, setShow] = useState(false);
  const [word, setWord] = useState("");
  const [open, setOpen] = useState(() => false);
  const [count, setCount] = useState(0);
  const { speak } = useSpeechSynthesis();

  let wordTocompare = useRef("");
  let wordDescription = useRef("");
  let marks = useRef(0);
  let attemptedMarks = useRef(0);

  useEffect(() => {
    setCheck(() => false);
    setVisibility(() => false);
  }, []);

  useEffect(() => {
    setShow(false);
    console.log(`value of show ${show}`);
  }, [show]);

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
            console.log("both words are equl.....");
            marks.current = marks.current + 1;
            Scores = marks.current;
            attemptedMarks.current = count;
            attempted = attemptedMarks.current;
            setCheck(() => true);
            setVisibility(() => true);
          } else {
            if (word === responseData.err) {
              setCheck(() => false);
              setVisibility(() => true);
            }
            // marks.current = marks.current;
            // Scores = marks.current;
            // attemptedMarks.current = count;
            // attempted = attemptedMarks.current;
            // setCheck(() => false);
            // setVisibility(() => false);
            // if (
            //   word !== responseData.spell &&
            //   responseData.spell !== undefined
            // ) {
            //   marks.current = marks.current;
            //   Scores = marks.current;
            //   attemptedMarks.current = count;
            //   attempted = attemptedMarks.current;
            //   setCheck(() => false);
            //   setVisibility(() => true);
            // }
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

  //for submit button
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

  //speaker
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
    setVisibility(() => false);
    setWord(() => null);
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
    <>
      <ScoreModal
        openModal={open}
        closeModal={() => setOpen(false)}
      ></ScoreModal>
      <div id="background">
        <div className="container">
          <div className="box">
            {/* <h2>{grade}</h2>
          <h2>{level}</h2> */}
            <div className="speaker" onClick={speakHandler}>
              <img src={speaker} alt="speaker" />
            </div>

            <div
              style={{
                float: "right",
                marginTop: "2rem",
                display: !visibility && "none",
              }}
            >
              {check ? (
                <Check style={{ color: "green" }} />
              ) : (
                <div>
                  <Clear style={{ color: "red" }} />
                  <div show>{wordTocompare.current}</div>
                </div>
              )}
            </div>

            <form onSubmit={clickHandler}>
              {isListening ? (
                <TextField
                  type="text"
                  name="spell"
                  label="switching"
                  value={word || ""}
                />
              ) : (
                <Tooltip title="please enter spellings in the text field or use microphone to speak out the spellings ">
                  <TextField
                    type="text"
                    name="spell"
                    label="Enter Spellings"
                    value={inputValue.spell || ""}
                    onChange={handleChangeForInputs}
                  />
                </Tooltip>
              )}
            </form>

            <button className="submitBtn" onClick={clickHandler}>
              submit
            </button>
            <button
              className="mic"
              onClick={() => setisListening((prevState) => !prevState)}
            >
              {!isListening ? <MicIcon /> : <MicOffIcon />}
            </button>
            <div>
              <button
                className="nextBtn"
                onClick={() => setCount((prevState) => prevState + 1)}
              >
                NEXT
              </button>
              <button
                style={{ marginLeft: "3rem" }}
                onClick={() => setOpen(() => true)}
              >
                exit
              </button>
              <button
                style={{ marginLeft: "3rem" }}
                onClick={() => sethintVisiility(() => true)}
              >
                hint
              </button>

              {/* <div>
              <Modal
                isOpen={modalisOpen}
                onRequestClose={() => setModalisOPen(() => false)}
                style={{
                  overlay: {
                    background: "0 0 15 rgba(0,0,0,0.2)",
                  },
                  content: {
                    color: "crimson",

                    marginLeft: "35rem",
                    marginTop: "8rem",
                    textAlign: "center",
                    boxShadow: "0 5px 8px #f5f5f5",
                    fontWeight: "bolder",
                  },
                }}
              >
                <div>hello</div>
                <button
                  onClick={setModalisOPen(() => false)}
                  className="closeButton"
                >
                  CLOSE
                </button>
              </Modal>
            </div> */}
              {hintVisibility && (
                <div>
                  <p style={{ marginTop: "2rem" }}>{wordDescription.current}</p>
                  {/* <p>{Scores}</p> */}
                  <p>{count}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeechToText;

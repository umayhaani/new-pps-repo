import React, { useEffect, useState } from "react";
import ScoreModal from "../../ScoreModal";

export let COUNT;

const Timer = (props) => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(() => false);
  const [text, setText] = useState(() => false);
  const [crack, setCrack] = useState(() => false);
  const [final, setFinal] = useState(() => false);
  //console.log(props.stop);
  //console.log(props, "ewrere");
  let tick;
  if (!crack) {
    tick = () => {
      setCount((prevCount) => prevCount + 1);
      if (props.stop) {
        // setText(() => true);
        setCount(count);
        COUNT = count;
        setCrack(() => true);

        //console.log(count);
        return;
      }
      /////////10 minutes completed//////////
      // if (count === 9) {
      //   //setText(() => true);
      //   //setCrack(() => true);
      //   // setCount(count + 1);
      //   COUNT = count;
      //   setShow(() => true);
      //   console.log(COUNT);
      //   return;
      // }
      if (count > 599) {
        COUNT = 601;
        setText(() => true);
        setCrack(() => true);
        setShow(() => true);
        setFinal(() => true);

        setCount(600);

        // console.log(COUNT);
        // console.log(props.finalCode, props.grade);
        return;
      }
    };
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <>
      <div>{count}</div>

      {text && (
        <>
          {" "}
          <div>TIMES UP</div>
          {/* <div>{count}</div> */}
        </>
      )}

      {final && (
        <ScoreModal
          openModal={show}
          code={props.finalCode}
          scores={props.totalScores}
          creator={props.creator}
          title={props.title}
          grade={props.grade}
          subject={props.subject}
          closeModal={() => setShow(false)}
        />
      )}
    </>
  );
};

export default Timer;

// import React, { useEffect, useState } from "react";
// import ScoreModal from "../../ScoreModal";

// export let COUNT;

// const Timer = (props) => {
//   const [count, setCount] = useState(0);
//   const [show, setShow] = useState(() => false);
//   const [text, setText] = useState(() => false);
//   const [crack, setCrack] = useState(() => false);
//   const [final, setFinal] = useState(() => false);
//   console.log(props.stop);
//   console.log(props, "ewrere");
//   let tick;
//   if (!crack) {
//     tick = () => {
//       setCount((prevCount) => prevCount + 1);
//       if (props.stop) {
//         // setText(() => true);
//         setCount(count);
//         COUNT = count;
//         setCrack(() => true);

//         console.log(count);
//         return;
//       }
//       /////////10 minutes completed//////////
//       // if (count === 9) {
//       //   //setText(() => true);
//       //   //setCrack(() => true);
//       //   // setCount(count + 1);
//       //   COUNT = count;
//       //   setShow(() => true);
//       //   console.log(COUNT);
//       //   return;
//       // }
//       if (count > 599) {
//         COUNT = 601;
//         setText(() => true);
//         setCrack(() => true);
//         setShow(() => true);
//         setFinal(() => true);

//         setCount(600);

//         console.log(COUNT);
//         console.log(props.finalCode, props.grade);
//         return;
//       }
//     };
//   }

//   useEffect(() => {
//     const interval = setInterval(tick, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [count]);

//   return (
//     <>
//       <div>{count}</div>
//       <div> big {COUNT}</div>
//       {text && (
//         <>
//           {" "}
//           <div>TIMES UP</div>
//           {/* <div>{count}</div> */}
//         </>
//       )}

//       {final && (
//         <ScoreModal
//           openModal={show}
//           code={props.finalCode}
//           scores={props.totalScores}
//           creator={props.creator}
//           title={props.title}
//           grade={props.grade}
//           subject={props.subject}
//           closeModal={() => setShow(false)}
//         />
//       )}
//     </>
//   );
// };

// export default Timer;

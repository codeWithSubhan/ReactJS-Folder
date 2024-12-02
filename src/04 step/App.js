import React, { useState } from "react";
import "./index.css";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤦‍♂️",
];
export default function App() {
  return (
    <>
      <Steps />
      {/* <Steps /> */}
      <StepMessage step={1}>It's children props content 😃</StepMessage>
      <StepMessage step={2}>
        pass any jsx through children props 😁
        <p>2nd tag😁</p>
        <div className="buttons">
          <Button bgColor="green" textColor="#fff" onClick={() => alert(2)}>
            😁 StepMessage
          </Button>
        </div>
      </StepMessage>
    </>
  );
}
function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [obj, setObj] = useState({ myName: "subhan" });

  // console.log(arr);
  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
      // setStep((s) => s + 1);
    }
    setObj({ myName: "taiyeb" });
  }
  function handlePrev() {
    if (step > 1) {
      setStep(step - 1);
      step > 1 && setStep(step - 1);
    }
  }
  console.log(step);
  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          {/* {obj.myName} */}
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrev}>
              ⬅ Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next ➡
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3> step:{step}</h3>
      {children}
    </div>
  );
}

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button style={{ background: bgColor, color: textColor }} onClick={onClick}>
      {children}
    </button>
  );
}

// import React, { useState } from "react";
// import "./index.css";
// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤦‍♂️",
// ];
// export default function App() {
//   return (
//     <>
//       <Steps />
//       <Steps />
//     </>
//   );
// }
// function Steps() {
//   const [step, setStep] = useState(1);
//   const [obj, setObj] = useState({ myName: "subhan" });
//   const [isOpen, setIsOpen] = useState(true);

//   // console.log(arr);
//   function Next() {
//     if (step < 3) {
//       setStep((s) => s + 1);
//       setStep((s) => s + 1);
//     }
//     setObj({ myName: "taiyeb" });
//   }
//   function Prev() {
//     if (step > 1) {
//       setStep(step - 1);
//       step > 1 && setStep(step - 1);
//     }
//   }
//   console.log(step);
//   return (
//     <>
//       <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
//         &times;
//       </button>
//       {isOpen && (
//         <div className="steps">
//           <div className="numbers">
//             <div className={step >= 1 ? "active" : ""}>1</div>
//             <div className={step >= 2 ? "active" : ""}>2</div>
//             <div className={step >= 3 ? "active" : ""}>3</div>
//           </div>
//           <p className="message">
//             Step{step}: {messages[step - 1]}
//             {obj.myName}
//           </p>
//           <div className="buttons">
//             <button bgColor="#7950f2" textColor="#fff" onClick={Prev}>
//               <span>👈</span> Previous
//             </button>
//             <button bgColor="#7950f2" textColor="#fff" onClick={Next}>
//               Next <span>👉</span>
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );

// import { useState } from "react";

// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

// export default function App() {
//   return (
//     <div>
//       <Steps />
//       <StepMessage step={1}>
//         <p>Pass in content</p>
//         <p>✌️</p>
//       </StepMessage>
//       <StepMessage step={2}>
//         <p>Read children prop</p>
//         <p>😎</p>
//       </StepMessage>
//       {/* <Steps /> */}
//     </div>
//   );
// }

// function Steps() {
//   const [step, setStep] = useState(1);
//   const [isOpen, setIsOpen] = useState(true);

//   // const [test, setTest] = useState({ name: "Jonas" });

//   function handlePrevious() {
//     if (step > 1) setStep((s) => s - 1);
//   }

//   function handlehandleNext() {
//     if (step < 3) {
//       setStep((s) => s + 1);
//       // setStep((s) => s + 1);
//     }

//     // BAD PRACTICE
//     // test.name = "Fred";
//     // setTest({ name: "Fred" });
//   }

//   return (
//     <div>
//       <button className="close" onClick={() => setIsOpen((is) => !is)}>
//         &times;
//       </button>

//       {isOpen && (
//         <div className="steps">
//           <div className="numbers">
//             <div className={step >= 1 ? "active" : ""}>1</div>
//             <div className={step >= 2 ? "active" : ""}>2</div>
//             <div className={step >= 3 ? "active" : ""}>3</div>
//           </div>

//           <StepMessage step={step}>
//             {messages[step - 1]}
//             <div className="buttons">
//               <Button
//                 bgColor="#e7e7e7"
//                 textColor="#333"
//                 onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
//               >
//                 Learn how
//               </Button>
//             </div>
//           </StepMessage>

//           <div className="buttons">
//             <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
//               <span>👈</span> Previous
//             </Button>

//             <Button bgColor="#7950f2" textColor="#fff" onClick={handlehandleNext}>
//               handleNext <span>👉</span>
//               <span>🤓</span>
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function StepMessage({ step, children }) {
//   return (
//     <div className="message">
//       <h3>Step {step}</h3>
//       {children}
//     </div>
//   );
// }

// function Button({ textColor, bgColor, onClick, children }) {
//   return (
//     <button
//       style={{ backgroundColor: bgColor, color: textColor }}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// }

// import { useState } from "react";

// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

// export default function App() {
//   return (
//     <div>
//       <Steps />
//       <StepMessage step={1}>
//         <p>Pass in content</p>
//         <p>✌️</p>
//       </StepMessage>
//       <StepMessage step={2}>
//         <p>Read children prop</p>
//         <p>😎</p>
//       </StepMessage>
//       {/* <Steps /> */}
//     </div>
//   );
// }

// function Steps() {
//   const [step, setStep] = useState(1);
//   const [isOpen, setIsOpen] = useState(true);

//   // const [test, setTest] = useState({ name: "Jonas" });

//   function handlePrevious() {
//     if (step > 1) setStep((s) => s - 1);
//   }

//   function handleNext() {
//     if (step < 3) {
//       setStep((s) => s + 1);
//       // setStep((s) => s + 1);
//     }

//     // BAD PRACTICE
//     // test.name = "Fred";
//     // setTest({ name: "Fred" });
//   }

//   return (
//     <div>
//       <button className="close" onClick={() => setIsOpen((is) => !is)}>
//         &times;
//       </button>

//       {isOpen && (
//         <div className="steps">
//           <div className="numbers">
//             <div className={step >= 1 ? "active" : ""}>1</div>
//             <div className={step >= 2 ? "active" : ""}>2</div>
//             <div className={step >= 3 ? "active" : ""}>3</div>
//           </div>

//           <StepMessage step={step}>
//             {messages[step - 1]}
//             <div className="buttons">
//               <Button
//                 bgColor="#e7e7e7"
//                 textColor="#333"
//                 onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
//               >
//                 Learn how
//               </Button>
//             </div>
//           </StepMessage>

//           <div className="buttons">
//             <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
//               <span>👈</span> Previous
//             </Button>

//             <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
//               Next <span>👉</span>
//               <span>🤓</span>
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function StepMessage({ step, children }) {
//   return (
//     <div className="message">
//       <h3>Step {step}</h3>
//       {children}
//     </div>
//   );
// }

// function Button({ textColor, bgColor, onClick, children }) {
//   return (
//     <button
//       style={{ backgroundColor: bgColor, color: textColor }}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// }

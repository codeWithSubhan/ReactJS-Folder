import { useReducer, useState } from "react";
import "./style.css";
function reducer(state, action) {
  console.log(state, action);
  if (action.type === "inc") return state + 1;
  if (action.type === "dec") return state - 1;
  if (action.type === "setCount") return action.payload;
}
function App() {
  const [step, setStep] = useState(1);
  // const [count, setCount] = useState(0);
  const [count, Dispatch] = useReducer(reducer, 0);

  // This mutates the date object.
  const date = new Date();
  //   date.setDate(date.getDate() + count);

  const dec = function () {
    Dispatch({ type: "dec" });
  };

  const inc = function () {
    Dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    Dispatch({ type: "setCount", payload: Number(e.target.value) });
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
  };

  const reset = function () {
    // setCount(0);
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default App;

// state Management with useReducer hook
// state management with useState(0) is not enought in certain situation😥
// 1. lots of state and manage states update, spread across many event handlers all over comp
// 2. when many state need to update at same time
// 3. updating one state which depend other state or many others states
// soluation: All these situation useRecuder can be Good😀

// what is useReducer hook
// 1. is an alternative way to setting state, ideal for complex state and related piecese of state
// 2. store related piece of states in state object (ofCourse prmitive type can be)
// 3. need reducer function containing all logic to update state. Decouple logic from compoment

// const [state, dispatch] = useReducer(reducer, 0);
// useReducer return along with initial state with a function for containing logic for updating states
// 4. reducer is pure function(no sideEffect) that takes current state and action, and return the next state
// 5. action is an object contain information that describe how to update state
// 6. dispatch is an function to triger  state update( in order to call reducer fn), by sending actions and from event handler func to reducer function

// differnt btw useState vs useReducer hook:
// useState  hook                                           useReducer hook
// 1. Ideal for single, independent pieces of             ideal for multiple related pieces of state and complex
// state(number,string,single array etc)                  state(object with many values nested obj or array etc)
// 2. logic of update state directly in event             logic of update state  live in one centeral place,decouple
// Hander or effect,spread of alla over one               from comp: the reducer
// multiple comp
// 3.state update by calling setState()                   by dispatching an action to reducer
// 4.Imprative state update                               Declarative state update, dispatch({type:"add",payload:1})
// 5. Easy to understand                                  6. incomparison to useState it bit difficut to understand and implement

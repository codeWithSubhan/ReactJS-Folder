import { useReducer } from "react";
import "./style.css";
console.log("RENDER");

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action");
  }
}

function App() {
  const [state, Dispatch] = useReducer(reducer, initialState);
  // console.log(useReducer(reducer, initialState));
  const { count, step } = state;
  //   console.log(count, step);

  // This mutates the date object.
  const date = new Date();
  date.setDate(date.getDate() + count);

  const dec = function () {
    Dispatch({ type: "dec" });
  };

  const inc = function () {
    Dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    Dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    Dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    Dispatch({ type: "reset" });
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

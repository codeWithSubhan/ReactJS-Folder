import React, { useState } from "react";
import "./style.css";
const App = () => {
  return <TipCalculator />;
};
function TipCalculator() {
  const [Bill, setBill] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = Bill * ((percentage + percentage2) / 2 / 100);
  function handleReset() {
    setBill("");
    setPercentage(0);
    setPercentage2(0);
  }
  return (
    <>
      <BillInput Bill={Bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage} onSelect={setPercentage}>
        How did you like service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like service?
      </SelectPercentage>
      {Bill > 0 && (
        <>
          <Output Bill={Bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </>
  );
}
function BillInput({ Bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={Bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
function SelectPercentage({ percentage, onSelect, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
function Output({ Bill, tip }) {
  return (
    <h3>
      You Pay {Bill + tip} (${Bill}+${tip} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

export default App;

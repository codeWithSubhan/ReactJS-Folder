import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { Inc, Dec } from "./actions/index";
function App() {
  const state = useSelector((state) => state.IncDec);
  const dispatch = useDispatch();
  return (
    <div className="counter">
      <h1>Inc/Dec with Redux</h1>
      <div>
        <button onClick={() => dispatch(Dec())}>-</button>
        <input type="text" value={state} />
        <button onClick={() => dispatch(Inc())}>+</button>
      </div>

      <div>
        <button className="btn">Reset</button>
      </div>
    </div>
  );
}
export default App;

// write all reducer in one file
const initialState = 0;
export default function IncDec(state = initialState, action) {
  switch (action.type) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    default:
      return state;
  }
}

import plusIcon from "./assets/plus.svg";

function Button({ children }) {
  return (
    <button type="button" className="flex">
      <img src={plusIcon} alt="Plus Icon" /> {children}
    </button>
  );
}

export default Button;

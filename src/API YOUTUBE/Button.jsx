function Button({ children, handleClick, action }) {
  return (
    <button type='button' action={action} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;

function Modal({ show, setShow, userId: id, data }) {
  if (!show) return;
  const user = data.find((item) => item.id === id);
  const { id: userID, name, email, password } = user;
  return (
    <div className='modal'>
      <div onClick={() => setShow((show) => !show)}>X</div>
      <table>
        <tbody>
          <tr>
            <th>Id:</th>
            <td>{userID}</td>
          </tr>
          <tr>
            <th>Name:</th>
            <td>{name}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{email}</td>
          </tr>
          <tr>
            <th>Password:</th>
            <td>{password}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Modal;

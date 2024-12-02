function Inputs({ name, email, password, setName, setEmail, setPassword }) {
  return (
    <>
      <table border='1'>
        <tbody>
          <tr>
            <td>
              <input
                type='text'
                value={name}
                placeholder='Name'
                onChange={(e) => setName(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type='email'
                value={email}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type='password'
                value={password}
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Inputs;

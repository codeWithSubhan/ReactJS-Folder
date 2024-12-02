import Button from './Button';
import Header from './Header';
import Inputs from './Inputs';

function Post({
  name,
  email,
  password,
  setName,
  setEmail,
  setPassword,
  handleAddUser,
  status,
  updateData,
}) {
  // console.log(status);
  return (
    <div className='App'>
      <Header>Application</Header>
      <Inputs
        name={name}
        email={email}
        password={password}
        setName={setName}
        setEmail={setEmail}
        setPassword={setPassword}
      />
      {status ? (
        <Button handleClick={handleAddUser} action='form'>
          Add User
        </Button>
      ) : (
        <Button handleClick={updateData} action='form'>
          Update User
        </Button>
      )}
    </div>
  );
}

export default Post;

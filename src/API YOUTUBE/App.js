import { useEffect, useState } from 'react';
import Post from './Post';
import Get from './Get';
import './style.css';

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(true);
  const [userId, setUserId] = useState(null);
  const [show, setShow] = useState(false);

  // API CALL
  function handleData() {
    fetch('http://localhost:9000/ApiYoutube')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }

  // API ADDED
  function handleAddUser() {
    if (!name || !password || !email) {
      alert(`filed can not be empty`);
      return;
    }
    const data = { name, email, password };
    fetch('http://localhost:9000/ApiYoutube', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) =>
      res.json().then(() => {
        handleData();
        setName('');
        setEmail('');
        setPassword('');
      })
    );
  }

  // API DELETED
  function handleDeleteUSer(id) {
    fetch(`http://localhost:9000/ApiYoutube/${id}`, {
      method: 'DELETE',
    }).then((res) => res.json().then(() => handleData()));
  }

  // Edit existing data
  function preFiled(id) {
    const user = data.find((item) => item.id === id);
    const { name, email, password } = user;

    setName(name);
    setEmail(email);
    setPassword(password);
    setStatus(false);
    setUserId(id);
  }

  // API UPDATED
  function updateData() {
    const updatedUser = {
      name,
      email,
      password,
    };
    console.log(updatedUser);
    fetch(`http://localhost:9000/ApiYoutube/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then(() => {
        handleData();
        setName('');
        setEmail('');
        setPassword('');
        setStatus(true);
      });
  }

  function hanldeCreateUser() {
    setStatus(true);
    setName('');
    setEmail('');
    setPassword('');
  }

  function handleModal(id) {
    setShow((show) => !show);
    setUserId(id);
  }

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className='Flex'>
      <Get
        data={data}
        setData={setData}
        handleData={handleData}
        handleDeleteUSer={handleDeleteUSer}
        preFiled={preFiled}
        hanldeCreateUser={hanldeCreateUser}
        handleModal={handleModal}
        show={show}
        setShow={setShow}
        userId={userId}
      />
      <Post
        name={name}
        setName={setName}
        password={password}
        setPassword={setPassword}
        email={email}
        setEmail={setEmail}
        handleAddUser={handleAddUser}
        status={status}
        updateData={updateData}
      />
    </div>
  );
}

export default App;

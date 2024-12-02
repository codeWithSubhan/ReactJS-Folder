import { useState } from 'react';
import Button from './Button';
import Header from './Header';
import Modal from './Modal';

function Get({
  data,
  handleDeleteUSer,
  preFiled,
  hanldeCreateUser,
  handleModal,
  show,
  setShow,
  userId,
}) {
  return (
    <div className='App'>
      <Header>
        <div className='create_user'>
          <div>Table</div>
          <Button handleClick={hanldeCreateUser}>Create User</Button>
        </div>
      </Header>
      <table border='1'>
        <tbody>
          <tr>
            <td>ID</td>
            <td>User Name</td>
            <td>Email</td>
            <td>Password</td>
            <td>Operations</td>
          </tr>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td style={{ display: 'flex', gap: '5px' }}>
                <Button handleClick={() => handleDeleteUSer(item.id)}>
                  Delete
                </Button>
                <Button handleClick={() => preFiled(item.id)}>Edit</Button>
                <Button handleClick={() => handleModal(item.id)}>View</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={show} setShow={setShow} userId={userId} data={data} />
    </div>
  );
}

export default Get;

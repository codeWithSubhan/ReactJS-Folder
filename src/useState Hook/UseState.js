import React, { useState } from "react";

// A Hook is a special build-in function that lets you “hook into” React features.
// Hooks allow function components to have access to state and other React features.
// Note: Hooks will not work in React class components

// For example, useState is a Hook that lets you add React state to function components.
// what useState do? It declares a “state variable and function”.

// import { useState } from "react";
// We initialize our state by calling useState in our function component.

// Returns
// useState returns an array with exactly two values:
// The current state. During the first render, it will match the initialState you have passed.
// The set function that lets you update the state to a different value and trigger a re-render.
// set functions do not have a return value. hance undefined

// destructuring the returned values from array.
// const [state, setState] = useState(initialState);
// useState accepts an initial state and returns two value in an array:
// The current state.
// A function that updates the state.

// Three Hook Rules
// Hooks can only be called inside React function components.
// Hooks can only be called at the top level of a component.
// Hooks cannot be conditional

const person = {
  firstName: "subhan",
  lastName: "khan",
  course: "BCA",
  age: 20,
  status: "single",
  nationality: "Indian",
};
const App = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(person);
  const [prev, setPrev] = useState(true);
  const [student, setStudent] = useState({
    userName: "",
    email: "",
    password: "",
    contact: "",
  });
  // console.log(useState(0));
  function handleClick() {
    // 1) immutable or primitive data can only be replce it
    setCount(count + 1);
    setCount(count + 1);
    console.log(setCount(count + 1));

    // by this setCount only replce them with
    // update data now matter how many time you call setCount(c+1)
    // if you want to change base on previous state just do like
    // Here, n => n + 1 is called an updater function.
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);

    // setCount(40); //will replce count  with it
    // 1.1) callback func hold prev state
    setPrev((prev) => !prev);
    // console.log(prev);

    // 3)useState with object
    // it is possible to change the contents of the object itself. This is called a mutation:
    // firstOne is replace whole state with new one
    // setUser({ firstName: "Taiyeb", lastName: "Ahamed", course: "BA" });
    // you may want to update only one field in a form, but keep the previous values for all other fields.
    // chnage only firstName and lastName
    setUser({
      firstName: "Abdul",
      lastName: "Samad",
      course: "BCA",
      age: 20,
      status: "single",
      nationality: "Indian",
    });
    // spread operator with object and array
    setUser({ ...user, firstName: "Abdul", lastName: "Samad" });
    // console.log({ ...user });
    // {..user} is same as writing {firstName:"subhan",lastName:"khan",course:"BCA"
    // age: 20, status: "single", nationality: "Indian", firstName:"Abdul",lastName:"Samad"}

    // if you don't know spread operator so look here
    // above spread operator
    // const obj1 = { foo: "bar", x: 42 };
    // const obj2 = { foo: "baz", y: 13, y: 15 }; //only unique key allowed else recent key will allowed
    // const obj3 = { ...obj1, ...obj2, z: 30 };
    // console.log(obj3);

    // let usestate with input fields
  }
  // const [student, setStudent] = useState({
  //   userName: "",
  //   email: "",
  //   password: "",
  //   contact: "",
  // });
  function handlePerson(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div style={{ textAlign: "left" }}>
      {student.userName}
      {student.password}
      <table style={{ margin: "auto" }}>
        <tbody>
          <tr>
            <th>Count:</th>
            <td>{count}</td>
          </tr>
          <tr>
            <th>User:</th>
            <td>
              {user.firstName} {user.lastName}
            </td>
          </tr>
          <tr>
            <th>userName:</th>
            <td>
              <input
                type="text"
                name="userName"
                value={student.userName}
                onChange={handlePerson}
              />
            </td>
          </tr>
          <tr>
            <th>password:</th>
            <td>
              <input
                type="password"
                name="password"
                value={student.password}
                onChange={handlePerson}
              />
            </td>
          </tr>
          <tr>
            <th>E-mail:</th>
            <td>
              <input
                type="email"
                name="email"
                value={student.email}
                onChange={handlePerson}
              />
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={handleClick}>Click</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
// there is more about is it we will learn some other time 😀

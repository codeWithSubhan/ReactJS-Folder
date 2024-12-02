import React, { useEffect, useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [count1, setCount1] = useState(0);
//   let Test = 0;
//   function handleCount() {
//     setCount(count + 1);
//     Test = 2;
//     console.log(Test);
//   }
//   useEffect(() => {
//     setCount1(count1 + 1);
//   }, []);
//   console.log(Test);

//   return (
//     <div>
//       <h2>count:{count}</h2>
//       <h2>count1:{count1}</h2>
//       <h2>Test:{Test}</h2>
//       <button onClick={handleCount}>click</button>
//     </div>
//   );
// }

//////////////////////////////////////////////////////////////////
function Render() {
  console.log("RENDER");
  return <h1>RE-RENDER</h1>;
}

function Counter({ children }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      {children}
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter>
        <Render />
      </Counter>
    </div>
  );
}

export default App;

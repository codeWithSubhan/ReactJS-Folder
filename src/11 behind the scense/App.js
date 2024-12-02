import React, { useState } from "react";
import "./style.css";
const content = [
  {
    summary: "React is a library for building UIs",
    details:
      "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "State management is like giving state a home",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "We can think of props as the component API",
    details:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default function App() {
  const jsx = (
    <h1>
      subhan
      <span>khan</span>
    </h1>
  );
  return (
    <div>
      <Tabbed content={content} />
    </div>
  );
}
// console.log(<DifferentContent item={5}/>)
// console.log(DifferentContent())
function Tabbed({ content }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>

      {activeTab <= 2 ? (
        <TabContent item={content.at(activeTab)} key={activeTab} />
      ) : (
        <DifferentContent />
      )}
    </div>
  );
}
function Tab({ num, activeTab, onClick }) {
  return (
    <button
      className={activeTab === num ? "tab active" : "tab"}
      onClick={() => onClick(num)}
    >
      Tab {num + 1}
    </button>
  );
}

function TabContent({ item }) {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  console.log("RENDER");
  function handleInc() {
    setLikes(likes + 1);
  }
  function handleUndo() {
    // setShowDetails(true);
    setLikes(5);
    console.log(likes);
  }
  function handleTrippleInc() {
    // setLikes(likes + 1);
    // setLikes(likes + 1);
    // setLikes(likes + 1);
    // console.log(likes);
    // all output is same due to not render immidetely
    setLikes((khan) => khan + 1);
    setLikes((subhan) => subhan + 1);
    setLikes((taiyeb) => taiyeb + 1);
    console.log(likes);
    // Explanation:-
    // 1.callBack func take state's initial value and return value + 1
    // 2.then take returning value as a parameter in a callback func then return value + 1
    // 3.then take returning value as a parameter in a callback func then return value + 1😂.
    // Note:- still component did not re-render.
  }
  function handleUndoLater() {
    setTimeout(handleUndo, 2000);
  }

  return (
    <div className="tab-content">
      <h4>{item.summary}</h4>
      {showDetails && <p>{item.details}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? "Hide" : "Show"} details
        </button>

        <div className="hearts-counter">
          <span>{likes} ❤️</span>
          <button onClick={handleInc}>+</button>
          <button onClick={handleTrippleInc}>+++</button>
        </div>
      </div>

      <div className="tab-undo">
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleUndoLater}>Undo in 2s</button>
      </div>
    </div>
  );
}
function DifferentContent() {
  return (
    <div className="tab-content">
      <h4>I'm a DIFFERENT tab, so I reset state 💣💥</h4>
    </div>
  );
}

// How React Update only updated changes in RealDOM?🙄
// in reality it update wwhoal ui at once 😲

// Component >> Instance >>  ReactElement >> Rendered phase >> Commit phase >> Browser paint🤒🤕
// Note:- ReactElement is created by react.createFunction call

// Now also understand How React works behind the scense😀
// Component:-
// Describe peace of UI
// Javascript function that return React Element means JSX(component) >> React.createElement() >> ReactElement

// Instance:-
// Instace are created each time whenever Component are called
// inside the App func, Comp call three time so App has now three child and each instance hold
// their own state,props,event,lifcyle or all three are independly(different)

// ReactElement:-
// JSX converted to React.createElement() function call by babel compiler
// then result of React.createElement() function call is ReactElement
// The result is a big object that contain all important information to insert in RealDOM
// ReactElement is not inserted to dom but first converted Html Element then place to dom

// Render Phase:-
// Render process run in only two situations:
// 1. first entire App was rendered
// 2. update State(re-render)
// rendering is done in react internally not in dom
// render process is trigger for entire application
// Render is a procees will study write now😎

// Render work
// 1) All ReactElements created from all instance in component Tree
// are store in one tree called virtual DOM

// virtual DOM:-
// First Defination: In React all the instance become ReactElement this ReactElement call virtualDOM.
// 2nd Defination: virtualDOM Tree of all ReactElements created by all instances in component Tree.

// Describe:-
// when any state change in suppose D comp so React call that comp again and create new
// ReactElement then replce it with oldOne or indirectly new virtul DOM created with updated ReactElement
// Note: all nested child comps will re-reder when parent comp will render or call😂
// why it's happen because React doesn't know it's child will be effected or not😂 that's why rather than
// rendering a comp it also re-render it's children😂

// Reconciliation + Diffing:-
// After creating new virtualDOM will Reconciliation+Diffing with current fiber tree(before state update)
// This reconciliation done by React's Reconciler called Fiber(currently in react 2023) then it's result called updated fiber tree
// did you scared?😂

// let's understand what is Reconciliation in React?
// In the browser, DOM manipulation is expensive and time consuming and slow, both in mounting and unmounting.
// The “reconciliation” algorithm in React Deciding which DOM Element actually need to be inserted, deleted or updated
// in order to reflect the latest state changes.😀
// It's done by reconciler and currently reconciler in reactjs is fiber

// Now what is Fiber and what it does?😂
// 1. fiber takes virtualDOM and fiber tree and compare and make updated Fiber Tree😂
// 2. in intial render fiber tree created only and can not be re-created on every render but mutate means
// 3. change over and over again in future reconciliation process hence make perfect place to keep track of
// current comp state,props, hooks sideeffect etc
// 4. In Fiber Tree every instance and element has Fiber
// Fiber:- keep track of current state, props, sideEffect, used hook, Queue of Work also known as Unit Of Work🤕
// unlike virtualDOM, Fiber do not recreate on every re-render
// In Fiber work can be done asynchronously like:-
// Rendering process can be split into chuncks, task can be prioritzed and work can be paused, reused, or throw away

// Updated Fiber Tree
// after reconciliation process it produce updated Fiber Tree then all neccesary updated element store in
// List Of DOM Update

// COMMIT PHASE
// Then list of updated DOM Update one by one into real DOM
// React Doesn't touch DOM. React only renders. It doesn't know where the render result will go🤨
// updated Fiber Tree update The DOM step by step(synchronous) by a Library called ReactDom() and React from React imported for render phase
// then Browser notice that DOM has changed then Browser Repaint screen😀
// After commit phase or complete the task the updated Fiber Tree became current Fiber Tree for next render cycle

// Important Topic😲:-
// Diffing Algorithem:-
// diffing: is part of recociliation process
// diffing:- comparing Elements btw two renders step by step base on their position in the tree
// diffing has two fundamental Rule:-
// 1. Two elements of different types will produce different Tree🌴
// 2. Elements with stable key props stay the same across renders
//
// Now there three different situation
// 1. SAME POSITION, TWO DIFFERENT ELEMENTS BTW TWO RENDERS           distroy
// 2. SAME POSITION, SAME ELEMENT                                     stay same
// 3. DIFFERENT POSITION, SAME ELEMENT                                distroy

// 1. If parent Node has been replace  with other tag or component or position change
// React assume that entire sub-tree is no longer exit
// hence distroy these sub-tree including state and children although children did not change anythings yet it rebuild😂

// 2. If re-render same element and same position but change it's props attribute
// Element will be kept as well as it's children with including state
// and if we want to referesh or again re-render in order to referesh state then use key props

// 3. If poistion change of any element React will distory old one and re-create in dom Element
// if in before the two same child Component has new same comp inserted then rest two position change hence
// react will distory these two child and recreated in dom but will slow the performance of application.
// in order to increse performace use key props

// what is key props🔑:-
// It's special props that use to tell diffing algorithm that an element is unique
// Allow React to distinguish btw multiple instances of same compoenents
// soluation of 3rd situation Element will keep in dom althought position is different but reset the state
// when key is changes during render that element or component re-build with fresh state
// (Even SAME POSITION, SAME ELEMENT)

// Now let's review whatever we learnt yet😟
// step1. virtualDOM & Fiber Tree will created from All instances or component Tree🌴
// step2. if any state change and one comp remove so virtualDOM will re-created or updated but one Fiber Tree
// step3. Reconciliation+Diffing will compare Fiber Tree with updated virtualDOM and produced Updated Fiber Tree
// step4. durring Reconciliation process Fiber walk through entire tree steb by step and analyzes excatly what need
// to change betweeb current Fiber Tree and updated Fiber Tree based on new virtualDOM this process step by step
// called diffing and diffing algorithem

// Extra Knowledge:
// Renderers :-
// They commit the result of render phase
// React can be used on different platform("host")
// renderes example:-
// ReactDOM:             Chrome,Firefox,safari Browser
// ReactNative:          ios android
// Remotion:             video
// Many others:          pdf doc figma
//
//

// Two Type of Logic in React Component
// 1.RENDERE LOGIC
// 2.EVENT LOGIC

// 1.RENDERE LOGIC:-
// Execute everyTime the compoenent render
// Principle:-
// 1.component must be pure:- Give same props must return same output JSX it called pure component
// 2.Render Logic must product no side Effect means no interaction with outside world like
// don't update directly DOM
// don't mutate object variable props outside of function scope that's why props are immutable

// 2.EVENT LOGIC:-
// Execute on event happen
// Event handler function are not render logic hence it allow side Effect in eventHandleFunction😀
// and ther special hook to resigister sideEffect called UseEffect()
// React use Event propagation to id root of all events

// Update State Batching:
// Do not think on every state change immidiately render application and immidiately update state🙄
// when click on button in eventJHandler function first of all state batching then render application😮
// then now update the state😮
//
//

// REACT 3RD-PARTY LIBRARY ECO-SYSTEM:-
// React use many Libraries that lead react to next level😂
// For Example:
// 1. Routing:                                 React Router, ReactLocation
// 2. Http Request:                            Fetch(), Axios()
// 3. Remote state Management:                 ReactQuery, swr, apollo
// 4. Global state Management:                 ReactQuery, swr, Apollo
// 5. Remote state Management:                 ContextApi, Rdux, Zustand
// 6. Styling:                                 css modules, styleCompoenet,tailwindcss
// 7. Form Management:                         React Hook Form, FormMilk
// 8. Animation/Transitiont:                   motion, react-spring
// 9.Ui compoenent                             ui material, chakra, mantine

// React Framwork
// 1.NEXT.JS
// 2.Remix
// Gatsby

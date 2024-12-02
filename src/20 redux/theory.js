// Redux:
// 1. 3rd party library to manage Global state
// 2. stondalone library means with vallajavascript but easy to integrate with react app using react-redux library
// 3. all Global state is stored in one gloablly accessible store which is easy to update by "actions" like reducer
// 4. It's conceptually simillar to ContextApi + useReducer
// 5. tow version 1)classic redux 2) mordern redux toolKit
// 6. Redux require when need lot of UI state or basically for big project

// Important Notes:-
// 1. in order to create store install redux to obtain createStore() method
// 2. accountReducer is a root reducer of store but we need also customerReducer so make root reducer which has multile reducer so that easly be can accessile
// 3. to connect application with store install react-redux librart
// 4. react-redux give provider comp then wrap App in Provider store={store}
// 5. to use store in each comp import useSelector hook given by react-redux
// 6. to use despatch import useDespatch hook provided by react-redux

// MIDDLEWARE:
// 1. a function that sits btw dispatching the action and the store
// 2. Allows us to run code after dispatching, but befor reaching the reducer in the store.
// 3. use for side Effect or asynchronous code like Api calls, timer, logging etc
// 4. middleware can use by 3rd party library Thunk
// 5. Thunk allow like api or asynchrous code run when dispatching then process then get in payload then action in reducer basically thunk wait action unitl code did not complete
// 6. it's had been done by simply reurning a function in dispatch function😂

// Thunk
// when we using thunks we instead of returning action object from action creator fun we actually return asynchronous function
// 2. when redux sees we are dispatching a function instead of action object redux call this func and pass two argument dispatch and currentState

// REDUX TOOLKIT
// 1. the modern and preferred way of writing Redux code
// 2. 100% compatible with "classic Redux", allowing us to use them together
// 3. less code
// 4. Big 3 adventages
// a) can mutate state inside the reducer(will be converted to immutable logic by Immer library😂)
// b) action creator atomatically created
// c) automatically setup of thunk middleware and devTools

// CONTEXT API VS REDUX
// context api:-
// 1. Build in React
// 2. easy to setup
// 3. additional state "slide" require new context setup from cratch("provider hell")
// 4. no machanism for async oeprations
// 5. performance is pain
// 6. only React Devetool

// Redux:-
// 1. require addional pachages (large bundle size)
// 2. more work to setup
// 3. once setup easy to create additional state slice
// 4. middleware for async oprations
// 5. performance is optimization out of box
// 6. React Devetool

// WHEN TO USE CONTEXT
// 1. small app
// 2. when  global state doesn't change often
// 3. when simple solve props drilling problem
// 4. when manage state in local sub-tree of app

// WHEN TO USE REDUX
// 1. for large app
// 2. when global state need to change requently
// 3. when complex state with nested objects and array as u may mutate state easyly

// Note:- both depend on project need

// what is state:
// "State" is any data that describes the current behavior of an application. This could include
// values like "a list of objects fetched from the server", "which item is currently selected",
// "name of the currently logged-in user", and "is this modal open?".

import { useContext } from 'react';

// Types of State:
// 1. Data: values that relate to specific features or business logic in the application (such as a list of todos)
// 2. Control/UI state: values related to how the user is interacting with the app (such as which todo item is currently selected)
// 2. Session state: values related to the current user (such as a username or profile)
// 3. Communication state: values that describe requests to other servers (such as a "loading" value)
// 4. Location state: values that are in the current browser URL and HTML history object (such as the domain, the path, query parameters, and client routing navigation history)
// 5. Local client state: values that are scoped directly to a single component or its descendants
// 6. Global client state: values that are broadly needed in many places throughout an application
// 7. Server state: values that are fetched from a server via an API and cached on the client

// What is State Management:
// "State Management" is the process of dealing with changes to state over the time. like process:-
// 1. store an initial value
// 2. read the current value
// 3. update a value

// State Management Tools:
// some common patterns for React state management are:-
// 1. useState
// 2. useReducer
// 3. Prop drilling
// 4. Colocating state:
// 5. Lifting state up:
// 6. Providers

// External State Management library
// 8. Context API
// 9. Redux
// 10. ReactQuery for remote state management
// 11. XState
// 13. Mobx

// URL State Management
// The URL is an excellent place to store UI state and alternative to useState hook in some situation
// Example:-open/close panel, currently selected Item, list sorting filter
// 1. Easy to store state in glabe place, accessible t oall comp
// 2. Good way to pass state from one page to another page
// 2. make it possible  to bookmark and share the page with excact Ui state it had at that time

// state can be store in URL by The library React-router
// state can be pass into URL by to way:-
// 1. params
// 2. query string

// Context API:-
// 1. is an system to pass data throughout the app without passing props hence solve props drilling problem
// 2. Allow us  to broadcast global state to the entire app
// 3. provider: give all child comp access to value
// 4. value: data that we want to available (usually state and function)
// 5. consumer: all comp that read the provied content value
// Note:- if value change react will re-render all the consumer(component that reading that value)
// IT's a new way of re-render componenet beside state update

// step:
// 1. create content component
// 2. wrap all comp with context
// 3. provide all value to child comp

// process:
// step 1:- const PostContext = createContext();
// createContext is a function just like an useState,useEffect so initialize top
// and it return context is just like a compoenent

// step 2:- <PostContext.Provider value={props}>All Comp</PostContext.Provider>
// wrapp all comp inside the postContext.provider comp
// provide value value={all props to be send}

// step 3:-const { onClearPosts } = useContext(PostContext);
// just destructing with useContext(PostContext) hook inside the children comp

import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { AboutPage } from './09-useContext/AboutPage';

import { MainApp } from './09-useContext/MainApp'
// import { TodoApp } from './08-useReducer/TodoApp'
// import { Padre } from './07-tarea-memo/Padre'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { MemorizeHook } from './06-memos/MemorizeHook'
// import { Memorize } from './06-memos/Memorize'
// import { Loyout } from './05-useLayoutEffect/Layout'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { MultipleCustomHooks } from './03-example/MultipleCustomHooks'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'
// import './08-useReducer/intro-reducer'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element:  <MainApp />,
  },
  {
    path: "/about",
    element:  <AboutPage />,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <MainApp />
    <RouterProvider router={router} />
  // </React.StrictMode>
)

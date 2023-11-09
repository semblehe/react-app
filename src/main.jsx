import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";

const router = createBrowserRouter([
    {
        path :"/",
        element:<div>Hellow</div>
    },
    {
        path :"/login",
        element:<LoginPage/>
    },
    {
        path :"/register",
        element:<RegisterPage/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

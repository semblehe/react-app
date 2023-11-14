import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import ErrorPage from "./pages/error_page.jsx";
import ProductsPage from "./pages/products.jsx";
import ProfilePage from "./pages/profile.jsx";
import DetailProductPage from "./pages/detailproduct.jsx";

const router = createBrowserRouter([
    {
        path :"/",
        element:<div>Hellow</div>,
        errorElement:<ErrorPage/>
    },
    {
        path :"/login",
        element:<LoginPage/>
    },
    {
        path :"/register",
        element:<RegisterPage/>
    },
    {
        path :"/products",
        element:<ProductsPage/>
    },
    {
        path :"/profile",
        element:<ProfilePage/>
    },
    {
        path :"/product/:id",
        element:<DetailProductPage/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

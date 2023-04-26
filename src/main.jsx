import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Components/Home.jsx';
import Register from './Components/Register.jsx';
import Login from './Components/Login.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import PrivetRout from './Routes/PrivetRout.jsx';
import Orders from './Components/Orders.jsx';
import Profile from './Components/Profile.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/orders',
        element: <PrivetRout><Orders></Orders></PrivetRout>
      },
      {
        path: '/profile',
        element: <PrivetRout><Profile></Profile></PrivetRout>
      },
      {
        path: '/register',
        element:<Register></Register>,
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

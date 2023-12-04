import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Teacher from './Components/Pages/Teacher';
import Student from './Components/Pages/Student';

const router = createBrowserRouter([
  {
    path: "/addTeacher",
    element: <Teacher></Teacher>,
  },
  {
    path: "/addStudent",
    element: <Student></Student>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddTeacher from './Components/Pages/AddTeacher';
import AddStudent from './Components/Pages/AddStudent';
import Main from './Components/Pages/main';
import Teachers from './Components/Pages/Teachers';
import Students from './Components/Pages/Students';
import UpdateTeacher from './Components/Pages/UpdateTeacher';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: '/student',
    element: <Students></Students>,
    loader: () => fetch('http://localhost:5000/student')
  },
  {
    path: '/teacher',
    element: <Teachers></Teachers>,
    loader: () => fetch('http://localhost:5000/teacher')
  },
  {
    path: '/teacher/updateTeacher/:id',
    element: <UpdateTeacher></UpdateTeacher>,
    loader: ({params}) => fetch(`http://localhost:5000/teacher/${params.id}`)
  },
  {
    path: "/teacher",
    element: <Teachers></Teachers>,
  },
  {
    path: "/addTeacher",
    element: <AddTeacher></AddTeacher>,
  },
  {
    path: "/addStudent",
    element: <AddStudent></AddStudent>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

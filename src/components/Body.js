import React from 'react'
import Login from './Login'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Landing from './Landing'
import SignUp from './SignUp'
import DashBoard from './DashBoard'
import JobUploadForm from './JobUploadForm'
const Body = () => {

  const appRouter = createBrowserRouter([
    {
        "path" : "/login",
        "element" : <Login />
    },
    {
        "path" : "/",
        "element" : <Landing />
    },
    {
        "path" : "/signup",
        "element" : <SignUp />
    },
    {
        "path" : "/home",
        "element" : <DashBoard/>
    },
    {
        "path" : "/job",
        "element" : <JobUploadForm />
    }
  ])
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
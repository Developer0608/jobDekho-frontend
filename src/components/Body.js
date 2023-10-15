import React from 'react'
import Login from './Login'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Landing from './Landing'
import SignUp from './SignUp'
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
    }
  ])
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
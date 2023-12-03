import React from 'react' 
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom' 
import DashBoard from './DashBoard' 
import Login from './Login'
import SignUpComponent from './SignUp'
import PrivateRoute from './PrivateRoute'
import LandingPage from './Landing'
const Body = () => {

  const appRouter = createBrowserRouter([
    {
        "path" : "/home",
        "element" : <PrivateRoute element={<DashBoard/>} />
        // "element" : <DashBoard />
    },
    {
      "path" : "/login",
      "element" : <Login/>
    },
    {
      "path" : "/signup",
      "element" : <SignUpComponent />
    },
    {
      "path" : "/",
      "element" : <LandingPage />
    }
  ])
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
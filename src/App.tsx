import type { JSX } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LoginPage from "./pages/login"


const Layout = () => {
  return (
    <>
      main page
    </>
  )
}


export const App = ()=> {
  const router = createBrowserRouter([
    {
      path: "/" ,
      element: <Layout/>,
      errorElement: <div>404 NOT FOUND</div>
    },
    {
      path: "/login" ,
      element: <LoginPage/>,
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

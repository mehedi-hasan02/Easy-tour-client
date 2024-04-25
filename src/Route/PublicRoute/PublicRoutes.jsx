import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Components/Layout/MainLayout";
import AllTouristsSpot from "../../Components/Pages/AllTouristsSpot";
import Home from "../../Components/Pages/AllTouristsSpot";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/allTouristsSpots',
            element: <AllTouristsSpot/>
        },
        {
            path: '/login',
            element: <Login/>,
        },
        {
            path: '/register',
            element: <Register/>
        }
    ]
    },
  ]);

  export default router;
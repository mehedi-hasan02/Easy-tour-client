import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Components/Layout/MainLayout";
import AllTouristsSpot from "../../Components/Pages/AllTouristsSpot";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
import PrivateRouter from "../PrivateRoute/PrivateRouter";
import AddTouristsSpot from "../../Components/Pages/AddTouristsSpot";
import MyList from "../../Components/Pages/MyList";
import Home from "../../Components/Pages/Home";

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
            element: <Register/>,
        },
        {
            path: '/addTouristsSpots',
            element: <PrivateRouter><AddTouristsSpot></AddTouristsSpot></PrivateRouter>
        },
        {
            path: '/myList',
            element: <PrivateRouter><MyList></MyList></PrivateRouter>
        }
    ]
    },
  ]);

  export default router;
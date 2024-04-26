import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Components/Layout/MainLayout";
import AllTouristsSpot from "../../Components/Pages/AllTouristsSpot";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
import PrivateRouter from "../PrivateRoute/PrivateRouter";
import AddTouristsSpot from "../../Components/Pages/AddTouristsSpot";
import MyList from "../../Components/Pages/MyList";
import Home from "../../Components/Pages/Home";
import SpotDetails from "../../Components/SpotDetails/SpotDetails";
import UpdateData from "../../Components/UpdateData/UpdateData";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=>fetch('http://localhost:8000/tourist'),
        },
        {
            path: '/allTouristsSpots',
            element: <AllTouristsSpot/>,
            loader: ()=>fetch('http://localhost:8000/tourist'),
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
            element: <PrivateRouter><MyList></MyList></PrivateRouter>,
            loader: ()=>fetch('http://localhost:8000/tourist'),
        },
        {
            path: '/spotDetails/:id',
            element: <PrivateRouter><SpotDetails></SpotDetails></PrivateRouter>,
            loader: ({params})=>fetch(`http://localhost:8000/tourist/${params.id}`),
        },
        {
            path: '/update/:id',
            element: <PrivateRouter><UpdateData></UpdateData></PrivateRouter>,
            loader: ({params}) => fetch(`http://localhost:8000/tourist/${params.id}`),
        }

    ]
    },
  ]);

  export default router;
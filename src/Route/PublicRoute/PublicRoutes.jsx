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
import Error from "../../Components/Error/Error";
import TouristSpotByCountry from "../../Components/TouristSpotByCountry/TouristSpotByCountry";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement:<Error></Error>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=>fetch('https://tourism-management-server-side.vercel.app/tourist'),
        },
        {
            path: '/allTouristsSpots',
            element: <AllTouristsSpot/>,
            loader: ()=>fetch('https://tourism-management-server-side.vercel.app/tourist'),
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
        },
        {
            path: '/spotDetails/:id',
            element: <PrivateRouter><SpotDetails></SpotDetails></PrivateRouter>,
            loader: ({params})=>fetch(`https://tourism-management-server-side.vercel.app/tourist/${params.id}`),
        },
        {
            path: '/update/:id',
            element: <PrivateRouter><UpdateData></UpdateData></PrivateRouter>,
            loader: ({params}) => fetch(`https://tourism-management-server-side.vercel.app/tourist/${params.id}`),
        },
        {
            path: '/touristSpotByCountry/:country',
            element: <TouristSpotByCountry></TouristSpotByCountry>,
            loader: ({params})=>fetch(`https://tourism-management-server-side.vercel.app/countrySpot/${params.country}`),
        }

    ]
    },
  ]);

  export default router;
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div>
            <div className='max-w-screen-xl mx-auto '>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Toaster/>
            </div>
        </div>
    );
};

export default MainLayout;
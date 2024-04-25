import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className='max-w-screen-xl mx-auto '>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Toaster/>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
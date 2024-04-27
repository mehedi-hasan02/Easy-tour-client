import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import TouristSpot from "../TouristSpot/TouristSpot";


const Home = () => {
    const touristSpots = useLoaderData(); 
    // console.log(touristSpots)
    return (
        <div>
            <div className="lg:mt-10">
                <Banner></Banner>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        touristSpots.slice(0,6).map(touristSpot => <TouristSpot key={touristSpot._id} touristSpot={touristSpot} ></TouristSpot>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
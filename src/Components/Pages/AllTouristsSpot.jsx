import { useLoaderData } from "react-router-dom";
import TouristSpot from "../TouristSpot/TouristSpot";

const AllTouristsSpot = () => {
    const touristSpots = useLoaderData();
    return (
        <div>
            <div className="grid grid-cols-3 gap-8">
                    {
                        touristSpots.map(touristSpot => <TouristSpot key={touristSpot._id} touristSpot={touristSpot} ></TouristSpot>)
                    }
                </div>
        </div>
    );
};

export default AllTouristsSpot;
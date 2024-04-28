import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
const TouristSpot = ({ touristSpot }) => {
    const { _id, image, country, spotName, location, season, avgCost, TravelTime, TotalVisitor, } = touristSpot;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="" className="w-full h-[250px]" /></figure>
            <div className="space-y-2 p-3">
                <h2 className="card-title">{spotName}</h2>
                <p>Travel is the movement of people between relatively distant geographical locations.</p>
                <hr />
                <div className="flex gap-2">
                    <p className="flex items-center"><CiLocationOn />{location},</p>
                    <p>{country}</p>
                </div>
                <div className="flex justify-between lg:gap-40">
                    <p className="flex items-center"><IoMdTime />{TravelTime}</p>
                    <p>Avg Cost: ${avgCost}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Best Season: {season}</p>
                    <p>Total Visitor: {TotalVisitor}</p>
                </div>
                <div className="">
                    <Link to={`/spotDetails/${_id}`}>
                        <button className="btn bg-green-500 text-white hover:bg-green-500 w-full lg:w-[120px]">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TouristSpot;
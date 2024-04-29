import { Link, useLoaderData } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";

const SpotDetails = () => {
    const loadedSpot = useLoaderData();
    const { image, country, spotName, location, season, avgCost, TravelTime, TotalVisitor,shortDescription } = loadedSpot;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-10 mb-20">
            <figure><img src={image} alt="Movie"/></figure>
            <div className="p-5 space-y-2">
                <h2 className="card-title">{spotName}</h2>
                <p><span>Description: </span>{shortDescription}</p>
                <div className="flex gap-2">
                    <p className="flex items-center"><CiLocationOn className="text-green-400"/>{location},</p>
                    <p>{country}</p>
                </div>
                <div className="flex justify-between lg:gap-40">
                    <p className="flex items-center"><IoMdTime className="text-orange-400"/>{TravelTime}</p>
                    <p>Avg Cost: ${avgCost}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Best Season: {season}</p>
                    <p>Total Visitor: {TotalVisitor}</p>
                </div>
                <div className="">
                    <Link to='/'>
                        <button className="btn bg-green-500 text-white hover:bg-green-500 w-full lg:w-[120px]">Go To Home</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default SpotDetails;
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const CountrySpot = ({ countrySpot }) => {

    const { _id,image,spotName, country, location, shortDescription, season, avgCost } = countrySpot;

    return (
        <div className="card bg-base-100 shadow-xl mt-10 mb-10">
            <figure><img src={image} alt="Cox's Bazar" className="w-full h-[250px]" /></figure>
            <div className="space-y-2 p-3">
                <h2 className="card-title">{spotName}</h2>
                <p>Travel is the movement of people between relatively distant geographical locations.</p>
                <hr />
                <div className="flex gap-2">
                    <p className="flex items-center"><CiLocationOn />{location},</p>
                    <p>{country}</p>
                </div>
                <div className="flex gap-40">
                    <p>Avg Cost: ${avgCost}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Best Season: {season}</p>
                </div>
                <div className="card-actions">
                    <Link to={`/spotDetails/${_id}`}>
                        <button className="btn bg-green-500 text-white hover:bg-green-500">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CountrySpot;
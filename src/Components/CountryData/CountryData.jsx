import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const CountryData = ({ country }) => {
    return (
        <Link>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={country.cImage} alt="Cox's Bazar" className="w-full h-[250px]" /></figure>
                <div className="space-y-2 p-3">
                    {/* <h2 className="card-title">{country.}</h2>
                <p>Travel is the movement of people between relatively distant geographical locations.</p>
                <hr />  */}
                    <div className="flex gap-2">
                        {/* <p className="flex items-center">{location},</p> */}
                        <p>{country.cName}</p>
                    </div>
                    <div>
                        <p>{country.cDescription}</p>
                    </div>
                    {/* <div className="flex gap-40">
                    <p className="flex items-center"><IoMdTime />{TravelTime}</p>
                    <p>Avg Cost: ${avgCost}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Best Season: {season}</p>
                    <p>Total Visitor: {TotalVisitor}</p>
                </div> 
                  <div className="card-actions">
                    <Link>
                        <button className="btn bg-green-500 text-white hover:bg-green-500">View Details</button>
                    </Link>
                </div> */}
                </div>
            </div>
        </Link>
    );
};

export default CountryData;
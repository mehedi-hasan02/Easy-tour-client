import { Link } from "react-router-dom";

const CountryData = ({ country }) => {
    return (
        <Link to={`/touristSpotByCountry/${country.cName}`}>
            
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={country.cImage} alt="" className="w-full h-[250px]" /></figure>
                <div className="space-y-2 p-3">
                    <div className="flex gap-2">
                        <h3 className="text-xl font-bold">{country.cName}</h3>
                    </div>
                    <div>
                        <p>{country.cDescription}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CountryData;
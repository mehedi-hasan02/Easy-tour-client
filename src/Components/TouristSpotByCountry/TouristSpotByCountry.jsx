import { useLoaderData } from "react-router-dom";
import CountrySpot from "../CountrySpot/CountrySpot";

const TouristSpotByCountry = () => {
    const loadedCountryData = useLoaderData();

    return (
        <div>
            <div>
                <h1>Tourists Spot In {loadedCountryData.country}</h1>
            </div>
            <div className="grid grid-cols-3 gap-8">
                {
                    loadedCountryData.map(countrySpot => <CountrySpot key={countrySpot._id} countrySpot={countrySpot}></CountrySpot>)
                }
            </div>
        </div>
    );
};

export default TouristSpotByCountry;
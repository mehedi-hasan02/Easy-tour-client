import { useLoaderData } from "react-router-dom";
import CountrySpot from "../CountrySpot/CountrySpot";

const TouristSpotByCountry = () => {
    const loadedCountryData = useLoaderData();

    return (
        <div className="mt-5 md:mt-10 lg:mt-10">
            <div className="text-center">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">Selected Tourists Spot</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 lg:px-0">
                {
                    loadedCountryData.map(countrySpot => <CountrySpot key={countrySpot._id} countrySpot={countrySpot}></CountrySpot>)
                }
            </div>
        </div>
    );
};

export default TouristSpotByCountry;
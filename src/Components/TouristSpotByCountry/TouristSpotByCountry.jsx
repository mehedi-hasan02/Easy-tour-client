import { useLoaderData, useParams } from "react-router-dom";
import CountrySpot from "../CountrySpot/CountrySpot";
import { Helmet } from "react-helmet";

const TouristSpotByCountry = () => {
    const loadedCountryData = useLoaderData();
    const {country} = useParams();


    return (
        <div className="mt-5 md:mt-10 lg:mt-10 lg:min-h-[580px]">
            <Helmet>
                <meta charSet="utf-8" />
                <title>EasyTour-Countries</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1></h1>
            <div className="text-center">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">Tourists Spot In <span className="text-orange-400">{country}</span></h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 lg:px-0">
                {
                    loadedCountryData?.map(countrySpot => 
                    <CountrySpot 
                    key={countrySpot._id} 
                    countrySpot={countrySpot} 
                    ></CountrySpot>)
                }
            </div>
        </div>
    );
};

export default TouristSpotByCountry;
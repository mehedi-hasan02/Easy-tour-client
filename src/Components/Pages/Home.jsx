import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import TouristSpot from "../TouristSpot/TouristSpot";
import { useEffect, useState } from "react";
import CountryData from "../CountryData/CountryData";


const Home = () => {
    const touristSpots = useLoaderData(); 
    const [countryDatas, setCountryData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/country')
        .then(res=>res.json())
        .then(data=>{
            setCountryData(data);
        })
    },[]);

    return (
        <div>
            <div className="lg:mt-10">
                <Banner></Banner>
                <div className="mt-20 text-center space-y-3 mb-10">
                    <h1 className="text-5xl font-bold">Tourists Spots</h1>
                    <p className="w-2/3 mx-auto">Tourist Spots is a curated selection of destinations that encapsulate the essence and charm of a particular region or locale. From iconic landmarks to hidden gems, these spots offer visitors an opportunity to immerse themselves in the culture, history, and natural beauty of a destination. Whether it's exploring historic sites, indulging in culinary delights, or simply soaking in breathtaking vistas, "Tourist Spots" aims to inspire wanderlust and facilitate memorable travel experiences for adventurers of all kinds.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mb-10">
                    {
                        touristSpots.slice(0,6).map(touristSpot => <TouristSpot key={touristSpot._id} touristSpot={touristSpot} ></TouristSpot>)
                    }
                </div>
                <div className="text-center mt-12 mb-7 space-y-2">
                    <h1 className="text-5xl font-bold">Countries</h1>
                    <p className="w-2/3 mx-auto">Discover the world with our Tourist Country section! From the ancient temples of Cambodia to the stunning landscapes of Vietnam, explore diverse cultures, attractions, and travel tips for your next adventure. Get inspired, plan your trip, and make unforgettable memories!</p>
                </div>
                <div className="grid lg:grid-cols-3 gap-8 mb-10">
                    {
                        countryDatas.map(country => <CountryData key={country._id} country={country}></CountryData>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
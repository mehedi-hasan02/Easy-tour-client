import { useLoaderData } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Banner from "../Banner/Banner";
import TouristSpot from "../TouristSpot/TouristSpot";
import { useEffect, useState } from "react";
import CountryData from "../CountryData/CountryData";
import PopulationSpot from "../PopulationSpot/PopulationSpot";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";


const Home = () => {
    const touristSpots = useLoaderData();
    const [countryDatas, setCountryData] = useState([]);
    const [popularSpots, setPopularSpot] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://tourism-management-server-side.vercel.app/country')
            .then(res => res.json())
            .then(data => {
                setCountryData(data);
            })
            .finally (()=>setLoading(false))
    }, []);
    useEffect(() => {
        fetch('https://tourism-management-server-side.vercel.app/popular')
            .then(res => res.json())
            .then(data => {
                setPopularSpot(data);
            })
    }, []);

    if(loading)
    {
        return (
            <div className='text-center'>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        )
    }

    console.log(popularSpots)

    return (
        <div>
            <div className="lg:mt-10">
                <Banner></Banner>
                <div className="mt-5 md:mt-8 lg:mt-12 text-center space-y-3 mb-10 md:p-5">
                    <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold">Tourists Spots</h1>
                    <p className="lg:w-2/3 mx-auto">Tourist Spots is a curated selection of destinations that encapsulate the essence and charm of a particular region or locale. From iconic landmarks to hidden gems, these spots offer visitors an opportunity to immerse themselves in the culture, history, and natural beauty of a destination. Whether it's exploring historic sites, indulging in culinary delights, or simply soaking in breathtaking vistas, "Tourist Spots" aims to inspire wanderlust and facilitate memorable travel experiences for adventurers of all kinds.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mb-10">
                    {
                        touristSpots.slice(0, 6).map(touristSpot => <TouristSpot key={touristSpot._id} touristSpot={touristSpot} ></TouristSpot>)
                    }
                </div>
                <div className="text-center mt-12 mb-7 space-y-2">
                    <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold">Countries</h1>
                    <p className="lg:w-2/3 mx-auto">Discover the world with our Tourist Country section! From the ancient temples of Cambodia to the stunning landscapes of Vietnam, explore diverse cultures, attractions, and travel tips for your next adventure. Get inspired, plan your trip, and make unforgettable memories!</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                    {
                        countryDatas.map(country => <CountryData key={country._id} country={country}></CountryData>)
                    }
                </div>
                <div className="text-center">
                    <h1><span className="text-4xl font-semibold">DESTINATION</span><br /><span className="text-orange-500 text-5xl font-bold">POPULAR PLACES</span></h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mt-10 lg:mb-10">
                    {
                        popularSpots.map(popularSpot => <PopulationSpot key={popularSpot._id} popularSpot={popularSpot}></PopulationSpot>)
                    }
                </div>
                <div className="text-center mt-5 md:mt-10 lg:mt-10">
                    <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold">Partner Company</h1>
                </div>
                <Marquee>
                    <div className="flex justify-center items-center mt-5 mb-10 gap-8">
                        <img src={img1} alt="" className="h-[50px]" />
                        <img src={img2} alt="" className="h-[40px]" />
                        <img src={img3} alt="" className="h-[40px]" />
                        <img src={img4} alt="" className="h-[40px]" /> 
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Home;
import { Link, useLoaderData } from "react-router-dom";
import TouristSpot from "../TouristSpot/TouristSpot";
import { useEffect, useState } from "react";

const AllTouristsSpot = () => {
    
    const touristSpots = useLoaderData();
    const [allTouristsSpotData, setAllTouristsSpotData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setAllTouristsSpotData(touristSpots)
            setLoading(false)
        },2000)
    
    },[touristSpots])

    if(loading)
    {
        return(
            <div className='text-center'>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        )
    }

    const handelSort = (sortBy) =>{
        if(sortBy === "avgCost")
        {
            const sorting = [...allTouristsSpotData].sort((a, b) => a.avgCost - b.avgCost);
            setAllTouristsSpotData(sorting);
        }
    }

    return (
        <div className="mt-5 lg:mt-10 lg:mb-10">
            <div className="text-center space-y-3 mb-10">
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold md:font-extrabold">All Tourists Spot</h2>
                <p className="lg:w-2/3 mx-auto">Explore the world's most captivating destinations with our 'All Tourist Spots' section, offering a curated selection of must-visit places, from iconic landmarks to hidden gems, ensuring unforgettable travel experiences for every adventurer.</p>
            </div>
            <div className="text-center mb-5">
            <details className="dropdown">
                    <summary className="m-1 btn bg-[#23BE0A] text-white hover:bg-[#23BE0A] px-8">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><Link onClick={() => handelSort("avgCost")}>Average Cost</Link></li>
                    </ul>
                </details>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 lg:px-0">
                {
                    allTouristsSpotData.map(touristSpot => <TouristSpot key={touristSpot._id} touristSpot={touristSpot} ></TouristSpot>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;
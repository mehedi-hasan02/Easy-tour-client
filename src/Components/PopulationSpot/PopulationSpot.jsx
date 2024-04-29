import { CiLocationOn } from "react-icons/ci";
const PopulationSpot = ({popularSpot}) => {
    return (
        <div className="card bg-base-100 shadow-xl">
                <figure><img src={popularSpot.image} alt="" className="w-full h-[250px]" /></figure>
                <div className="space-y-2 p-3">
                    <div className="flex gap-2">
                        <h3 className="text-xl font-bold">{popularSpot.spotName}</h3>
                    </div>
                    <div className="min-h-[120px]">
                        <p>{popularSpot.shortDescription}</p>
                    </div>
                    <div>
                        <p className="flex items-center gap-1"><CiLocationOn className="text-green-400"/> {popularSpot.country}</p>
                    </div>
                </div>
            </div>
    );
};

export default PopulationSpot;
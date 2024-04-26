import { Link, useLoaderData } from "react-router-dom";

const SpotDetails = () => {
    const loadedSpot = useLoaderData();
    const { _id, image, country, spotName, location, season, avgCost, TravelTime, TotalVisitor, } = loadedSpot;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions">
                    <Link to='/'>
                        <button className="btn bg-green-500 text-white hover:bg-green-500">Go To Home</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default SpotDetails;
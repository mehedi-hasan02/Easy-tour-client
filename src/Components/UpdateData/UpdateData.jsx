import { useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const UpdateData = () => {
    const loadedSpot = useLoaderData();
    const navigate = useNavigate();
    const [selectedCountry, setSelectedCountry] = useState("");

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value); 
    };

    const handelUpdate = e => {
        e.preventDefault();

        e.preventDefault();
        const form = e.target;

        const spotName = form.name.value;
        const location = form.location.value;
        const country = selectedCountry;
        const season = form.season.value;
        const avgCost = form.avgCost.value;
        const TravelTime = form.TravelTime.value;
        const TotalVisitor = form.TotalVisitor.value;
        const image = form.image.value;
        const shortDescription = form.shortDescription.value;

        const touristSpotDetails = { spotName, location, country, season, avgCost, TravelTime, TotalVisitor, image, shortDescription }

        fetch(`https://tourism-management-server-side.vercel.app/tourist/${loadedSpot?._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(touristSpotDetails)
        })

        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount > 0)
            {
                swal({
                    title: "Success",
                    text: "Spot Data Update Successfully",
                    icon: "success",
                    dangerMode: true,
                  })
                  navigate('/')
            }
        })
    }
    return (
        <div className="mt-10 lg:mt-20 mb-5 md:mb-10 lg:mb-10">
            <Helmet>
                <meta charSet="utf-8" />
                <title>EasyTour-Update Data</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="text-center mb-5">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">Update Tourist Spot Data</h1>
            </div>
            <form onSubmit={handelUpdate}>
                <div className="flex flex-col lg:flex-row justify-center lg:gap-6">
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Tourists Spot Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={loadedSpot?.spotName} placeholder="Enter your tourists name" className="input input-bordered w-full" />
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Location</span>
                        </label>
                        <input type="text" name="location" defaultValue={loadedSpot?.location} placeholder="Enter tourists location" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-center lg:gap-6">
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Country</span>
                        </label>
                        {/* <input type="text" name="country" defaultValue={loadedSpot?.country} placeholder="Enter country name" className="input input-bordered w-full" /> */}
                        <select className="select select-bordered w-full " onChange={handleCountryChange} value={selectedCountry} required>
                                {/* <option value='' disabled>Select Country</option> */}
                                <option value='Bangladesh'>Bangladesh</option>
                                <option value='Thailand'>Thailand</option>
                                <option value='Indonesia'>Indonesia</option>
                                <option value='Malaysia'>Malaysia</option>
                                <option value='Vietnam'>Vietnam</option>
                                <option value='Cambodia'>Cambodia</option>
                            </select>
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Season</span>
                        </label>
                        <input type="text" name="season" defaultValue={loadedSpot?.season} placeholder="Enter seasonality" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-center lg:gap-6">
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Average Cost</span>
                        </label>
                        <input type="number" name="avgCost" defaultValue={loadedSpot?.avgCost} placeholder="Enter average cost" className="input input-bordered w-full" />
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Travel Time</span>
                        </label>
                        <input type="text" name="TravelTime" defaultValue={loadedSpot?.TravelTime} placeholder="How many day you want to stay!" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-center lg:gap-6">
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Total Visitor Per-Year</span>
                        </label>
                        <input type="text" name="TotalVisitor" defaultValue={loadedSpot?.TotalVisitor} placeholder="Total visitor per-year" className="input input-bordered w-full" />
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Image</span>
                        </label>
                        <input type="text" name="image" defaultValue={loadedSpot?.image} placeholder="Enter image URL" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="w-full">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Short Description</span>
                    </label>
                    <textarea name="shortDescription" defaultValue={loadedSpot?.shortDescription} className="textarea textarea-bordered w-full"></textarea>
                </div>
                <input type="submit" value="Update" className="btn btn-block bg-[#D2B48C] border border-[#331A15] hover:bg-[#D2B48C] hover:border-[#331A15] mt-6" />
            </form>
        </div>
    );
};

export default UpdateData;
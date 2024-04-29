import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from 'sweetalert';

const AddTouristsSpot = () => {

    const { users } = useContext(AuthContext);
    const [selectedCountry, setSelectedCountry] = useState("");
    const userName = users.displayName;
    const userEmail = users.email;

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value); 
    };

    const handelAddTourist = e => {
        e.preventDefault();
        const form = e.target;

        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const spotName = form.name.value;
        const location = form.location.value;
        const country = selectedCountry;
        const season = form.season.value;
        const avgCost = form.avgCost.value;
        const TravelTime = form.TravelTime.value;
        const TotalVisitor = form.TotalVisitor.value;
        const image = form.image.value;
        const shortDescription = form.shortDescription.value;

        const touristSpotDetails = { userName, userEmail, spotName, location, country, season, avgCost, TravelTime, TotalVisitor, image, shortDescription }

        fetch('https://tourism-management-server-side.vercel.app/tourist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(touristSpotDetails)
        })
            .then(res => res.json())
            .then(data => {
                form.reset()
                if (data.insertedId) {
                    swal({
                        title: "Success",
                        text: "Added Successfully",
                        icon: "success",
                        dangerMode: true,
                    })
                }
            })

    }

    return (
        <div>
            <div className="text-center mt-10 space-y-5">
                <h1 className="text-3xl font-bold">Add Tourists Spot</h1>
                <p className="lg:w-2/3 mx-auto">Welcome to our 'Add Tourist Spot' page! Have you discovered an amazing destination that the world should know about? Share it with us here. Simply fill out the form with details about the tourist spot, including its name, location, description, and any captivating images you have. Help us enrich our database and inspire fellow travelers to explore new horizons. Let's promote tourism together!</p>
            </div>
            <div className="mt-10 mb-10 px-2 md:px-0 lg:px-0">
                <form onSubmit={handelAddTourist}>
                    <div className="flex flex-col lg:flex-row justify-center gap-2 lg:gap-6">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Tourists Spot Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your tourists name" className="input input-bordered w-full" required />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Location</span>
                            </label>
                            <input type="text" name="location" placeholder="Enter tourists location" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center gap-2 lg:gap-6">
                        <div className="w-full">
                            {/* <label className="label">
                                <span className="label-text text-xl font-semibold">Country</span>
                            </label>
                            <input type="text" name="country" placeholder="Enter country name" className="input input-bordered w-full" required/> */}
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Country</span>
                            </label>
                            <select className="select select-bordered w-full " onChange={handleCountryChange} value={selectedCountry} required>
                                <option value='' disabled>Select Country</option>
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
                            <input type="text" name="season" placeholder="Enter seasonality" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center gap-2 lg:gap-6">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Average Cost</span>
                            </label>
                            <input type="number" name="avgCost" placeholder="Enter average cost" className="input input-bordered w-full" required />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Travel Time</span>
                            </label>
                            <input type="text" name="TravelTime" placeholder="How many day you want to stay!" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center gap-2 lg:gap-6">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Total Visitor Per-Year</span>
                            </label>
                            <input type="text" name="TotalVisitor" placeholder="Total visitor per-year" className="input input-bordered w-full" required />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Image</span>
                            </label>
                            <input type="text" name="image" placeholder="Enter image URL" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center gap-2 lg:gap-6">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">User Name</span>
                            </label>
                            <input type="text" name="userName" defaultValue={userName} readOnly className="input input-bordered w-full" />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">User Email</span>
                            </label>
                            <input type="email" name="userEmail" readOnly defaultValue={userEmail} className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Short Description</span>
                        </label>
                        <textarea name="shortDescription" className="textarea textarea-bordered w-full" required></textarea>
                    </div>
                    <input type="submit" value="Add Tourist Spot" className="btn btn-block bg-[#D2B48C] border border-[#331A15] hover:bg-[#D2B48C] hover:border-[#331A15] mt-6" />
                </form>
            </div>
        </div>
    );
};

export default AddTouristsSpot;
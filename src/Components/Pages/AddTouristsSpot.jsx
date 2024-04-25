import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AddTouristsSpot = () => {

    const { users } = useContext(AuthContext);
    const userName = users.displayName;
    const userEmail = users.email;

    return (
        <div>
            <div className="text-center mt-10 space-y-5">
                <h1 className="text-3xl font-bold">Add Tourists Spot</h1>
                <p className="w-2/3 mx-auto">Welcome to our 'Add Tourist Spot' page! Have you discovered an amazing destination that the world should know about? Share it with us here. Simply fill out the form with details about the tourist spot, including its name, location, description, and any captivating images you have. Help us enrich our database and inspire fellow travelers to explore new horizons. Let's promote tourism together!</p>
            </div>
            <div className="mt-10 mb-10">
                <form>
                    <div className="flex justify-center gap-6">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Tourists Spot Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your tourists name" className="input input-bordered w-full" />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Location</span>
                            </label>
                            <input type="text" name="location" placeholder="Enter tourists location" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="flex justify-center gap-6">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Country</span>
                            </label>
                            <input type="text" name="country" placeholder="Enter country name" className="input input-bordered w-full" />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Season</span>
                            </label>
                            <input type="text" name="season" placeholder="Enter seasonality" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="flex justify-center gap-6">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Average Cost</span>
                            </label>
                            <input type="text" name="avgCost" placeholder="Enter average cost" className="input input-bordered w-full" />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Travel Time</span>
                            </label>
                            <input type="text" name="TravelTime" placeholder="How many day you want to stay!" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="flex justify-center gap-6">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Total Visitor Per-Year</span>
                            </label>
                            <input type="text" name="TotalVisitor" placeholder="Total visitor per-year" className="input input-bordered w-full" />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Image</span>
                            </label>
                            <input type="text" name="image" placeholder="Enter image URL" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="flex justify-center gap-6">
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

                    <input type="submit" value="Add Spot" className="btn btn-block bg-[#D2B48C] border border-[#331A15] hover:bg-[#D2B48C] hover:border-[#331A15] mt-6" />
                </form>
            </div>
        </div>
    );
};

export default AddTouristsSpot;
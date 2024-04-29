const MyListCard = ({ spot }) => {
    const { spotName, location, country, season, avgCost } = spot;

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* table header */}
                <thead>
                    {/* heading row */}
                    <tr>
                        <th>#</th>
                        <th colSpan="5" className="text-center">Tourist Spot Information</th>
                    </tr>
                </thead>
                <tbody>
                    {/* column headers */}
                    <tr>
                        <th></th>
                        <th>Tourist Spot Name</th>
                        <th>Location</th>
                        <th>Country</th>
                        <th>Season</th>
                        <th>Average Cost</th>
                    </tr>
                    {/* table row */}
                    <tr>
                        <td>1</td>
                        <td>{spotName}</td>
                        <td>{location}</td>
                        <td>{country}</td>
                        <td>{season}</td>
                        <td>{avgCost}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MyListCard;

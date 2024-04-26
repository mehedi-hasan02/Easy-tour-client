import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
// import MyListCard from '../MyListCard/MyListCard'

const MyList = () => {
    const touristSpot = useLoaderData();
    const [myListData, setMyListData] = useState(touristSpot)

    const handelDelete = id =>{
        console.log(id);
    }

    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        {/* <th></th> */}
        <th>Tourist Spot Name</th>
        <th>Location</th>
        <th>Country</th>
        <th>Season</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        myListData.map(spot=> <tr key={spot._id}>
            {/* <th>1</th> */}
            <td>{spot.spotName}</td>
            <td>{spot.location}</td>
            <td>{spot.country}</td>
            <td>{spot.season}</td>
            <td className='flex gap-1'>
                <Link to={`/update/${spot._id}`}>
                    <button className="btn"><FiEdit2/></button>
                </Link>
                <Link>
                    <button onClick={()=>handelDelete(spot._id)} className='btn'><MdDelete/></button>
                </Link>
            </td>
          </tr>)
      } 
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyList;
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
// import MyListCard from '../MyListCard/MyListCard'

const MyList = () => {
    const {users} = useContext(AuthContext);
    const [myListData, setMyListData] = useState([]);
    // console.log(myListData);

    useEffect(()=>{
        fetch(`http://localhost:8000/emailTour/${users.email}`)
        .then(res=>res.json())
        .then(data=>{
            setMyListData(data)
            console.log(data);
        })
    },[])

    const handelDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:8000/tourist/${id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                                const remaining = myListData.filter(data => data._id !== id);
                                setMyListData(remaining);
                                // window.location.reload();
                            }
                        })
                }
            });
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
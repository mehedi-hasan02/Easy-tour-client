import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

const MyList = () => {
    const { users } = useContext(AuthContext);
    const [myListData, setMyListData] = useState([]);

    useEffect(() => {
        fetch(`https://tourism-management-server-side.vercel.app/emailTour/${users.email}`)
            .then(res => res.json())
            .then(data => {
                setMyListData(data)
            })
    }, [])

    const handelDelete = id => {
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
                    fetch(`https://tourism-management-server-side.vercel.app/tourist/${id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your Spot Data has been Deleted.",
                                    icon: "success"
                                });
                                const remaining = myListData.filter(data => data._id !== id);
                                setMyListData(remaining);
                            }
                        })
                }
            });
    }

    return (
        <div className="overflow-x-auto md:min-h-[280px] min-h-[250px] md:min-h-[700px] lg:min-h-[700px]">
            <Helmet>
                <meta charSet="utf-8" />
                <title>EasyTour-MyList</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <table className="table">
                <thead>
                    <tr>
                        <th>Tourist Spot Name</th>
                        <th>Location</th>
                        <th>Country</th>
                        <th>Season</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myListData.map(spot => <tr key={spot._id}>
                            <td>{spot.spotName}</td>
                            <td>{spot.location}</td>
                            <td>{spot.country}</td>
                            <td>{spot.season}</td>
                            <td className='flex gap-1'>
                                <Link to={`/update/${spot._id}`}>
                                    <button className="btn bg-blue-400 hover:bg-blue-400 text-white"><FiEdit2 /></button>
                                </Link>
                                <Link>
                                    <button onClick={() => handelDelete(spot._id)} className='btn bg-red-400 hover:bg-red-400'><MdDelete /></button>
                                </Link>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyList;
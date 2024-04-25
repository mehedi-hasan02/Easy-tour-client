import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {

    const { createUser,handleUpdateProfile,logOut } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { name,email, password,photo } = data;

        if (!/(?=.*[A-Z])(?=.*[a-z]).{6,}/.test(password)) {
            toast.error('Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.');
            return;
        }
        createUser(email, password)
        .then(res => {
            handleUpdateProfile(name,photo)
            logOut()
            toast.success('User created successfully');
            navigate('/')
        })
            .catch(error => {
                // setRegisterError(error.message);
            })

    }

    return (
        <div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-5">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" {...register("name", { required: true })} />
                        {errors.name && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered"  {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo url" className="input input-bordered"  {...register("photo", { required: true })} />
                        {errors.photo && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="flex items-center w-full relative">
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full" {...register("password", { required: true })} />
                            <span onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash className="absolute top-4 right-2 cursor-pointer"></FaEyeSlash> : <FaEye className="absolute top-4 right-2 cursor-pointer" />}
                            </span>

                        </div>
                        {errors.password && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p>Don't have an account?
                        <Link className="text-blue-800" to='/login'> Login</Link>
                    </p>
                </form>
                {/* {
                    registerError && <p>{registerError}</p>
                } */}
            </div>
        </div>
    );
};

export default Register;
import { useForm } from "react-hook-form"
import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";



const Register = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const {createUser} = useAuth();


    const onSubmit = data => {
        console.log(createUser)
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div>
            <div className="mb-10 lg:mr-20 ">
                <h1 className="lg:text-5xl md:text-3xl text-2xl text-[#03373D] font-bold">Create an Account</h1>
                <p className="text-lg text-[#03373D]">Register with Profast</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-[300px]">
                <fieldset className="fieldset">
                    {/* Name */}
                    <label className="label md:text-lg">Username</label>
                    <input type="text" {...register('name', { required: true })} className="input" placeholder="name" />
                    {errors.name?.type === "required" && (
                        <p className="text-red-500">Username is required</p>
                    )}



                    {/* email */}
                    <label className="label md:text-lg">Email</label>
                    <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                    {errors.email?.type === "required" && (
                        <p className="text-red-500">Email name is required</p>
                    )}

                    {/* password */}
                    <label className="label md:text-lg">Password</label>
                    <input type="password" {...register('password', { required: true, minLength: 6, pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).+$/ })} className="input" placeholder="Password" />
                    {errors.password?.type === "minLength" && (
                        <p className="text-red-500">Password must be atleast 6 characters</p>
                    )}
                    {errors.password?.type === "required" && (
                        <p className="text-red-500">Password is required</p>
                    )}
                    {errors.password?.type === "pattern" && (
                        <p className="text-red-600 text-[15px]">Password must have character/ capital/ smaller</p>
                    )}


                    <button className="px-7 py-3 font-bold hover:bg-lime-500 hover:text-white bg-[#CAEB66] text-[#03373D] rounded-xl md:mr-3 mb-3 md:mb-0">Register</button>
                    <p className="mt-5 text-[15px]">Already Have Account? <Link to={'/login'} className="  font-semibold text-[#1f9408]">Login</Link></p>
                </fieldset>
            </form>
        </div>


    );
};


export default Register;
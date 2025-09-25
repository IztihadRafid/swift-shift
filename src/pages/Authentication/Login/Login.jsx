import { useForm } from "react-hook-form"
import { Link } from "react-router";


const Login = () => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm();
    const onSubmit = data => {
        console.log(data)
    }
    return (

        <div>
            <div className="mb-10 lg:mr-25 ">
                <h1 className="lg:text-5xl md:text-3xl text-2xl text-[#03373D] font-bold">Welcome Back</h1>
                <p className="text-lg text-[#03373D]">Login with Profast</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="lg:w-[300px] md:w-[250px]">
                <fieldset className="fieldset">

                    {/* email */}
                    <label className="label md:text-lg">Email</label>
                    <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                    {errors.email?.type === "required" && (
                        <p className="text-red-500">Email name is required</p>
                    )}

                    {/* password */}
                    <label className="label md:text-lg">Password</label>
                    <input type="password" {...register('password', { required: true, minLength: 6 })} className="input" placeholder="Password" />
                    {errors.password?.type === "minLength" && (
                        <p className="text-red-500">Password must be atleast 6 characters</p>
                    )}
                    {errors.password?.type === "required" && (
                        <p className="text-red-500">Password is required</p>
                    )}

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="px-7 py-3 font-bold hover:bg-lime-500 hover:text-white bg-[#CAEB66] text-[#03373D] rounded-xl md:mr-3 mb-3 md:mb-0">Login</button>
                    <p className="mt-5 text-[15px]">Don`t Have any Account? <Link to={'/register'} className="  font-semibold text-[#1f9408]">Register</Link></p>
                </fieldset>
            </form>
        </div>

    );
};

export default Login;
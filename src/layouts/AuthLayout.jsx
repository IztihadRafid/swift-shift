import { Outlet } from "react-router";
import authImg from "../assets/authImage.png"
import ProFastLogo from "../shared/ProFastLogo/ProFastLogo";
const AuthLayout = () => {
    return (
        <div className="  w-full h-screen lg:flex justify-between ">
            <div className="lg:w-[15%]">
                <ProFastLogo></ProFastLogo>
            </div>

            <div className="lg:w-[30%] flex justify-center items-center lg:mt-0 mt-15">
                <Outlet></Outlet>
            </div>
            <div className=" lg:w-[55%]  bg-[#FAFDF0]  flex justify-center items-center lg:mt-0 mt-15">
                <img src={authImg} className=" " />
            </div>


        </div>
    );
};

export default AuthLayout;
import { useLoaderData } from "react-router";
import BangladeshMap from "./BangladeshMap";

const Coverage = () => {
    const serviceCenters = useLoaderData()  //coming from mainjsx by loading data
    console.log(serviceCenters)
    return (
        <div className="lg:max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-center mb-6 ">We are available in 64 districts</h1>
            <BangladeshMap serviceCenters={serviceCenters}></BangladeshMap>
        </div>
    );
};

export default Coverage;
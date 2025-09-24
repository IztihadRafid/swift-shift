import { FaBoxes, FaHandHoldingUsd, FaMapMarkedAlt, FaShippingFast, FaUndoAlt, FaWarehouse } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const servicesData = [
        {
            icon: FaShippingFast,
            title: "Express & Standard Delivery",
            description: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off."
        },
        {
            icon: FaMapMarkedAlt,
            title: "Nationwide Delivery",
            description: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours."
        },
        {
            icon: FaBoxes,
            title: "Fulfillment Solution",
            description: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support."
        },
        {
            icon: FaHandHoldingUsd,
            title: "Cash on Home Delivery",
            description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product."
        },
        {
            icon: FaWarehouse,
            title: "Corporate Service / Contract In Logistics",
            description: "Customized corporate services which includes warehouse and inventory management support."
        },
        {   icon: FaUndoAlt,
            title: "Parcel Return",
            description: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants."
        }
    ]

    return (
       <section className="bg-[#03373D] rounded-3xl pt-15">
         <div className="max-w-7xl mx-auto text-center mb-10 mt-10">
            <h2 className="text-3xl font-bold mb-4  text-white">Our Services</h2>
            <p className=" max-w-2xl mx-auto text-gray-400">
                Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
            </p>
        </div>

        <div className=" max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 pb-15">
            {
                servicesData.map((service,idx)=>
                    <ServiceCard key={idx} service={service} ></ServiceCard>
                )
            }
        </div>
       </section>
    );
};

export default Services;
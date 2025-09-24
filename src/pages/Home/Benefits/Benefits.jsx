import img1 from "../../../assets/safe-delivery.png"
import img2 from "../../../assets/tiny-deliveryman.png"
import img3 from "../../../assets/customer-top.png"
const Benefits = () => {
    return (
        <div className="flex flex-col gap-6 my-10">
            <div className="hero bg-gray-200  lg:w-full md:w-full w-96 mx-auto">
                <div className="hero-content bg-white flex-col lg:flex-row rounded-3xl">
                    <img src={img1} className=" rounded-lg w-[200px] h-[200px]" alt="benefit image" />
                    <div className="divider divider-horizontal "></div>
                    <div>
                        <h1 className="text-3xl font-bold text-[#03373D] lg:text-left text-center">24/7 Call Center Support</h1>
                        <p className="py-6 text-gray-600 lg:text-left text-center">
                            Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.
                        </p>

                    </div>
                </div>
            </div>


            <div className="hero bg-gray-200   lg:w-full md:w-full w-96 mx-auto">
                <div className="hero-content bg-white flex-col lg:flex-row rounded-3xl">
                    <img src={img2} className=" rounded-lg  w-[200px] h-[200px]" alt="image" />
                    <div className="divider divider-horizontal "></div>
                    <div>
                        <h1 className="text-3xl font-bold text-[#03373D]  lg:text-left text-center">100% Safe Delivery</h1>
                        <p className="py-6 text-gray-600  lg:text-left text-center">
                            We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.
                        </p>

                    </div>
                </div>
            </div>




            <div className="hero bg-gray-200   lg:w-full md:w-full w-96 mx-auto">
                <div className="hero-content bg-white flex-col lg:flex-row rounded-3xl">
                    <img src={img3} className=" rounded-lg  w-[200px] h-[180px]" alt="image" />
                    <div className="divider divider-horizontal "></div>
                    <div>
                        <h1 className="text-3xl font-bold text-[#03373D]  lg:text-left text-center">Live Parcel Tracking</h1>
                        <p className="py-6 text-gray-600 lg:text-left text-center">
                            Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.
                        </p>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Benefits;

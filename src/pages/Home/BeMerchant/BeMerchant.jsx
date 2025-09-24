import location from "../../../assets/location-merchant.png"
const BeMerchant = () => {
    return (
        <div>
            <div className="hero "  data-aos="zoom-in">
                <div className="hero-content bg-[url(assets/be-a-merchant-bg.png)] bg-no-repeat flex-col lg:flex-row-reverse bg-[#03373D] md:w-4xl w-96 lg:w-[1100px] rounded-4xl p-20 mb-16">
                    <img src={location} alt="location image" className="max-w-sm rounded-lg "   />
                    <div>
                        <h1 className="text-4xl font-bold text-white">Merchant and Customer Satisfaction is Our First Priority</h1>
                        <p className="py-6 text-gray-300">
                            We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                        </p>
                        <button className="px-8 py-4 font-bold hover:bg-lime-500 hover:text-white bg-[#CAEB66] text-[#03373D] rounded-4xl md:mr-3 mb-3 md:mb-0">Become a Merchant</button>
                        <button className="btn btn-outline px-8 py-7 font-bold hover:bg-lime-500 hover:text-white  text-[#CAEB66] rounded-4xl">Earn with Profast Courier</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeMerchant;
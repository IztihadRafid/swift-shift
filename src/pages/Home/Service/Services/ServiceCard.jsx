
const ServiceCard = ({service}) => {
    const {title,description,icon:Icon} = service
    return (
        <div className=" hover:bg-[#CAEB66] bg-base-100  mx-auto shadow-sm rounded-3xl">
            <figure className="px-8 pt-8 flex justify-center">
                <div className="">
                    <Icon className="scale-120"></Icon>
                </div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-[#03373D] font-bold">{title}</h2>
                <p className="text-gray-500 mb-15">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
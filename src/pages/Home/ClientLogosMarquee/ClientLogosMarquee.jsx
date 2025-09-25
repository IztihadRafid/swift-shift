import Marquee from "react-fast-marquee";
import logo1 from "../../../assets/brands/amazon.png"
import logo2 from "../../../assets/brands/amazon_vector.png"
import logo3 from "../../../assets/brands/casio.png"
import logo4 from "../../../assets/brands/moonstar.png"
import logo5 from "../../../assets/brands/randstad.png"
import logo6 from "../../../assets/brands/start-people 1.png"
import logo7 from "../../../assets/brands/start.png"
const ClientLogosMarquee = () => {
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7]
    return (
        <section className="py-8 lg:w-[1010px] md:w-[520px] w-96 mx-auto">
            <div className="  mx-auto px-4">
                <h1 className="text-2xl font-bold text-center mb-6">We've helped thousands of sales teams</h1>
            </div>
            <div className="lg:w-[1010px] md:w-[400px] w-[250px] mx-auto">
                <Marquee >
                    {
                        logos.map((logo, idx) => (
                            <div key={idx} className="flex items-center mx-8 h-24">
                                <img src={logo} alt="brand logo" />
                            </div>
                        ))
                    }
                </Marquee>
            </div>

        </section>
    );
};

export default ClientLogosMarquee;
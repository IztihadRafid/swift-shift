import Accordian from "../Accordian/Accordian";
import Banner from "../Banner/Banner";
import BeMerchant from "../BeMerchant/BeMerchant";
import Benefits from "../Benefits/Benefits";
import ClientLogosMarquee from "../ClientLogosMarquee/ClientLogosMarquee";
import CustomersFeedback from "../CustomersFeedback/CustomersFeedback";
import Services from "../Service/Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <ClientLogosMarquee></ClientLogosMarquee>
      <div className="divider mt-20"></div>
      <Benefits></Benefits>
      <div className="divider mb-20"></div>
      <BeMerchant></BeMerchant>
      <CustomersFeedback></CustomersFeedback>
      <Accordian></Accordian>
    </div>
  );
};

export default Home;
import Banner from "../Banner/Banner";
import BeMerchant from "../BeMerchant/BeMerchant";
import Benefits from "../Benefits/Benefits";
import ClientLogosMarquee from "../ClientLogosMarquee/ClientLogosMarquee";
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
    </div>
  );
};

export default Home;
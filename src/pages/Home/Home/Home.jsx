import Banner from "../Banner/Banner";
import ClientLogosMarquee from "../ClientLogosMarquee/ClientLogosMarquee";
import Services from "../Service/Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <ClientLogosMarquee></ClientLogosMarquee>
    </div>
  );
};

export default Home;
import Hero from "../components/Hero"; 
import Cards from "../components/Cards";
import Dishes from "../components/Dishes";
import Tab from "../components/Tab";
import Banner from "../components/Banner";
import Stories from "../components/Stories";
import Subscribe from "../components/Subscribe";

export default function WebApp() {
  return (
    <div> 
      <Hero />
      <Cards />
      <Dishes />
      <Tab heading="Top recommended dishes" />
      <Banner />
      <Stories />
      <Subscribe />
    </div>
  );
}
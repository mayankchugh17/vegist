import Hero from "../components/Hero"; 
import Cards from "../components/Cards";
import Dishes from "../components/Dishes";
import Tab from "../components/Tab";

export default function WebApp() {
  return (
    <div> 
      <Hero />
      <Cards />
      <Dishes />
      <Tab heading="Top recommended dishes" />
    </div>
  );
}
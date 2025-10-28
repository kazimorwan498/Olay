import Hero from "./HeroSection/Hero";
import Beauty from "./BeautySection/Beauty";
import Feature from "./Feature";
import Hydrate from "./Hydrate";

const Home = () => {
  return (
    <section className="bg-[url(/demo.jpg)] bg-top bg-no-repeat h-[5750px]">
      <Hero />
      <Beauty />
      <Feature />
      <Hydrate />
    </section>
  );
};

export default Home;

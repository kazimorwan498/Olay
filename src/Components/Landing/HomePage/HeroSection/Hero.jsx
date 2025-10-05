import React from 'react';
import HeroL from './HeroL';
import HeroR from './HeroR';

const Hero = () => {
  return (
    <section className="bg-radial-[at_50%_25%] from-0% from-[#af0a11] to-100% to-[#4d0000] px-4 xs:px-6 md:px-10 mt-[-78px]">
      <section
        className="max-w-[1400px] mx-auto flex flex-col-reverse md:flex-row justify-between gap-2.5 lg:gap-0"
        data-aos="fade-up">
        <HeroL />
        <HeroR />
      </section>
    </section>
  );
};

export default Hero;

import { useRef, useEffect } from "react";

const Hero = () => {
  return (
    <section className=" text-white h-full mx-auto mt-4 w-5/6">
      <div className="relative">
        <img
          src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/kSNojkWwSZWsYv0Xj1gcq88okzY.jpg"
          className="opacity-50 hover:opacity-30"
        />
        <p className="absolute top-[40%] left-[0] text-xl  sm:text-2xl md:text-3xl lg:text-5xl w-full text-center">
          Discover Latest Movies and{" "}
          <span className="whitespace-nowrap">TV shows</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;

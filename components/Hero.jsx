import React from "react";

const Hero = () => {
  return (
    <section className="relative border-2 pt-40 border-red-500 max-container flex flex-col gap-20 md:pb-80 mt pb-24 justify-center md:gap-28 xl:flex-row">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={require("../public/city.mp4")}
        autoPlay
        loop
        muted
      ></video>
      <div className="relative z-10 flex flex-1 flex-col xl:w-1/2 text-center text-white">
        <h1 className="font-extrabold  text-2xl text-center tracking-wide md:text-5xl">
          Unlock Your Travel Dreams <br />
          With Us!
        </h1>
        <p className="pt-5">
          Unlock your travel dreams with us and embark on unforgettable
          adventures to breathtaking destinations.
        </p>
      </div>
    </section>
  );
};

export default Hero;

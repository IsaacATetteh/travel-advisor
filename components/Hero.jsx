import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative border-2 pt-40 border-red-500 max-container max-w-screen flex flex-col gap-20 h-42 justify-center md:gap-28 xl:flex-row">
      <video
        className="absolute top-0 left-0 w-screen h-full object-cover"
        src={require("../public/city.mp4")}
        autoPlay
        loop
        muted
      ></video>
      <div className="relative items-center justify-center z-10 flex flex-1 flex-col xl:w-1/2 border-b border-0 text-center text-white">
        <h1 className="font-extrabold  text-2xl text-center tracking-wide md:text-5xl">
          Unlock Your Travel Dreams <br />
          With Us!
        </h1>
        <p className="pt-5">
          Unlock your travel dreams with us and embark on unforgettable
          adventures to breathtaking destinations.
        </p>
        <div className="flex border-0 border-orange-400 mt-16 md:mt-40 w-full justify-center items-center">
          <p className="mr-3" bold>
            Popular places
          </p>
          <div className="w-1/2 md:w-1/2 border-b-2 "></div>
        </div>
        <div className="flex border-0 lg:flex gap-4 mb-12 px-4 md:px-0 justify-center flex-row h-28 w-full mt-3 border-blue-400">
          <div className="md:h-28 md:min-w-[150px] h-full">
            <Image
              className="rounded-md h-20 md:h-full cursor-pointer object-cover"
              src="/madrid.webp"
              width={200}
              height={20}
            />
          </div>
          <div className="md:h-28 md:min-w-[150px] h-full">
            <Image
              className="rounded-md h-20 md:h-full cursor-pointer object-cover"
              src="/paris.jpeg"
              width={200}
              height={20}
            />
          </div>
          <div className="md:h-28 md:min-w-[150px] h-full">
            <Image
              className="rounded-md h-20 md:h-full cursor-pointer object-cover"
              src="/rome.jpeg"
              width={200}
              height={20}
            />
          </div>
          <div className="md:h-28 md:min-w-[150px] h-full">
            <Image
              className="rounded-md h-20 md:h-full cursor-pointer object-cover"
              src="/tokyo.jpeg"
              width={200}
              height={20}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

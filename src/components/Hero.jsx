import React from "react";
import backgroundVideo from "./sushivideo.mp4";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] m-auto">
      <video
        src={backgroundVideo}
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl p-4">We are happy to serve</h1>
          <h2 className="font-bold text-4xl pl-4">With Smile</h2>
          <p className="font-italic pl-4 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            numquam corporis sit assumenda quidem maiores unde alias mollitia
            voluptates nam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

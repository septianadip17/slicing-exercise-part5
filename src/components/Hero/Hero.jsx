import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import HeroPng from "../../assets/fruit-plate.png";
import LeafPng from "../../assets/leaf.png";

const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] border-2 border-purple-500">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
            <h1 className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia">
              Healthy
              <br />
              Fresh <span className="text-secondary">Fruits!</span>
            </h1>
            <p className="text-2xl tracking-wide">
              Order Now For Fresh Healthy Life
            </p>
            <p className="text-gray-400">
              Healthy and yummy food for fresh morning braekfast. Eat daily for
              good health and mind Order now and get 20% off on your first
              order.
            </p>
            {/* Button section */}
            <div className="flex justify-center md:justify-start">
              <button className="primary-btn flex items-center gap-2">
                <span>
                  <IoBagHandleOutline />
                </span>
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div>
          <img src={HeroPng} alt="fruits on plate" className="w-[350px] md:w-[550px] drop-shadow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

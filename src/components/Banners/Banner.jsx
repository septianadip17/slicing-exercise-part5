import React from "react";
import BannerPng from "../../assets/fruits-splash.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/animation";

const Banner = () => {
  return (
    <section>
      <div className="container">
        {/* Banner Image */}
        <div>
          <img
            src={BannerPng}
            alt="fruits splash"
            className="w-[300px] md:max-w-[400px] h-full object-cover"
          />
        </div>

        {/* Brand Info */}
        <div>
          <div>
            <h1>Brand Info</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              assumenda officia accusantium non, repellendus iure incidunt
              voluptatem dolor nihil dolores magnam velit quos, impedit aliquid
              repudiandae architecto, obcaecati illo aspernatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              assumenda illo, voluptatem iure enim blanditiis!
            </p>
            <motion.div
              variants={FadeUp(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn">Learn More</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

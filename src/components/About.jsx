import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiar  rounded-[20px] py-10 px-10 min-h-[300px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="Make 360Degree"
          className="w-50 h-36 object-contain"
        />

        <h3 className="text-black text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.5, 2)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[3 0px]">
        At Make360Degree, we have harnessed the power of cutting-edge technology
        to offer a unique and immersive experience to potential buyers. By
        leveraging the latest advancements in 3D modeling and virtual reality,
        we turn any property into a stunning, lifelike 360-degree model that
        captivates and engages audiences like never before.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

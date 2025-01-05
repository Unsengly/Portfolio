import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {/* Web Development */}
        <Card
          title="Web Development"
          des="Building responsive and scalable websites using modern technologies to enhance user experience and business growth."
          icon={<AiFillAppstore />}
        />

        {/* Mobile Development */}
        <Card
          title="Mobile Development"
          des="Creating intuitive and efficient mobile applications that provide seamless experiences for users on the go."
          icon={<FaMobile />}
        />

        {/* UX Design */}
        <Card
          title="UX Design"
          des="Designing user-friendly interfaces with a focus on aesthetics and functionality to deliver exceptional user experiences."
          icon={<SiAntdesign />}
        />

        {/* Hosting Website */}
        <Card
          title="Hosting Websites"
          des="Providing reliable and secure web hosting services to ensure your website remains accessible and performs optimally."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;

import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Year 4 Internship Experience */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">Year 4</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Year4 Internship Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Developer"
            subTitle="Hotel Management System - (3 months)"
            result="ITC"
            des="Worked at ITC under the supervision of Ms. Seak Leng. Developed a full-stack solution for a hotel management system."
          />
        </div>
      </div>

      {/* School Projects */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">School Projects</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">School Projects</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Application"
            subTitle="Design & Development"
            result="Front-end, Back-end"
            des="Developed a dynamic web application with an interactive UI, ensuring a seamless user experience."
          />
          <ResumeCard
            title="Mobile Application"
            subTitle="Design & Development"
            result="Android, iOS"
            des="Created a mobile app with smooth navigation and efficient functionality across platforms."
          />
          <ResumeCard
            title="UX Design"
            subTitle="User-Centered Design"
            result="Research, Wireframing"
            des="Focused on creating user-centered designs by researching user needs and developing wireframes and prototypes."
          />
          <ResumeCard
            title="Networking"
            subTitle="Information Security"
            result="50% - Cloud Computing"
            des="Developed knowledge in networking fundamentals, focusing on information security and cloud computing."
          />
          <ResumeCard
            title="NLP"
            subTitle="Natural Language Processing"
            result="Text Analysis"
            des="Implemented NLP techniques for text analysis, including tokenization and sentiment analysis."
          />
          <ResumeCard
            title="AI"
            subTitle="Artificial Intelligence"
            result="Machine Learning"
            des="Worked on machine learning projects to enhance problem-solving capabilities using AI algorithms."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;

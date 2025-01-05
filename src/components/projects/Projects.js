import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center mb-12">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="All My Projects that I have experience"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Hotel Web Application"
          des="A hotel management app for booking, reservations, guest management, and real-time availability. Built with React, Node.js, and MySQL."
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des="An e-commerce platform with product catalogs, user authentication, and secure payment. Built using React, Node.js, and MongoDB."
          src={projectTwo}
        />
        <ProjectsCard
          title="School Management"
          des="A school management app that handles student enrollment, grade tracking, and scheduling. Built with React, Node.js, and MySQL."
          src={projectThree}
        />
        <ProjectsCard
          title="Clinic Web Application"
          des="A clinic management app for patient registration, appointment scheduling, and medical record management. Built with React, Node.js, and MySQL."
          src={projectThree}
        />
        <ProjectsCard
          title="Portfolio"
          des="A showcase of my work as a web developer, featuring diverse applications such as hotel systems, e-commerce platforms, and more."
          src={projectOne}
        />
        <ProjectsCard
          title="Phone Shop Application"
          des="A phone shop app with product listings, user reviews, and order management. Built with React, Node.js, and MySQL."
          src={projectTwo}
        />
      </div>
    </section>
  );
};

export default Projects;

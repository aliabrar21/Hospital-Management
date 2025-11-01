import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className=" text-justify lg:text-start">
          At HealthCare+, we believe that good health is the foundation of a happy life. Our hospital is committed to providing world-class medical services through compassion, innovation, and excellence. With a patient-first approach, we combine advanced medical technologies with a warm and caring environment to ensure the best outcomes.
        </p>
        <p className="text-justify lg:text-start">
          Our team consists of experienced doctors, skilled nurses, and dedicated healthcare professionals who work tirelessly to deliver accurate diagnoses and effective treatments. We prioritize personalized care and transparency, ensuring that every patient feels heard, respected, and valued at every step of their healthcare journey.
        </p>
        <p className="text-justify lg:text-start">
          From preventive checkups and diagnostic tests to emergency care and advanced surgeries, HealthCare+ offers comprehensive solutions for all your health needs. We continue to expand our facilities and expertise to promote healthier communities and better living.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;

import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const icon1 = <RiMicroscopeLine size={35} className="text-backgroundColor" />;
  const icon2 = <MdHealthAndSafety size={35} className="text-backgroundColor" />;
  const icon3 = <FaHeartbeat size={35} className="text-backgroundColor" />;

  return (
      <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
        <div className="flex flex-col items-center lg:flex-row justify-between">
          <div>
            <h1 className="text-4xl font-semibold text-center lg:text-start">
              Our Services
            </h1>
            <p className="mt-2 text-center lg:text-start">
              Explore our specialized medical services designed to ensure your complete health and well-being.
            </p>
          </div>
          <div className="mt-4 lg:mt-0">
            <Button title="See Services" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 pt-14">
          <ServicesCard
              icon={icon1}
              title="Lab Test"
              desc="Our advanced lab provides precise and quick diagnostic tests using modern technology to help doctors make accurate treatment decisions."
          />
          <ServicesCard
              icon={icon2}
              title="Health Check"
              desc="Comprehensive health checkups designed to detect potential health risks early and help you maintain a healthy lifestyle."
          />
          <ServicesCard
              icon={icon3}
              title="Heart Health"
              desc="Expert cardiology services offering ECG, stress tests, and heart monitoring for early detection and prevention of heart disease."
          />
        </div>
      </div>
  );
};

export default Services;

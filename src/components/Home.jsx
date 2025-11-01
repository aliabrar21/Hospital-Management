import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
      <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
        <div className="w-full lg:w-4/5 space-y-5 mt-10">
          <h1 className="text-5xl font-bold leading-tight">
            Empowering Health Choices for a Vibrant Life — Your Trusted Partner in Care
          </h1>
          <p>
            At <strong>HealthCare+</strong>, we are dedicated to improving lives through compassionate and
            personalized medical services. Our expert doctors and modern facilities ensure the
            highest standards of care for every patient. From preventive checkups to advanced
            treatments, we focus on your well-being every step of the way, helping you live a
            healthier and more fulfilling life.
          </p>

          <Button title="See Services" />
        </div>
      </div>
  );
};

export default Home;

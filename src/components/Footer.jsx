import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
      <div className="bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
        <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
          {/* About Section */}
          <div className="w-full md:w-1/4">
            <h1 className="font-semibold text-xl pb-4">HealthCare+</h1>
            <p className="text-sm">
              Our team of dedicated doctors, each specializing in unique fields such as
              orthopedics, cardiology, pediatrics, neurology, dermatology, and more.
              We’re committed to providing world-class care with compassion and precision.
            </p>
          </div>

          {/* About Links */}
          <div>
            <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">About Us</h1>
            <nav className="flex flex-col gap-2">
              <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-hoverColor transition-all cursor-pointer"
              >
                About
              </Link>
              <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-hoverColor transition-all cursor-pointer"
              >
                Services
              </Link>
              <Link
                  to="doctors"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-hoverColor transition-all cursor-pointer"
              >
                Doctors
              </Link>
            </nav>
          </div>

          {/* Services Links */}
          <div>
            <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Services</h1>
            <nav className="flex flex-col gap-2">
              <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-hoverColor transition-all cursor-pointer"
              >
                Lab Test
              </Link>
              <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-hoverColor transition-all cursor-pointer"
              >
                Health Check
              </Link>
              <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-hoverColor transition-all cursor-pointer"
              >
                Heart Health
              </Link>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/4">
            <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/" spy={true} smooth={true} duration={500}>
                #508, 5nd Floor, Majestic Mall, Kukatpally, Hyderabad, Telangana, India – 500072
              </Link>
              <Link to="/" spy={true} smooth={true} duration={500}>
                support@care.com
              </Link>
              <Link to="/" spy={true} smooth={true} duration={500}>
                +91 7702269911/22
              </Link>
            </nav>
          </div>
        </div>

        {/* Footer Bottom */}
        <div>
          <p className="text-center py-4 text-sm">
            © 2025 Developed by
            <span className="text-hoverColor font-medium"> Abrar Ali</span> | All rights reserved
          </p>
        </div>
      </div>
  );
};

export default Footer;

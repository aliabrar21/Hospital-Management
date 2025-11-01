import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";

const Blogs = () => {
  return (
      <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
        <div className="flex flex-col items-center lg:flex-row justify-between">
          <div>
            <h1 className="text-4xl font-semibold text-center lg:text-start">
              Latest Posts
            </h1>
            <p className="mt-2 text-center lg:text-start">
              Explore our latest health articles written by medical experts to help you live a healthier, happier life.
            </p>
          </div>
          <div className="mt-4 lg:mt-0">
            <Button title="Our Articles" />
          </div>
        </div>

        <div className="my-8">
          <div className="flex flex-wrap justify-center gap-5">
            <BlogCard
                img={img1}
                headlines="Unraveling the Mysteries of Sleep"
                desc="Discover how quality sleep restores your body and mind, improves focus, and reduces stress. Learn tips for building better sleep habits."
            />
            <BlogCard
                img={img2}
                headlines="The Heart-Healthy Diet"
                desc="Explore foods that strengthen your heart, control cholesterol, and promote overall cardiovascular wellness through balanced nutrition."
            />
            <BlogCard
                img={img3}
                headlines="Understanding Pediatric Vaccinations"
                desc="A guide for parents on the importance, safety, and schedule of childhood vaccinations to keep your little ones healthy and protected."
            />
            <BlogCard
                img={img4}
                headlines="Navigating Mental Health"
                desc="Learn effective ways to manage stress, anxiety, and emotional challenges while maintaining a balanced, positive mindset."
            />
            <BlogCard
                img={img5}
                headlines="The Importance of Regular Exercise"
                desc="Regular physical activity boosts your immunity, strengthens muscles, and enhances mood for a healthier and active lifestyle."
            />
            <BlogCard
                img={img6}
                headlines="Skin Health 101"
                desc="Understand the basics of skincare, from daily routines to sun protection, and keep your skin healthy, glowing, and youthful."
            />
          </div>
        </div>
      </div>
  );
};

export default Blogs;

import React from "react";
import Dropdown from "../Elements/Dropdown";
import HomeText from "../Elements/HomeText";

import Image from "next/image";
import {HomeImg} from "../../../../public";
import FancyTestimonialsSlider from "../Elements/Testimonial";
import img1 from "../../../../public/images/Borobudur1.jpg";
import img2 from "../../../../public/images/Borobudur2.jpeg";
import img3 from "../../../../public/images/Borobudur3.jpg";

type Props = {};

const Hero = (props: Props) => {
  const testimonials = [
    {
      img: img1,
      quote:
        "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to select between formats.",
      name: "Jessie J",
      role: "Acme LTD",
    },
    {
      img: img2,
      quote:
        "Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.",
      name: "Nick V",
      role: "Malika Inc.",
    },
    {
      img: img3,
      quote:
        "The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.",
      name: "Amelia W",
      role: "Panda AI",
    },
  ];
  return (
    <>
      <div className="container flex flex-col lg:flex-row justify-center gap-40 mt-40">
        <div className="flex flex-col justify-center h-full items-center gap-5 mt-40">
          <HomeText />
          <Dropdown />
        </div>
        <div className="flex justify-center items-center h-full">
          <Image className="w-[600px] h-[700px] rounded-lg" src={HomeImg} alt="home-image" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 text-lg">
        <p className="text-xl font-semibold py-14">Here is some of our customer experience:</p>
        <FancyTestimonialsSlider testimonials={testimonials} />
      </div>
    </>
  );
};

export default Hero;

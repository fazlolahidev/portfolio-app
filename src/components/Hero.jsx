import React from "react";
import { motion } from "framer-motion";

//* Images *//
import arrowDown from "../assets/arrow-down.png";

//* Icons *//
import { TfiInstagram } from "react-icons/tfi";
import { SlSocialGithub } from "react-icons/sl";
import { TfiTwitter } from "react-icons/tfi";
import { BsMouse } from "react-icons/bs";
import { GiHand } from "react-icons/gi";
import { TypeAnimation } from "react-type-animation";

//* Toastify *//
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = ({ aboutRef }) => {
  const notify = () => toast("You sent a Hello to Ali 💜");

  const handleClick = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <section id="Home" className="container heroGrid mt-5 sm:mt-32">
      {/* Icon List  */}
      <motion.ul
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        className="flex flex-col gap-7 items-center justify-center "
      >
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <a href="https://www.instagram.com/ali.faz78/" target='_blank'>
            <TfiInstagram
              size={20}
              className="transition cursor-pointer hover:scale-110"
            />
          </a>
        </motion.li>

        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a href="https://github.com/fazlolahidev" target="_blank">
            <SlSocialGithub
              size={20}
              className="transition cursor-pointer hover:scale-110"
            />
          </a>
        </motion.li>

        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href="https://twitter.com/alifazlolahi" target="_blank">
            <TfiTwitter
              size={20}
              className="transition cursor-pointer hover:scale-110"
            />
          </a>
        </motion.li>
      </motion.ul>

      {/* Content */}
      <div className="flex flex-col gap-5 pl-2 ">
        <h1 className="text-3xl sm:text-5xl flex gap-1 sm:items-center">
          <span>Ali Fazlolahi</span>{" "}
          <span>
            <GiHand size={30} />
          </span>
        </h1>
        <div className='flex items-center gap-3 before:content-[""] before:inline-block before:w-[60px] before:h-[1px] before:bg-slate-500'>
          <TypeAnimation
            sequence={["FrontEnd Developer", 1000, "", 300]}
            speed={55}
            wrapper="p"
            repeat={Infinity}
          />
        </div>
        <p className="w-[90%] leading-8 text-slate-500 mt-5">
          I'm a ReactJS developer. I have 1 year of experience building
          interactive web apps using ReactJS. I'm skilled in creating modern and
          responsive user interfaces and excited to be a part of the ReactJS
          community. I always looking for new opportunities to learn and grow
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.5,
            type: "spring",
          }}
          className="mt-10"
        >
          <button
            onClick={notify}
            className="rounded-xl bg-black text-white px-7 py-3 hover:shadow-lg"
          >
            Say hello
          </button>
        </motion.div>
      </div>

      <div className="scrollMouseGrid mt-10 pl-4">
        <div
          onClick={handleClick}
          className="inline-flex items-center gap-1 cursor-pointer"
        >
          <BsMouse />
          <p className="flex items-center gap-1">
            <span>Scroll down</span>
            <img
              src={arrowDown}
              alt="arrow down"
              className="w-2 ml-1 mouseIconAnimate"
            />
          </p>
        </div>
      </div>
      <ToastContainer position="bottom-center" />
    </section>
  );
};

export default Hero;

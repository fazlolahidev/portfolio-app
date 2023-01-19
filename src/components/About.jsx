import React from "react";
import Title from "../UI/Title";

//* Images *//
import codingRoom from '../assets/codingRoom.jpg'

const About = ({ aboutRef }) => {
  return (
    <section id='About' className="container mt-[250px]" ref={aboutRef}>
      <Title title="about me" des="my introduction" />

      <div className="grid lg:grid-cols-2 gap-5 mt-10">
        <div>
          <img
            src={codingRoom}
            alt="profile image"
            className="w-[70%] h-[270px] mx-auto rounded-2xl object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="flex flex-col gap-1 py-4 items-center bg-white rounded-lg">
              <i>🛩</i>
              <p>Experience</p>
              <p className="text-xs text-slate-400">+1 years</p>
            </div>

            <div className="flex flex-col gap-1 py-4 items-center bg-white rounded-lg">
              <i>🛩</i>
              <p>Completed</p>
              <p className="text-xs text-slate-400">+6 Project</p>
            </div>

            <div className="flex flex-col gap-1 py-4 items-center bg-white rounded-lg">
              <i>🛩</i>
              <p>Support </p>
              <p className="text-xs text-slate-400">All moments</p>
            </div>
          </div>

          <p className="hidden lg:block">
            I am a React developer with a keen interest in building multi page
            SPA (Single Page Application) using the latest technologies and
            techniques.
          </p>

          <div className="text-center mt-5">
            <button className="rounded-lg bg-black text-white px-6 py-3 cursor-pointer">
              download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

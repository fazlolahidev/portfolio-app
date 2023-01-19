import React from "react";
import Title from "../UI/Title";

//* Images *//
import tick from "../assets/tick.png";

const Skills = () => {
  return (
    <section id='Skills' className="container mt-20">
      <Title title="skills" des="my technical level" />

      <div className="flex mt-10">
        <div className="bg-white skillsWidth mx-auto rounded-lg p-3">
          <h3 className="text-center my-2">FrontEnd skills</h3>

          {/* CONTAINER FOR SKILL */}
          <div className="grid grid-cols-2 gap-4">
            {/* Skill */}
            <div className="flex justify-center gap-2">
              <div className="mt-1">
                <img src={tick} alt="tick icon" className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <p>HTML</p>
                <p className="text-xs text-slate-500" >Intermediate</p>
              </div>
            </div>

            {/* SKILL */}
            <div className="flex justify-center gap-2">
              <div className="mt-1">
                <img src={tick} alt="tick icon" className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <p>CSS</p>
                <p className="text-xs text-slate-500" >Intermediate</p>
              </div>
            </div>

            {/* SKILL */}
            <div className="flex justify-center gap-2">
              <div className="mt-1">
                <img src={tick} alt="tick icon" className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <p>Javascript</p>
                <p className="text-xs text-slate-500" >Intermediate</p>
              </div>
            </div>

            {/* SKILL */}
            <div className="flex justify-center gap-2">
              <div className="mt-1">
                <img src={tick} alt="tick icon" className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <p>React</p>
                <p className="text-xs text-slate-500" >Intermediate</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

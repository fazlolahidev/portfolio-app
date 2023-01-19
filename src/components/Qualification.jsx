import React, { useState } from "react";

import Title from "../UI/Title";
import Education from "./Education";
import Experiencce from "./Experiencce";

const Qualification = () => {
  const [TabContent, setTabContent] = useState("edu");

  return (
    <section id='Journal' className="container mt-20">
      <Title title={"my qualification"} des={"my personal journey"} />

      <div className="mt-10">
        <div className="flex justify-center gap-10">
          <button
            value={"edu"}
            onClick={() => setTabContent("edu")}
            className={`relative widthTran overflow-hidden border rounded-lg py-1 px-3 ${
              TabContent === "edu" ? "active text-white" : null
            }`}
          >
            Education
          </button>
          <button
            value={"exp"}
            onClick={() => setTabContent("exp")}
            className={`relative widthTran overflow-hidden border rounded-lg py-1 px-3 ${
              TabContent === "exp" ? "active text-white" : null
            }`}
          >
            Experience
          </button>
        </div>
      </div>

      {TabContent === "edu" && <Education />}
      {TabContent === "exp" && <Experiencce />}
    </section>
  );
};

export default Qualification;

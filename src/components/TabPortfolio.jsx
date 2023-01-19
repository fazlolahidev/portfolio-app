import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WorkCard from "../UI/WorkCard";
import { recentWorkAll, recentWorkWeb } from "../constant/recent-work";

const TabPortfolio = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleChange = (e) => {
    setActiveTab(e.target.value);
  };

  return (
    <div>
      <div className="my-5 flex justify-center gap-3">
        <button
          value="all"
          onClick={handleChange}
          className={`relative widthTran overflow-hidden border rounded-lg py-1 px-3 ${
            activeTab === "all" ? "active text-white" : ""
          } `}
        >
          all
        </button>
        <button
          value="web"
          onClick={handleChange}
          className={`relative widthTran overflow-hidden border rounded-lg py-1 px-3 ${
            activeTab === "web" ? " active text-white" : ""
          }`}
        >
          web
        </button>
      </div>

      <AnimatePresence>
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {activeTab === "all" &&
            recentWorkAll.map((item, index) => {
              return <WorkCard data={item} key={index} />;
            })}

          {activeTab === "web" &&
            recentWorkWeb.map((item, index) => {
              return <WorkCard data={item} key={index} />;
            })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TabPortfolio;

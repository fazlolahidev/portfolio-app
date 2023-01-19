import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { educationData } from "../constant/tab-data";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5}}
      className={`container-qualification`}
    >
      {educationData.map((data, index) => {
        return (
          <AnimatePresence key={index}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: `${index * .6}` }}
              className="box flex flex-col gap-[3px] relative even:text-right"
            >
              <h4 className="title">{data.title}</h4>
              <p className="text-xs text-slate-400">{data.city}</p>
              <p className="text-xs text-slate-400 mt-3">{data.year}</p>
            </motion.div>
          </AnimatePresence>
        );
      })}
    </motion.div>
  );
};

export default Education;

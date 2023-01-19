import React from "react";
import { AnimatePresence, motion } from "framer-motion";

//* Images *//
import arrow from "../assets/arrow-icon.png";

const WorkCard = ({ data }) => {
  return (
    <AnimatePresence>
      <motion.article
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ delay: data.id * 0.2, duration: 0.2 }}
        className="bg-white p-3 rounded-lg hover:shadow-md transition-shadow"
      >
        <figure>
          <img src={data.image} alt="card photo" className="w-full rounded-lg h-[171px] object-cover" />
        </figure>

        <div className="mt-5">
          <h3>{data.title}</h3>

          <p className="text-xs mt-1 truncate">{data.description}</p>

          <a
            target="_blank"
            href={data.link}
            className="flex items-center gap-1 mt-5"
          >
            <button className="text-xs text-slate-400">watch</button>
            <span>
              <img
                src={arrow}
                alt="arrow right"
                className="w-2 h-2 contrast-50"
              />
            </span>
          </a>
        </div>
      </motion.article>
    </AnimatePresence>
  );
};

export default WorkCard;

import React, { useState } from "react";

//* Motion *//
import { AnimatePresence, motion } from "framer-motion";

//* Icons *//
import { CgMenuGridO } from "react-icons/cg";
import { RiCloseFill } from "react-icons/ri";
import { BiHomeSmile } from "react-icons/bi";
import { TbMan } from "react-icons/tb";
import { IoMdPaper } from "react-icons/io";
import { IoIosInfinite } from "react-icons/io";
import { RiGalleryLine } from "react-icons/ri";
import { CiPaperplane } from "react-icons/ci";

//* Link *//
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const openMenuHandler = () => {
    setOpenMenu((pre) => !pre);
  };

  return (
    <>
      <AnimatePresence>
        {!openMenu && (
          <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            exit={{ y: 200 }}
            transition={{ type: "tween", duration: 1 }}
            className="sm:hidden fixed z-[999999] bottom-0 w-full h-[50px] flex items-center justify-between px-2 bg-white shadow-md"
          >
            <motion.h2
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 4, type: "spring" }}
              className="text-xl"
            >
              ᗩᒪI
            </motion.h2>

            <motion.span
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              transition={{ duration: 4, type: "spring" }}
            >
              <CgMenuGridO onClick={openMenuHandler} size={25} />
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            exit={{ y: 300 }}
            transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
            className="sm:hidden fixed bottom-0 w-full min-h-24 z-[999999] bg-white shadow-md flex flex-col gap-2"
          >
            <div className="grid grid-cols-3 gap-y-3 mt-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center gap-1 p-3"
                onClick={openMenuHandler}
              >
                <BiHomeSmile size={25} />
                <AnchorLink offset={() => 100} href="#Home">
                  Home
                </AnchorLink>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center gap-1 p-3"
                onClick={openMenuHandler}
              >
                <TbMan size={25} />
                <AnchorLink offset={() => 100} href="#About">
                  About
                </AnchorLink>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center gap-1 p-3"
                onClick={openMenuHandler}
              >
                <IoMdPaper size={25} />
                <AnchorLink offset={() => 100} href="#Skills">
                  Skills
                </AnchorLink>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-center gap-1 p-3"
                onClick={openMenuHandler}
              >
                <IoIosInfinite size={25} />
                <AnchorLink offset={() => 100} href="#Journal">
                  Journal
                </AnchorLink>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col items-center gap-1 p-3"
                onClick={openMenuHandler}
              >
                <RiGalleryLine size={25} />
                <AnchorLink offset={() => 100} href="#Portfolio">
                  Portfolio
                </AnchorLink>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col items-center gap-1 p-3"
                onClick={openMenuHandler}
              >
                <CiPaperplane size={25} />
                <AnchorLink offset={() => 100} href="#Contact">
                  Contact
                </AnchorLink>
              </motion.div>
            </div>

            <div className="flex justify-end p-3">
              <RiCloseFill onClick={openMenuHandler} size={25} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;

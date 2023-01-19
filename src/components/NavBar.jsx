import React, { useState, useEffect } from "react";

//* Motion *//
import { motion } from "framer-motion";

//* Components *//
import MobileNav from "./MobileNav";

//* Icons *//
import { RxHamburgerMenu } from "react-icons/rx";

//* Link *//
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

const NavBar = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`containerNav hidden sm:flex ${
          position > 50 && "bg-white shadow-md"
        } transition-colors duration-500 `}
      >
        <nav className={`  w-[1024px] flex items-center justify-between`}>
          <motion.h2
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            className="text-[25px] cursor-pointer"
          >
            ᗩᒪI
          </motion.h2>

          <motion.ul
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            className="hidden sm:flex items-center gap-6"
          >
            <li>
              <AnchorLink offset={() => 100} href="#Home">Home</AnchorLink>
            </li>
            <li>
              <AnchorLink offset={() => 100} href="#About">
                About
              </AnchorLink>
            </li>
            <li>
              <AnchorLink offset={() => 100} href="#Skills">
                Skills
              </AnchorLink>
            </li>
            <li>
              <AnchorLink offset={() => 100} href="#Journal">
                Journal
              </AnchorLink>
            </li>
            <li>
              <AnchorLink offset={() => 100} href="#Portfolio">
                Portfolio
              </AnchorLink>
            </li>
            <li>
              <AnchorLink offset={() => 100} href="#Contact">
                Contact
              </AnchorLink>
            </li>
          </motion.ul>

          <motion.div className="sm:hidden cursor-pointer">
            <RxHamburgerMenu size={25} />
          </motion.div>
        </nav>
      </div>

      <MobileNav />
    </>
  );
};

export default NavBar;

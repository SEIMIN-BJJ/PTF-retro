import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

const transition = {
  duration: 1.5,
  ease: [0.6, -0.05, 0.01, 1],
};

const textReveal = {
  initial: {
    x: "200%",
    opacity: 0,
  },
  animate: {
    x: "00%",
    opacity: 1,
  },
};

const mainSecRoute = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "what's",
    route: "/introduce",
  },
  {
    title: "my work",
    route: "/work",
  },
  {
    title: "contact",
    route: "/contact",
  },
];

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      {mainSecRoute.map((sec, index) => {
        return (
          <>
            <motion.div
              variants={textReveal}
              initial="initial"
              animate="animate"
              transition={transition}
            >
              <ul>
                <li onClick={() => navigate(sec.route)}>{sec.title}</li>
              </ul>
            </motion.div>
          </>
        );
      })}
    </header>
  );
};

export default Header;

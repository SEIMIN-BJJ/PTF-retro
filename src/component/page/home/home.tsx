import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./home.scss";

const Home = () => {
  return (
    <>
      <motion.div
        className="wrapper"
        initial={{ y: "0%", opacity: 1 }}
        animate={{ marginTop: "20%" }}
        transition={{
          ease: "linear",
          duration: 1,
          y: { duration: 0 },
        }}
        exit={{ y: window.innerHeight, opacity: 0 }}
      >
        {/* <Link to="/mainfirst"> */}
        <Link to="/mainsecond">
          <div className="focus">
            SEIMIN's PORTFOLIO
            <br />
            <br />
            <h1>Press Start</h1>
          </div>
          <div className="mask">
            <div className="text">SEIMIN's PORTFOLIO</div>
          </div>
          <h1 className="textPress">Press Start</h1>
        </Link>
      </motion.div>
    </>
  );
};

export default Home;

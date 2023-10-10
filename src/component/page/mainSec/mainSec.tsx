import React from "react";
import "./mainSec.scss";
import { motion } from "framer-motion";
import Header from "../../block/Header/Header";
import Footer from "../../block/Footer/Footer";
// import { useNavigate } from 'react-router-dom';

const transition = {
  duration: 1.5,
  ease: [0.6, -0.05, 0.01, 1],
}

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

const picReveal = {
  initial: {
    y: "-200%",
    opacity: 0,
  },
  animate: {
    y: "00%",
    opacity: 1,
  },
};

const MainSecond = () => {

  return (
    <>
      <section id="PortMain">
        <article>
          <motion.div
            className="MainWrapper"
            initial={{ y: "22%", opacity: 1 }}
            animate={{ paddingTop: "20%" }}
            transition={{
              ease: "linear",
              duration: 0.7,
              y: { duration: 1 }
            }}
            exit={{ y: window.innerHeight, opacity: 0 }}
          >
            <div className="mainBack">
              <Header />
              <main>
                <div className="MainInfo">
                  <motion.div
                    variants={picReveal}
                    initial="initial"
                    animate="animate"
                    transition={transition}>
                    <div className="MainPic"></div>
                  </motion.div>
                  <motion.div
                    variants={textReveal}
                    initial="initial"
                    animate="animate"
                    transition={transition}>
                    <div className="MainText">welcome to <br /><br />my portfolio!<br /><br /><br />my name is <br /><br />lim sung min,<br /><br /><br />i'm web publisher,<br /><br /><br />please, look around!</div>
                  </motion.div>
                </div>
              </main>
            </div>
            <Footer />
          </motion.div >
        </article >
      </section >
    </>
  );
};

export default MainSecond;



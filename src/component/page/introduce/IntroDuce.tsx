import React from "react";
import { motion } from "framer-motion";
import Header from "../../block/Header/Header";
import Footer from "../../block/Footer/Footer";
import TypeIt from "typeit-react";
import CloudAniMation from "../../Animation/CloudAniMation";
import "./IntroDuce.scss";

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

const IntroDuce = () => {
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
              y: { duration: 1 },
            }}
            exit={{ y: window.innerHeight, opacity: 0 }}
          >
            <div className="mainBack">
              <Header />
              <CloudAniMation />
              <main>
                <div className="MainInfo">
                  <motion.div
                    variants={textReveal}
                    initial="initial"
                    animate="animate"
                    transition={transition}
                  >
                    <div className="introDuceBox">
                      <motion.div
                        variants={picReveal}
                        initial="initial"
                        animate="animate"
                        transition={transition}
                      >
                        <p className="introDuceText">
                          <TypeIt
                            options={{ loop: false, speed: 50 }}
                            getBeforeInit={(instance) => {
                              instance
                                .pause(800)
                                .type(
                                  "이 프로젝트는 닌텐도 게임들의 팬심으로써 만든<br /><br />토이 프로젝트로써<br /><br />실제로 제작된 게임이 아닙니다.<br /><br />게임장르를 기반으로 한 웹페이지 제작을 한 것이며<br /><br />동작구현은 되어 있지 않습니다."
                                )
                                .pause(750);
                              return instance;
                            }}
                          />
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </main>
            </div>
            <Footer />
          </motion.div>
        </article>
      </section>
    </>
  );
};
export default IntroDuce;

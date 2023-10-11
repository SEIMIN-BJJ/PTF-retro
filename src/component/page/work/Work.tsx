import React, { useState } from 'react';
import { motion } from "framer-motion";
import Header from '../../block/Header/Header';
import Footer from '../../block/Footer/Footer';
import { Link } from 'react-router-dom';
import "./Work.scss"

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

const Work = () => {

  const [isHovered, setIsHovered] = useState(false);

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
                    <Link to="/mainsecond">
                      <button className="workText"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        main
                      </button>
                    </Link>
                    <a className='workText' href="https://seimin-bjj.github.io/Sound-Novel/">sound novel</a>

                    <a className='workText' href="https://seimin-bjj.github.io/Rock-Festival/">rock festival</a>

                    <a className='workText' href="https://seimin-bjj.github.io/Toy-Project/">super famicom</a>
                  </motion.div>

                  <motion.div
                    variants={textReveal}
                    initial="initial"
                    animate="animate"
                    transition={transition}>
                    <div className="workTv">
                      <div>
                        {isHovered ? (
                          <img src="이미지_파일_경로_호버_상태" alt="호버 이미지" />
                        ) : (
                          <img src="이미지_파일_경로_일반_상태" alt="일반 이미지" />
                        )}
                      </div>
                    </div>
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

export default Work;



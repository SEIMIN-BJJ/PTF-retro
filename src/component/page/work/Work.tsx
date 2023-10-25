import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../block/Header/Header";
import Footer from "../../block/Footer/Footer";
import { Link } from "react-router-dom";
import "./Work.scss";
import SelectIMG from "../../../assets/images/select menu.png";
import MainImg from "../../../assets/images/main.png";
import SNImg from "../../../assets/images/sound novel.png";
import MeImg from "../../../assets/images/me.png";

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

const Work = () => {
  const images = [{ id: 1, img: SelectIMG, alt: "Image 1" }];
  const [isListHover, setIsListHover] = useState(false);
  const [selectedImage, setSelectedImage] = useState(MainImg);

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
              <main>
                <div className="MainInfo">
                  <div className="workScroll">
                    <motion.div
                      variants={picReveal}
                      initial="initial"
                      animate="animate"
                      transition={transition}
                    >
                      <Link to="/mainsecond">
                        <a
                          className="workText"
                          onMouseEnter={() => {
                            setIsListHover(false);
                            setSelectedImage(MainImg);
                          }}
                          onMouseLeave={() => setIsListHover(true)}
                          href="/"
                        >
                          Main
                        </a>
                      </Link>
                      <a
                        className="workText"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => {
                          setIsListHover(false);
                          setSelectedImage(SNImg);
                        }}
                        onMouseLeave={() => setIsListHover(true)}
                        href="https://seimin-bjj.github.io/Sound-Novel/"
                      >
                        sound novel
                      </a>

                      <a
                        className="workText"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => {
                          setIsListHover(false);
                          setSelectedImage(MeImg);
                        }}
                        onMouseLeave={() => setIsListHover(true)}
                        href="https://seimin-bjj.github.io/Rock-Festival/"
                      >
                        rock festival
                      </a>

                      <a
                        className="workText"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => {
                          setIsListHover(false);
                          setSelectedImage(MainImg);
                        }}
                        onMouseLeave={() => setIsListHover(true)}
                        href="https://seimin-bjj.github.io/Toy-Project/"
                      >
                        super famicom
                      </a>
                    </motion.div>
                  </div>
                  <motion.div
                    variants={textReveal}
                    initial="initial"
                    animate="animate"
                    transition={transition}
                  >
                    <div className="workTv">
                      {images.map((image) => (
                        <img
                          key={image.id}
                          src={isListHover ? image.img : selectedImage}
                          alt={image.alt}
                        />
                      ))}
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

export default Work;

import React from "react";
import "./mainSec.scss";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

// import { useNavigate } from 'react-router-dom';

const transition = {
  duration: 2,
  ease: [0.6, -0.05, 0.01, 0.9],
}

const textReveal = {
  initial: {
    x: "200%",
    opacity: 0,
  },
  animate: {
    x: "0%",
    opacity: 1,
  },
};

const mainSecRoute = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "i am",
    route: "/introduce",
  },
  {
    title: "my work",
    route: "/work",

  },
  {
    title: "contact",
    route: "/contact",
  }
]

const MainSecond = () => {
  const navigate = useNavigate();

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
              <header>
                {mainSecRoute.map((sec, index) => {
                  return (
                    <>
                      <motion.div
                        variants={textReveal}
                        initial="initial"
                        animate="animate"
                        transition={transition}>
                        <ul className="headMenu">
                          <li onClick={() => navigate(sec.route)}>{sec.title}</li>
                        </ul>
                      </motion.div>

                    </>
                  );
                })}
              </header>
              <main>
                <div className="MainInfo">
                  <motion.div
                    variants={textReveal}
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
              <footer></footer>
            </div>
          </motion.div >
        </article >
      </section >
    </>
  );
};

export default MainSecond;



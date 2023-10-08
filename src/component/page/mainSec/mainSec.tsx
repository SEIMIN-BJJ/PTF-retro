import React from "react";
import "./mainSec.scss";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

// import { useNavigate } from 'react-router-dom';

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
                      <ul className="headMenu">
                        <li onClick={() => navigate(sec.route)}>{sec.title}</li>
                      </ul>
                    </>
                  );
                })}
              </header>
              <main>
                <div className="MainInfo">
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



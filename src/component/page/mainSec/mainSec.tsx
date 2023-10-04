import React from "react";
import "./mainSec.scss";
import { motion } from "framer-motion";
// import { useNavigate } from 'react-router-dom';

// const mainRoute = [
//   {
//     title: "1.Home",
//     route: "/",
//   },
//   {
//     title: "2.i am",
//     route: "/introduce",
//   },
//   {
//     title: "3.my work",
//     route: "/work",

//   },
//   {
//     title: "4.contact",
//     route: "/contact",

//   }
// ]

const MainSecond = () => {
  // const navigate = useNavigate();

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
              <header></header>
              <main></main>
              <footer></footer>
            </div>
          </motion.div >
        </article >
      </section >
    </>
  );
};

export default MainSecond;



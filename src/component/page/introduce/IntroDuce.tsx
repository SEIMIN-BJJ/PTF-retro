import React from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import "./IntroDuce.scss"

const Introduce = [
  {
    title: "1.main",
    route: "/main"
  }
]

const IntroDuce = () => {
  const navigate = useNavigate();

  return (
    <section id="PortMain">
      <article>
        <motion.div
          className="MainWrapper"
          initial={{ y: "30%", opacity: 1 }}
          animate={{ paddingTop: "20%" }}
          transition={{
            ease: "linear",
            duration: 1,
            y: { duration: 1 }
          }}
          exit={{ y: window.innerHeight, opacity: 0 }}
        >
          {Introduce.map((work, index) => {
            return (
              <>
                <button className="MainFocus" onClick={() => navigate(work.route)}>{work.title}</button>
                <button>
                  <a href="https://seimin-bjj.github.io/Sound-Novel/" className='MainFocus'>2.sound novel</a>
                </button>

                <button>
                  <a href="https://seimin-bjj.github.io/Rock-Festival/" className='MainFocus'>3.rock festival</a>
                </button>

                <button>
                  <a href="https://seimin-bjj.github.io/Toy-Project/" className='MainFocus'>4.toy project</a>
                </button>
              </>
            );
          })}
        </motion.div >
      </article>
    </section>
  )
}

export default IntroDuce;
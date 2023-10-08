import React from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import "./IntroDuce.scss"

const Introduce = [
  {
    title: "main",
    route: "/mainsecond"
  }
]

const IntroDuce = () => {
  const navigate = useNavigate();

  return (
    <section id="PortMain">
      <article>
        <motion.div
          className="MainWrapper"
          initial={{ y: "23%", opacity: 1 }}
          animate={{ paddingTop: "20%" }}
          transition={{
            ease: "linear",
            duration: 0.7,
            y: { duration: 1 }
          }}
          exit={{ y: window.innerHeight, opacity: 0 }}
        >
          {Introduce.map((work, index) => {
            return (
              <>
                <div id="IntroDuceRoot">
                  <div className='SectionInfo'>
                    나의정보
                  </div>
                  <div className='SectionInfo'>
                    dfdsf
                  </div>
                </div>
                <button className="MainFocus" style={{ padding: "5rem 0 0 0" }} onClick={() => navigate(work.route)}>{work.title}</button>
                <footer></footer>
              </>
            );
          })}
        </motion.div >
      </article>
    </section>
  )
}

export default IntroDuce;
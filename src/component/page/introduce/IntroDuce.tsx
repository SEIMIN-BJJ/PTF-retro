import React from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import "./IntroDuce.scss"

const Introduce = [
  {
    title: "main",
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
          initial={{ y: "25%", opacity: 1 }}
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
                <div id="IntroDuceRoot">
                  <div className='SectionInfo'>
                    나의정보
                  </div>
                  <div className='SectionInfo'></div>
                </div>
                <button className="MainFocus" style={{ padding: "2rem 0 0 0" }} onClick={() => navigate(work.route)}>{work.title}</button>
              </>
            );
          })}
        </motion.div >
      </article>
    </section>
  )
}

export default IntroDuce;
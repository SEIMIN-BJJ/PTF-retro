import React from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import "./Contact.scss"

const ContactMenu = [
  {
    title: "main",
    route: "/mainsecond"
  }
]

const Contact = () => {
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
            duration: 0.7,
            y: { duration: 1 }
          }}
          exit={{ y: window.innerHeight, opacity: 0 }}
        >
          {ContactMenu.map((work, index) => {
            return (
              <>
                <button className="MainFocus" onClick={() => navigate(work.route)}>{work.title}</button>
                <button>
                  <a href="https://seimin-bjj.github.io/Sound-Novel/" className='MainFocus'>youtube</a>
                </button>

                <button>
                  <a href='/' className='MainFocus'>phone number</a>
                </button>

                <button>
                  <a href="/" className='MainFocus'>e-mail</a>
                </button>
                <footer></footer>
              </>
            );
          })}
        </motion.div >
      </article>
    </section>
  )
}

export default Contact;
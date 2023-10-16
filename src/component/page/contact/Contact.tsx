import React, { useState } from 'react';
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
  const [isListHover, setIsListHover] = useState(true);

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
                <div className="Contact">
                  <button className="contactText" onClick={() => navigate(work.route)}>{work.title}</button>
                  <button>
                    <a href="https://www.youtube.com/@seimin00" className='contactText' onMouseEnter={() => {
                      setIsListHover(false);
                    }}
                      onMouseLeave={() => setIsListHover(true)}
                      style={{
                        color: isListHover ? '#fff' : '#da3a31',
                      }}>youtube</a>
                  </button>

                  <button>
                    <a href='/' className='contactText'>phone number</a>
                  </button>

                  <button>
                    <a href="/" className='contactText'>e-mail</a>
                  </button>
                  <footer></footer>
                </div>
              </>
            );
          })}
        </motion.div >
      </article>
    </section>
  )
}

export default Contact;
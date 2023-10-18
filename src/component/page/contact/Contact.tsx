import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";

import "./Contact.scss";

const ContactMenu = [
  {
    title: "main",
    route: "/mainsecond",
  },
];

const Contact = () => {
  const [ismainHover, setIsmainHover] = useState(true);
  const [isyoutubetHover, setIsyoutubeHover] = useState(true);
  const [isphoneListHover, setIsphoneListHover] = useState(true);
  const [isemailListHover, setIsemailListHover] = useState(true);

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
            y: { duration: 1 },
          }}
          exit={{ y: window.innerHeight, opacity: 0 }}
        >
          {ContactMenu.map((work, index) => {
            return (
              <>
                <div className="Contact">
                  <Link to="/mainsecond">
                    <button>
                      <a
                        href="/"
                        className="contactText"
                        onMouseEnter={() => {
                          setIsmainHover(false);
                        }}
                        onMouseLeave={() => setIsmainHover(true)}
                        style={{
                          color: ismainHover ? "#fff" : "yellow",
                        }}
                      >
                        <FaGamepad className="mainIcon" />
                        main
                      </a>
                    </button>
                  </Link>
                  <button>
                    <a
                      href="https://www.youtube.com/@seimin00"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contactText"
                      onMouseEnter={() => {
                        setIsyoutubeHover(false);
                      }}
                      onMouseLeave={() => setIsyoutubeHover(true)}
                      style={{
                        color: isyoutubetHover ? "#fff" : "#da3a31",
                      }}
                    >
                      <FaYoutube className="youtubeIcon" />
                      youtube
                    </a>
                  </button>

                  <button>
                    <a
                      href="tel:01064185624"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contactText"
                      onMouseEnter={() => {
                        setIsphoneListHover(false);
                      }}
                      onMouseLeave={() => setIsphoneListHover(true)}
                      style={{
                        color: isphoneListHover ? "#fff" : "#aeff00",
                      }}
                    >
                      <FaPhone className="phoneIcon" />
                      phone
                    </a>
                  </button>

                  <button>
                    <a
                      href="mailto:interkp12@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contactText"
                      onMouseEnter={() => {
                        setIsemailListHover(false);
                      }}
                      onMouseLeave={() => setIsemailListHover(true)}
                      style={{
                        color: isemailListHover ? "#fff" : "#b3d4ff",
                      }}
                    >
                      <FaPaperPlane className="emailIcon" />
                      e-mail
                    </a>
                  </button>
                </div>
              </>
            );
          })}
        </motion.div>
      </article>
    </section>
  );
};

export default Contact;

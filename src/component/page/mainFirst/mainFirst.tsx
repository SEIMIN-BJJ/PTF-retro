import React from "react";
import "./mainFirst.scss";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const mainRoute = [
  {
    title: "1.Home",
    route: "/",
  },
  {
    title: "2.i am",
    route: "/introduce",
  },
  {
    title: "3.my work",
    route: "/work",
  },
  {
    title: "4.contact",
    route: "/contact",
  },
];

const MainFirst = () => {
  const navigate = useNavigate();

  return (
    <>
      <section id="PortMain">
        <article>
          <motion.div
            className="MainWrapper"
            initial={{ y: "30%", opacity: 1 }}
            animate={{ paddingTop: "20%" }}
            transition={{
              ease: "linear",
              duration: 1,
              y: { duration: 1 },
            }}
            exit={{ y: window.innerHeight, opacity: 0 }}
          >
            {mainRoute.map((main, index) => {
              return (
                <>
                  <button
                    className="MainFocus"
                    onClick={() => navigate(main.route)}
                  >
                    {main.title}
                  </button>
                </>
              );
            })}
          </motion.div>
        </article>
      </section>
    </>
  );
};

export default MainFirst;

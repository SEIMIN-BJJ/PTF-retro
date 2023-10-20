import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../../../App.scss";

const transition = {
  duration: 1.5,
  ease: [0.6, -0.05, 0.01, 1],
};

const textReveal = {
  initial: {
    x: "200%",
    opacity: 0,
  },
  animate: {
    x: "00%",
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
  },
];

const Header = () => {
  const navigate = useNavigate();

  return (
    <Head>
      {mainSecRoute.map((sec, index) => {
        return (
          <>
            <motion.div
              variants={textReveal}
              initial="initial"
              animate="animate"
              transition={transition}
            >
              <Menu>
                <List onClick={() => navigate(sec.route)}>{sec.title}</List>
              </Menu>
            </motion.div>
          </>
        );
      })}
    </Head>
  );
};

const Head = styled.header`
  width: auto;
  height: 5rem;
  color: #fff;
  letter-spacing: 0.2rem;
  font-family: "PressStart2P-Regular";
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.ul`
  padding: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const List = styled.li`
  width: 13rem;
  height: 3.5rem;
  opacity: 0.6;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border: 3px solid rgb(255, 255, 255);
    border-radius: 5px;
    color: yellow;
    font-size: 1.2rem;
    text-align: center;
    background-color: #ffffff45;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Header;

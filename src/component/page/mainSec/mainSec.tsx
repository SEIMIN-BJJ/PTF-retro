import React from "react";
import { motion } from "framer-motion";
import Header from "../../block/Header/Header";
import Footer from "../../block/Footer/Footer";
import styled from "styled-components";
import MeIMG from "../../../assets/images/me.png";

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

const picReveal = {
  initial: {
    y: "-200%",
    opacity: 0,
  },
  animate: {
    y: "00%",
    opacity: 1,
  },
};

const MainSecond = () => {
  return (
    <>
      <PortMain>
        <article>
          <motion.div
            className="MainWrapper"
            initial={{ y: "22%", opacity: 1 }}
            animate={{ paddingTop: "20%" }}
            transition={{
              ease: "linear",
              duration: 0.7,
              y: { duration: 1 },
            }}
            exit={{ y: window.innerHeight, opacity: 0 }}
          >
            <MainBackground>
              <Mario>
                <video src="videos/game.mp4" muted autoPlay loop></video>
              </Mario>
              <Header />
              <MainInfo>
                <motion.div
                  variants={picReveal}
                  initial="initial"
                  animate="animate"
                  transition={transition}
                >
                  <MainPic></MainPic>
                </motion.div>
                <motion.div
                  variants={textReveal}
                  initial="initial"
                  animate="animate"
                  transition={transition}
                >
                  <MainText>
                    welcome to <br />
                    <br />
                    my portfolio!
                    <br />
                    <br />
                    <br />
                    my name is <br />
                    <br />
                    lim sung min,
                    <br />
                    <br />
                    <br />
                    i'm web publisher,
                    <br />
                    <br />
                    <br />
                    please, look around!
                  </MainText>
                </motion.div>
              </MainInfo>
            </MainBackground>
            <Footer />
          </motion.div>
        </article>
      </PortMain>
    </>
  );
};

const PortMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainBackground = styled.div`
  width: 64rem;
  height: auto !important;
  flex-direction: column;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;

  main {
    width: auto;
    height: 40rem;
    flex-direction: column;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Mario = styled.div`
  width: 100%;
  height: 45rem;
  border: 1px solid #000000;
  position: absolute;
  opacity: 0.05;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;

const MainInfo = styled.div`
  width: auto;
  height: 37rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainPic = styled.div`
  width: 30rem;
  height: 30rem;
  background: url(${MeIMG});
  background-position: top 10% right 20%;
  background-repeat: no-repeat;
  margin: 0 35rem 0 0;
  flex-direction: column;
`;

const MainText = styled.div`
  width: 30rem;
  height: 30rem;
  font-size: 1.8rem;
  text-align: left;
  font-family: "PressStart2P-Regular";
  opacity: 0.6;
  margin: 0 0 0 -25rem;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: yellow;
    font-size: 1.9rem;
    opacity: 1;
  }
`;
export default MainSecond;

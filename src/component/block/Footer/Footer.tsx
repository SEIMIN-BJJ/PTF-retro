import React from "react";
import styled from "styled-components";
import BackIMG from "../../../assets/images/block.png";

const Footer = () => {
  return <Foot />;
};

const Foot = styled.div`
  width: 100rem;
  height: 3rem;
  background: url(${BackIMG});
  background-size: contain;
  background-position: center center;
`;
export default Footer;

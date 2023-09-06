import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Home from '../component/page/home/home';
import Main from '../component/page/main/main';
import IntroDuce from '../component/page/introduce/IntroDuce';
import Work from '../component/page/work/Work';
import Skill from '../component/page/skill/Skill';
import Contact from '../component/page/contact/Contact';

function AnimateRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/introduce" element={<IntroDuce />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/skill" element={<Skill />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </AnimatePresence>

  )
}

export default AnimateRoutes;
import styled from "styled-components";
import { motion } from "framer-motion";
import Animation from "./components/Animation";
import Variants from "./components/Variants";
import Gestures from "./components/Gestures";
import Drag from "./components/Drag";
import Scroll from "./components/Scroll";
import Path from "./components/Path";
import AnimatePresence from "./components/AnimatePresence";
import Carousel from "./components/Carousel";
import Layout from "./components/Layout";
import PopupCard from "./components/PopupCard";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 200vh;
  `;

const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <Container>
        <Animation />
        <Variants />
        <Gestures />
        <Drag />
      </Container>
      <Scroll />
      <Path />
      <AnimatePresence />
      <Carousel />
      <Layout />
      <PopupCard />
    </Wrapper>
  );
}

export default App;
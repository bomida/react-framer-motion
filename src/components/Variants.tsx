import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(300deg, rgba(121,250,194,1) 29%, rgba(181,255,223,1) 69%);
`;

const Box = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 150px;
  height: 150px;
  border-radius: 10%;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  place-self: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: #fff;
`;

const BoxVars = {
  start: {
    scale: 0,
    opacity: 0,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      bounce: 0.5,
      duration: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  }
}

const CircleVars = {
  start: {
    y: -10,
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
  }
}

function Variants() {
  return (
    <Wrapper>
      <Box variants={BoxVars} initial="start" animate="end">
        <Circle variants={CircleVars} />
        <Circle variants={CircleVars} />
        <Circle variants={CircleVars} />
        <Circle variants={CircleVars} />
      </Box>
    </Wrapper>
  );
}

export default Variants;
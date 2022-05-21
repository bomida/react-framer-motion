import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(300deg, rgb(255, 145, 118) 29%, #ffbeae 69%);
`;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 10%;
  background-color: #fff;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BoxVars = {
  start: {
    scale: 0.1,
  },
  end: {
    scale: 1,
    rotateZ: 180,
    transition: {
      type: "spring",
      damping: 10,
    },
  }
}

function Animation() {
  return (
    <Wrapper>
      <Box variants={BoxVars} initial="start" animate="end" />
    </Wrapper>
  );
}

export default Animation;
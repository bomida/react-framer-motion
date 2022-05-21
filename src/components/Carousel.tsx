import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
display: flex;
justify-content: center;
align-items: center;
position: relative;
width: 100vw;
height: 100vh;
background: linear-gradient(300deg, rgb(255, 151, 125) 29%, #ffab95 69%);
`;

const Box = styled(motion.div)`
position: absolute;
width: 350px;
height: 250px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
background-color: #fff;
`;

const BtnContainer = styled.div`
  position: absolute;
  bottom: 100px;
`;

const Button = styled.button`
  all: unset;
  margin: 0 5px;
  padding: 10px 20px;
  color: white;
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 10px;
`;

const carouselVars = {
  entry: (back: boolean) => ({
    y: back ? -200 : 200,
    opacity: 0,
    scale: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: (back: boolean) => ({
    y: back ? 200 : -200,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1,
    },
  }),
}

function Carousel() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const NextCard = () => {
    setBack(false);
    setVisible(prev => prev === 10 ? 10 : prev + 1)
  };
  const BackCard = () => {
    setBack(true);
    setVisible(prev => prev === 1 ? 1 : prev - 1)
  };
  return (
    <Wrapper>
      <AnimatePresence custom={back}>
        <Box
          custom={back}
          variants={carouselVars}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <BtnContainer>
        <Button onClick={BackCard}>Back</Button>
        <Button onClick={NextCard}>Next</Button>
      </BtnContainer>

    </Wrapper>
  );
}

export default Carousel;
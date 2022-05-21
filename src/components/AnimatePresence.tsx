import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 100vh;
  background: linear-gradient(300deg, rgba(130,238,255,1) 29%, rgba(191,246,255,1) 69%);
  `;

const Box = styled(motion.div)`
  width: 400px;
  height: 250px;
  border-radius: 20px;
  background-color: #fff;
  `;

const Button = styled.button`
  all: unset;
  position: absolute;
  bottom: 100px;
  margin: 0 5px;
  padding: 10px 20px;
  color: white;
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 10px;
  `;

const BoxVars = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 180,
  },
  invisible: {
    opacity: 0,
    y: -20,
  },
}

function Presence() {
  const [isShowing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);
  return (
    <Wrapper>
      <AnimatePresence>
        {isShowing ?
          <Box
            variants={BoxVars}
            initial="initial"
            animate="visible"
            exit="invisible"
          />
          : null
        }
      </AnimatePresence>
      <Button onClick={onClick}>click</Button>
    </Wrapper>
  );
}

export default Presence;

// React JS에서 사라지는 요소에 대한 아이템에 애니메이션을 적용해준다.
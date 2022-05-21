import { motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(300deg, rgba(130,238,255,1) 29%, rgba(191,246,255,1) 69%);
`;

const OutBox = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 150px;
  height: 150px;
  border-radius: 10%;
  background-color: rgba(255, 255, 255, 0.1);;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const InnerCircle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
`;

const InnerCircleVars = {
  click: {
    scale: 0.8,
  },
  drag: {
    backgroundColor: "rgb(255, 106, 86)",
    transition: {
      duration: 0.5,
    }
  },
}


function Drag() {
  const OutBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <OutBox ref={OutBoxRef}>
        <InnerCircle
          drag
          dragSnapToOrigin
          dragConstraints={OutBoxRef}
          variants={InnerCircleVars}
          whileTap="click"
          whileDrag="drag"
        />
      </OutBox>
    </Wrapper >
  );
}

export default Drag;
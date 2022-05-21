import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(300deg, rgba(170,139,255,1) 29%, rgba(201,181,255,1) 69%);
`;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 10%;
  background-color: #fff;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);

`;

const BoxVars = {
  hover: {
    rotateZ: 180,
  },
  click: {
    borderRadius: "50%",
    backgroundColor: "rgb(255, 255, 255, 0.2)"
  }
}

function Gestures() {
  return (
    <Wrapper>
      <Box
        variants={BoxVars}
        whileHover="hover"
        whileTap="click"
      />
    </Wrapper>
  );
}

export default Gestures;
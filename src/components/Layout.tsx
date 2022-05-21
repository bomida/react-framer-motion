import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 100vh;
background: linear-gradient(300deg, rgb(255, 237, 118) 29%, rgb(255, 237, 118) 69%);
`;

const Box = styled(motion.div)`
width: 200px;
height: 200px;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
border-radius: 10%;
background-color: #fff;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  background-color: #6fabff;
  border-radius: 50%;
`;

function Layout() {
  const [toggle, setToggle] = useState(false);
  const clicked = () => setToggle(prev => !prev);
  return (
    <Wrapper onClick={clicked}>
      <Box>
        {toggle ? <Circle layoutId="move" /> : null}
      </Box>
      <Box>
        {toggle ? null : <Circle layoutId="move" />}
      </Box>
    </Wrapper>
  );
}

export default Layout;
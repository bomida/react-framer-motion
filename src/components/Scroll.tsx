import { motion, useMotionValue, useTransform, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
    borderRadius: "50%",
  },
}

function Scroll() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-530, 530], [-530, 530]);
  const bgColor = useTransform(x, [-530, 530], [
    "linear-gradient(300deg, rgba(130,238,255,1) 29%, rgba(191,246,255,1) 69%)",
    "linear-gradient(305deg, #ae86e3 29%, #ffc7ea 69%)",
  ]);
  // useEffect(() => {
  //   x.onChange(() => console.log(x.get()));
  // }, [x]);
  return (
    <Wrapper style={{ background: bgColor }}>
      <Box
        style={{ x, scale, opacity, rotate }}
        variants={BoxVars}
        whileHover="hover"
        drag="x"
        dragSnapToOrigin
      />
    </Wrapper>
  );
}

export default Scroll;
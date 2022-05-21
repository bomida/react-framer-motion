import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
background: linear-gradient(300deg, rgb(189, 255, 118) 29%, rgb(213, 255, 168) 69%);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const Box = styled(motion.div)`
height: 180px;
border-radius: 20px;
background-color: #fff;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BGhandle = {
  hidden: {
    backgroundColor: "rgb(0, 0, 0, 0)"
  },
  visible: {
    backgroundColor: "rgb(0, 0, 0, 0.5)",
  },
  exit: {
    backgroundColor: "rgb(0, 0, 0, 0)",
  },
}

function PopupCard() {
  const [id, setId] = useState<null | string>(null);
  return (
    <Wrapper>
      <Grid>
        {[1, 2, 3, 4].map(n =>
          <Box onClick={() => setId(n + "")} key={n} layoutId={n + ""} />
        )}
        {/* {["1", "2", "3", "4"].map(n =>
          <Box onClick={() => setId(n)} key={n} layoutId={n} />
        )} */}
      </Grid>
      <AnimatePresence>
        {id ?
          <Overlay
            onClick={() => setId(null)}
            variants={BGhandle}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box layoutId={id} style={{ width: 500, height: 300 }} />
          </Overlay>
          : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default PopupCard;
import styled from "styled-components";
import { fade } from "../utility/functions";
import { black } from "../utility/variables";
import { PopUpContainer } from "./PopUpContainer";
const PopUpBackground = styled.div`
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${fade(black, 0.1)};
  height: 100vh;
  width: 100vw;
  opacity: 0;
  /* hide the contet */
  visibility: hidden;
  transition: all 0.8s;
  /* target is when the url change to have the target in it */
  &:target {
    opacity: 1;
    visibility: visible;

    ${PopUpContainer} {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

export { PopUpBackground };

import styled from "styled-components";
import { dark } from "../utility/variables";
import { fade } from "../utility/functions";
import { Center } from "../utility/mixins";
const PopUpContainer = styled.div`
  position: fixed;
  ${Center};
  width: 75%;
  background-color: #fff;
  z-index: 15000;
  border-radius: 3px;
  /* A part of the trick to make the boxes have the same height */
  /* The children elements will have dipslay: table-cell set */
  display: table;
  overflow: hidden;
  opacity: 0;
  /* translate because it is already defined in the Center mixin, but we can't have to transform properties, we need to define it all in one */
  transform: translate(-50%, -50%) scale(0.5);
  /* the 0.2 sec is delay. This means our black background will fade in first! */
  transition: all 0.4s 0.2s ease;
`;

export { PopUpContainer };

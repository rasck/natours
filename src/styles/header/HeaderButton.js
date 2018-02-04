import { keyframes } from "styled-components";
import { WhiteButton } from "../common";
import { moveInBottom } from "../utility/animations";

const HeaderButton = WhiteButton.extend`
  animation-name: ${moveInBottom};
  animation-duration: 0.7s;
  animation-timing-function: ease-out;
  animation-delay: 1s;
  /* The elements start position will the same as the anitmations start position */
  animation-fill-mode: backwards;
`;

export { HeaderButton };

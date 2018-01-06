import styled, { keyframes } from "styled-components";
import { moveInLeft } from "../utility/animations";

const HeadlineMain = styled.span`
  display: block;
  font-size: 6rem;
  font-weight: 400;
  letter-spacing: 3.5rem;
  animation-name: ${moveInLeft};
  animation-duration: 0.7s;
  animation-timing-function: ease-out;
`;

export { HeadlineMain };

import styled, { keyframes } from "styled-components";
import { moveInRight } from "../utility/animations";

const HeadLineSub = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1.74rem;
  animation-name: ${moveInRight};
  animation-duration: 0.7s;
  animation-timing-function: ease-out;
`;

export { HeadLineSub };

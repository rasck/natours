import styled, { keyframes } from "styled-components";
import { moveInRight } from "../utility/animations";
import { media } from "../utility/mixins";

const HeadLineSub = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1.74rem;
  animation-name: ${moveInRight};
  animation-duration: 0.7s;
  animation-timing-function: ease-out;
  ${media.phone`
  font-size: 1.63rem;
  letter-spacing: 0.5rem;
  `};
`;

export { HeadLineSub };

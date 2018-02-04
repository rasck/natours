import styled, { css } from "styled-components";
import DefaultTheme from "../utility/themes";
import { black } from "../utility/variables";
import { fade } from "../utility/functions";

const TourCardSide = styled.div`
  overflow: hidden;
  backface-visibility: hidden;
  padding-bottom: 2em;
  height: 45rem;
  width: 100%;
  text-align: center;
  border-radius: 5px;
  display: inline-block;
  background-color: ${props => props.theme.SecondaryBackground};
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.8s ease;
  box-shadow: 1rem 1.5rem 4rem ${fade(black, 0.5)};
`;

TourCardSide.defaultProps = {
  theme: DefaultTheme
};

export { TourCardSide };

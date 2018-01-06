import styled, { css } from "styled-components";
import DefaultTheme from "../utility/themes";
import { black } from "../utility/variables";

const TourCardSide = styled.div`
  overflow: hidden;
  backface-visibility: hidden;
  padding-bottom: 2em;
  height: 45rem;
  text-align: center;
  border-radius: 5px;
  width: 25vw;
  display: inline-block;
  background-color: ${props => props.theme.SecondaryBackground};
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.8s ease;
  box-shadow: 1rem 1.5rem 4rem ${black};
`;

TourCardSide.defaultProps = {
  theme: DefaultTheme
};

export { TourCardSide };

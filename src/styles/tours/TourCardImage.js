import styled from "styled-components";
import DefaultTheme from "../utility/themes";
import { fade, gradientWrapper } from "../utility/functions";
// src="img/nat-5.jpg"
const TourCardImage = styled.div`
  height: 20rem;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  position: relative;
  background-blend-mode: screen;
  background-image: ${props => gradientWrapper(props.color, props.theme)},
    url(${props => props.src});
  background-size: cover;
  background-position: top;
  /* border-radius: 2px 2px 0 0; */
`;

TourCardImage.defaultProps = {
  theme: DefaultTheme
};

export { TourCardImage };

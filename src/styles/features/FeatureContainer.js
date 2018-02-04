import styled from "styled-components";
import DefaultTheme from "../utility/themes";
import { defaultFontSize, black } from "../utility/variables";
import { fade } from "../utility/functions";
import { media } from "../utility/mixins";

const FeatureContainer = styled.section`
  padding: 20rem 0;
  margin-top: -15vh;
  margin-bottom: 15vh;
  background-image: linear-gradient(
      to right bottom,
      ${props => fade(props.theme.Light, 0.2)},
      ${props => fade(props.theme.Dark, 0.2)}
    ),
    url("/img/nat-4.jpg");
  background-size: cover;
  background-position: bottom;
  transform: skewY(-7deg);
  & > * {
    /* select all (*) child (>) elements */
    transform: skewY(7deg);
  }
  ${media.tabPort`
    padding: 5rem 0;
  
  `};
`;

FeatureContainer.defaultProps = {
  theme: DefaultTheme
};

export { FeatureContainer };

import styled from "styled-components";
import DefaultTheme from "../utility/themes";
import { black, marginBottomBig } from "../utility/variables";
import { fade } from "../utility/functions";

const SecondaryHeadline = styled.h2`
  display: inline-block;
  font-size: ${props => props.fontSize || "3.5rem"};
  margin-bottom: ${props => props.bottomMargin || 0};
  font-weight: 700;
  text-transform: uppercase;
  background-image: linear-gradient(
    to right,
    ${props => props.theme.Light},
    ${props => props.theme.Dark}
  );
  /* Make the background clip around the text */
  background-clip: text;
  /* This feature is so new it is not supported by styled components, so we make the vendor prefix our selves */
  -webkit-background-clip: text;
  /* In order to show the background behind the text, we need to make the h2 transparent */
  color: transparent;
  letter-spacing: 0.2rem;
  transition: all 0.2s;
  &:hover {
    transform: skewY(2deg) skewX(15deg) scale(1.1);
    text-shadow: 0.5rem 1rem 2rem ${fade(black, 0.8)};
  }
`;

SecondaryHeadline.defaultProps = {
  theme: DefaultTheme
};

export { SecondaryHeadline };

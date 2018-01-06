import styled from "styled-components";
import DefaultTheme from "../utility/themes";
import { AboutImage } from "./AboutImage";
import { defaultFontSize, black } from "../utility/variables";
import { fade } from "../utility/functions";

const AboutImageContainer = styled.div`
  position: relative;

  &:hover ${AboutImage}:not(:hover) {
    transform: scale(0.95);
    box-shadow: 0 1rem 1.5rem ${fade(black, 0.6)};
  }
`;

// We're passing a default theme for HeaderContainer that aren't wrapped in the ThemeProvider
AboutImageContainer.defaultProps = {
  theme: DefaultTheme
};

export { AboutImageContainer };

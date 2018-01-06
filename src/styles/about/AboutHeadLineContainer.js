import styled, { keyframes } from "styled-components";
import DefaultTheme from "../utility/themes";
import { black } from "../utility/variables";
import { fade } from "../utility/functions";

const AboutHeadLineContainer = styled.div`
  text-align: center;
`;

// We're passing a default theme for HeaderContainer that aren't wrapped in the ThemeProvider
AboutHeadLineContainer.defaultProps = {
  theme: DefaultTheme
};

export { AboutHeadLineContainer };

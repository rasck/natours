import styled from "styled-components";
import DefaultTheme from "../utility/themes";
import { fade } from "../utility/functions";
import { media } from "../utility/mixins";

const HeaderContainer = styled.header`
  height: 95vh;
  background-image: linear-gradient(
      to right bottom,
      ${props => fade(props.theme.Light, 0.2)},
      ${props => fade(props.theme.Dark, 0.2)}
    ),
    url("/img/hero.jpg");
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  position: relative;
  ${media.tabPort`
  height: 65vh;
  clip-path: polygon(0 0, 100% 0, 100% 60vh, 0 100%);
  `};
`;

// We're passing a default theme for HeaderContainer that aren't wrapped in the ThemeProvider
HeaderContainer.defaultProps = {
  theme: DefaultTheme
};

export { HeaderContainer };

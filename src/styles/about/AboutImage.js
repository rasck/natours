import styled from "styled-components";
import DefaultTheme from "../utility/themes";
import { defaultFontSize, black } from "../utility/variables";
import { fade } from "../utility/functions";

const AboutImage = styled.img`
  width: 55%;
  box-shadow: 0 1.5rem 4rem ${fade(black, 0.6)};
  border-radius: 2px;
  position: absolute;
  z-index: 0;
  transition: all 0.2s;
  outline-offset: 2rem;
  left: ${props => (props.left ? props.left : 0)};
  top: ${props => (props.top ? props.top : 0)};

  &:hover {
    outline: 1.5rem solid ${props => props.theme.Medium};
    z-index: 10;
    transform: scale(1.05) translateY(-2rem);
    box-shadow: 0 1.5rem 4rem ${fade(black, 0.5)};
  }
`;

// We're passing a default theme for HeaderContainer that aren't wrapped in the ThemeProvider
AboutImage.defaultProps = {
  theme: DefaultTheme
};

export { AboutImage };

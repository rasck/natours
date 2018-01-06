import styled from "styled-components";
import DefaultTheme from "../utility/themes";
import { marginBottomBig } from "../utility/variables";

const HeadLineContainer = styled.h1`
  color: ${props => props.theme.PrimaryText};
  text-transform: uppercase;
  backface-visibility: hidden;
  margin-bottom: ${marginBottomBig}rem;
`;

// We're passing a default theme for HeaderContainer that aren't wrapped in the ThemeProvider
HeadLineContainer.defaultProps = {
  theme: DefaultTheme
};

export { HeadLineContainer };

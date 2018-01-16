import styled, { keyframes } from "styled-components";
import DefaultTheme from "../utility/themes";
import { defaultFontSize, black } from "../utility/variables";
import { fade } from "../utility/functions";
const linkMixin = `text-transform: uppercase;
text-decoration: none;
padding: 1.5rem 4rem;
border-radius: 10rem;
display: inline-block;
transition: all 0.2s;
font-size: ${defaultFontSize};
position: relative;`;

const Button = styled.a`
  &,
  &:visited,
  &:link {
    ${linkMixin};
  }
  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 1rem 2rem ${fade(black, 0.8)};
    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem ${fade(black, 0.8)};
  }
  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }
`;

const WhiteButton = Button.extend`
  background-color: ${props => props.theme.SecondaryBackground};
  color: ${props => props.theme.SecondaryText};
  &::after {
    background-color: ${props => props.theme.SecondaryBackground};
  }
`;

const ThemeButton = Button.extend`
  background-color: ${props => props.theme.Medium};
  color: ${props => props.theme.PrimaryText};
  &::after {
    background-color: ${props => props.theme.Medium};
  }
`;

WhiteButton.defaultProps = {
  theme: DefaultTheme
};
ThemeButton.defaultProps = {
  theme: DefaultTheme
};

export { Button };
export { WhiteButton };
export { ThemeButton };

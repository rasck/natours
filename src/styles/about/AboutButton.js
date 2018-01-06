import styled from "styled-components";
import { Button } from "../common";
import { moveInBottom } from "../utility/animations";
import DefaultTheme from "../utility/themes";
import { defaultFontSize, black } from "../utility/variables";
import { fade } from "../utility/functions";

const AboutButton = styled.a`
  &:visited,
  &:link {
    color: ${props => props.theme.Medium};
    text-decoration: none;
    font-size: ${defaultFontSize};
    padding: 1rem 0.4rem;
    display: inline-block;
    transition: all 0.2s;
    position: relative;
    border-bottom: 1px solid ${props => props.theme.Medium};
  }
  &:hover {
    background-color: ${props => props.theme.Medium};
    color: ${props => props.theme.PrimaryText};
    transform: translateY(-0.3rem);
    box-shadow: 0 1rem 2rem ${fade(black, 0.85)};
    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem ${fade(black, 0.85)};
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

AboutButton.defaultProps = {
  theme: DefaultTheme
};

export { AboutButton };

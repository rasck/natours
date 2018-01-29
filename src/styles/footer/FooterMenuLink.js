import styled from "styled-components";
import { greyLight, green, black, dark } from "../utility/variables";
import { fade } from "../utility/functions";
const FooterMenuLink = styled.a`
  &:link,
  &:visited {
    color: ${greyLight};
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    transition: all 0.3s;
    background-color: ${dark};
  }
  &:hover,
  &:active {
    color: ${green};
    box-shadow: 0 1rem 2rem ${fade(black, 0.6)};
    transform: rotate(5deg) scale(1.3);
  }
`;

export { FooterMenuLink };

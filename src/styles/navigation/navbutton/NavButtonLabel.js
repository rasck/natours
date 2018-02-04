import styled from "styled-components";
import { fade } from "../../utility/functions";
import { black } from "../../utility/variables";
import { NavIcon } from "./NavIcon";
import { media } from "../../utility/mixins";

const NavButtonLabel = styled.label`
  background-color: ${props => props.theme.BackgroundColor};
  height: 7rem;
  width: 7rem;
  position: fixed;
  top: 6rem;
  right: 6rem;
  border-radius: 50%;
  z-index: 2000;
  box-shadow: 0 1rem 3rem ${fade(black, 0.5)};
  text-align: center;
  cursor: pointer;
  &:hover {
    ${NavIcon} {
      &::before {
        top: -1rem;
      }
      &::after {
        top: 1rem;
      }
    }
  }
  ${media.tabPort`
    top: 3rem;
    right: 3rem;
  `};
`;

export { NavButtonLabel };

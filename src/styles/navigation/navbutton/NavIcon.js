import styled from "styled-components";
import { dark } from "../../utility/variables";

const NavIcon = styled.span`
  position: relative;
  margin-top: 3.4rem;
  &,
  &::before,
  &::after {
    display: inline-block;
    width: 3rem;
    height: 2px;
    background-color: ${dark};
  }

  &::after,
  &::before {
    /* before and after elements must have content defined in order to be shown */
    content: "";
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }

  &::before {
    top: -0.8rem;
  }
  &::after {
    top: 0.8rem;
  }
`;

export { NavIcon };

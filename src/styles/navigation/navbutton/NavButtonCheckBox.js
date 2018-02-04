import styled from "styled-components";
import { NavBackground } from "../NavBackground";
import { Nav } from "../Nav";
import { NavIcon } from "./NavIcon";
import { NavButtonLabel } from "./NavButtonLabel";

const NavButtonCheckBox = styled.input`
  display: none;
  /* using the sibling selector */
  &:checked ~ ${NavBackground} {
    transform: scale(80);
  }
  &:checked ~ ${Nav} {
    transform: translateX(0);
    opacity: 1;
    width: 100%;
  }
  /* use nearby sibling selector */
  &:checked + ${NavButtonLabel} {
    /* and then select the child */
    ${NavIcon} {
      background-color: transparent;
      &::before {
        top: 0;
        /* rotations is default around center */
        /* if we wanted to rotate from the start or end we could */
        /* use the transform-origin property, either left or right  */
        transform: rotate(135deg);
      }
      &::after {
        top: 0;
        transform: rotate(-135deg);
      }
    }
  }
`;

export { NavButtonCheckBox };

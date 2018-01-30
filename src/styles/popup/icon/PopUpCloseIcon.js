import styled from "styled-components";
import { greyDark } from "../../utility/variables";

const PopUpCloseIcon = styled.a`
  &,
  &:visited,
  &:link {
    text-decoration: none;
    display: inline-block;
    font-size: 3rem;
    color: ${greyDark};
    font-weight: 700;
    transition: all 0.2s;
    /* Line height makes it easier to position the element, without it set, there were a lot of empty white space */
    line-height: 1;
    &:hover {
      color: ${props => props.theme.Medium};
    }
  }
`;

export { PopUpCloseIcon };

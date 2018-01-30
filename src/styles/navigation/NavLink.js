import styled from "styled-components";
import { gradientWrapper, fade } from "../utility/functions";
const NavLink = styled.a`
  span {
    margin-right: 1.5rem;
    display: inline-block;
  }
  display: inline-block;
  font-size: 3rem;
  font-weight: 300;
  color: ${props => props.theme.PrimaryText};
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.5s;
  padding: 1rem 2rem;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    ${props => fade(props.theme.PrimaryText, 0)} 50%
  );
  /* we take advantage of background not showing outside its box  */
  /* when background is 220% the left side of the gradient aboce (0 - 50%) will fill all of the element */
  background-size: 230%;
  &:hover,
  &:active {
    background-position: 100%;
    color: ${props => props.theme.Medium};
    transform: translateX(1rem);
  }
`;

export { NavLink };

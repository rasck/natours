import styled from "styled-components";
import DefaultTheme from "../utility/themes";
import { gradientWrapper } from "../utility/functions";
import { media } from "../utility/mixins";

const NavBackground = styled.div`
  /* Z-index only works on elements that has their positions defined */
  z-index: 1000;
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  /* We don't change position as we scroll down the page  */
  position: fixed;
  top: 6.5rem;
  right: 6.5rem;
  background-image: ${props =>
    gradientWrapper(
      props.color,
      props.theme,
      0,
      "circle at center",
      "radial-gradient"
    )};
  /* http://easings.net/da#easeInOutQuint*/
  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
  ${media.tabPort`
  top: 3.25rem;
  right: 3.25rem;
`};
`;

NavBackground.defaultProps = {
  theme: DefaultTheme
};

export { NavBackground };

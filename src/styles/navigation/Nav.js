import styled from "styled-components";

const Nav = styled.nav`
  transform: translateX(-100rem);
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1500;
  width: 0;
  opacity: 0;
  /* http://easings.net/da#easeInOutBack */
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;

export { Nav };

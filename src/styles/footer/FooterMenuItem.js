import styled from "styled-components";
import DefaultTheme from "../utility/themes";
import { defaultFontSize, black } from "../utility/variables";
import { fade } from "../utility/functions";

const FooterMenuItem = styled.li`
  display: inline-block;
  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

export { FooterMenuItem };

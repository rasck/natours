import styled from "styled-components";
import DefaultTheme from "../utility/themes";
import { defaultFontSize, black } from "../utility/variables";
import { fade } from "../utility/functions";
import { media } from "../utility/mixins";

const FooterLogoContainer = styled.div`
  text-align: center;
  margin-bottom: 8rem;
  ${media.tabPort`
      margin-bottom: 6rem;
  `};
`;

export { FooterLogoContainer };

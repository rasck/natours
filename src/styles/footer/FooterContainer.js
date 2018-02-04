import styled from "styled-components";
import { dark } from "../utility/variables";
import { media } from "../utility/mixins";

const FooterContainer = styled.footer`
  background-color: ${dark};
  padding: 10rem 0;
  font-size: 1.4rem;
  ${media.tabPort`
    padding: 8rem 8;
  `};
`;

export { FooterContainer };

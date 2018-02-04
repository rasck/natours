import styled from "styled-components";
import { TopLine, media } from "../utility/mixins";

const FooterMenuContainer = styled.ul`
  list-style: none;
  ${TopLine};
  display: inline-block;
  ${media.tabPort`
    width: 100%;
    text-align: center;
  `};
`;

export { FooterMenuContainer };

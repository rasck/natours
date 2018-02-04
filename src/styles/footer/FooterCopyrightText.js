import styled from "styled-components";
import { greyLight } from "../utility/variables";
import { TopLine, media } from "../utility/mixins";

const FooterCopyrightText = styled.p`
  color: ${greyLight};
  ${TopLine};
  width: 80%;
  float: right;
  ${media.tabPort`
  width: 100%;
  text-align: center;
  float: none;
`};
`;

export { FooterCopyrightText };

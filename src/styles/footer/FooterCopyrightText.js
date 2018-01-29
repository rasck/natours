import styled from "styled-components";
import { greyLight } from "../utility/variables";
import { TopLine } from "../utility/mixins";

const FooterCopyrightText = styled.p`
  color: ${greyLight};
  ${TopLine};
  width: 80%;
  float: right;
`;

export { FooterCopyrightText };

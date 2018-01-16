import styled from "styled-components";
import { marginBottomSmall, defaultFontSize } from "../utility/variables";

const PrimaryParagraph = styled.p`
  font-size: ${defaultFontSize};
  padding: 2rem 0;

  &:not(:last-child) {
    margin-bottom: ${marginBottomSmall};
  }
`;

export { PrimaryParagraph };

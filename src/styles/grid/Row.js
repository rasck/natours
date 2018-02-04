import styled from "styled-components";
import {
  gridWidth,
  gutterHorizontal,
  gutterVertical,
  gutterVerticalSmall
} from "../utility/variables";
import { clearFix, media } from "../utility/mixins";

const Row = styled.div`
  max-width: ${gridWidth};
  margin: 0 auto;
  &:not(:last-child) {
    /* set margin bottom on everything but the last child */
    margin-bottom: ${gutterVertical};
    ${media.tabPort`
      margin-bottom: ${gutterVerticalSmall};
  `};
  }
  ${media.tabPort`
      max-width: 50rem;
      padding: 0 3rem;
  `};
  /* fix our floats  */
  ${clearFix};
`;

export { Row };

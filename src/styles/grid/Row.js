import styled from "styled-components";
import {
  gridWidth,
  gutterHorizontal,
  gutterVertical
} from "../utility/variables";
import { clearFix } from "../utility/mixins";

const Row = styled.div`
  max-width: ${gridWidth};
  margin: 0 auto;
  &:not(:last-child) {
    /* set margin bottom on everything but the last child */
    margin-bottom: ${gutterVertical};
  }
  /* fix our floats  */
  ${clearFix};
`;

export { Row };

import styled from "styled-components";
import {
  gridWidth,
  gutterHorizontal,
  gutterVerticalSmall
} from "../utility/variables";
import { media } from "../utility/mixins";

const colCalc = (span, columns) => {
  const numberOfGutters = Number(columns) - 1;
  const addGutterSpace = Number(span) - 1;
  // first parts of the fourmula is adding the empty spaces together
  // second parts is calulating the width of one and multiply it with the span
  // what makes the second part hard is to take into account the empty space each column would make
  return `
    width: calc(
      (${gutterHorizontal}*${addGutterSpace}) + 
      ${span} *
      (
        (100% - (${numberOfGutters} * ${gutterHorizontal})) /
          ${columns}
      )
    );`;
};

export const Column = styled.div`
  float: left;
  &:not(:last-child) {
    margin-right: ${gutterHorizontal};
  }
  ${props => colCalc(props.span, props.columns)};
  ${media.tabPort`
    width: 100%;
    margin-right: 0;
    margin-bottom: ${gutterVerticalSmall};
  `};
`;

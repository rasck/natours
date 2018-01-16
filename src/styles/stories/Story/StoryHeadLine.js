import styled from "styled-components";
import { TertiaryHeadLine } from "../../common";
import { marginBottomSmall } from "../../utility/variables";

const StoryHeadLine = TertiaryHeadLine.extend`
  margin-bottom: ${marginBottomSmall};
  -webkit-font-smoothing: antialiased;

  letter-spacing: 1px;
`;

export { StoryHeadLine };

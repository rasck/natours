import styled from "styled-components";
import { marginBottomSmall, greyLight } from "../utility/variables";

const PopUpText = styled.p`
  font-size: 1.4rem;
  margin-bottom: ${marginBottomSmall};
  column-count: 2;
  column-gap: 4rem;
  column-rule: solid 2px ${greyLight};
  /* linjeskift */
  /* needs a lot of prefix if you want in all browsers */
  hyphens: auto;
`;

export { PopUpText };

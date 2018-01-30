import styled from "styled-components";
import { SecondaryHeadline } from "../common/SecondaryHeadline";
import { marginBottomSmall } from "../utility/variables";
const PopUpHeadline = SecondaryHeadline.extend`
  margin-bottom: ${marginBottomSmall};
`;

export { PopUpHeadline };

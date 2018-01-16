import styled from "styled-components";
import { marginBottomSmall } from "../../utility/variables";

const FormGroup = styled.div`
  &:not(:last-child) {
    margin-bottom: ${marginBottomSmall};
  }
`;

export { FormGroup };

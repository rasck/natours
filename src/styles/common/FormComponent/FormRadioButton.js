import styled from "styled-components";
import { FormRadioButtonLabel } from "./FormRadioButtonLabel";
import { FormRadioStyle } from "./FormRadioStyle";

const FormRadioButton = styled.input`
  display: none;
  /* when checking the radioubtton we want to target the span in the sibling radiobtnlbl */
  &:checked + ${FormRadioButtonLabel} ${FormRadioStyle} {
    /* border-color: blue; */
    &::after {
      opacity: 1;
    }
  }
`;

export { FormRadioButton };

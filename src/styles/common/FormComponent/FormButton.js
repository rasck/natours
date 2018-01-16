import styled from "styled-components";
import { ThemeButton } from "../Button";

const Btn = ThemeButton.withComponent("button");

var FormButton = Btn.extend`
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export { FormButton };

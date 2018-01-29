import { ThemeButton } from "../Button";
// convert the html anchor element to a button element
const Button = ThemeButton.withComponent("button");

const FormButton = Button.extend`
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export { FormButton };

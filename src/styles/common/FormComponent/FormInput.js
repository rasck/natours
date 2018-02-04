import styled from "styled-components";
import { fade } from "../../utility/functions";
import { white, black, greyDark } from "../../utility/variables";
import { FormLabel } from "./FormLabel";

const FormInput = styled.input`
  font-size: 1.5rem;
  padding: 1.5rem 2rem;
  font-family: inherit;
  border-radius: 2px;
  background-color: ${fade(white,+ 0.2)};
  border: none;
  transition: all 0.4s ease;
  border-bottom: 3px solid transparent;
  width: 90%;
  display: block;
  color: inherit;
  &:focus {
    outline: none;
    box-shadow: 0 1rem 2rem ${fade(black, 0.9)};
    border-bottom: 3px solid ${props => props.theme.Medium};
    &:invalid {
      border-bottom: 3px solid ${props => props.theme.Faulty};
    }
  }
/* using sibling selector to selec only the next label */
  &:placeholder-shown + ${FormLabel} {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }
  }

`;

export { FormInput };

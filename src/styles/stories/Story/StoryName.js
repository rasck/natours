import styled from "styled-components";
import { white } from "../../utility/variables";

const StoryName = styled.figcaption`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -20%);
  color: ${white};
  text-transform: uppercase;
  text-align: center;
  font-size: 1.7rem;
  opacity: 0;
  transition: all 0.5s;

  letter-spacing: 2px;
`;

export { StoryName };

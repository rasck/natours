import styled from "styled-components";
import { black, white } from "../../utility/variables";
import { fade } from "../../utility/functions";
import { defaultFontSize } from "../../utility/variables";
import { StoryShape } from "./StoryShape";
import { StoryName } from "./StoryName";
import { StoryImage } from "./StoryImage";

const StoryContainer = styled.div`
  background-color: ${props => props.theme.SecondaryBackground};
  width: 80%;
  margin: 0 auto;
  box-shadow: 0 3rem 6rem ${fade(black, 0.2)};
  border-radius: 3px;
  padding: 6rem;
  padding-left: 12rem;
  padding-right: 9rem;
  font-size: ${defaultFontSize};
  clip-path: polygon(7% 0, 100% 0, 93% 100%, 0 100%);
  /* transform: skewX(-12deg); */
  & > * {
    /* transform: skewX(12deg); */
  }
  /* A hack here to let our stoyshape keep its translate */
  ${StoryShape} {
    /* transform: translateX(-3rem) skewX(12deg); */
  }

  &:hover {
    ${StoryImage} {
      transform: translateX(-4rem) scale(1);
      filter: brightness(80%) blur(3px);
    }
    ${StoryName} {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
`;

export { StoryContainer };

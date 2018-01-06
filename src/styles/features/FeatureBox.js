import styled from "styled-components";
import DefaultTheme from "../utility/themes";
import { defaultFontSize, black } from "../utility/variables";
import { fade } from "../utility/functions";

const FeatureBox = styled.div`
  box-shadow: 0 0.5rem 2rem ${fade(black, 0.6)};
  margin-top: 5em;
  padding: 2.5rem;
  background-color: ${props => props.theme.TertiaryBackground};
  text-align: center;
  border-radius: 3px;
  transition: transform 0.3s;
  opacity: 0.8;
  &:hover {
    transform: scale(1.05) translateY(-1rem);
    box-shadow: 0 1rem 1.5rem ${fade(black, 0.5)};
  }
`;

FeatureBox.defaultProps = {
  theme: DefaultTheme
};

export { FeatureBox };

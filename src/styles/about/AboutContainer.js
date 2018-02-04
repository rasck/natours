import styled from "styled-components";
import DefaultTheme from "../utility/themes";
import { media } from "../utility/mixins";

const AboutContainer = styled.section`
  background-color: ${props => props.theme.TertiaryBackground};
  padding: 30rem 0;
  margin-top: -20vh;
  ${media.tabPort`
    padding: 35rem 0;
  
  `};
`;

AboutContainer.defaultProps = {
  theme: DefaultTheme
};

export { AboutContainer };

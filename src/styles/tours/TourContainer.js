import styled from "styled-components";
import DefaultTheme from "../utility/themes";
import { media } from "../utility/mixins";
const TourContainer = styled.section`
  background-color: ${props => props.theme.TertiaryBackground};
  padding-bottom: 15rem;
  padding-top: 30rem;
  margin-top: -25rem;

  ${media.tabPort`
  padding-top: 20rem;
  padding-bottom: 10rem;
  
  `};
`;

TourContainer.defaultProps = {
  theme: DefaultTheme
};

export { TourContainer };

import styled from "styled-components";
import DefaultTheme from "../utility/themes";

const TourContainer = styled.section`
  background-color: ${props => props.theme.TertiaryBackground};
  padding-bottom: 15rem;
  padding-top: 30rem;
  margin-top: -25rem;
`;

TourContainer.defaultProps = {
  theme: DefaultTheme
};

export { TourContainer };

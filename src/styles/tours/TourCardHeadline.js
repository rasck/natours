import styled from "styled-components";
import DefaultTheme from "../utility/themes";
import { gradientWrapper } from "../utility/functions";

const TourCardHeadline = styled.span`
  box-decoration-break: clone;
  padding: 1rem 1.5rem;
  background-image: ${props => gradientWrapper(props.color, props.theme, 0.2)};
`;

TourCardHeadline.defaultProps = {
  theme: DefaultTheme
};

export { TourCardHeadline };

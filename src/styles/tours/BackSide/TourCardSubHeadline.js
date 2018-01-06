import styled from "styled-components";
import DefaultTheme from "../../utility/themes";

const TourCardSubHeadline = styled.p`
  font-size: 1.4rem;
  text-transform: uppercase;
`;

TourCardSubHeadline.defaultProps = {
  theme: DefaultTheme
};

export { TourCardSubHeadline };

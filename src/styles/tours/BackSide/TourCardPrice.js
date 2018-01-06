import styled from "styled-components";
import DefaultTheme from "../../utility/themes";

const TourCardPrice = styled.p`
  font-size: 6rem;
  font-weight: 100;
`;

TourCardPrice.defaultProps = {
  theme: DefaultTheme
};

export { TourCardPrice };

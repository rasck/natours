import styled from "styled-components";
import DefaultTheme from "../utility/themes";
import { white } from "../utility/variables";

const TourCardHeadlineContainer = styled.h4`
  display: block;
  position: absolute;
  right: 2rem;
  top: 9rem;
  width: 75%;
  text-align: right;
  font-size: 2.8rem;
  font-weight: 300;
  text-transform: uppercase;
  color: ${white};
`;

TourCardHeadlineContainer.defaultProps = {
  theme: DefaultTheme
};

export { TourCardHeadlineContainer };

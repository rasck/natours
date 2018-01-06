import styled from "styled-components";
import DefaultTheme from "../utility/themes";
import { TourCardSide } from "./TourCardSide";
import { TourBackSide } from "./BackSide/TourBackSide";

const TourCard = styled.div`
  position: relative;
  perspective: 150rem;
  height: 45rem;

  &:hover ${TourCardSide} {
    transform: rotateY(180deg);
  }
  &:hover ${TourBackSide} {
    transform: rotateY(0deg);
  }
`;

TourCard.defaultProps = {
  theme: DefaultTheme
};

export { TourCard };

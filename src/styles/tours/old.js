import styled, { css } from "styled-components";
import DefaultTheme from "../utility/themes";
import { TourCardSide } from "./TourCardSide";

const TourBackSide = TourCardSide.extend`
  transform: rotateY(-180deg);
  background-image: linear-gradient(
    to right bottom,
    ${props =>
      props.color && props.color.light ? props.color.light : props.theme.Light},
    ${props =>
      props.color && props.color.dark ? props.color.dark : props.theme.Dark}
  );
`;

TourBackSide.defaultProps = {
  theme: DefaultTheme
};

export { TourBackSide };

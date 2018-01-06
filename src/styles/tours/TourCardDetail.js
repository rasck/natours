import styled from "styled-components";
import DefaultTheme from "../utility/themes";
import { defaultFontSize } from "../utility/variables";

const TourCardDetail = styled.p`
  padding: 0.5em;
  display: inline-block;
  width: 75%;
  font-size: ${defaultFontSize};
  border-bottom: 1px solid ${props => props.theme.TertiaryBackground};
  &:last-child {
    border: none;
  }
`;

TourCardDetail.defaultProps = {
  theme: DefaultTheme
};

export { TourCardDetail };

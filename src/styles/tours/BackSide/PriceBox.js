import styled from "styled-components";
import DefaultTheme from "../../utility/themes";

const PriceBox = styled.div`
  text-align: center;
  color: ${props => props.theme.PrimaryText};
  margin-bottom: 8rem;
`;

PriceBox.defaultProps = {
  theme: DefaultTheme
};

export { PriceBox };

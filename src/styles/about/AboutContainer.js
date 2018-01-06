import styled from "styled-components";
import DefaultTheme from "../utility/themes";

const AboutContainer = styled.section`
  background-color: ${props => props.theme.TertiaryBackground};
  padding: 25rem 0;

  margin-top: -20vh;
`;

AboutContainer.defaultProps = {
  theme: DefaultTheme
};

export { AboutContainer };

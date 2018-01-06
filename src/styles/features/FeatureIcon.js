import styled from "styled-components";
import DefaultTheme from "../utility/themes";
const FeatureIcon = styled.i`
  display: inline-block;
  font-size: 6em;
  font-weight: 900;
  padding: 1px;
  background-image: linear-gradient(
    to right,
    ${props => props.theme.Light},
    ${props => props.theme.Dark}
  );
  /* Make the background clip around the text */
  background-clip: text;
  /* This feature is so new it is not supported by styled components, so we make the vendor prefix our selves */
  -webkit-background-clip: text;
  /* In order to show the background behind the text, we need to make the h2 transparent */
  color: transparent;
`;

FeatureIcon.defaultProps = {
  theme: DefaultTheme
};

export { FeatureIcon };

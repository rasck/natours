import styled from "styled-components";
import { media } from "../utility/mixins";
const StoriesContainer = styled.div`
  position: relative;
  padding: 15rem 0;
  ${media.tabPort`
    padding: 7rem 0;
  
  `};
`;

export { StoriesContainer };

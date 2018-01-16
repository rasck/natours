import styled from "styled-components";
import { gradient } from "../utility/functions";

const BookingContainer = styled.section`
  padding: 15rem 0;
  background-image: ${props => gradient(props.theme.Light, props.theme.Dark)};
`;

export { BookingContainer };

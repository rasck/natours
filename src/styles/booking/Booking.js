import styled from "styled-components";
import { fade } from "../utility/functions";
import { black, white } from "../utility/variables";

const Booking = styled.div`
  background-image: linear-gradient(
      105deg,
      ${fade(white, 0.1)} 0%,
      ${fade(white, 0.1)} 49.85%,
      ${props => fade(props.theme.Light, 0.9)} 50%
    ),
    url("/img/nat-10.jpg");
  background-size: cover;
  height: 50rem;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem ${fade(black, 0.35)};
`;

export { Booking };

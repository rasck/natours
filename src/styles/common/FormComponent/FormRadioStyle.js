import styled from "styled-components";

const FormRadioStyle = styled.span`
  height: 3rem;
  width: 3rem;
  border: 5px solid ${props => props.theme.Medium};
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 0;
  top: -0.8rem;
  &::after {
    content: "";
    height: 1.3rem;
    width: 1.3rem;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${props => props.theme.Medium};
    opacity: 0;
    transition: opacity 0.3s;
  }
`;

export { FormRadioStyle };

import styled from "styled-components";

const StoryShape = styled.figure`
  posistion: relative;
  width: 15rem;
  height: 15rem;
  background-color: ${props => props.theme.Medium};
  float: left;
  /* everything will adjust round to the circle. A bit like in workd, when stuff float close to a figure */
  /* it requires float, width and height to work! I could also define a polygon  */
  shape-outside: circle(50% at 50% 50%);
  /* circle( size relative to container at <position>  */
  /* circle( size relative to container at from left-to-right 0% = left and 100% = rigth , 0% = top and 100% = bottom */
  /* clip-path: circle(50% at 50% 50%); */
  border-radius: 100px;
  overflow: hidden;
  /* instead of using margins we use transform */
  transform: translateX(-3rem);
`;

export { StoryShape };

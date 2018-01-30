import styled from "styled-components";

const PopUpContent = styled.div`
  width: 68.66666%;
  /* use display table-cell to simulate table */
  /* we do that yo make the container and content box have the same height*/
  display: table-cell;
  vertical-align: middle;
  padding: 3rem 5rem;
`;

export { PopUpContent };

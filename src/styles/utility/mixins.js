import { greyLight } from "./variables";
import { css } from "styled-components";

export const clearFix = `
    &::after {
        content: "";
        clear: both;
        display: table;
    }
`;

export const TopLine = `
border-top: 1px solid ${greyLight};
padding-top: 2rem;
`;

export const Center = `
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%)
`;

// https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md
// Media Query Manager

/*

0 - 600 px: phone
600 - 900px: Table portrait
900 - 1200px: Table landscape
[1200 - 1800] normal style
1800+ : big dekstop

*/

// Ems and rems are not affected by root font setting (in the css html tag) in mediaquery
// They will always be based one the font set by the user. Default is 16px

// rem fails to work in some browsers. Em's is the best to use

const defaultFontSize = 16;
// pixels to Em converter
const pxToEm = px => px / defaultFontSize;

export const media = {
  phone: (...args) => css`
    @media (max-width: ${pxToEm(600)}em) {
      ${css(...args)};
    }
  `,
  tabPort: (...args) => css`
    @media(max-width:  ${pxToEm(900)}em) {
        ${css(...args)}
    },
    `,
  tabLand: (...args) => css`
    @media (max-width: ${pxToEm(1200)}em) {
      ${css(...args)};
    }
  `,
  dekstopBig: (...args) => css`
    @media (min-width: ${pxToEm(1800)}em) {
      ${css(...args)};
    }
  `
};

// How to use the media manager:

/*



import { media } from '../mixins';

// Make the text smaller on phones
const Box = styled.div`
  font-size: 16px;
  ${ media.phone`
    font-size: 14px;
  ` }
`;

snippet:

        ${media.tabLand`

        `};

        ${media.tabPort`  
           
        `};

        ${media.phone`

        `};

        ${media.dekstopBig`  
         
        `};
*/

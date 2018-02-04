import { injectGlobal } from "styled-components";
import { media } from "./mixins";

export const globalStyle = theme => {
  injectGlobal`
    * ,
    ::after,
    ::before
    {
        margin: 0;
        padding: 0;
        /* using inherit (and set in body) is a CSS community best practice
           to make it easier to override the box-sizing using
           plugins (eventhough im not sure how this makes it better)
        */
        box-sizing: inherit;
    }
    body {
        font-family: Lato, sans-serif;
        font-weight: 400;
        line-height: 1.7;
        padding: 3rem;
        color: ${theme.SecondaryText};
        box-sizing: border-box;
        ${media.tabPort` 
        padding: 0;
    `};
    }
    html {
        /* Set the root font-size to base all rem's on */
        /* we want the user to be able to override by using percentages
           but we want it to default to 10px if the user has done nothing (makes it easier to calc rems)
           default is 16px = 100%;
           10 px = ( 10 / 16) * 100 = 62.5%
        */
        font-size: 62.5%;
        
        /* always the larger ones first */
        /* desktop is an exception because it asks for min-width */

        ${media.tabLand` /* width < 1200 ? */
        /* 1 rem should be 9 px, 9 /16 = 56.25% */
        font-size: 56.25%;
        `};
        ${media.tabPort`  /* width < 900 ? */
            /* 1 rem should be 8 px, 8 /16 = 50% */
            font-size: 50%;
        `};
        ${media.dekstopBig`  /* width > 1800 ? */
            /* 1 rem should be 12 px, 12 /16 = 75% */
            font-size: 75%;
        `};
    }
`;
};

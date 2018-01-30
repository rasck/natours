import { greyLight } from "./variables";

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

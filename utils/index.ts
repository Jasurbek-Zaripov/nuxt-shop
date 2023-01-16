import { GetImgSizesProp } from "~~/types";

export function getImgSizes(fn?: GetImgSizesProp) {
    const screens = {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xxl: 1536,
        '2xl': 1800
    };
    //change screens
    if (fn) fn(screens);

    const entries = Object.entries(screens);
    const medies = entries
        .map(arr => arr.join(':'))
        .join(' ');
    return medies;
}
export interface IProduct {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
    rating: { rate: number, count: number; };
}

export interface TempItems {
    id: number;
    title: string;
    image: string;
    price: string;
}
export type GetImgSizesProp = (screens: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    '2xl': number;
}) => void;

export enum LENGS {
    TITLE = 50,
    DESCRIPTION = 169,
    KEYWORDS = 10
}
export interface MetaTagsProps {
    title: string;
    description: string;
    keywords: string[];
    img: string;
}
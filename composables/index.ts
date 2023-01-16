import { $Img } from "@nuxt/image-edge";
import { MetaTagsProps, TempItems } from "../types";

export const useHello = () => {
    return useState('hello', () => 'my first state');
};

export const useShowCartModal = () => {
    return useState('showCartModal', () => false);
};

export const useTempItems = () => {
    return useState<TempItems[]>('tempItems', () => []);
};
export const useForMetaProps = () => {
    return useState<MetaTagsProps>('ForMetaPropsState');
};
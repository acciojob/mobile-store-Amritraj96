import {number, shape, string} from "prop-types";


export const productPropTypes = shape({
    id: number.isRequired,
    title: string.isRequired,
    description: string,
    image: string.isRequired,
    price: number.isRequired
}).isRequired;

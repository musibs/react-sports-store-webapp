import { DataTypes } from './Types';

const protocol = "http";
const host = "localhost";
const port = 3500;

export const RestUrls = {
    [DataTypes.PRODUCTS] : `${protocol}://${host}:${port}/api/products`,
    [DataTypes.CATEGORIES] : `${protocol}://${host}:${port}/api/categories`,
    [DataTypes.ORDERS] : `${protocol}://${host}:${port}/api/orders`
}


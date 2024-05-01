import Home from "../pages/home/home";
import Product from "../pages/product/product";
import ItemProduct from "../pages/itemProduct/itemProduct";

export const HOME = '/'
export const PRODUCT = '/product'
export const ITEM_PRODUCT = '/product/:id'



export const RouterData =[
    {
        path:HOME,
        Component:<Home/>
    },
    {
        path:PRODUCT,
        Component:<Product/>
    },
    {
        path:ITEM_PRODUCT,
        Component:<ItemProduct/>
    },

]
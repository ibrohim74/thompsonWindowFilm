import Home from "../pages/home/home";
import Product from "../pages/product/product";
import ItemProduct from "../pages/itemProduct/itemProduct";
import BronPlyonka from "../pages/bronPlyonka/bronPlyonka";
import Tanirovka from "../pages/tanirovka/tanirovka";
import Contact from "../pages/contact/contact";
import Technology from "../pages/technolgy/technology";

export const HOME = '/'
export const WINDOW_FILM = '/window_film'
export const CONTACT = '/contact'
export const TECHNOLOGY = '/technology'
export const AUTOMOTIVE_FILM = '/automotive-film'
export const PRODUCT = '/product/:category'
export const ITEM_PRODUCT = '/product/:category/:id'



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
    {
        path:WINDOW_FILM,
        Component:<BronPlyonka/>
    },
    {
        path:AUTOMOTIVE_FILM,
        Component:<Tanirovka/>
    },
    {
        path:CONTACT,
        Component:<Contact/>
    },
    {
        path:TECHNOLOGY,
        Component:<Technology/>
    },

]
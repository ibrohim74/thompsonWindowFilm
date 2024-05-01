import React from 'react';
import useMediaQuery from "@mui/material/useMediaQuery";
import style from './nav.module.css'
import BottomAppBar from "./appBar";

const Navbar = () => {
    const mediaQuery = useMediaQuery('(max-width:750px)');
    return (
        <div className={'container'}>
            {mediaQuery ? <BottomAppBar/> :
                (<nav className={style.navbar}>
                    <div className={style.brand}>
                        <p className={style.brand_text}>BLACK STAR</p>
                    </div>
                    <ul className={style.nav_items}>
                        <li className={style.nav_item}>
                            <a href="#" className="nav-link">Home</a>
                        </li>
                        <li className={style.nav_item}>
                            <a href="#" className="nav-link">Services</a>
                        </li>
                        <li className={style.nav_item}>
                            <a href="#" className="nav-link">Products</a>
                        </li>
                        <li className={style.nav_item}>
                            <a href="#" className="nav-link">Help</a>
                        </li>
                        <li className={style.nav_item}>
                            <a href="#" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </nav>)}


        </div>
    );
};

export default Navbar;
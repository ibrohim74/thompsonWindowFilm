import React from 'react';
import useMediaQuery from "@mui/material/useMediaQuery";
import style from './nav.module.css'
import BottomAppBar from "./appBar";
import logo from '../../assets/img/logoTextWhite.png'
import {Dropdown, Space} from "antd";
import {languages} from "../../processes/lang/langs";
import {DownOutlined} from "@ant-design/icons";
import {useLanguage} from "../../processes/lang/LangContext";
const Navbar = ({onlyIcon = true}) => {
    const mediaQuery = useMediaQuery('(max-width:750px)');
    const {handleLanguageChange, selectedLanguage} = useLanguage();
    return (
        <div className={'container'}>
            {mediaQuery ? <BottomAppBar/> :
                (<nav className={style.navbar}>
                    <div className={style.brand}>
                        <p className={style.brand_text}>
                            <img src={logo} alt="logo"/>
                        </p>
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
                        <li>
                            <Dropdown
                                menu={{
                                    items: languages,
                                    onClick: handleLanguageChange,
                                }}
                                style={{zIndex: 9999 , cursor:"pointer"}}
                            >
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        {onlyIcon ? (
                                            <span style={{ cursor:"pointer"}}>{selectedLanguage.icon}</span>
                                        ) : (
                                            <>
                                                {selectedLanguage.icon} {selectedLanguage.label} <DownOutlined/>
                                            </>
                                        )}
                                    </Space>
                                </a>
                            </Dropdown>
                        </li>
                    </ul>
                </nav>)}


        </div>
    );
};

export default Navbar;
import React from 'react';
import useMediaQuery from "@mui/material/useMediaQuery";
import style from './nav.module.css'
import BottomAppBar from "./appBar";
import logo from '../../assets/img/logoTextWhite.png'
import {Dropdown, Space} from "antd";
import {languages} from "../../processes/lang/langs";
import {DownOutlined} from "@ant-design/icons";
import {useLanguage} from "../../processes/lang/LangContext";
import {Link, useNavigate} from "react-router-dom";
import {HOME} from "../../processes/const";
const Navbar = ({onlyIcon = true  , navStyle} ) => {
    const mediaQuery = useMediaQuery('(max-width:750px)');
    const {handleLanguageChange, selectedLanguage} = useLanguage();
    const navigate = useNavigate()
    return (
        <div className={'container'}>
            {mediaQuery ? <BottomAppBar/> :
                (<nav className={style.navbar} style={navStyle}>
                    <div className={style.brand} style={{cursor:"pointer"}}>
                        <p className={style.brand_text} onClick={()=>navigate(HOME)}>
                            <img src={logo} alt="logo"/>
                        </p>
                    </div>
                    <ul className={style.nav_items}>
                        <li className={style.nav_item}>
                            <Link to={HOME} className="nav-link">Home</Link>
                        </li>
                        <li className={style.nav_item}>
                            <a href="#" className="nav-link">Bron Plyonka</a>
                        </li>
                        <li className={style.nav_item}>
                            <a href="#" className="nav-link">Tanirovka</a>
                        </li>
                        <li className={style.nav_item}>
                            <a href="#" className="nav-link">Bron Plyonka 2</a>
                        </li>
                        <li className={style.nav_item}>
                            <a href="#" className="nav-link">Tanirovka 2</a>
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
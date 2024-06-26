import React from 'react';
import useMediaQuery from "@mui/material/useMediaQuery";
import style from './nav.module.css'
import BottomAppBar from "./appBar";
import logo from '../../assets/img/rsz_2logo.png'
import {Dropdown, Space} from "antd";
import {languages} from "../../processes/lang/langs";
import {DownOutlined} from "@ant-design/icons";
import {useLanguage} from "../../processes/lang/LangContext";
import {Link, useNavigate} from "react-router-dom";
import {AUTOMOTIVE_FILM, CONTACT, HOME, TECHNOLOGY, WINDOW_FILM} from "../../processes/const";
import {useTranslation} from "react-i18next";
const Navbar = ({onlyIcon = true  , navStyle} ) => {
    const mediaQuery = useMediaQuery('(max-width:750px)');
    const {handleLanguageChange, selectedLanguage} = useLanguage();
    const navigate = useNavigate()
    const { t } = useTranslation();
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
                            <Link to={HOME} className="nav-link">{t('navContent.home')}</Link>
                        </li>
                        <li className={style.nav_item}>
                            <Link to={WINDOW_FILM} className="nav-link">{t('navContent.protection')}</Link>
                        </li>
                        <li className={style.nav_item}>
                            <Link to={AUTOMOTIVE_FILM} className="nav-link">{t('navContent.automotive')}</Link>
                        </li>
                        <li className={style.nav_item}>
                            <Link to={TECHNOLOGY} className="nav-link">{t('navContent.technology')}</Link>
                        </li>
                        <li className={style.nav_item}>
                            <Link to={CONTACT} className="nav-link">{t('navContent.contact')}</Link>
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
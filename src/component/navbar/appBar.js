import * as React from 'react';
import {styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import style from './nav.module.css'
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {Dropdown, Space} from "antd";
import {DownOutlined} from "@ant-design/icons";
import {HOME, PRODUCT} from "../../processes/const";
import HomeIcon from '@mui/icons-material/Home';
import {useLanguage} from "../../processes/lang/LangContext";
import {languages} from '../../processes/lang/langs'
import i18n from "i18next";
import {useState} from "react";
import {Icon} from "../../assets/icons/icon";

const BottomAppBar = ({onlyIcon = true}) => {
    const [appMenu, setAppMenu] = useState(false)
    const [openProduct, setOpenProduct] = useState(false)

    const {handleLanguageChange, selectedLanguage} = useLanguage();
    return (
        <>
            <AppBar position="fixed" sx={{top: 'auto', bottom: 0, background: "#292D32"}}>
                <Toolbar>
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


                    <div className={style?.app_bar_home}>
                        <Link to={HOME} style={{color: "white"}}>
                            <HomeIcon/>
                        </Link>
                    </div>
                    <Box sx={{flexGrow: 1}}/>
                    <IconButton color="inherit" aria-label="open drawer" onClick={() => setAppMenu(!appMenu)}>
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <div className={style.menu_app} style={appMenu ? {right: '0'} : {right: '-100%'}}>
                <div className={style.menu_app_item} onClick={() => setOpenProduct(!openProduct)}>
                    <h1>product {openProduct ? <Icon.UpArrow/> : <Icon.DownArrow/>}</h1>


                </div>
                {openProduct && (<div className={style.openProductList}>
                <Link to={PRODUCT}>Product 1</Link>
                <Link to={PRODUCT}>Product 2</Link>
                <Link to={PRODUCT}>Product 3</Link>
            </div>)}
                <div className={style.menu_app_item}>
                    <h1>qweqwe</h1>
                </div>
            </div>
        </>
    );
}
export default BottomAppBar
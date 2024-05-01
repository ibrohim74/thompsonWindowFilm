import React from 'react';
import style from './home.module.css'
import {useTranslation} from "react-i18next";
import useMediaQuery from "@mui/material/useMediaQuery";

const Home = () => {
    const {t} = useTranslation()
    const mediaQuery = useMediaQuery('(max-width:750px)');

    return (
        <div className={style.home_content}>
            <div className={style.header}>
                <video src={require("../../assets/videos/bg.mp4")} autoPlay muted loop></video>
                {/*<div className="container">*/}
                    <div className={style.logo_text}>
                        <img src={require("../../assets/img/logoTextWhite.png")}
                             style={mediaQuery?{width:'100%'} : {}}
                             className="logo-img"/>
                    </div>
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Home;
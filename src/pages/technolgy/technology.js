import React from 'react';
import style from './technology.module.css'
import Navbar from "../../component/navbar/navbar";
import {useTranslation} from "react-i18next";

const Technology = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Navbar/>
            <div className={style.window_header}>
                <video src={require("../../assets/videos/videoBronPlyonka.mp4")} autoPlay muted loop></video>
                <div className={style.window_header_text}>
                    <h1>{t('technolgy.title')}</h1>
                </div>
                <div className={style.window_header_shadow}></div>
            </div>


            <div className={'container'}>
                <div className={style.technology_box}>
                    <div className={style.technology_box_item}>
                        <h1>{t('technolgy.one_title')}</h1>
                        <p>{t('technolgy.one')}</p>
                    </div>
                    <div className={style.technology_box_item}>
                        <h1>{t('technolgy.two_title')}</h1>
                        <p><p>{t('technolgy.two')}</p></p>
                    </div>
                    <div className={style.technology_box_item}>
                        <h1>{t('technolgy.three_title')}</h1>
                        <p><p>{t('technolgy.three')}</p></p>
                    </div>
                    <div className={style.technology_box_item}>
                        <h1>{t('technolgy.four_title')}</h1>
                        <p><p>{t('technolgy.four')}</p></p>
                    </div>
                    <div className={style.technology_box_item}>
                        <h1>{t('technolgy.five_title')}</h1>
                        <p><p>{t('technolgy.five')}</p></p>
                    </div>
                    <div className={style.technology_box_item}>
                        <h1>{t('technolgy.six_title')}</h1>
                        <p><p>{t('technolgy.six')}</p></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technology;
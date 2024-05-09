import React, {useEffect, useState} from 'react';
import style from './home.module.css'
import {useTranslation} from "react-i18next";
import useMediaQuery from "@mui/material/useMediaQuery";
import {product} from "../../db/db";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {ITEM_PRODUCT, PRODUCT} from "../../processes/const";
import Navbar from "../../component/navbar/navbar";

const Home = () => {
    const {t} = useTranslation()
    const mediaQuery = useMediaQuery('(max-width:750px)');
    const langStorage = window.localStorage.getItem('i18nextLng')
    const navigate = useNavigate()
    return (
        <div className={style.home_content}>
            <Navbar/>
            <div className={style.header} id='header'>
                <video src={require("../../assets/videos/bg.mp4")} autoPlay muted loop></video>
                <div className={style.logo_text}>
                    <img src={require("../../assets/img/logoTextWhite.png")}
                         style={mediaQuery ? {width: '100%'} : {}}
                         className="logo-img"/>
                </div>
            </div>
            <div className="container">
                <div className={style.home_product_category}>
                    <h1 className={style.home_product_category_title}>
                        <span>01</span>
                        {t('title_bronPlyonka')}
                    </h1>
                    <div className={style.home_product_category_item}>
                        {product?.[0]?.BronPlyonka?.slice(0, 6).map((item, index) => {
                            console.log(item);
                            return (
                                <div className={style.home_product_category_product} key={index}
                                     onClick={() => navigate(ITEM_PRODUCT.replace(':id', item.id).replace(':category', 'BronPlyonka'))}
                                >
                                    <div className={style.home_product_category_product_top}>
                                        <img src={item.title_img} alt=""/>
                                    </div>
                                    <div className={style.home_product_category_product_body}>
                                        <div style={{padding: "15px 10px"}}>
                                            {langStorage === 'en' && <h1>{item.title_en}</h1>}
                                            {langStorage === 'uz' && <h1>{item.title_uz}</h1>}
                                            {langStorage === 'ru' && <h1>{item.title_ru}</h1>}

                                            {langStorage === 'en' && <p>{item.info_en}</p>}
                                            {langStorage === 'ru' && <p>{item.info_ru}</p>}
                                            {langStorage === 'uz' && <p>{item.info_uz}</p>}
                                            <span>
                                            {t('more')}
                                                <svg x="0px" y="0px" viewBox="0 0 207.9 23.4">
                                               <polygon
                                                   points="207.9,11.6 196.4,0 194.6,1.8 203.8,10.6 203.8,10.6 0,10.6 0,12.6 203.8,12.6 203.8,12.6 194.6,21.5 196.4,23.3 207.9,11.6 "></polygon>
                                           </svg>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}


                    </div>
                    <div className={style.home_product_cat_btn}
                         onClick={() => navigate(PRODUCT.replace(':category', 'BronPlyonka'))}
                    >
                        {t('view_all')}
                    </div>


                    <h1 className={style.home_product_category_title}>
                        <span>02</span>
                        {t('title_tanirovka')}
                    </h1>
                    <div className={style.home_product_category_item}>
                        {product?.[0]?.Tanirovka?.slice(0, 6).map((item, index) => {
                            console.log(item);
                            return (
                                <div className={style.home_product_category_product}
                                     onClick={() => navigate(ITEM_PRODUCT.replace(':id', item.id).replace(':category', 'Tanirovka'))}
                                >
                                    <div className={style.home_product_category_product_top}>
                                        <img src={item.title_img} alt=""/>
                                    </div>
                                    <div className={style.home_product_category_product_body}>
                                        <div style={{padding: "15px 10px"}}>
                                            {langStorage === 'en' && <h1>{item.title_en}</h1>}
                                            {langStorage === 'uz' && <h1>{item.title_uz}</h1>}
                                            {langStorage === 'ru' && <h1>{item.title_ru}</h1>}

                                            {langStorage === 'en' && <p>{item.info_en}</p>}
                                            {langStorage === 'ru' && <p>{item.info_ru}</p>}
                                            {langStorage === 'uz' && <p>{item.info_uz}</p>}
                                            <span>
                                            {t('more')}
                                                <svg x="0px" y="0px" viewBox="0 0 207.9 23.4">
                                               <polygon
                                                   points="207.9,11.6 196.4,0 194.6,1.8 203.8,10.6 203.8,10.6 0,10.6 0,12.6 203.8,12.6 203.8,12.6 194.6,21.5 196.4,23.3 207.9,11.6 "></polygon>
                                           </svg>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}


                    </div>
                    <div className={style.home_product_cat_btn}
                         onClick={() => navigate(PRODUCT.replace(':category', 'Tanirovka'))}

                    >
                        {t('view_all')}
                    </div>


                    <h1 className={style.home_product_category_title}>
                        <span>03</span>
                        {t('title_bronPlyonka')}
                    </h1>
                    <div className={style.home_product_category_item}>
                        {product?.[0]?.BronPlyonka2?.slice(0, 6).map((item, index) => {
                            console.log(item);
                            return (
                                <div className={style.home_product_category_product}
                                     onClick={() => navigate(ITEM_PRODUCT.replace(':id', item.id).replace(':category', 'BronPlyonka2'))}>
                                    <div className={style.home_product_category_product_top}>
                                        <img src={item.title_img} alt=""/>
                                    </div>
                                    <div className={style.home_product_category_product_body}>
                                        <div style={{padding: "15px 10px"}}>
                                            {langStorage === 'en' && <h1>{item.title_en}</h1>}
                                            {langStorage === 'uz' && <h1>{item.title_uz}</h1>}
                                            {langStorage === 'ru' && <h1>{item.title_ru}</h1>}

                                            {langStorage === 'en' && <p>{item.info_en}</p>}
                                            {langStorage === 'ru' && <p>{item.info_ru}</p>}
                                            {langStorage === 'uz' && <p>{item.info_uz}</p>}
                                            <span>
                                            {t('more')}
                                                <svg x="0px" y="0px" viewBox="0 0 207.9 23.4">
                                               <polygon
                                                   points="207.9,11.6 196.4,0 194.6,1.8 203.8,10.6 203.8,10.6 0,10.6 0,12.6 203.8,12.6 203.8,12.6 194.6,21.5 196.4,23.3 207.9,11.6 "></polygon>
                                           </svg>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}


                    </div>
                    <div className={style.home_product_cat_btn}
                         onClick={() => navigate(PRODUCT.replace(':category', 'BronPlyonka2'))}
                    >
                        {t('view_all')}
                    </div>


                    <h1 className={style.home_product_category_title}>
                        <span>04</span>
                        {t('title_tanirovka')}
                    </h1>
                    <div className={style.home_product_category_item}>
                        {product?.[0]?.Tanirovka2?.slice(0, 6).map((item, index) => {
                            console.log(item);
                            return (
                                <div className={style.home_product_category_product}
                                     onClick={() => navigate(ITEM_PRODUCT.replace(':id', item.id).replace(':category', 'Tanirovka2'))}>
                                    <div className={style.home_product_category_product_top}>
                                        <img src={item.title_img} alt=""/>
                                    </div>
                                    <div className={style.home_product_category_product_body}>
                                        <div style={{padding: "15px 10px"}}>
                                            {langStorage === 'en' && <h1>{item.title_en}</h1>}
                                            {langStorage === 'uz' && <h1>{item.title_uz}</h1>}
                                            {langStorage === 'ru' && <h1>{item.title_ru}</h1>}

                                            {langStorage === 'en' && <p>{item.info_en}</p>}
                                            {langStorage === 'ru' && <p>{item.info_ru}</p>}
                                            {langStorage === 'uz' && <p>{item.info_uz}</p>}
                                            <span>
                                            {t('more')}
                                                <svg x="0px" y="0px" viewBox="0 0 207.9 23.4">
                                               <polygon
                                                   points="207.9,11.6 196.4,0 194.6,1.8 203.8,10.6 203.8,10.6 0,10.6 0,12.6 203.8,12.6 203.8,12.6 194.6,21.5 196.4,23.3 207.9,11.6 "></polygon>
                                           </svg>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}


                    </div>
                    <div className={style.home_product_cat_btn}
                         onClick={() => navigate(PRODUCT.replace(':category', 'Tanirovka2'))}
                    >
                        {t('view_all')}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
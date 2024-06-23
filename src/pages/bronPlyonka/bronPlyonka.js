import React from 'react';
import {product} from "../../db/db";
import style from './bronPlyonka.module.css'
import Navbar from "../../component/navbar/navbar";
import {Icon} from "../../assets/icons/icon";
import {useTranslation} from "react-i18next";

const BronPlyonka = () => {
    const { t } = useTranslation();
    const langStorage = window.localStorage.getItem('i18nextLng');
    return (
        <div style={{marginBottom: '10vh'}}>
            <Navbar/>
            <div className={style.window_header}>
                <video src={require("../../assets/videos/videoBronPlyonka.mp4")} autoPlay muted loop></video>
                <div className={style.window_header_text}>
                    <h1 style={{textTransform:"uppercase"}}>{t('bronPlyonka.title_bronPlyonka')}</h1>
                    <div className={style.window_header_text_content}>
                        <p>
                            {t("bronPlyonka.info")}
                        </p>
                        <div className={style.window_item_content_btn}>
                            {t('give_samples')}
                        </div>
                    </div>
                </div>
                <div className={style.window_header_shadow}></div>
            </div>
            <div className="container">
                <div className={style.window_box}>
                    {product?.[0]?.BronPlyonka?.map((item) => {
                        return (
                            <div className={style.window_item}>
                                <div className={style.window_item_img}>
                                    <img src={item.title_img} alt=""/>
                                </div>
                                <div className={style.window_item_content}>
                                    <div className={style.window_item_content_title}>
                                        <h1>{item.title_uz}</h1>
                                        <img src={item.part_img} alt="" width={item.party_img_width ? item.party_img_width : '200px'} height={68} style={{objectFit:"cover"}}/>
                                    </div>
                                    <div className={style.window_item_content_box_info}>
                                        {item.box_info.map(({mil, years, healing, tpu}) => {
                                            return (
                                                <div className={style.window_item_content_box_info_item}>
                                                    {mil}
                                                    {healing}
                                                    {tpu}
                                                    {years} {years && <span>  year</span>}

                                                </div>
                                            )
                                        })}
                                    </div>

                                    <div className={style.window_item_content_list}>
                                        <ul>
                                            {langStorage === 'uz' || langStorage === 'uz-UZ'  && item.listRight_uz.map((itemList) => (
                                                <li>
                                                    <Icon.Circle/>
                                                    {itemList}
                                                </li>
                                            ))}
                                            {langStorage === 'ru' || langStorage === 'ru-RU' && item.listRight_ru.map((itemList) => (
                                                <li>
                                                    <Icon.Circle/>
                                                    {itemList}
                                                </li>
                                            ))}
                                            {langStorage === 'en' || langStorage === 'en-EN' && item.listRight_en.map((itemList) => (
                                                <li>
                                                    <Icon.Circle/>
                                                    {itemList}
                                                </li>
                                            ))}
                                        </ul>
                                        <ul>
                                            {langStorage === 'uz' || langStorage === 'uz-UZ'  && item.listLeft_uz.map((itemList) => (
                                                <li>
                                                    <Icon.Circle/>
                                                    {itemList}
                                                </li>
                                            ))}
                                            {langStorage === 'ru' || langStorage === 'ru-RU' && item.listLeft_ru.map((itemList) => (
                                                <li>
                                                    <Icon.Circle/>
                                                    {itemList}
                                                </li>
                                            ))}
                                            {langStorage === 'en' || langStorage === 'en-EN' && item.listLeft_en.map((itemList) => (
                                                <li>
                                                    <Icon.Circle/>
                                                    {itemList}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={style.window_item_content_btn}>
                                        {t('give_samples')}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>


        </div>
    );
};

export default BronPlyonka;
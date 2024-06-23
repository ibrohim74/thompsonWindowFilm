import React, {useEffect, useState} from 'react';
import style from './home.module.css'
import {useTranslation} from "react-i18next";
import useMediaQuery from "@mui/material/useMediaQuery";
import {product} from "../../db/db";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {AUTOMOTIVE_FILM, ITEM_PRODUCT, PRODUCT, WINDOW_FILM} from "../../processes/const";
import Navbar from "../../component/navbar/navbar";
import {EyeOutlined, LockOutlined, SafetyCertificateOutlined} from "@ant-design/icons";
import {Icon} from "../../assets/icons/icon";

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
                    <img src={require("../../assets/img/logo.png")}
                         style={mediaQuery ? {width: '100%'} : {}}
                         className="logo-img"/>
                </div>
            </div>
            <div className="container">
                <section className="advertisers-service-sec ">
                    <div className="section-header text-center">
                        <h2 className="fw-bold fs-1">
                            Шесть
                            <span className="b-class-secondary"> особенностей </span>продукта
                        </h2>
                    </div>
                    <div className="card_box">
                        <div className="col">
                            <div className="service-card">
                                <div className="icon-wrapper">
                                    <SafetyCertificateOutlined />
                                </div>
                                <h3>Himoya</h3>
                                <p>
                                    Zashitniy plyonkalar avtomobilni tashqi ta'sirlardan, shu jumladan chang, kir, zarar
                                    yetkazuvchi moddalar, tosh va boshqa ob'ektlar ta'siridan himoya qiladi.
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="service-card">
                                <div className="icon-wrapper">
                                </div>
                                <h3>Estetik ko'rinish</h3>
                                <p>
                                    Avtomobilnaya plyonkalar avtomobilning tashqi ko'rinishini yaxshilashga yordam
                                    beradi, unga yangi, zamonaviy va chiroyli ko'rinish beradi. Rangli plyonkalar orqali
                                    avtomobilning dizaynini o'zgartirish mumkin.
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="service-card">
                                <div className="icon-wrapper">
                                    <i className="fa-solid fa-chart-line"></i>
                                </div>
                                <h3>UV nuridan himoya</h3>
                                <p>
                                    Plyonkalar avtomobilning bo'yoq qoplamasini ultrabinafsha (UV) nurlaridan himoya
                                    qiladi, natijada bo'yoqning rangini yo'qotishidan saqlaydi va avtomobilning tashqi
                                    ko'rinishini uzoq muddat saqlaydi.
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="service-card">
                                <div className="icon-wrapper">
                                    <i className="fa-solid fa-chart-line"></i>
                                </div>
                                <h3>Ichki qismni himoya qilish:</h3>
                                <p>
                                    Avtomobilnaya plyonkalar oynalarga yopishtirilganda, ichki qismni issiq havo va UV
                                    nurlaridan himoya qiladi, salonda qulay haroratni saqlaydi va ichki bezaklar,
                                    asboblar taxtasi va o'rindiqlarni yorilishdan yoki rangi so'lishdan himoya qiladi
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="service-card">
                                <div className="icon-wrapper">
                                    <i className="fa-solid fa-chart-line"></i>
                                </div>
                                <h3>Tejamkorlik</h3>
                                <p>
                                    Avtomobilnaya va zashitniy plyonkalar avtomobil egalariga ta'mirlash va bo'yash
                                    xarajatlarini kamaytirishga yordam beradi, chunki plyonkalar kichik zararlarni
                                    oldini olish va bartaraf qilishda yordam beradi.
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="service-card">
                                <div className="icon-wrapper">
                                    <i className="fa-solid fa-chart-line"></i>
                                </div>
                                <h3>Maxfiylik</h3>
                                <p> Qoraytirilgan oynalar uchun ishlatiladigan plyonkalar avtomobil ichidagi narsalarni
                                    tashqaridan ko'rinishini kamaytiradi, shu bilan maxfiylikni ta'minlaydi va avtomobil
                                    ichidagi mol-mulkni o'g'irlikdan himoya qiladi.</p>
                            </div>
                        </div>

                    </div>
                </section>


                <div className="projcard-container">

                    <div className="projcard projcard-blue">
                        <div className="projcard-innerbox">
                            <img className="projcard-img" src="https://picsum.photos/800/600?image=1041"/>
                            <div className="projcard-textbox">
                                <div className="projcard-title">Cupping Therapy Sessions</div>
                                <div className="projcard-subtitle">"Unlocking the power of the mind for a brighter, more
                                    fulfilling life."
                                </div>
                                <div className="projcard-bar"></div>
                                <div className="projcard-description">Our cupping therapy sessions are designed to
                                    alleviate muscle tension,
                                    improve blood flow, and promote overall relaxation. Using traditional cupping
                                    techniques, our experienced
                                    practitioners create a soothing and therapeutic experience to help you feel
                                    rejuvenated and revitalized.
                                </div>
                                <div className="projcard-tagbox">
                                    <button><a href="">Contact </a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="projcard projcard-red">
                        <div className="projcard-innerbox">
                            <img className="projcard-img" src="https://picsum.photos/800/600?image=1080"/>
                            <div className="projcard-textbox">
                                <div className="projcard-title">Energy Healing Sessions</div>
                                <div className="projcard-subtitle">"Unlocking the power of the mind for a brighter, more
                                    fulfilling life."
                                </div>
                                <div className="projcard-bar"></div>
                                <div className="projcard-description">Our energy healing sessions focus on balancing the
                                    body's energy centers to
                                    promote physical, emotional, and spiritual well-being. Through gentle touch and
                                    energy manipulation, our
                                    practitioners help restore harmony and vitality to your energy system, leaving you
                                    feeling refreshed and
                                    renewed.
                                </div>
                                <div className="projcard-tagbox">
                                    <button><a href="">Contact </a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="projcard projcard-green">
                        <div className="projcard-innerbox">
                            <img className="projcard-img" src="https://picsum.photos/800/600?image=1039"/>
                            <div className="projcard-textbox">
                                <div className="projcard-title">Guided Meditation</div>
                                <div className="projcard-subtitle">"Unlocking the power of the mind for a brighter, more
                                    fulfilling life."
                                </div>
                                <div className="projcard-bar"></div>
                                <div className="projcard-description">Join us for guided meditation sessions that offer
                                    a peaceful retreat from
                                    the stresses of daily life. Our experienced meditation guides will lead you through
                                    calming visualizations
                                    and breathing exercises to promote relaxation, clarity, and inner peace.
                                </div>
                                <div className="projcard-tagbox">
                                    <button><a href="">Contact </a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="projcard projcard-customcolor">
                        <div className="projcard-innerbox">
                            <img className="projcard-img" src="https://picsum.photos/800/600?image=943"/>
                            <div className="projcard-textbox">
                                <div className="projcard-title">Stress Relief Workshops</div>
                                <div className="projcard-subtitle">"Unlocking the power of the mind for a brighter, more
                                    fulfilling life."
                                </div>
                                <div className="projcard-bar"></div>
                                <div className="projcard-description"> Our stress relief workshops provide practical
                                    tools and techniques for
                                    managing stress and enhancing resilience. From mindfulness practices to holistic
                                    healing modalities, our
                                    workshops empower you to take control of your well-being and find balance in your
                                    life.
                                </div>
                                <div className="projcard-tagbox">
                                    <button><a href="">Contact </a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="projcard projcard-blue">
                        <div className="projcard-innerbox">
                            <img className="projcard-img" src="https://picsum.photos/800/600?image=1041"/>
                            <div className="projcard-textbox">
                                <div className="projcard-title">Spiritual Counseling</div>
                                <div className="projcard-subtitle">"Unlocking the power of the mind for a brighter, more
                                    fulfilling life."
                                </div>
                                <div className="projcard-bar"></div>
                                <div className="projcard-description">Our spiritual counseling services offer a
                                    supportive and non-judgmental
                                    space for exploring your spiritual path and personal growth. Our counselors are
                                    trained to help you navigate
                                    life's challenges and discover your inner wisdom and strength.
                                </div>
                                <div className="projcard-tagbox">
                                    <button><a href="">Contact </a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="projcard projcard-red">
                        <div className="projcard-innerbox">
                            <img className="projcard-img" src="https://picsum.photos/800/600?image=1080"/>
                            <div className="projcard-textbox">
                                <div className="projcard-title">Wellness Retreats</div>
                                <div className="projcard-subtitle">"Unlocking the power of the mind for a brighter, more
                                    fulfilling life."
                                </div>
                                <div className="projcard-bar"></div>
                                <div className="projcard-description">Escape to one of our wellness retreats for a
                                    transformative experience of
                                    healing and self-discovery. Immerse yourself in a nurturing environment surrounded
                                    by nature, where you can
                                    participate in healing practices, meditation, and workshops designed to rejuvenate
                                    your body, mind, and
                                    spirit.
                                </div>
                                <div className="projcard-tagbox">
                                    <button><a href="">Contact </a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
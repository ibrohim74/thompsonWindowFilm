// import React, {useEffect, useState,Suspense} from 'react';
// import style from './home.module.css'
// import {useTranslation} from "react-i18next";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import {product} from "../../db/db";
// import axios from "axios";
// import {Link, useNavigate} from "react-router-dom";
// import {AUTOMOTIVE_FILM, CONTACT, ITEM_PRODUCT, PRODUCT, WINDOW_FILM} from "../../processes/const";
// import Navbar from "../../component/navbar/navbar";
// import {EyeOutlined, LockOutlined, SafetyCertificateOutlined} from "@ant-design/icons";
// import {Icon} from "../../assets/icons/icon";
// import {Canvas} from "@react-three/fiber";
// import {Environment, OrbitControls} from "@react-three/drei";
// import Model from "../Scene";
//
// const Home = () => {
//     const {t} = useTranslation()
//     const mediaQuery = useMediaQuery('(max-width:750px)');
//     const langStorage = window.localStorage.getItem('i18nextLng')
//     const navigate = useNavigate()
//     return (
//         <div className={style.home_content}>
//             <Navbar/>
//             <div className={style.header} id='header'>
//                 <video src={require("../../assets/videos/bg.mp4")} autoPlay muted loop></video>
//                 <div className={style.logo_text}>
//                     <img src={require("../../assets/img/logo.png")}
//                          style={mediaQuery ? {width: '100%'} : {}}
//                          className="logo-img"/>
//                 </div>
//             </div>
//             <div className="container">
//                 <section className="advertisers-service-sec ">
//                     <div className="section-header text-center">
//                         {langStorage === 'ru' || langStorage === "ru-RU" ?
//                             (<h2 className="fw-bold fs-1">
//                                 Шесть
//                                 <span className="b-class-secondary"> особенностей </span>продукта
//                             </h2>) : ''
//                         }
//                         {langStorage === 'en' || langStorage === "en-EN" ?
//                             (<h2 className="fw-bold fs-1">
//                                 Six
//
//                                 <span className="b-class-secondary"> features </span>product
//                             </h2>) : ""
//                         }
//                         {langStorage === 'uz' || langStorage === "uz-UZ" ?
//                             (<h2 className="fw-bold fs-1">
//                                 Mahsulotning olti
//                                 <span className="b-class-secondary"> xususiyati </span>
//                             </h2>) : ""
//                         }
//
//                     </div>
//                     <div className="card_box">
//                         <div className="col">
//                             <div className="service-card">
//                                 <div className="icon-wrapper">
//                                     <SafetyCertificateOutlined style={{
//                                         width: "100%",
//                                         height: "100%",
//                                         display: "flex",
//                                         alignItems: "center",
//                                         justifyContent: "center",
//                                         color: "black"
//                                     }}/>
//                                 </div>
//                                 <h3>{t("homeContent.home_s2_info.s1.title")}</h3>
//                                 <p>
//                                     {t("homeContent.home_s2_info.s1.description")}
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className="service-card">
//                                 <div className="icon-wrapper">
//                                     <Icon.EstetikKorinish/>
//                                 </div>
//                                 <h3>{t("homeContent.home_s2_info.s2.title")}</h3>
//                                 <p>
//                                     {t("homeContent.home_s2_info.s2.description")}
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className="service-card">
//                                 <div className="icon-wrapper">
//                                     <Icon.UvProtect/>
//                                 </div>
//                                 <h3>{t("homeContent.home_s2_info.s3.title")}</h3>
//                                 <p>
//                                     {t("homeContent.home_s2_info.s3.description")}
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className="service-card">
//                                 <div className="icon-wrapper">
//                                     <Icon.SunProtect/>
//                                 </div>
//                                 <h3>{t("homeContent.home_s2_info.s4.title")}</h3>
//                                 <p>
//                                     {t("homeContent.home_s2_info.s4.description")}
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className="service-card">
//                                 <div className="icon-wrapper">
//                                     <Icon.Hand/>
//                                 </div>
//                                 <h3>{t("homeContent.home_s2_info.s5.title")}</h3>
//                                 <p>
//                                     {t("homeContent.home_s2_info.s5.description")}
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className="service-card">
//                                 <div className="icon-wrapper">
//                                     <Icon.Unseen/>
//                                 </div>
//                                 <h3>{t("homeContent.home_s2_info.s6.title")}</h3>
//                                 <p> {t("homeContent.home_s2_info.s6.description")}</p>
//                             </div>
//                         </div>
//
//                     </div>
//                 </section>
//
// <div className="canvasCar">
//     <Canvas style={{
//         width:"100%",
//         height:"200vh"
//     }}>
//         <ambientLight/>
//         <OrbitControls enablePan={false}
//                        enableZoom={false}
//                        enableRotate={true}/>
//         <Suspense fallback={null}>
//             {/*<Car/>*/}
//             <Model/>
//         </Suspense>
//         <Environment preset={"sunset"}/>
//     </Canvas>
// </div>
//
//                 {mediaQuery ? (
//                         <div className={"container"}>
//                                 <div className="info_card">
//                                     <div className="info_card_header">
//                                         <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/XM/10570/1689672872537/front-left-side-47.jpg" alt=""/>
//                                     </div>
//                                     <div className="info_card_text">
//                                         <h1>{t('navContent.protection')}</h1>
//                                         <p>
//                                             {t('homeContent.home_info.bronPlyonka')}
//                                         </p>
//
//                                         <button><Link to={WINDOW_FILM}
//                                                       onClick={() => {
//                                                           window.scrollTo({
//                                                               top: 0,
//                                                               behavior: "smooth"
//                                                           });
//                                                       }}
//                                         >{t('view_all')} </Link></button>
//                                     </div>
//                                 </div>
//                                 <div className="info_card">
//                                     <div className="info_card_header">
//                                         <img src="https://static.euronews.com/articles/stories/08/15/72/20/1200x675_cmsv2_e2a11b79-cec0-546f-ade6-bf9773801b5b-8157220.jpg" alt=""/>
//                                     </div>
//                                     <div className="info_card_text">
//                                         <h1>{t('navContent.automotive')}</h1>
//                                         <p>
//                                             {t('homeContent.home_info.automotive')}
//                                         </p>
//
//                                         <button><Link to={AUTOMOTIVE_FILM}
//                                                       onClick={() => {
//                                                           window.scrollTo({
//                                                               top: 0,
//                                                               behavior: "smooth"
//                                                           });
//                                                       }}
//                                         >{t('view_all')} </Link></button>
//                                     </div>
//                                 </div>
//                                 <div className="info_card">
//                                     <div className="info_card_header">
//                                         <img src="https://c4.wallpaperflare.com/wallpaper/363/947/815/mercedes-benz-mercedes-amg-gt-black-car-car-mercedes-amg-hd-wallpaper-preview.jpg" alt=""/>
//                                     </div>
//                                     <div className="info_card_text">
//                                         <h1>{t('navContent.technology')}</h1>
//                                         <p>
//                                             {t('homeContent.home_info.texnalogiya')}
//                                         </p>
//
//                                         <button>  <Link to={CONTACT}
//                                                         onClick={() => {
//                                                             window.scrollTo({
//                                                                 top: 0,
//                                                                 behavior: "smooth"
//                                                             });
//                                                         }}
//                                         >{t('view_all')} </Link></button>
//                                     </div>
//                                 </div>
//                         </div>
//                     ) :
//                     (
//                         <div className="projcard-container">
//
//                             <div className="projcard projcard-blue">
//                                 <div className="projcard-innerbox">
//                                     <img className="projcard-img" src="https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/XM/10570/1689672872537/front-left-side-47.jpg"/>
//                                     <div className="projcard-textbox">
//                                         <div className="projcard-title">{t('navContent.protection')}</div>
//
//                                         <div className="projcard-bar"></div>
//                                         <div className="projcard-description">
//                                             {t('homeContent.home_info.bronPlyonka')}
//                                         </div>
//                                         <div className="projcard-tagbox">
//                                             <button>
//                                                 <Link to={WINDOW_FILM}
//                                                       onClick={() => {
//                                                           window.scrollTo({
//                                                               top: 0,
//                                                               behavior: "smooth"
//                                                           });
//                                                       }}
//                                                 >{t('view_all')} </Link>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//
//                             <div className="projcard projcard-red">
//                                 <div className="projcard-innerbox">
//                                     <img className="projcard-img" src="https://static.euronews.com/articles/stories/08/15/72/20/1200x675_cmsv2_e2a11b79-cec0-546f-ade6-bf9773801b5b-8157220.jpg"/>
//                                     <div className="projcard-textbox">
//                                         <div className="projcard-title">{t('navContent.automotive')}</div>
//
//                                         <div className="projcard-bar"></div>
//                                         <div className="projcard-description">
//                                             {t('homeContent.home_info.automotive')}
//                                         </div>
//                                         <div className="projcard-tagbox">
//                                             <button>
//                                                 <Link to={AUTOMOTIVE_FILM}
//                                                       onClick={() => {
//                                                           window.scrollTo({
//                                                               top: 0,
//                                                               behavior: "smooth"
//                                                           });
//                                                       }}
//                                                 >{t('view_all')} </Link>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//
//                             <div className="projcard projcard-green">
//                                 <div className="projcard-innerbox">
//                                     <img className="projcard-img" src="https://c4.wallpaperflare.com/wallpaper/363/947/815/mercedes-benz-mercedes-amg-gt-black-car-car-mercedes-amg-hd-wallpaper-preview.jpg"/>
//                                     <div className="projcard-textbox">
//                                         <div className="projcard-title">{t('navContent.technology')}</div>
//
//                                         <div className="projcard-bar"></div>
//                                         <div className="projcard-description">
//                                             {t('homeContent.home_info.texnalogiya')}
//                                         </div>
//                                         <div className="projcard-tagbox">
//                                             <button>
//                                                 <Link to={CONTACT}
//                                                           onClick={() => {
//                                                               window.scrollTo({
//                                                                   top: 0,
//                                                                   behavior: "smooth"
//                                                               });
//                                                           }}
//                                             >{t('view_all')} </Link>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//
//                         </div>
//                     )}
//
//             </div>
//         </div>
//     );
// };
//
// export default Home;




import {useEffect} from 'react'
import {RoundedBox, ScrollControls, Scroll, Environment,Sparkles,Backdrop,Float, Ring} from '@react-three/drei'
import { Robot } from '../../component/Robot';
import baffle from 'baffle'
import {Canvas} from "@react-three/fiber";
import Navbar from "../../component/navbar/navbar";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {AUTOMOTIVE_FILM, TECHNOLOGY, WINDOW_FILM} from "../../processes/const";


function Home() {
    const {t} = useTranslation()
    const navigate= useNavigate()

    useEffect(()=> {

        const target = baffle('#title')
        target.set({
            characters: '░T░h░o░m░p░s░o░n',
            speed: 100
        })
        target.start()
        target.reveal(1000,1000)
    },[])

    return (
        <>
<Navbar/>
            <Canvas shadows className={'canvasHome'}>

                <ambientLight intensity={0.2} />
                <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
                <Environment
                    preset='warehouse'
                />

                <ScrollControls pages={4.5} damping={0.1}>

                    <Robot scale={0.9}/>
                    <Sparkles size={2} color={"#fff"} scale={[10,10,10]}></Sparkles>
                    {/*<Backdrop*/}
                    {/*    receiveShadow*/}
                    {/*    floor={20.5} // Stretches the floor segment, 0.25 by default*/}
                    {/*    segments={100} // Mesh-resolution, 20 by default*/}
                    {/*    scale={[50,30,10]}*/}
                    {/*    position={[4,-10,0]}*/}
                    {/*>*/}
                    {/*    <meshStandardMaterial color="#191919" />*/}
                    {/*</Backdrop>*/}



                    <Scroll>

                    </Scroll>
                    <Scroll html style={{width: '100%'}}>
                        <h1 className='title' id={'title'} style={{ color: '#cdcbca',position: 'absolute', top: `65vh`,left: '50%', fontSize: '13em', transform: `translate(-50%,-50%)` }}>thompson</h1>

                        <div className='row' style={{ position: 'absolute', top: `132vh` , width:'90%'}}>
                            <h2>{t('navContent.protection')}</h2>
                            <p style={{ maxWidth: '400px' }}>{t('homeContent.home_info.bronPlyonka')}</p>
                            <button onClick={()=>{
                                navigate(WINDOW_FILM)
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                })
                            }}>{t('read_more')}</button>
                        </div>

                        <div className='row' style={{ position: 'absolute', top: `230vh` , width:'90%'}}>
                            <div className='col home_automotive' style={{ position: 'absolute', right: `40px`, width: "540px"}}>
                                <h2 style={{ maxWidth: "440px" }}>{t('navContent.automotive')}</h2>
                                <p style={{ maxWidth: '440px' }}>{t('homeContent.home_info.automotive')}</p>
                                <button onClick={()=>{
                                    navigate(AUTOMOTIVE_FILM)
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth"
                                    })
                                }}>{t('read_more')}</button>
                            </div>
                        </div>


                        <div className='row' style={{position: 'absolute', top: '350vh', left: '52%', transform: `translate(-50%,-50%)`}}>
                            <h2> {t('navContent.technology')}</h2>
                            <p style={{ maxWidth: '400px' }}> {t('homeContent.home_info.texnalogiya')}</p>
                            <button
                                onClick={()=>{
                                    navigate(TECHNOLOGY)
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth"
                                    })
                                }}
                            >{t('read_more')}</button>
                        </div>


                        <button style={{ position: 'absolute', top: `590vh`,left: '50%', transform: `translate(-50%,-50%)` }}>Contact</button>
                    </Scroll>
                </ScrollControls>
            </Canvas>
    </>

    );
}

export default Home;

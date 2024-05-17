import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/navigation';
import {product} from "../../db/db";
import style from './tanirovka.module.css'
import './tanirovka.css'
import useMediaQuery from "@mui/material/useMediaQuery";

import {Navigation} from 'swiper/modules';
import Navbar from "../../component/navbar/navbar";

const Tanirovka = () => {
    const mediaQuery = useMediaQuery('(max-width:750px)');

    return (
        <div>
            <Navbar/>
            <div className={style.window_header}>
                <video src={require("../../assets/videos/videoBronPlyonka.mp4")} autoPlay muted loop></video>
                <div className={style.window_header_text}>
                    <h1>KDX Automotive Film</h1>
                    <div className={style.window_header_text_content}>
                        <p>Provide Superior Experience on Both Performance and Quality</p>
                        <div className={style.window_item_content_btn}>
                            Give me samples
                        </div>
                    </div>
                </div>
                <div className={style.window_header_shadow}></div>
            </div>
            <div className="container">
                <div className={style.tanirovka_box}>
                    {product?.[0]?.Tanirovka?.map((item) => {
                        return (
                            <div className={style.tanirovka_item}>
                                <div className={style.tanirovka_content_top}>
                                    <div className={style.tanirovka_content_left}>
                                        <h1>{item.title_uz}</h1>
                                        {mediaQuery && <img
                                            style={{width: "100%", borderRadius: "10px"}}
                                            src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/KWID/10076/1705905595853/front-left-side-47.jpg?impolicy=resize&imwidth=480"
                                            alt=""/>}
                                        <p>{item.info_uz}</p>
                                        <ul>
                                            {item.info_list.map((item) => {
                                                return (<li>
                                                    <img src={require('../../assets/icons/circle.png')} alt=""/>
                                                    {item}

                                                </li>)
                                            })}

                                        </ul>
                                    </div>
                                    {mediaQuery ? "" : <div className={style.tanirovka_content_right}>
                                        <img
                                            src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/KWID/10076/1705905595853/front-left-side-47.jpg?impolicy=resize&imwidth=480"
                                            alt=""/>
                                    </div>}

                                </div>
                                <div className={style.tanirovka_content_bottom}>
                                    {mediaQuery ? (
                                            <Swiper navigation={true} modules={[Navigation]} className={style.swiper_box}>
                                                <SwiperSlide style={{width: '100%'}}>

                                                    <table>
                                                        <thead>
                                                        <tr>
                                                            <th>{item.table.title_name}</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>VLT (%)</td>
                                                            <td>15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>VLR (%)</td>
                                                            <td>6</td>
                                                        </tr>
                                                        <tr>
                                                            <td>UVR (%)</td>
                                                            <td>≥99</td>
                                                        </tr>
                                                        <tr>
                                                            <td>TSER (%)</td>
                                                            <td>69</td>
                                                        </tr>
                                                        <tr>
                                                            <td>IR REJECTION (%)</td>
                                                            <td>79</td>
                                                        </tr>
                                                        <tr>
                                                            <td>IRER REJECTION (%)</td>
                                                            <td>80</td>
                                                        </tr>
                                                        <tr>
                                                            <td>SOLAR A(%)</td>
                                                            <td>46</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>

                                                </SwiperSlide>
                                                <SwiperSlide style={{width: '100%'}}>
                                                    <table>
                                                        <thead>
                                                        <tr>
                                                            <th>King 15</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>VLT (%)</td>
                                                            <td>15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>VLR (%)</td>
                                                            <td>6</td>
                                                        </tr>
                                                        <tr>
                                                            <td>UVR (%)</td>
                                                            <td>≥99</td>
                                                        </tr>
                                                        <tr>
                                                            <td>TSER (%)</td>
                                                            <td>69</td>
                                                        </tr>
                                                        <tr>
                                                            <td>IR REJECTION (%)</td>
                                                            <td>79</td>
                                                        </tr>
                                                        <tr>
                                                            <td>IRER REJECTION (%)</td>
                                                            <td>80</td>
                                                        </tr>
                                                        <tr>
                                                            <td>SOLAR A(%)</td>
                                                            <td>46</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>

                                                </SwiperSlide>
                                                <SwiperSlide style={{width: '100%'}}>
                                                    <table>
                                                        <thead>
                                                        <tr>
                                                            <th>King 15</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>VLT (%)</td>
                                                            <td>15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>VLR (%)</td>
                                                            <td>6</td>
                                                        </tr>
                                                        <tr>
                                                            <td>UVR (%)</td>
                                                            <td>≥99</td>
                                                        </tr>
                                                        <tr>
                                                            <td>TSER (%)</td>
                                                            <td>69</td>
                                                        </tr>
                                                        <tr>
                                                            <td>IR REJECTION (%)</td>
                                                            <td>79</td>
                                                        </tr>
                                                        <tr>
                                                            <td>IRER REJECTION (%)</td>
                                                            <td>80</td>
                                                        </tr>
                                                        <tr>
                                                            <td>SOLAR A(%)</td>
                                                            <td>46</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>

                                                </SwiperSlide>


                                            </Swiper>
                                        ) :
                                        (
                                            <table>
                                                <thead>
                                                <tr>
                                                    <th style={{width:"145px"}}>PRODUCT</th>
                                                    <th>VLT (%)</th>
                                                    <th>VLR (%)</th>
                                                    <th>UVR (%)</th>
                                                    <th>TSER (%)</th>
                                                    <th>IRR(900-1000NM)(%)</th>
                                                    <th>IRER(780-2500NM)(%)</th>
                                                    <th>SOLAR A(%)</th>
                                                    <th>THICKNESS (MIL)</th>
                                                    <th>WARRANTY (YEAR)</th>
                                                </tr>
                                                </thead>

                                                <tbody>

                                                {item.table.products.map((itemTabel) => {
                                                    return (
                                                        <tr >
                                                            <td style={{textTransform:"uppercase", fontWeight:"700" , width:"145px"}}>{itemTabel.product_name}</td>
                                                            <td>{itemTabel.vlt}</td>
                                                            <td>{itemTabel.vlr}</td>
                                                            <td>{itemTabel.uvr}</td>
                                                            <td>{itemTabel.tser}</td>
                                                            <td>{itemTabel.irr}</td>
                                                            <td>{itemTabel.irer}</td>
                                                            <td>{itemTabel.solar}</td>
                                                            <td>{itemTabel.thickness}</td>
                                                            <td>{itemTabel.warrant}</td>
                                                        </tr>
                                                    )
                                                })}


                                                </tbody>
                                            </table>
                                        )
                                    }


                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    );
};

export default Tanirovka;
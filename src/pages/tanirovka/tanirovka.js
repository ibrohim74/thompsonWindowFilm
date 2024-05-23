import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { product } from "../../db/db";
import style from './tanirovka.module.css';
import './tanirovka.css';
import useMediaQuery from "@mui/material/useMediaQuery";
import { Navigation } from 'swiper/modules';
import Navbar from "../../component/navbar/navbar";
import {Icon} from "../../assets/icons/icon";

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
                    {product?.[0]?.Tanirovka?.map((item, index) => (
                        <div className={style.tanirovka_item} key={index}>
                            <div className={style.tanirovka_content_top}>
                                <div className={style.tanirovka_content_left}>
                                    <h1 style={{color:"red"}}>{item.title_uz}</h1>
                                    {mediaQuery && (
                                        <img
                                            style={{ width: "100%", borderRadius: "10px" }}
                                            src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/KWID/10076/1705905595853/front-left-side-47.jpg?impolicy=resize&imwidth=480"
                                            alt=""
                                        />
                                    )}
                                    <p>{item.info_uz}</p>
                                    <ul>
                                        {item.info_list.map((infoItem, infoIndex) => (
                                            <li key={infoIndex}>
                                                <Icon.Circle/>
                                                {infoItem}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {!mediaQuery && (
                                    <div className={style.tanirovka_content_right}>
                                        <img
                                            src={item.title_img}
                                            alt=""
                                        />
                                    </div>
                                )}
                            </div>
                            <div className={style.tanirovka_content_bottom}>
                                {mediaQuery ? (
                                    <Swiper navigation={true} modules={[Navigation]} className={style.swiper_box}>
                                        {item.table.products.map((tableItem, tableIndex) => (
                                            <SwiperSlide key={tableIndex} style={{ width: '100%' }}>
                                                <table>
                                                    <thead>
                                                    <tr> <th>{tableItem.product_name}</th></tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>VLT (%)</td>
                                                        <td>{tableItem.vlt}</td>
                                                    </tr>

                                                    <tr>
                                                        <td>UVR (%)</td>
                                                        <td>{tableItem.uvr}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>TSER (%)</td>
                                                        <td>{tableItem.tser}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>IRR(900-1000NM)(%)</td>
                                                        <td>{tableItem.irr}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>IRER(780-2500NM)(%)</td>
                                                        <td>{tableItem.irer}</td>
                                                    </tr>

                                                    <tr>
                                                        <td>THICKNESS (MIL)</td>
                                                        <td>{tableItem.thickness}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>WARRANTY (YEAR)</td>
                                                        <td>{tableItem.warrant}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                ) : (
                                    <table>
                                        <thead>
                                        <tr>
                                            <th style={{ width: "145px" }}>PRODUCT</th>
                                            <th>VLT (%)</th>

                                            <th>UVR (%)</th>
                                            <th>TSER (%)</th>
                                            <th>IRR(900-1000NM)(%)</th>
                                            <th>IRER(780-2500NM)(%)</th>

                                            <th>THICKNESS (MIL)</th>
                                            <th>WARRANTY (YEAR)</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {item.table.products.map((tableItem, tableIndex) => (
                                            <tr key={tableIndex}>
                                                <td style={{ textTransform: "uppercase", fontWeight: "700", width: "145px" }}>{tableItem.product_name}</td>
                                                <td>{tableItem.vlt}</td>

                                                <td>{tableItem.uvr}</td>
                                                <td>{tableItem.tser}</td>
                                                <td>{tableItem.irr}</td>
                                                <td>{tableItem.irer}</td>

                                                <td>{tableItem.thickness}</td>
                                                <td>{tableItem.warrant}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tanirovka;


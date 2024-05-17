import React from 'react';
import {product} from "../../db/db";
import style from './bronPlyonka.module.css'
import Navbar from "../../component/navbar/navbar";

const BronPlyonka = () => {
    return (
        <div style={{marginBottom: '10vh'}}>
            <Navbar/>
            <div className={style.window_header}>
                <video src={require("../../assets/videos/videoBronPlyonka.mp4")} autoPlay muted loop></video>
                <div className={style.window_header_text}>
                    <h1>KDX LUMI PAINT PROTECTION FILM</h1>
                    <div className={style.window_header_text_content}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi at atque consectetur
                            cumque, debitis distinctio expedita incidunt laboriosam maxime minus, officiis optio quam
                            quos rem sunt, totam voluptatem? Ab at, consectetur cumque ducimus eaque eligendi expedita
                           </p>
                        <div className={style.window_item_content_btn}>
                            Give me samples
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
                                    </div>
                                    <div className={style.window_item_content_box_info}>
                                        {item.box_info.map(({mil , years , healing , tpu})=>{
                                            return(
                                                <div className={style.window_item_content_box_info_item}>
                                                    {mil}
                                                    {mil && <span>mil</span>}
                                                    {healing}
                                                    {tpu}
                                                    {years} {years && <span>year</span>}

                                                </div>
                                            )
                                        })}
                                    </div>

                                    <div className={style.window_item_content_list}>
                                        <ul>
                                            {item.listLeft.map((itemList)=>(
                                                <li>
                                                    <img src={require('../../assets/icons/circle.png')} alt=""/>
                                                    {itemList}</li>
                                            ))}
                                        </ul>
                                        <ul>
                                            {item.listRight.map((itemList)=>(

                                                <li><img src={require('../../assets/icons/circle.png')} alt=""/>
                                                    {itemList}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={style.window_item_content_btn}>
                                        Give me samples
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
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {product} from '../../db/db'
import style from "../home/home.module.css";
import {ITEM_PRODUCT} from "../../processes/const";
import {useTranslation} from "react-i18next";
import './product.css'
import Navbar from "../../component/navbar/navbar";
import {useNavigate} from "react-router-dom";

const Product = () => {
    const {category} = useParams()
    const [data, setData] = useState([])
    const langStorage = window.localStorage.getItem('i18nextLng')
    const {t} = useTranslation()
    const navigate = useNavigate()
    useEffect(() => {
        const categoryData = product.find(cat => cat.hasOwnProperty(category));
        if (categoryData) {
            const categoryItems = categoryData[category];
            setData(categoryItems);
        } else {
            setData([]);
        }
    }, [category])
    console.log(data)
    return (
        <div className={'product_page'}>
            <Navbar/>
            <div className="product_page_title">
                {category === 'BronPlyonka' && <h1>Bron Plyonka</h1>}
                {category === 'Tanirovka' && <h1>Tanirovka</h1>}
                {category === 'BronPlyonka2' && <h1>BronPlyonka2</h1>}
                {category === 'Tanirovka2' && <h1>Tanirovka2</h1>}
            </div>


            <div className="product_page_box">
                {data.map((item, index) => {
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
        </div>
    );
};

export default Product;
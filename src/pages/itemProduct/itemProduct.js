import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import style from './itemProduct.module.css';
import {product} from '../../db/db';
import Navbar from "../../component/navbar/navbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import Opisaniya from "./opisaniya";
import Xaraktristika from "./xaraktristika";
import FormProducts from "../../component/form/formProducts";
import ImgSlider from "../../component/imgSlider/imgSlider";

const ItemProduct = () => {
    const [productData, setProductData] = useState(null);
    const [xaraktristika, setXaraktristika] = useState(false)
    const {id, category} = useParams();
    const mediaQuery = useMediaQuery('(max-width:750px)');

    useEffect(() => {
        const categoryData = product.find(cat => cat.hasOwnProperty(category));
        if (categoryData) {
            const categoryItems = categoryData[category];
            const selectedItem = categoryItems.find(item => item.id.toString() === id);
            setProductData(selectedItem);
        } else {
            setProductData(null);
        }
    }, [id, category]);

    return (
        <>
            <Navbar navStyle={{
                background: 'black',
                marginTop: 10,
                width: '100%',
                position: "relative",
                padding: 10,
                borderRadius: 10
            }}/>
            <div className={`${style.item_product_page} `}>
                <div className={style.item_product_box}>
                    {productData ? (
                        <div key={productData.id} className={style.item_product_item}>
                            <div className={style.item_product_item_header} style={{overflow:"hidden"}}>
                               <ImgSlider/>

                                <div className={`${style.item_product_item_header_text} ${mediaQuery && 'container'}`}>
                                    <h1>{productData.title_en}</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto dicta
                                        eaque fugit hic maiores, natus officia quisquam sunt voluptatum! Accusamus
                                        aliquid, delectus eos error expedita facilis illum, labore magni nostrum sit
                                        vero voluptatem. Accusamus atque aut cum dolorum ducimus eligendi eos ex
                                        expedita fugiat illum incidunt iure laborum nesciunt officiis quaerat saepe sit,
                                        soluta tenetur ut veniam. Aspernatur at consequuntur cupiditate dignissimos
                                        doloribus, earum exercitationem hic illo modi natus nihil nobis praesentium
                                        provident quaerat quia ratione rerum sed soluta suscipit tempora tempore tenetur
                                        vero? Animi commodi consequatur dicta doloribus illo itaque nihil perspiciatis
                                        repellat sapiente, unde, vel vitae voluptatibus!</p>
                                </div>
                            </div>

                            <div className={style.item_product_item_body}>
                                <div className={style.item_product_item_body_tab}>
                                    <div onClick={() => setXaraktristika(false)}
                                         style={xaraktristika ? {background:'transparent'} :{background:"red" , color:"white"}}>Xaraktristika
                                    </div>
                                    <div onClick={() => setXaraktristika(true)}
                                         style={xaraktristika ? {background:'red' , color:"white"} :{background:"transparent"}}
                                    >Opisaniya</div>
                                </div>
                                <div className={style.item_product_item_body_content}>
                                    {xaraktristika ? (<Opisaniya data={productData}/>) : (<Xaraktristika data={productData}/>)}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p>Mahsulot topilmadi</p>
                    )}
                </div>
<FormProducts/>
            </div>
        </>

    );
};

export default ItemProduct;

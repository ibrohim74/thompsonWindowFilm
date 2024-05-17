import React from 'react';
import style from './technology.module.css'
import Navbar from "../../component/navbar/navbar";

const Technology = () => {
    return (
        <div>
            <Navbar/>
            <div className={style.window_header}>
                <video src={require("../../assets/videos/videoBronPlyonka.mp4")} autoPlay muted loop></video>
                <div className={style.window_header_text}>
                    <h1>Technology</h1>
                </div>
                <div className={style.window_header_shadow}></div>
            </div>


            <div className={'container'}>
                <div className={style.technology_box}>
                    <div className={style.technology_box_item}>
                        <h1>First Generation - 1 Ply Dyed Film</h1>
                        <p>It is the product in early stage, and only has hiding function and hardly any thermal
                            insulation and ultraviolet ray insulation functions. The color shall be fully faded after
                            one-year use, the cost is low, and there are such hazardous substances as formaldehyde and
                            benzene in adhesive layer.</p>
                    </div>
                    <div className={style.technology_box_item}>
                        <h1>Second Generation - 2 Ply Chip-Dyed Film</h1>
                        <p>There is no metal coating, dyeing is given on adhesive layer directly, the service life is
                            two years, effects of thermal insulation and ultraviolet ray insulation are limited,
                            definition is not high, and there are plenty of such hazardous substances as formaldehyde
                            and benzene in adhesive layer.</p>
                    </div>
                    <div className={style.technology_box_item}>
                        <h1>Third Generation - Vacuum Aluminum Plating Film</h1>
                        <p>It adopts vacuum thermal evaporation principle and adds metal coating to the base material of
                            film. Moreover, the metal is aluminum as ordinary, and the color is lasting and stable. It
                            can be used for about 5 years, the definition is relative high, and thermal insulation is
                            moderate.</p>
                    </div>
                    <div className={style.technology_box_item}>
                        <h1>Fourth Generation - Nano Ceramic Film</h1>
                        <p>It adopts coating or magnetron sputtering technology to spray nano ceramic particles on base
                            material of film uniformly, and it has reached thermal insulation effect by absorbing heat.
                            The product shall never show colorfastness, quality guarantee period is over 7 years as
                            ordinary, and it has no interference to wireless signal.</p>
                    </div>
                    <div className={style.technology_box_item}>
                        <h1>Fifth Generation - Magnetron Sputtering Metal Film</h1>
                        <p>It adopts electromagnetic induction principle and sprays such precious metal alloy materials
                            as gold, silver, titanium and nickel to high-quality base material uniformly, the definition
                            is better than the vacuum aluminum plating film, thermal insulation is above the average,
                            and it shall show no colorfastness for over 7 years’ use.</p>
                    </div>
                    <div className={style.technology_box_item}>
                        <h1>Sixth Generation - Multi-layer Magnetron Sputtering Metal Film</h1>
                        <p>It adopts electromagnetic induction principle and sprays such precious metal alloy materials
                            as gold, silver, titanium and nickel to high-quality base material for several layers
                            uniformly, the definition is better than the vacuum aluminum plating film, it shall never
                            show colorfastness, and it represents the highest level of thermal insulation film. It
                            possesses features of high definition, high thermal insulation, low light reflection,
                            scratch tolerance and good anti- bursting performance. Those with the most metal sputtering
                            layers are representatives of S70 and SS70 series of KDX, and 11 metal layers shall be
                            sprayed in one time.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technology;
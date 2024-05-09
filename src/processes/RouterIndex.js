import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {RouterData} from "./const";
import Navbar from "../component/navbar/navbar";

const RouterIndex = () => {
    return (
        <>

            <BrowserRouter>
            <Routes>
                {RouterData?.map(({path , Component})=>(
                    <Route path={path} element={Component}/>
                ))}

            </Routes>
        </BrowserRouter>
        </>

    );
};

export default RouterIndex;
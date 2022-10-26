import React from "react";
import{ Routes, Route } from 'react-router-dom'
import Home from "../components/Home";
import Login from "../components/Login";
import Produto from "../components/Produto";
import { RoutesComponente } from "../style/style";

export default function MainRouts(){
    return(
        <RoutesComponente>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/produto' element={<Produto/>}/>
            </Routes>
        </RoutesComponente>
    )
}
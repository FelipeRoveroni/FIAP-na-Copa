import React from "react";
import{ Routes, Route } from 'react-router-dom'
import Home from "../components/Home";
import Login from "../components/Login";
import FigurinhasNac from "../components/FigurinhasNac";
import FigurinhasInt from "../components/FigurinhasInt";
import { RoutesComponente } from "../style/style";

export default function MainRouts(){
    return(
        <RoutesComponente>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/FigurinhasNac' element={<FigurinhasNac/>}/>
                <Route path='/FigurinhasInt' element={<FigurinhasInt/>}/>
            </Routes>
        </RoutesComponente>
    )
}
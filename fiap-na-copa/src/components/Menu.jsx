import React from "react";
import { Link } from "react-router-dom";


export default function Menu(){
    const logout = ()=>{
    sessionStorage.removeItem("usuario-Validado")
    window.location = "/"
    }

    const usuario = sessionStorage.getItem("usuario-validado")

    return(
        <div>
            <ul>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/produto">Produto</Link></li>
                <li><button onClick={logout}>{usuario} logout</button></li>
            </ul>
        </div>
    )
}
import React from "react";
import { Link } from "react-router-dom";
import { MenuComponente} from "../style/style";

export default function Menu(){

    const logout = ()=>{
        sessionStorage.removeItem("usuario-validade");
        window.location = "/";
    }
    const usuario = sessionStorage.getItem("usuario-validado");
    return(
        <MenuComponente>
            <nav>
                <ul>
                    <li>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/FigurinhasNac'>Figurinhas Nacionais</Link>
                    </li>
                    <li>
                        <Link to='FigurinhasInt'>Figurinhas Internacionais</Link>
                    </li>
                    <li>
                        <button onClick={logout}>{usuario} Login</button>
                    </li>
                </ul>
            </nav>
        </MenuComponente>
    )

}
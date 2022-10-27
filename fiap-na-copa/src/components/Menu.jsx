import React from "react";
import { Link } from "react-router-dom";
import { MenuComponente} from "../style/style";

export default function Menu(){
    const usuario = sessionStorage.getItem("usuario-validado");
    return(
        <MenuComponente>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/FigurinhasNac'>Figurinhas Nacionais</Link>
                    </li>
                    <li>
                        <Link to='FigurinhasInt'>Figurinhas Internacionais</Link>
                    </li>
                    <li>
                        <Link to='login'><button>{usuario} Login</button></Link>
                    </li>
                </ul>
            </nav>
        </MenuComponente>
    )

}
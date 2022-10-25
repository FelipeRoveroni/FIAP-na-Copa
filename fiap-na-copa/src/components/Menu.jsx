import React from "react";
import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <div>
            <ul>
                <li>
                    <Link to='/'>Login</Link>
                </li>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/produto'>Produto</Link>
                </li>
                <li>
                    <button>Logout</button>
                </li>
            </ul>
        </div>
    )

}
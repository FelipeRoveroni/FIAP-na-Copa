import React from "react";
import { useState } from "react";

export default function Login(){
    const[usuario, setUsuario] = useState({
        login: "",
        senha: "",
    });

    const handleChange = (e) =>{
        setUsuario({...usuario,[e.target.name]:e.target.value})
    }


    const logar = async () =>{
        e.preventDefault()

        const requestOptions = {
            method : "POST",
            headers: {"Content-Type" : "application/json"},
            body : JSON.stringify(usuario)
        }
 
    const response = await fetch(
        "http://localhost:8080/ControleAcesso/rest/login/", requestOptions
    );

    };

    return(
        <>
            <h1>LOGIN</h1>
            <div>
                <form onSubmit="">
                    <fieldset>
                        <legend>Faca seu Login</legend>
                        <div>
                            <label>Usuario</label>
                            <input type="text" name="login" placeholder="Login" value={usuario.login} onChange={handleChange}/>
                        </div>
                        <div>
                            <label>Senha</label>
                            <input type="password" name="senha" placeholder="Senha" value={usuario.senha} onChange={handleChange}/>
                        </div>
                        <div>
                            <button>Logar</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </>
    )

}
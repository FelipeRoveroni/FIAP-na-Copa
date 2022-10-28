import React from "react";
import { useState } from "react";
import { LoginComponente } from "../style/style";

export default function Login(){
    const[usuario, setUsuario] = useState({
        login: "",
        senha: "",
        nome: '',
        rm: '',
    });

    const handleChange = (e) =>{
        setUsuario({...usuario,[e.target.name]:e.target.value})
    }


    const logar = async (e) =>{
        e.preventDefault()

        const requestOptions = {
            method : "POST",
            headers: {"Content-Type" : "application/json"},
            body : JSON.stringify(usuario)
        }
 
    const response = await fetch(
        "http://localhost:8080/fiap_na_copa/rest/login/", 
        requestOptions
    );

    const data =  await response.json()

    if(data.login){
        sessionStorage.setItem("usuario-validado", data.login)
    }

    if(data){
        window.location = "/home"
    } else{
        window.location = "/"
    }
    };

    return(
        <LoginComponente>
            <h1>Menu Login</h1>
            <div>
                <form onSubmit={logar}>
                    <fieldset>
                        <legend>Seja Bem vindo a Pagina de Login. Utilize o nome e senha fornecidos na API java para entrar </legend>
                        <div>
                            <label>Usuario</label>
                            <input type="text" name="login" placeholder="Login" value={usuario.login} onChange={handleChange}/>
                        </div>
                        <div>
                            <label>Senha</label>
                            <input type="password" name="senha" placeholder="Senha" value={usuario.senha} onChange={handleChange}/>
                        </div>
                        <div>
                            <button type="submit">Logar</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </LoginComponente>
    )

}
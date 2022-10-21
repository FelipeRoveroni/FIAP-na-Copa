import React from "react";
import { useEffect } from "react";

const verificar = sessionStorage.getItem("usuario-validado")

export default function Produto() {
    useEffect(()=>{
    if(verificar == null){
        window.location = "/"
    }
    },[])


    return(
        <>
            {verificar &&(
                <>
                    <h1>Produto</h1>
                </>
            )}
        
        </>
    )
}


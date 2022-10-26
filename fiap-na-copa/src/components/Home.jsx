import React from "react";
import { useEffect } from "react";


export default function Home(){
   const verificar = sessionStorage.getItem("usuario-validado");
   
   useEffect((verificar) =>{
      if(verificar == null){
         window.location = "/";
      }
   }, []);
   
   return(
    <div>
      Home
      <p>Bem vindo usuario : {verificar}</p>
      </div>
   );
    
}
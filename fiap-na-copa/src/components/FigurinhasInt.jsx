import React, { useEffect } from 'react';
import { TituloComponente } from '../style/style';

export default function FigurinhasInt() {
  const verificar = sessionStorage.getItem("usuario-validado")

    useEffect(()=>{
        if (verificar == null) {
            window.location = '/'
        }
    })
  
  
  
  return (
    <>
      <TituloComponente>Figurinhas Internacionais</TituloComponente>
    </>
  )
}

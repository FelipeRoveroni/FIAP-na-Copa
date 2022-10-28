import React, { useEffect } from 'react';
import { TituloComponente } from '../style/style';
import Neymar from '../img/Neymar.jpg';
import Thiago_Silva from '../img/Thiago_Silva.jpg';
import Richarlison from '../img/Richarlison.jpg';
import Raphinha from '../img/Raphinha.jpg';
import marquinhos from '../img/marquinhos.jpg';
import Fabinho from '../img/Fabinho.jpg';
import Eder_Miltao from '../img/Eder_Miltao.jpg';
import Antony from '../img/Antony.jpg';
import Alex_Sandro from '../img/Alex_Sandro.jpg';
import Alisson from '../img/Alisson.jpg';
import Vini_junior from '../img/Vini_junior.jpg';

export default function FigurinhasNac() {
  // const verificar = sessionStorage.getItem("usuario-validado")

  //   useEffect(()=>{
  //       if (verificar == null) {
  //           window.location = '/'
  //       }
  //   })
  return (
    <div>
      <TituloComponente>Figurinhas Nacionais</TituloComponente>
        <img src={Neymar}/>
        <img src={Vini_junior}/>
        <img src={Alisson}/>
        <img src={Alex_Sandro}/>
        <img src={Antony}/>
        <img src={Eder_Miltao}/>
        <img src={Fabinho}/>
        <img src={marquinhos}/>
        <img src={Thiago_Silva}/>
        <img src={Richarlison}/>
        <img src={Raphinha}/>

    </div>
  )
}

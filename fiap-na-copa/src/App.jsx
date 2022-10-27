import React from "react";
import Menu from "./components/Menu";
import MainRouts from "./routes/MainRoutes";
import { AppComponente } from "./style/style";
import Rodape from "./components/Rodape";
import './App.css'


export default function App() {
    return(
      <>
        <AppComponente>
          <h1>FIAP na COPA</h1>
          <Menu/>
          </AppComponente>
        <MainRouts/>
        <Rodape/>
      </>
    );
}
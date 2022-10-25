import React from "react";
import Menu from "./components/Menu";
import MainRouts from "./routes/MainRoutes";


export default function App() {
    return(
      <>
        <h1>CONTROLE ACESSO</h1>
        <Menu/>
        <MainRouts/>
      </>
    );
}
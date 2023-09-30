"use client";
// import { useEffect } from "react";
import api from "../../api/requests";

import styles from "./AgendarConsulta.module.css";
import Calendario from "./Calendario";
import CardAgendarConsulta from "./Card";
import Filtros from "./Filtros";
import NavegacaoPagina from "./NavegacaoPagina";

function AgendarConsultas() {
  const testRequest = async () => {
    console.log("cheguei");
    const response = await api.get("/practitioner");
    console.log('passei do método')
    console.log(response.data)
    
  };
//   useEffect(() => {
//     // console.log('Entrei no effect fora do teste')
//     fetch('').then(
//     testRequest());

//   }, []);
  testRequest();

  return (
    <div className={styles.corpo}>
      <div className={styles.container}>
        <div className={styles.side}>
          <Calendario />
          <Filtros />
        </div>
        <div className={styles.main}>
          <CardAgendarConsulta />
          <CardAgendarConsulta />
          <CardAgendarConsulta />
          <CardAgendarConsulta />
          <CardAgendarConsulta />
          <CardAgendarConsulta />
        </div>
      </div>
      <NavegacaoPagina />
    </div>
  );
}

export default AgendarConsultas;

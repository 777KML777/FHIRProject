"use client";
import { useState, useEffect } from "react";
import api from "../../api/requests";

import styles from "./AgendarConsulta.module.css";
import Calendario from "./Calendario";
import CardAgendarConsulta from "./Card";
import Filtros from "./Filtros";
import NavegacaoPagina from "./NavegacaoPagina";

function AgendarConsultas() {

  const [doutores, setDoutores] = useState([]);

  const loadPractitioner = async () => {
    console.log("cheguei");
    const response = await api.get("/practitioner"); // Aqui ele retorna o lstDoutor já mapeado do FHIR. 
    console.log('passei do método')
    // console.log(response.data)
    setDoutores(response.data);
    console.log(doutores)

  };

  useEffect(() => {

    loadPractitioner();

  }, []);

  console.log(doutores);

  return (
    <div className={styles.corpo}>
      <div className={styles.container}>
        <div className={styles.side}>
          <Calendario />
          <Filtros />
        </div>
        <div className={styles.main}>
          {doutores.map(doutor =>
            <CardAgendarConsulta
              props={doutor}
            />
          )}
        </div>
      </div>
      <NavegacaoPagina />
    </div>
  );
}

export default AgendarConsultas;
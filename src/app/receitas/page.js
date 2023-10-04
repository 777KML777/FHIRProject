"use client";
import { useEffect, useState } from "react";
import Receita from "../components/Receitas/Receita";
import api from "../api/requests";
import DadosBeneficiario from "../components/DadosBeneficiario/DadosBeneficiario";
import styles from "./receitas.module.css"

import "../database/mock";

export default function () {
  const [receitas, setReceitas] = useState([]);

  const pegarReceitas = async () => {
    const response = await api.get("/receitas");
    setReceitas(response);
  };

  useEffect(() => {
    pegarReceitas();
  }, []);

  return (
    <>
      <div className={styles.body}>
        <DadosBeneficiario />
        <div>
          <Receita props={receitas?.data} />
        </div>
      </div>
    </>
  );
}

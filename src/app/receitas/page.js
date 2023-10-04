"use client";
import { useEffect, useState } from "react";
import Receita from "../components/Receitas/Receita";
import api from "../api/requests";
import DadosBeneficiario from "../components/DadosBeneficiario/DadosBeneficiario";

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
      <DadosBeneficiario />
      <div>
        <Receita props={receitas?.data} />
      </div>
    </>
  );
}

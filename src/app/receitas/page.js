"use client";
import { useEffect, useState } from "react";
import Receitas from "../components/Receitas/Tabela";
import api from "../api/requests";
import DadosBeneficiario from "../components/DadosBeneficiario/DadosBeneficiario";
import "./receitas.css";
import Cabecario from "../components/Receitas/Cabecario";

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
      <div className="body">
        <div className="container">
          <div className="cabecalho">
            <Cabecario />
          </div>
          <div className="body">
            <DadosBeneficiario />
            <div>
              <Receitas props={receitas?.data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

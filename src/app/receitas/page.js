"use client";
import { useEffect, useState } from "react";
import Receitas from "../components/Receitas/Tabela";
import api from "../api/requests";
import DadosBeneficiario from "../components/DadosBeneficiario/DadosBeneficiario";
import "./receitas.css";
import Cabecario from "../components/Receitas/Cabecario";
import Filtrar from "../components/Agenda/tarefas/filtrar";
import Ordenar from "../components/Agenda/tarefas/ordenar";
import Pesquisa from "../components/Agenda/tarefas/pesquisa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "../database/mock";

export default function () {
  const [receitas, setReceitas] = useState([]);

  const pegarReceitas = async () => {
    const response = await api.get("/receitas");
    setReceitas(response.data);
  };

  useEffect(() => {
    pegarReceitas();
  }, []);

  const [valorPesquisa, setValorPesquisa] = useState("");

  /* Filtro Pesquisa */
  const pesquisa = (valor) => {
    let novaLista = []
    setValorPesquisa(valor.toLowerCase())
    novaLista = receitas?.map((e) => {
      const nomeArquivo = e.arquivo.toLowerCase()

      if (nomeArquivo.includes(valor.toLowerCase())) {
        return e
      }
      console.log(novaLista)
    }) 
    /* setReceitas(novaLista) */
  }

  return (
    <>
      <div className="body">
        <div className="container">
          <div className="cabecalho">
            <Cabecario />
          </div>
          <div className="body">
            <DadosBeneficiario />

            <div className="legenda">
              <div className="documentos">
                Documentos
              </div>
              <FontAwesomeIcon className="chevron_icon" icon={faChevronRight} />
              <div className="receitas">
                Receitas
              </div>
            </div>
            <div className="filtro">
              <Pesquisa />

            <div className="filtro">
              <Pesquisa
                pesquisa={pesquisa}
              />

              <Ordenar />
              <Filtrar />
            </div>
            <div>
              <Receitas props={receitas} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

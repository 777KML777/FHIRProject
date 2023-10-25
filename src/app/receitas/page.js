"use client";
import { useEffect, useState } from "react";
import Receitas from "../components/Receitas/Tabela";
import api from "../api/requests";
import DadosBeneficiario from "../components/Receitas/DadosBeneficiario";
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
        novaLista.push(e)
      } else{
        pegarReceitas()
      }
    }) 
    setReceitas(novaLista)
    console.log(receitas)
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
              <Ordenar />
              <Filtrar />
            </div>
            <div>
              <Receitas props={receitas?.data} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

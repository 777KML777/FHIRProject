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
  const [listaReceitas, setListaReceitas] = useState([])
  const [valorPesquisa, setValorPesquisa] = useState("");
  const opcoes = ["arquivo", "codigo", "doutor", "area", "dataDeEmissao", "dataDeValidade"]

  const pegarReceitas = async () => {
    const response = await api.get("/receitas");
    setReceitas(response.data);
    setListaReceitas(response.data);
  };

  useEffect(() => {
    if (receitas.length === 0) {
      pegarReceitas();
      console.log("BBB")
    }
    console.log("AAAA")
  }, [listaReceitas]);

  /* Filtro Pesquisa */
  function pesquisa(valor) {
    setValorPesquisa(valor.toLowerCase())
    const novaLista = receitas?.filter((e) => {
      if (e.arquivo.toLowerCase().includes(valor.toLowerCase())) {
        return e
      }
      else if (e.codigo.includes(valor)) {
        return e
      }
      else if (e.doutor.toLowerCase().includes(valor.toLowerCase())) {
        return e
      }
      else if (e.area.toLowerCase().includes(valor.toLowerCase())) {
        return e
      }
    })

    setListaReceitas(novaLista)
  }

  /* Ordenar Receitas */
  function ordenarReceitas(valor) {

    /* Ordenar por Codigo */
    const listaOrdenada = listaReceitas.toSorted((a, b) => {
      switch (valor) {
        case 'arquivo':
          if (a.arquivo.toLowerCase() < b.arquivo.toLowerCase()) {
            return -1;
          }
          return 0;
          break;
        case 'codigo':
          if (a.codigo.toLowerCase() < b.codigo.toLowerCase()) {
            return -1;
          }
          return 0;
          break;
        case 'doutor':
          if (a.doutor.toLowerCase() < b.doutor.toLowerCase()) {
            return -1;
          }
          return 0;
          break;
        case 'area':
          if (a.area.toLowerCase() < b.area.toLowerCase()) {
            return -1;
          }
          return 0;
          break;
        case 'dataDeEmissao':
          let dtEmiss1 = a.dataDeEmissao.split(".")
          let dtEmiss2 = b.dataDeEmissao.split(".")
          let dataEmiss1 = new Date(dtEmiss1[2] + "/" + dtEmiss1[1] + "/" + dtEmiss1[0])
          let dataEmiss2 = new Date(dtEmiss2[2] + "/" + dtEmiss2[1] + "/" + dtEmiss2[0])
          if (dataEmiss1 < dataEmiss2) {
            return -1;
          }
          return 0;
          break;
        case 'dataDeValidade':
          let dtValid1 = a.dataDeValidade.split(".")
          let dtdtValid2 = b.dataDeValidade.split(".")
          let datadtValid1 = new Date(dtValid1[2] + "/" + dtValid1[1] + "/" + dtValid1[0])
          let datadtValid2 = new Date(dtdtValid2[2] + "/" + dtdtValid2[1] + "/" + dtdtValid2[0])
          if (datadtValid1 < datadtValid2) {
            return -1;
          }
          return 0;
          break;
      }
    })
    setListaReceitas(listaOrdenada)
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
              <Pesquisa
                pesquisa={pesquisa}
              />
              <Ordenar
                props={opcoes}
                ordenarReceitas={ordenarReceitas}
              />
            </div>
            <div>
              <Receitas props={listaReceitas} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

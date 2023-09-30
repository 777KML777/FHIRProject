// Posso tentar usar o fetch.then e não puxar nada no fetch somente setar o setReceitas mesmo

// Posso tentar criar um método e chamar ele antes do return

"use client";
import { useEffect, useState } from "react";
import Receita from "../components/Receitas/Receita";
import api from "../api/requests";

import ButtonComponent from "../components/ButtonComponent/ButtonComponent";

import "../database/mock";

// import Receitas from "../database/mock"

export default function() {
  const [receitas, setReceitas] = useState([]);

  // const param = {receitas: receitas.data}

  const pegarReceitas = async () => {
    const response = await api.get("/receitas");
    setReceitas(response)
 
  };

  

  // var dados = '';
  //   // Defina um efeito que será executado quando o componente for montado
    useEffect(() => {
      // Função para buscar dados da API (substitua pela sua lógica real)
      // const fetchData = async () => {
      //   try {
          // const response = await api.get("/receitas");
          // // const response = await pegarReceitas();
        fetch('')
        .then(pegarReceitas())
          // setReceitas(response?.data)
          
          // console.log(data)
          
        // } catch (error) {
        //   console.error('Erro ao buscar dados:', error);
        // }
      // };
  
      // // Chame a função para buscar dados da API
      // fetchData();
    }, []);

    // console.log(receitas.data)
    // console.log('acima data? abaixo props')
    // console.log(propsParam.receitas)

  return (
    <>
      <div>
        <Receita props={receitas?.data} />
        {/* <ButtonComponent /> */}
        <button onClick={pegarReceitas}>Clique-me</button>;
      </div>
    </>
  );
}
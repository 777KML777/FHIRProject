"use client";
import { useEffect, useState } from "react";
import Receita from "../components/Receitas/Receita";
import api from "../api/requests";

import "../database/mock";

export default function () {
  const [receitas, setReceitas] = useState([]);

  const pegarReceitas = async () => {
    const response = await api.get("/receitas");
    setReceitas(response)

  };

  useEffect(() => {
    pegarReceitas();

  }, []);

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
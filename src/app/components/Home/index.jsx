"use client";
import { useState, useEffect } from "react";
import api from "../../api/requests";

import styles from "./home.module.css";
import HeroSection from "./HeroSection";
import NossosProfissionais from "./NossosProfissionais";
import SubHero from "./SubHero";
import FormularioHome from "./FormularioHome";
import Footer from "../Footer";

export default function Home() {
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
    <>
      <main className={styles.main_home}>
        <HeroSection/>
        <NossosProfissionais 
          props={doutores}
        />
        <SubHero/>
        <FormularioHome/>
      </main>
    </>
  )
}
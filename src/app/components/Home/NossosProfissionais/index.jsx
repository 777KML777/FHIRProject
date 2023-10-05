import { useState } from "react";
import styles from "./nossosProfissionais.module.css";

export default function NossosProfissionais(props) {
  let index = 0;
  const [doutorSelecionado, setDoutorSelecionado] = useState(0);

  const trocarDoutor = (param) => {
    index = param; 
    setDoutorSelecionado(index);
    console.log(index);
  }
  console.log('estou no componente nossos profissionais')
  console.log(props)
  
  return (
    <>
       <section className={styles.profissionais}>
          <div className={styles.profissionais_icones}>
            <div className={styles.texto_introdutorio}>
              <h1>Nossos Profissionais</h1>
              <p>Conheça nossa equipe de especialistas em saúde mental prontos para ajudar você a cuidar da sua mente e emoções.</p>
            </div>
            
            <div className={styles.doutores_foto}>  
              <div className={styles.icone_doc}><button onClick={() => trocarDoutor(2)}><img src="https://i.imgur.com/bqXHIGw.png" alt="Doutor" /></button></div>
              <div className={styles.icone_doc}><img src="https://i.imgur.com/J6ro0aF.png" alt="Doutor" /></div>
              <div className={styles.icone_doc}><img src="https://i.imgur.com/m2eOQCF.png" alt="Doutor" /></div>
              <div className={styles.icone_doc}><img src="https://i.imgur.com/8HWCd4j.png" alt="Doutor" /></div>
              <div className={styles.icone_doc}><img src="https://i.imgur.com/GsWwFgf.png" alt="Doutor" /></div>
              <div className={styles.icone_doc}><img src="https://i.imgur.com/squCHoa.png" alt="Doutor" /></div>
            </div>
          </div>
          <div className={styles.profissional_selecionado}>
              <div className={styles.img_profissional}></div>
              <div className={styles.sobre_profissional}>
                <h1>{props.props[doutorSelecionado]?.nome}</h1>
                <p>A minha missão é promover o bem-estar emocional 
                  e mental dos meus clientes. Através de terapia 
                  personalizada, ofereço um espaço seguro para 
                  explorar pensamentos, emoções e desafios, 
                  auxiliando no desenvolvimento de habilidades de 
                  enfrentamento saudáveis e no alcance de uma vida 
                  mais equilibrada e feliz.</p>
              </div>
            </div>
        </section>

      <p></p>
    </>
  );
}
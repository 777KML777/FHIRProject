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
              <button className={styles.icone_doc}  onClick={() => trocarDoutor(0)}><img src={props.props[0]?.descricao.code.coding[0]?.system} alt="Doutor" /></button>
              <button className={styles.icone_doc}  onClick={() => trocarDoutor(1)}><img src={props.props[1]?.descricao.code.coding[0]?.system} alt="Doutor" /></button>
              <button className={styles.icone_doc}  onClick={() => trocarDoutor(2)}><img src={props.props[2]?.descricao.code.coding[0]?.system} alt="Doutor" /></button>
              <button className={styles.icone_doc}  onClick={() => trocarDoutor(3)}><img src={props.props[3]?.descricao.code.coding[0]?.system} alt="Doutor" /></button>
              <button className={styles.icone_doc}  onClick={() => trocarDoutor(4)}><img src={props.props[4]?.descricao.code.coding[0]?.system} alt="Doutor" /></button>
              <button className={styles.icone_doc}  onClick={() => trocarDoutor(5)}><img src={props.props[5]?.descricao.code.coding[0]?.system} alt="Doutor" /></button>
            </div>
          </div>
          <div className={styles.profissional_selecionado}>
              <div className={styles.img_profissional}><img src={props.props[doutorSelecionado]?.descricao.code.coding[0].system} alt="Doutor (a)" /></div>
              <div className={styles.sobre_profissional}>
                <h1>{props.props[doutorSelecionado]?.nome}</h1>
                <p>{props.props[doutorSelecionado]?.descricao.code.text}</p>
              </div>
            </div>
        </section>

      <p></p>
    </>
  );
}
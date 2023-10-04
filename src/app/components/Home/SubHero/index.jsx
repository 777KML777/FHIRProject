import styles from "./SubHero.module.css";

export default function SubHero() {
  return (
    <>
        <section className={styles.sub_hero_section}>
            <div className={styles.programas_auto_cuidado}>
                <h1>Programas de Auto Cuidado</h1>
                <p>Explore nosso Programa de Autocuidado, um espaço 
                    dedicado ao seu bem-estar emocional e mental. Aqui, 
                    oferecemos uma série de recursos e orientações para 
                    ajudá-lo a enfrentar desafios comuns, como ansiedade, 
                    estresse, depressão e burnout. Além disso, você tem a 
                    oportunidade única de agendar consultas com 
                    profissionais de psicologia altamente qualificados, que 
                    estão prontos para fornecer suporte personalizado e 
                    orientação especializada para o seu autocuidado.</p>
                <button>Clique Aqui!</button>
            </div>
            
            <img src="https://i.imgur.com/u2hxwBl.png" alt="Imagem" />
        </section>
    </>
  );
}
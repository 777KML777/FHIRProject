import styles from "./home.module.css";
import HeroSection from "./HeroSection";

export default function Home() {
  return (
    <>
      <main className={styles.main_home}>
        <HeroSection/>

        <section className={styles.profissionais}>
          <div className={styles.profissionais_icones}>
            <div className={styles.texto_introdutorio}>
              <h1>Nossos Profissionais</h1>
              <p>Conheça nossa equipe de especialistas em saúde mental prontos para ajudar você a cuidar da sua mente e emoções.</p>
            </div>
            
            <div className={styles.doutores_foto}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className={styles.profissional_selecionado}>
              <div className={styles.img_profissional}></div>
              <h1>Gabriela</h1>
              <p>A minha missão é promover o bem-estar emocional 
                e mental dos meus clientes. Através de terapia 
                personalizada, ofereço um espaço seguro para 
                explorar pensamentos, emoções e desafios, 
                auxiliando no desenvolvimento de habilidades de 
                enfrentamento saudáveis e no alcance de uma vida 
                mais equilibrada e feliz.</p>
            </div>

        </section>
      </main>
    </>
  )
}
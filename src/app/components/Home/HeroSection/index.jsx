import styles from "./heroSection.module.css";

export default function HeroSection() {
  return (
    <>
      <section className={styles.hero_sectio}>
        <p>
          <span>Grupo MindCare:</span> Terapia online com os melhores
          profissionais
        </p>
        <button>Consulte agora!</button>
      </section>

      <p></p>
    </>
  );
}

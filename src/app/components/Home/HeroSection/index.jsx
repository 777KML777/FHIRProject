import Link from "next/link";
import styles from "./heroSection.module.css";

export default function HeroSection() {
  return (
    <>
      <section className={styles.hero_sectio}>
        <p>
          <span>Grupo MindCare:</span> Terapia online com os melhores
          profissionais
        </p>
        <Link href={"./login"} className={styles.botao}>Consulte agora!</Link>
      </section>
    </>
  );
}

import styles from "./home.module.css";
import HeroSection from "./HeroSection";
import NossosProfissionais from "./NossosProfissionais";
import SubHero from "./SubHero";
import FormularioHome from "./FormularioHome";

export default function Home() {
  return (
    <>
      <main className={styles.main_home}>
        <HeroSection/>
        <NossosProfissionais/>
        <SubHero/>
        <FormularioHome/>
      </main>
    </>
  )
}
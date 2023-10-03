import styles from "./home.module.css";
import HeroSection from "./HeroSection";
import NossosProfissionais from "./NossosProfissionais";

export default function Home() {
  return (
    <>
      <main className={styles.main_home}>
        <HeroSection/>
        <NossosProfissionais/>
       
      </main>
    </>
  )
}
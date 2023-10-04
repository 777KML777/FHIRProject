import styles from "./footer.module.css";

export default function Footer() {
  return (
    <>
        <footer className={styles.footer}>
          <div>
            <img src="https://i.imgur.com/H4kj5R3.png" alt="MindCare" />
            <div className={styles.nav_footer_container}>
              <div className={styles.nav_footer}>
                <h2>Profissionais</h2>
                <a href="#">Trabalhe conosco</a>
                <a href="#">Home Profissional</a>
                <a href="#">Eventos</a>
              </div>

              <div className={styles.nav_footer}>
                <h2>Empresa</h2>
                <a href="#">Sobre nós</a>
                <a href="#">Contatos</a>
                <a href="#">História</a>
              </div>

              <div className={styles.nav_footer}>
                <button>Cadastre-se</button>
                <button>Conecte-se</button>
              </div>
            </div>
          </div>
          <div className={styles.medias_container}>
            <p>© MindCare. 2023.</p>
            <div>
              <p>Follow us:</p>
              <a href="#">
                <img src="https://i.imgur.com/RE8fwM0.png" alt="tiktok" />
              </a>
              <a href="#">
                <img src="https://i.imgur.com/SrRVPfv.png" alt="twitter" />
              </a>
              <a href="#">
                <img src="https://i.imgur.com/qs4PfEM.png" alt="facebook" />
              </a>
            </div>
          </div>
        </footer>
    </>
  );
}
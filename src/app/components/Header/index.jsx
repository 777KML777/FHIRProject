import styles from "./header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.menu}>

        <div className={styles.header}>

          <div className={styles.logo}>
            <div className={styles.logo_img} />
            <p>MindCare</p>
          </div>

          <div className={styles.navigation_header}>
            <a href="#" className={styles.text_item_header}>Programas de auto cuidado</a>
            <a href="#" className={styles.text_item_header}>Agendar Consulta</a>
            <a href="#" className={styles.text_item_header}>Agenda</a>
            <a href="#" className={styles.text_item_header}>Receitas</a>
          </div>

          <div className={styles.icon_img}>

          </div>

        </div>
      </div>
    </>
  )
}
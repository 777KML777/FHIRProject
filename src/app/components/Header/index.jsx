import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.menu}>

        <div className={styles.header}>

          <div className={styles.logo}>
            <div className={styles.logo_img} />
            <Link href="./">MindCare</Link>
          </div>

          <div className={styles.navigation_header}>
            <Link href="./programas" className={styles.text_item_header}>Programas de auto cuidado</Link>
            <Link href="./consultas" className={styles.text_item_header}>Agendar Consulta</Link>
            <Link href="./agendas" className={styles.text_item_header}>Agenda</Link>
            <Link href="./receitas" className={styles.text_item_header}>Receitas</Link>
          </div>

          <div className={styles.icon_img}>

          </div>

        </div>
      </div>
    </>
  )
}
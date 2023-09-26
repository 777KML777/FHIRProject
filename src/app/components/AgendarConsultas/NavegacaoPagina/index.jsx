import styles from './NavegacaoPagina.module.css'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavegacaoPagina() {
    return (
        <div className={styles.container}>
            <FontAwesomeIcon icon={faChevronLeft} className={styles.icone} />
            <div className={styles.pagina_atual}>1</div>
            <div className={styles.pagina}>2</div>
            <div className={styles.pagina}>3</div>
            <div className={styles.continuacao}>...</div>
            <div className={styles.pagina}>15</div>
            <FontAwesomeIcon icon={faChevronRight} className={styles.icone} />
        </div>
    )
}

export default NavegacaoPagina
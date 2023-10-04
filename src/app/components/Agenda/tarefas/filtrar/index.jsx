import styles from './filtrar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'


function Filtrar() {
    return (
        <>
            <div className={styles.container}>
                <FontAwesomeIcon icon={faFilter} className={styles.icone} />
                <p>Filtrar</p>
            </div>
        </>
    )
}

export default Filtrar
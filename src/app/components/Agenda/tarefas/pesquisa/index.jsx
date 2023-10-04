import styles from './pesquisa.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Pesquisa() {
    return (
        <>
            <div className={styles.container}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icone}/>
                <input type="search" placeholder='Pesquisar Tarefa' />
            </div>
        </>
    )
}

export default Pesquisa
import styles from './ordenar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons'

function Ordenar() {
    return (
        <>
            <div className={styles.container}>
                <FontAwesomeIcon icon={faArrowUpWideShort} className={styles.icone}/>
                <select name="ordenar" id="ordenar" >
                    <option value="ordenar">Ordenar</option>
                    <option value="data">Data</option>
                    <option value="alfabetica">Alfábetica</option>
                    <option value="horario">Horário</option>
                </select>
            </div>
        </>
    )
}

export default Ordenar
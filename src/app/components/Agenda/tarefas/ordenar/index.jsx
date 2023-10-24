import styles from './ordenar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons'

function Ordenar() {
    return (
        <>
            <label className={styles.container} for='ordenar'>
                <FontAwesomeIcon icon={faArrowUpWideShort} className={styles.icone}/>
                <select name="ordenar" id="ordenar" >
                    <option value="ordenar">Ordenar</option>
                    <option value="data">Data</option>
                    <option value="alfabetica">Alfábetica</option>
                    <option value="horario">Horário</option>
                </select>
            </label>
        </>
    )
}

export default Ordenar
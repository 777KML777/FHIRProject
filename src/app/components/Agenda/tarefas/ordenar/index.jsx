import styles from './ordenar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons'

function Ordenar({props, ordenarReceitas}) {
    return (
        <>
            <label className={styles.container} for='ordenar'>
                <FontAwesomeIcon icon={faArrowUpWideShort} className={styles.icone}/>
                <select name="ordenar" id="ordenar" onChange={e=>ordenarReceitas(e.target.value)} >
                    <option value="ordenar">Ordenar</option>
                    {props.map(e => {
                        return <option key={e} value={e}>{e}</option>
                    })}
                </select>
            </label>
        </>
    )
}

export default Ordenar
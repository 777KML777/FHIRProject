import FiltroItem from './FiltroItem'
import styles from './Filtros.module.css'
import filtros from './filtros.json'

function Filtros() {

    return (
        <div className={styles.container}>
            <div className={styles.titulo}>Filtrar</div>
            <FiltroItem filtros={filtros}/>
        </div>
    )
}

export default Filtros
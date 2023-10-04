import styles from './estados.module.css'
import Estado from './estado'
import listaEstados from './estados.json'

function Estados() {

    return (
        <>
            <div className={styles.container}>
                <Estado listaEstados={listaEstados} />
            </div>
        </>
    )
}

export default Estados
import styles from './AgendarConsulta.module.css'
import Calendario from './Calendario'
import CardAgendarConsulta from './Card'
import Filtros from './Filtros'
import NavegacaoPagina from './NavegacaoPagina'

function AgendarConsultas() {
    return (
        <div className={styles.corpo}>
            <div className={styles.container}>
                <div className={styles.side}>
                    <Calendario />
                    <Filtros />
                </div>
                <div className={styles.main}>
                    <CardAgendarConsulta />
                    <CardAgendarConsulta />
                    <CardAgendarConsulta />
                    <CardAgendarConsulta />
                    <CardAgendarConsulta />
                    <CardAgendarConsulta />
                </div>
            </div>
            <NavegacaoPagina />
        </div>
    )
}

export default AgendarConsultas
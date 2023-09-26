import styles from './AgendarConsulta.module.css'
import Calendario from './Calendario'
import CardAgendarConsulta from './Card'
import Filtros from './Filtros'
import NavegacaoPagina from './NavegacaoPagina'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'

function AgendarConsultas() {
    return (

        <div className={styles.corpo}>
            <div className={styles.container}>
                <div className={styles.side}>
                    <Calendario />
                    <Filtros />
                </div>
                <div className={styles.main}>
                    <div class={styles.filtro_btn} onclick="sideShow()" data-filtro-btn>
                        <FontAwesomeIcon icon={faSliders} className={styles.icone} />
                        <p>Filtros</p>
                    </div>
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
import styles from './Calendario.module.css'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Calendario() {
    return (
        <div className={styles.container}>
            <div className={styles.data}>
                <FontAwesomeIcon icon={faChevronLeft} className={styles.icone} />
                <p className={styles.data_atual}>14 Julho 2023</p>
                <FontAwesomeIcon icon={faChevronRight} className={styles.icone} />
            </div>
            <div className={styles.calendario}>
                <div className={styles.datas}>
                    <div className={styles.dias_semana}>
                        <p className={styles.dia_semana}>SEG</p>
                        <p className={styles.dia_mes}>1</p>
                        <p className={styles.dia_mes}>8</p>
                        <p className={styles.dia_mes}>15</p>
                        <p className={styles.dia_mes}>22</p>
                        <p className={styles.dia_mes}>29</p>
                    </div>
                    <div className={styles.dias_semana}>
                        <p className={styles.dia_semana}>TER</p>
                        <p className={styles.dia_mes}>2</p>
                        <p className={styles.dia_mes}>9</p>
                        <p className={styles.dia_mes}>16</p>
                        <p className={styles.dia_mes}>23</p>
                        <p className={styles.dia_mes}>30</p>
                    </div>
                    <div className={styles.dias_semana}>
                        <p className={styles.dia_semana}>QUA</p>
                        <p className={styles.dia_mes}>3</p>
                        <p className={styles.dia_mes}>10</p>
                        <p className={styles.dia_mes}>17</p>
                        <p className={styles.dia_mes}>24</p>
                        <p className={styles.dia_mes}>31</p>
                    </div>
                    <div className={styles.dias_semana}>
                        <p className={styles.dia_semana}>QUI</p>
                        <p className={styles.dia_mes}>4</p>
                        <p className={styles.dia_mes}>11</p>
                        <p className={styles.dia_mes}>18</p>
                        <p className={styles.dia_mes}>25</p>
                        <p className={styles.dia_mes_outro}>1</p>
                    </div>
                    <div className={styles.dias_semana}>
                        <p className={styles.dia_semana}>SEX</p>
                        <p className={styles.dia_mes}>5</p>
                        <p className={styles.dia_mes}>12</p>
                        <p className={styles.dia_mes}>19</p>
                        <p className={styles.dia_mes}>26</p>
                        <p className={styles.dia_mes_outro}>2</p>
                    </div>
                    <div className={styles.dias_semana}>
                        <p className={styles.dia_semana}>SAB</p>
                        <p className={styles.dia_mes}>6</p>
                        <p className={styles.dia_mes}>13</p>
                        <p className={styles.dia_mes}>20</p>
                        <p className={styles.dia_mes}>27</p>
                        <p className={styles.dia_mes_outro}>3</p>
                    </div>
                    <div className={styles.dias_semana}>
                        <p className={styles.dia_semana}>DOM</p>
                        <p className={styles.dia_mes}>7</p>
                        <p className={styles.dia_mes}>14</p>
                        <p className={styles.dia_mes}>21</p>
                        <p className={styles.dia_mes}>28</p>
                        <p className={styles.dia_mes_outro}>4</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calendario
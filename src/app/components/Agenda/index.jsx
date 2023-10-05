import styles from './agenda.module.css'
import Estados from './estados'
import Categorias from './categorias'
import Consultas from './consultas'
import Calendario from '../AgendarConsultas/Calendario'
import Tarefas from './tarefas'

function Agenda() {
    return (
        <>
            <div className={styles.corpo}>
                <div className={styles.container}>
                    <div className={styles.side}>
                        <Calendario />
                        <Categorias />
                        <Consultas />
                    </div>
                    <div className={styles.main}>
                        <Estados />
                        <Tarefas />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Agenda
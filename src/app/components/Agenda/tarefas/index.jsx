import styles from './tarefas.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableList, faTableCells, faCircle, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import Pesquisa from './pesquisa'
import Ordenar from './ordenar'
import Filtrar from './filtrar'
import ItemTarefa from './itemTarefa'

function Tarefas() {
    const opcoes = ["nome", "data", "hora"]
    return (
        <>
            <div className={styles.container}>
                <div className={styles.cabecario}>
                    <div className={styles.exibicoes}>
                        <div>
                            <FontAwesomeIcon icon={faTableList} className={styles.icone} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faTableCells} className={styles.icone} />
                        </div>
                    </div>
                    <div className={styles.filtros}>
                        <Pesquisa />
                        <Ordenar
                            props={opcoes}
                        />
                    </div>
                    <div className={styles.nova_tarefa}>+ Nova Tarefa</div>
                </div>
                <div className={styles.corpo}>
                    <ItemTarefa />
                </div>
            </div>
        </>
    )
}

export default Tarefas
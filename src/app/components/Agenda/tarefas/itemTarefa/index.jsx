import styles from './itemTarefa.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import item from './itemTarefa.json'

function ItemTarefa() {
    return (
        <>
            {
                item.map((tarefa) => {
                    return (
                        <div className={styles.item} key={tarefa.nome}>
                            <p className={styles.data}> <span>{tarefa.dia}</span> {tarefa.mes}, {tarefa.semana}</p>
                            <div className={styles.horario}>
                                <FontAwesomeIcon icon={faCircle} className={styles.categoria}/>
                                <p>{tarefa.horaInicial} - {tarefa.horaFinal}</p>
                            </div>
                            <p className={styles.nome}>{tarefa.nome}</p>
                            <FontAwesomeIcon icon={faEllipsisVertical} className={styles.opcoes} />
                        </div>
                    )
                })
            }
        </>
    )
}

export default ItemTarefa
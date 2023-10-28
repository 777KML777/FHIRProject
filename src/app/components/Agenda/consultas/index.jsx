import styles from './consultas.module.css'
import consultas from './consultas.json'

function Consultas() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.consultas}>
                    <h3>Consultas</h3>
                    {consultas.map((item) => {
                        return (
                            <div className={styles.consulta}>
                                <div className={styles.data}>
                                    <p className={styles.dia}>{item.dia}</p>
                                    <p className={styles.semana}>{item.semana}</p>
                                </div>
                                <div className={styles.informacoes}>
                                    <p className={styles.nome}>{item.nome}</p>
                                    <p className={styles.horario}>{item.horarios}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                    <button className={styles.botao}>Agendar Consulta +</button>
            </div>
        </>
    )
}

export default Consultas
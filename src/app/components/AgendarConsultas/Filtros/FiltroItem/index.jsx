import styles from './FiltroItem.module.css'

function FiltroItem({ filtros }) {
    return (
        <>
            {filtros.map((filtro) => {
                return (

                    <div className={styles.container} key={filtro.categoria}>
                        <div className={styles.titulo}>{filtro.categoria}</div>
                        <div className={styles.opcoes}>
                            {filtro.tipo === "checkbox" ?
                                filtro.opcoes.map((opcao) => {
                                    return (
                                        <div className={styles.opcao} key={opcao}>
                                            <input type="checkbox" name={opcao} id={opcao} />
                                            <label for={opcao}>{opcao}</label>
                                        </div>
                                    )
                                })
                                : ""}
                            {filtro.tipo === "texto" ?
                                    <input type="text" placeholder={filtro.placeholder} className={styles.pesquisa} />
                                : ""}
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default FiltroItem
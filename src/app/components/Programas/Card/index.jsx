import styles from "./Card.module.css"
import card from "./card.json"

function Card() {
    return (
        <>
            {card.map((dados) => {
                return (
                    <div className={styles.container}>
                        <img src={dados.tumb} alt="" className={styles.tumb} />
                        <p className={styles.numero}>#{dados.numero}</p>
                        <div className={styles.descricao}>
                            <img className={styles.perfil} src={dados.perfil} alt={dados.profissional} />
                            <div className={styles.detalhes}>
                                <p className={styles.aula}>{dados.aula}</p>
                                <p className={styles.profissional}>{dados.profissional}</p>
                                <div className={styles.tags}>
                                    {dados.tags.map((tag) => {
                                        return (
                                                <p className={styles.tag}>{tag}</p>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Card
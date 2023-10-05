import styles from './Bota.module.css'
import botoes from './botoes.json'

function Botao() {
    return (
        <>
            {
                botoes.map((tag) => {
                    return (
                        <p className={styles.botao}>{tag}</p>
                    )
                }
                )
            }
        </>
    )
}

export default Botao
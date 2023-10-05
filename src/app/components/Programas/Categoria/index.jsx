import styles from './Categoria.module.css'
import Card from '../Card'
import categoria from './categoria.json'

function CategoriaProgramas() {
    return (
        <>
            {categoria.map((categoria) => {
                return (
                    <div className={styles.container}>
                        <h2 className={styles.nome_categoria}>{categoria.categoria} <span>{categoria.destaque}</span></h2>
                        <div className={styles.lista}>
                            <Card />
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default CategoriaProgramas
import styles from './categorias.module.css'
import categorias from './categorias.json'

function Categorias() {

    return (
        <>
            <div className={styles.container}>
                <h3>Categoria</h3>
                <div className={styles.categorias}>
                    {categorias.map((item) => {
                        return (
                            <div className={styles.categoria_item}>
                                <input type="checkbox" name={item.categoria} id={item.categoria}/>
                                <label for={item.categoria}>{item.categoria} </label>
                            </div>
                        )
                    })}
                </div>
                <button className={styles.botao}>Nova Categoria</button>
            </div>
        </>
    )
}

export default Categorias
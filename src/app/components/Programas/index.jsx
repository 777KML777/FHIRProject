import styles from './Programas.module.css'
import Botao from './Botao'
import Card from './Card'
import CategoriaProgramas from './Categoria'

function Programas() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>

                    <div className={styles.tags}>
                        <Botao />
                    </div>
                    <div className={styles.categoria}>
                        <CategoriaProgramas />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Programas
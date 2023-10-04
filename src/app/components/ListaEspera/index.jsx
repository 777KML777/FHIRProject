import styles from './listaEspera.module.css'
import Cabecario from "./Cabecario"
import Campo from './Campo'
import FooterForm from './Footer'

function ListaEsperaForm() {
    return (
        <>
            <div className={styles.conteudo}>
                <form className={styles.container}>
                    <Cabecario />
                    <Campo />
                    <FooterForm />
                </form>
            </div>
        </>
    )
}

export default ListaEsperaForm
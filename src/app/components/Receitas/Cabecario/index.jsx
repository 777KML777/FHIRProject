import styles from './Cabecario.module.css'

function Cabecario() {
    return (
        <>
            <div className={styles.container}>
                <img src="https://imgur.com/b1gIKlQ" alt="Klebao" className={styles.foto}/>
                <div className={styles.textos}>
                    <p className={styles.nome}>Kleber Martins Figueredo</p>
                    <p className={styles.dados}>Veja seus dados cadastrados e documentos</p>
                </div>
            </div>
        </>
    )
}

export default Cabecario
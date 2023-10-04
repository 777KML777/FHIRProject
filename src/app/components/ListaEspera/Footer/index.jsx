import styles from './Footer.module.css'

function FooterForm() {
    return (
        <>
            <div className={styles.container}>
                <input type="submit" value="Enviar Respostas" className={styles.submit} />
                <input type="reset" value="Limpar Formulário" className={styles.reset} />
            </div>
        </>
    )
}

export default FooterForm
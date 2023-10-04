import styles from "./formulario.module.css";

export default function formularioHome() {
  return (
    <>

        <div className={styles.texto}> 
            <div className={styles.texto1}><p>Cadastre-se e usufrua do MindCare</p></div>
            <div className={styles.texto2}><p>Faça o seu cadastro agora mesmo, de forma rápida e fácil, para ter acesso ao MindCare</p></div>
        </div>
      
        <section className={styles.formulario}>
            <div className={styles.forms}>
                <form action="#">
                    <div className={styles.form_header}>
                        <h2 className={styles.titulo}>
                        Cadastre-se gratuitamente!
                        </h2>
                    </div>
                    <div className={styles.input_group}>
                        <div className={styles.nome}>
                            <div className={styles.input_box}>
                                <input id="first-name" type="text" name="first-name" placeholder="Primeiro Nome" required/>
                            </div>
                            <div className={styles.input_box}>
                                <input id="second-name" type="text" name="second-name" placeholder="Segundo Nome" required/>
                            </div>
                        </div>
                        <div className={styles.input_box}>
                            <input id="email" type="email" name="email" placeholder="E-mail" required/>
                        </div>
                        <div className={styles.input_box}>
                            <input id="password" type="password" name="password" placeholder="Senha" required/>
                        </div>
                        <div className={styles.cadastro_button}>
                            <button>Cadastre-se!</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </>
  );
}
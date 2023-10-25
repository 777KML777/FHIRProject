import styles from './Campo.module.css'
import campos from './campos.json'

function Campo() {
    return (
        <>
            {campos.map((campo) => {
                return (
                    <div className={styles.container} key={campo.categoria}>
                        <label name={campo.categoria} for={campo.categoria} >{campo.categoria}</label>
                        {
                            campo.tipo === "checkbox"
                                ?
                                campo.opcoes.map((opcao) => {
                                    return (
                                        <div className={styles.checkbox} key={opcao}>
                                            <input type="checkbox" name={opcao} id={opcao} required />
                                            <label for={opcao}>{opcao}</label>
                                        </div>
                                    )
                                })
                                :
                                campo.tipo === "tel"
                                    ?
                                    <input type={campo.tipo} name={campo.categoria} id={campo.categoria} placeholder={campo.placeholder}
                                        pattern="[0-9]{2} [0-9]{5}-[0-9]{4}" required />
                                    :
                                    campo.tipo === "number"
                                        ?
                                        <input type={campo.tipo} name={campo.categoria} id={campo.categoria} placeholder={campo.placeholder} min='0' max='100' required />
                                        :
                                        <input type="text" name={campo.categoria} id={campo.categoria} placeholder={campo.placeholder} />

                        }

                    </div >
                )
            })}
        </>
    )
}

export default Campo
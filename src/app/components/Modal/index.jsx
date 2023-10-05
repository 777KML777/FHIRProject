import styles from './Modal.module.css'
import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

/*             
Botao para exibir o modal
<button type="button" onClick={() => setAtivo("True")}>True</button>
            
Botao para esconder o modal
<button type="button" onClick={() => setAtivo("False")}>False</button> 
*/

function Modal({ classe, children }) {
    const [ativo, setAtivo] = useState("")

    
    console.log(classe)
    useEffect(() => {
        if (classe == "True") {
            setAtivo(styles.ativo)
        } else if (classe == "False") {
            setAtivo(styles.desativado)
        }
    }, [classe]);

    return (
        <>
            <div className={styles.background + " " + ativo}>
                <div className={styles.modal} >
                    <div className={styles.header}>
                        <FontAwesomeIcon icon={faXmark} className={styles.icone} onClick={() => setAtivo(styles.desativado)} />
                    </div>
                    <div className={styles.main}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )

}

export default Modal
"use client";
import { useEffect, useState } from "react";


import styles from './estado.module.css'
import { icon, library, findIconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faWeightScale, faFaceMeh, faComments, faBrain } from '@fortawesome/free-solid-svg-icons'
import Ordenar from '../../tarefas/ordenar'

library.add(fas)
library.add(faWeightScale, faFaceMeh, faComments, faBrain)


function Estado({ listaEstados }) {
    
    function criarInput(tipo) {
        if (tipo.tipo == "number") {
            return (
                <>
                    <div className={styles.input_box}>
                        <input type="number" min="0" max="300" name={tipo.nome} />
                        <span className={styles.prefix}>{tipo.prefix}</span>
                    </div>
                </>
            )
        } else if (tipo.tipo == "opcao") {
            return (
                <Ordenar />
            )
        }
    }

    return (
        <>
            {
                listaEstados.map((estados) => {
                    const icone = findIconDefinition({ prefix: 'fas', iconName: estados.icone })
                    const i = icon(icone)

                    return (
                        <div className={styles.container} key={estados.nome}>
                            <p className={styles.nome}>{estados.nome}</p>
                            <div className={styles.container_estado}>
                                <div className={styles.icone}>
                                    <FontAwesomeIcon icon={i} size="2x" />
                                </div>
                            </div>
                            {
                                criarInput(estados)
                            }
                            {/*  <p className={styles.resultado}>{estados.resultados}<span>{estados.prefix}</span></p> */}
                        </div>
                    )
                })
            }
        </>
    )
}

export default Estado
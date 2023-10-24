"use client"
import styles from "./CampoBeneficiario.module.css";

import { useState } from 'react';

export default function CampoBeneficiario(props ) {
    

    function aoDigitado(e){
        props.aoAlterado(e.target.value)
        e.target.size = e.target.value.length
    }

    return (
        <>
            <div className={styles.dado}>
                <label className={styles.nome} for={props.nome}>{props.titulo}</label>
                <input type="text" value={props.valor} className={styles.campo} name={props.nome} id={props.nome} onChange={aoDigitado} disabled={props.desabilitado} size={props.valor.length} required maxlength="100"/>
            </div>
        </>
    )
}
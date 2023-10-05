"use client";
import styles from './agenda.module.css'

import React from 'react';
import { useState } from 'react';

import Estados from './estados'
import Categorias from './categorias'
import Consultas from './consultas'
import Calendario from '../AgendarConsultas/Calendario'
import Tarefas from './tarefas'
import Modal from '../Modal'

function Agenda() {
    const [ativo, setAtivo] = useState("True")
    
    console.log(Categorias)
    return (
        <>
           
            <div className={styles.container}>
                <div className={styles.side}>
                    <Calendario />
                    <Categorias />
                    <Consultas />
                </div>
                <div className={styles.main}>
                    <Estados />
                    <Tarefas />
                </div>
            </div>
            <Modal classe={ativo} tela={Categorias}>
                <Categorias /> 
                {/* Substitua Categorias, pelo componente que será exibido no modal */}
            </Modal>
        </>
    )
}

export default Agenda
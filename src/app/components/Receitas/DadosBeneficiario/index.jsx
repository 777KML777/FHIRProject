import styles from "./DadosBeneficiario.module.css";

import CampoBeneficiario from "./CampoBeneficiario";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

import { useState, useEffect } from 'react';
import BotaoBeneficiario from "./BotaoBeneficiario";

export default function DadosBeneficiario() {

    const [cpf, setCpf] = useState("000.000.000-00")
    const [nome, setNome] = useState("Kleber Martins Figueredo")
    const [dtNsc, setDtNsc] = useState("00/00/0000")
    const [matricula, setMatricula] = useState("00000000")
    const [responsavel, setResponsavel] = useState("Fulano De Fulano De Fulan")
    const [endereco, setEndereco] = useState("Rua Chica da Silva 222, Universitário, Itaúna, MG - 35681-150")
    const [telefone, setTelefone] = useState("(xx) xxxx-xxx")
    const [email, setEmail] = useState("FulanoFulanoFulano@Gmail.com")

    const [disabled, setDisabled] = useState(true)

    function toggleDisabled() {
        setDisabled(!disabled)
    }

    return (
        <>
            <section className={styles.dados_beneficiario}>
                <div className={styles.titulo}>
                    <h2>Dados do Beneficiário{disabled}</h2>
                </div>
                <div className={styles.dados}>
                    <CampoBeneficiario
                        titulo="CPF"
                        nome="cpf"
                        valor={cpf}
                        aoAlterado={valor => setCpf(valor)}
                        desabilitado={true}
                    />
                    <CampoBeneficiario
                        titulo="Nome"
                        nome="nome"
                        valor={nome}
                        aoAlterado={valor => setNome(valor)}
                        desabilitado={disabled}
                    />
                    <CampoBeneficiario
                        titulo="Data de Nascimento"
                        nome="dtNsc"
                        valor={dtNsc}
                        aoAlterado={valor => setDtNsc(valor)}
                        desabilitado={true}
                    />
                    <CampoBeneficiario
                        titulo="Matrícula"
                        nome="matricula"
                        valor={matricula}
                        aoAlterado={valor => setMatricula(valor)}
                        desabilitado={true}
                    />
                    <CampoBeneficiario
                        titulo="Nome do Responsével"
                        nome="responsavel"
                        valor={responsavel}
                        aoAlterado={valor => setResponsavel(valor)}
                        desabilitado={disabled}
                    />
                    <CampoBeneficiario
                        titulo="Endereço"
                        nome="endereco"
                        valor={endereco}
                        aoAlterado={valor => setEndereco(valor)}
                        desabilitado={disabled}
                    />
                    <CampoBeneficiario
                        titulo="Telefone"
                        nome="telefone"
                        valor={telefone}
                        aoAlterado={valor => setTelefone(valor)}
                        desabilitado={disabled}
                    />
                    <CampoBeneficiario
                        titulo="E-mail"
                        nome="email"
                        valor={email}
                        aoAlterado={valor => setEmail(valor)}
                        desabilitado={true}
                    />

                </div>
                <div className={styles.buttons_dados}>
                    <BotaoBeneficiario
                        titulo="ALTERAR DADOS CADASTRADOS"
                        Class={styles.alt_dados_cad}
                        onToggle={toggleDisabled}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} className={styles.icone} />
                    </BotaoBeneficiario>
                    <BotaoBeneficiario
                        titulo="DELETAR CADASTRO"
                        Class={styles.del_cadastro}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} className={styles.icone} />
                    </BotaoBeneficiario>
                </div>
            </section>
        </>
    );
}
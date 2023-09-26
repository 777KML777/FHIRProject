import styles from './CardAgendarConsulta.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Avaliacoes from './Avaliacoes'

function CardAgendarConsulta() {
    return (
        <div className={styles.container}>
            <div className={styles.cabecalho}>
                <div className={styles.foto}></div>
                <div className={styles.perfil}>
                    <div className={styles.nome_medico}>Dra. Ana Clara</div>
                    <div className={styles.endereco}> <FontAwesomeIcon icon={faLocationDot} className={styles.icone_endereco} /> São Paulo - SP</div>
                    <div className={styles.disponibilidade}>Disponível</div>
                </div>
                <Avaliacoes />
            </div>
            <div className={styles.descricao}>
                <div className={styles.descricao_titulo}>DESCRIÇÃO</div>
                <div className={styles.descricao_conteudo}>A minha missão é promover o bem-estar emocional e mental dos meus clientes. Através de terapia personalizada, ofereço um espaço seguro para explorar pensamentos, emoções e desafios.</div>
                <div className={styles.especialidades}>
                    <div className={styles.especialidades_titulo}>ESPECIALIDADES</div>
                    <ul className={styles.especialidades_lista}>
                        <li className={styles.especialidades_servico}>Psicologia</li>
                        <li className={styles.especialidades_servico}>Psiquiatria</li>
                    </ul>
                </div>
            </div>
            <div className={styles.botao}>Agendar Consulta</div>
        </div>
    )
}

export default CardAgendarConsulta
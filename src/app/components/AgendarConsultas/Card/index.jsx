import styles from './CardAgendarConsulta.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Avaliacoes from './Avaliacoes'

function CardAgendarConsulta(props) {

    console.log('Entrei no card')
    console.log(props.props)
    
    return (
        <div className={styles.container}>
            <div className={styles.cabecalho}>
                <div className={styles.foto}><img  src={props.props.descricao.code.coding[0]?.system} alt="" /></div>
                <div className={styles.perfil}>
                    <div className={styles.nome_medico}>Dra. {props.props.nome}</div>
                    <div className={styles.endereco}> <FontAwesomeIcon icon={faLocationDot} className={styles.icone_endereco} /> {props.props.endereco.cidade} - {props.props.endereco.estado}</div>
                    <div className={styles.disponibilidade}>Disponível</div>
                </div>
                <Avaliacoes />
            </div>
            <div className={styles.descricao}>
                <div className={styles.descricao_titulo}>DESCRIÇÃO</div>
                <div className={styles.descricao_conteudo}>{props.props.descricao.code.text}</div>
                <div className={styles.especialidades}>
                    <div className={styles.especialidades_titulo}>ESPECIALIDADES</div>
                    <ul className={styles.especialidades_lista}>
                        <li className={styles.especialidades_servico}>{props.props.descricao.qualificacoes}</li>
                        <li className={styles.especialidades_servico}>Psiquiatria</li>
                    </ul>
                </div>
            </div>
            <div className={styles.botao}>Agendar Consulta</div>
        </div>
    )
}

export default CardAgendarConsulta
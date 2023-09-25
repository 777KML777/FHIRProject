import './receita.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faDownload, faFolder } from '@fortawesome/free-solid-svg-icons'

export default function Receita({props}) {
    return (
        <>
            <div className='container-table'>
                <table>
                    <caption>Documentos <FontAwesomeIcon className='chevron_icon' icon={faChevronRight} /> Receitas</caption>
                    <thead>
                        <tr>
                            <th>Arquivo</th>
                            <th>Código</th>
                            <th>Doutor (a)</th>
                            <th>Area</th>
                            <th>Data De Emissão</th>
                            <th>Data De Validade</th>
                        </tr>
                    </thead>

                    {/* Acredito que isso aqui poderia ser facilmente outro componente */}
                    <tbody>
                        {props.receitas.map((receita) => (
                            <tr key={receita.id}>

                                <td
                                >
                                    <FontAwesomeIcon className='folder_icon' icon={faFolder} />
                                    {receita.arquivo}
                                </td>
                                <td>{receita.codigo}</td>
                                <td>{receita.doutor}</td>
                                <td>{receita.area}</td>
                                <td>{receita.dataDeEmissao}</td>
                                <td
                                >
                                    <div className='last_column'>
                                        {receita.dataDeValidade}
                                        <FontAwesomeIcon className='download_icon' icon={faDownload} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

// TODO LIST
// Tirar as grades da tabela 
// Tamanho e estilo da fonte
// Arredondar a borda da tabela
// Trabalhar com datas melhores 
// Quais são as ações que esse componente tem que ter
// Componentizar o componente tabela. Está tendo códigos repetidos
// Ver como estiliza ícone na página de hospedagem da Elizabeth
// Estruturar melhor o json para manipulação
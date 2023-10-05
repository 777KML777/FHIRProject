import styles from "./tabela.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faDownload,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";


export default function Receita(props) {
  return (
    <>
      <div className={styles.container_table}>
        <table className={styles.tabela}>
          <caption className={styles.legenda}>
            Documentos
            <FontAwesomeIcon className={styles.chevron_icon} icon={faChevronRight} />
            Receitas
          </caption>
          <thead>
            <tr className={styles.tabela_linha}>
              <th>Arquivo</th>
              <th>Código</th>
              <th>Doutor (a)</th>
              <th>Area</th>
              <th>Data De Emissão</th>
              <th>Data De Validade</th>
            </tr>
          </thead>

          <tbody>
            {props.props?.map((receita) => (
              <tr key={receita.id} className={styles.tabela_linha}>
                <td className={styles.tabela_data}>
                  <FontAwesomeIcon className={styles.folder_icon} icon={faFolder} />
                  {receita.arquivo}
                </td>
                <td className={styles.tabela_data}>{receita.codigo}</td>
                <td className={styles.tabela_data}>{receita.doutor}</td>
                <td className={styles.tabela_data}>{receita.area}</td>
                <td className={styles.tabela_data}>{receita.dataDeEmissao}</td>
                <td className={styles.tabela_data}>
                  <div className={styles.last_column}>
                    {receita.dataDeValidade}
                    <FontAwesomeIcon
                      className={styles.download_icon}
                      icon={faDownload}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
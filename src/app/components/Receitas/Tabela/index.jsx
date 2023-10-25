import styles from "./tabela.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faDownload,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";


export default function Receita(props) {
  /* console.log(JSON.stringify(props)) */
  return (
    <>
      <div className={styles.container_table}>
        <table className={styles.tabela}>
          <caption className={styles.legenda}>
            <div className={styles.subtitle}>
              <div className={styles.documentos}>
                Documentos
              </div>
              <FontAwesomeIcon className={styles.chevron_icon} icon={faChevronRight} />
              <div className={styles.receitas}>
                Receitas
              </div>
            </div>
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
            {props.props?.map((receita) => {
              if (receita != []) {
              /*   return (
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
                ) */
              }
            }
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
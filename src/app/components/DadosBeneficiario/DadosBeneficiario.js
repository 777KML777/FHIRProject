import "./dadosbeneficiario.css"; /* Não esquecer de importar o CSS do seu componente */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons'

// Trocar para o nome do seu componente
export default function DadosBeneficiario() {
  return (
    <>
      {/* Aqui você irá colocar o seu código HTML para usar em qualquer página */}
      
      <section className="dados-beneficiario">
        <div className="titulo">
          <h2>Dados do Beneficiário</h2>
        </div>     
        <div className="dados">
          <div className="cpf">
            <p>CPF</p>
            <p>000.000.000-00</p>
          </div>
          <div className="nome">
            <p>Nome</p>
            <p>Kleber Martins Figueredo</p>
          </div>
          <div className="data-nasc">
            <p>Data de Nascimento</p>
            <p>00/00/0000</p>           
          </div>
          <div className="matricula">
            <p>Matrícula</p>
            <p>000000000</p>
          </div>
          <div className="nome-resp">
            <p>Nome do Responsével</p>
            <p>Fulano De Fulano De Fulano</p>          
          </div>
          <div className="endereco">
            <p>Endereço</p>
            <p>Rua Chica da Silva 222, Universitário, Itaúna, MG - 35681-150 </p>           
          </div>
          <div className="telefone">
            <p>Telefone</p>
            <p>(xx) xxxx-xxxx</p>          
          </div>
          <div className="email">
            <p>E-mail</p>
            <p>FulanoFulanoFulano@Gmail.com</p>          
          </div>
        </div>
        <div className="buttons-dados">
          <button className="alt-dados-cad">ALTERAR DADOS CADASTRADOS
          <FontAwesomeIcon icon={faPenToSquare} className="icone"/>
          </button>
          <button className="del-cadastro">DELETAR CADASTRO 
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
            <path d="M23.2671 0.937304C22.1866 -0.143164 20.4401 -0.143164 19.3596 0.937304L17.8746 2.4174L22.7046 7.24743L24.1896 5.76241C25.2701 4.68194 25.2701 2.93543 24.1896 1.85496L23.2671 0.937304ZM8.5056 11.7913C8.20465 12.0923 7.97277 12.4623 7.83956 12.8718L6.3792 17.2529C6.23612 17.6772 6.3496 18.1458 6.66535 18.4665C6.9811 18.7872 7.4498 18.8958 7.87903 18.7527L12.2601 17.2923C12.6647 17.1591 13.0347 16.9272 13.3406 16.6263L21.5946 8.36737L16.7596 3.5324L8.5056 11.7913ZM4.7363 3.02423C2.12147 3.02423 0 5.1457 0 7.76053V20.3907C0 23.0055 2.12147 25.127 4.7363 25.127H17.3664C19.9813 25.127 22.1027 23.0055 22.1027 20.3907V15.6544C22.1027 14.7811 21.3972 14.0756 20.524 14.0756C19.6507 14.0756 18.9452 14.7811 18.9452 15.6544V20.3907C18.9452 21.2639 18.2397 21.9694 17.3664 21.9694H4.7363C3.86304 21.9694 3.15753 21.2639 3.15753 20.3907V7.76053C3.15753 6.88728 3.86304 6.18177 4.7363 6.18177H9.47259C10.3458 6.18177 11.0514 5.47625 11.0514 4.603C11.0514 3.72975 10.3458 3.02423 9.47259 3.02423H4.7363Z" fill="white"/>
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}
// Abrir terminal e odar o comando npm run dev
import "./dadosbeneficiario.css"; /* Não esquecer de importar o CSS do seu componente */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons'

// Trocar para o nome do seu componente
export default function DadosBeneficiario() {
  return (
    <>
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
          <FontAwesomeIcon icon={faPenToSquare} className="icone"/>
          </button>
        </div>
      </section>
    </>
  );
}
// Abrir terminal e odar o comando npm run dev
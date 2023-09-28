import "./formulario.css"; /* Não esquecer de importar o CSS do seu componente */

// Trocar para o nome do seu componente
export default function Formulario() {
  return (
    <>
      {/* Aqui você irá colocar o seu código HTML para usar em qualquer página */}
      <div className="form">
        <form action="#">
          <div className="form-header">
            <div className="title">
              <h1>Dados do Beneficiário</h1>
            </div>
          </div>
          <div className="input-group">
            <div className="input-box">
              <label for="cpf">CPF</label>
              <input id="cpf" type="number" name="cpf" placeholder="000.000.000-00" required/>
            </div>

            <div className="input-box">
              <label for="nome">Nome</label>
              <input id="nome" type="text" name="nome" placeholder="Digite o seu nome" required/>
            </div>

            <div className="input-box">
              <label for="date">Data de Nascimento</label>
              <input id="date" type="date" name="date" required/>
            </div>

            <div className="input-box">
              <label for="matricula">Matrícula</label>
              <input id="matricula" type="number" name="matricula" placeholder="000000000" required/>
            </div>

            <div className="input-box">
              <label for="nmresponsável">Nome do Responsável</label>
              <input id="nmresponsável" type="text" name="nmresponsável" placeholder="Digite o nome do responsável"/>
            </div>

            <div className="input-box">
              <label for="endereco">Endereço</label>
              <input id="endereco" type="text" name="endereco" placeholder="Rua Chica da Silva 222, Universitário,Itaúna, MG - 35681-150" required/>
            </div>

            <div className="input-box">
              <label for="celular">Celular</label>
              <input id="celular" type="tel" name="celular" placeholder="(xx) xxxx-xxxx" required/>
            </div>

            <div className="input-box">
              <label for="email">E-mail</label>
              <input id="email" type="email" name="email" placeholder="Digite seu email" required/>
            </div>


            <div className="buttons-dados">
              <div className="alt-dados-cad">
                <p>ALTERAR DADOS CADASTRADOS</p>
                <img src="" alt=""/>
              </div>
              <div className="del-cadastro">
                <p>DELETAR CADASTRO</p>
                <img src="" alt=""/>
              </div>
            </div>

          </div>
        </form>
      </div>
    </>
  );
}
// Abrir terminal e odar o comando npm run dev
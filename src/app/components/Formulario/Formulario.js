import "./formulario.css"; /* Não esquecer de importar o CSS do seu componente */

// Trocar para o nome do seu componente
export default function Formulario() {
  return (
    <>
      {/* Aqui você irá colocar o seu código HTML para usar em qualquer página */}
      <div className="box">
        <p>Dados do Beneficiário</p>
        <form action="">
          <fieldset>
            <div className="inputBox">
              <label for="idcpf">CPF</label>
              <input type="number" name="idcpf" id="idcpf" className="inputUser" required></input>
            </div>

            <div className="inputBox">
              <label for="idnome">Nome</label>
              <input type="text" name="idnome" id="idnome" className="inputUser" required></input>
            </div>

            <div className="inputBox">
              <label for="iddate">Data de Nascimento</label>
              <input type="date" name="iddate" id="iddate" className="inputUser" required></input>
            </div>

            <div className="inputBox">
              <label for="idmatricula">Matrícula</label>
              <input type="number" name="idmatricula" id="idmatricula" className="inputUser" required></input>
            </div>

            <div className="inputBox">
              <label for="idnmresponsavel">Nome do Responsável</label>
              <input type="text" name="idnmresponsavel" id="idnmresponsavel" className="inputUser" required></input>
            </div>

            <div className="inputBox">
              <label for="idendereco">Endereço</label>
              <input type="text" name="idendereco" id="idendereco" className="inputUser" required></input>
            </div>

            <div className="inputBox">
              <label for="idtelefone">Telefone</label>
              <input type="tel" name="idtelefone" id="idtelefone" className="inputUser" required></input>
            </div>

            <div className="inputBox">
              <label for="idemail">E-mail</label>
              <input type="email" name="idemail" id="idemail" className="inputUser" required></input>
            </div>
          </fieldset>
        </form>
      </div>







    </>
  );
}
// Abrir terminal e odar o comando npm run dev
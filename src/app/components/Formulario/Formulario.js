import "./formulario.css"; /* Não esquecer de importar o CSS do seu componente */

// Trocar para o nome do seu componente
export default function Formulario() {
  return (
    <>
      {/* Aqui você irá colocar o seu código HTML para usar em qualquer página */}
      <form action="#">
        <div className="form-header">
          <div className="title">
            <h1>Cadastre-se gratuitamente!</h1>
          </div>
        </div>
        
        <div className="input-group">
          <div className="input-box">
            <input id="first-name" type="text" name="first-name" placeholder="Primeiro Nome" required/>
          </div>

          <div className="input-box">
            <input id="second-name" type="text" name="second-name" placeholder="Segundo Nome" required/>
          </div>

          <div className="input-box">
            <input id="email" type="email" name="email" placeholder="E-mail" required/>
          </div>

          <div className="input-box">
            <input id="password" type="password" name="password" placeholder="Senha" required/>
          </div>

          <div className="buttons-dados">
            <div className="cadastro">
              <p>Cadastre-se!</p>
            </div>
          </div>
        </div>
      </form>




    
    </>
  );
}


// Abrir terminal e odar o comando npm run dev
import "./formulario.css"; /* Não esquecer de importar o CSS do seu componente */

// Trocar para o nome do seu componente
export default function Formulario() {

  
  
  return (
    <>
      {/* Aqui você irá colocar o seu código HTML para usar em qualquer página */}
      <div className="form">
        <form action="#">
          <div className="form-header">
            <h2 className="titulo">
              Cadastre-se gratuitamente!
            </h2>
          </div>
          <div className="input-group">
            <div className="nome">
              <div className="input-box">
                <input id="first-name" type="text" name="first-name" placeholder="Primeiro Nome" required/>
              </div>
              <div className="input-box">
                <input id="second-name" type="text" name="second-name" placeholder="Segundo Nome" required/>
              </div>
            </div>
            <div className="input-box">
              <input id="email" type="email" name="email" placeholder="E-mail" required/>
            </div>
            <div className="input-box">
              <input id="password" type="password" name="password" placeholder="Senha" required/>
            </div>
            <div className="cadastro-button">
              <button>Cadastre-se!</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}


// Abrir terminal e odar o comando npm run dev
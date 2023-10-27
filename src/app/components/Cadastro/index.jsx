import "./cadastro.css"
export default function Cadastro (){
    return (
        <div className="corp">
            <div className="container">
                <div className="login">
                    <p>FAÇA O SEU LOGIN</p>
                    <h4>Faça o seu login agora mesmo, de forma rápida e fácil.</h4>
                    <button className="login_button">CONECTAR</button>
                </div>
                <div className="cadastro">
                    <div className="form">
                        <form action="#">
                        <div className="form_header">
                            <h2 className="titulo">
                                CADASTRE-SE AGORA MESMO!
                            </h2>
                        </div>
                        <div className="input_group">
                            <input className="input" id="nome" type="text" name="nome" placeholder="Nome" required/>
                            <input className="input" id="cpf" type="number" name="cpf" placeholder="CPF" required/>
                            <input className="input_endereco" id="endereco" type="text" name="endereco" placeholder="Endereço" required/>
                            <input className="input" id="telefone" type="tel" name="telefone" placeholder="Telefone" required/>
                            <input className="input" id="date" type="number" name="date" placeholder="Data de Nascimento" required/>
                            <input className="input" id="email" type="email" name="email" placeholder="E-mail" required/>
                            <input className="input" id="password" type="password" name="password" placeholder="Senha" required/>
                        </div>
                            <button className="cadastrar_button">CADASTRAR</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
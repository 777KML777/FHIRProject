import "./login.css"
export default function Login (){
    return (
        <div className="container">
        <div className="login">
            <div className="form">
                <form action="#">
                <div className="form_header">
                    <h2 className="titulo">
                        FAÇA O SEU LOGIN
                    </h2>
                </div>
                <div className="input_group">
                        <input className="input_email" id="email" type="email" name="email" placeholder="E-mail" required/>
                    <div className="senha">
                            <input className="input_senha" id="password" type="password" name="password" placeholder="Senha" required/>
                        <div className="icon"></div>
                    </div>
                </div>
                    <button className="login_button">CONTINUAR</button>
                </form>
            </div>
        </div>
        <div className="cadastro">
            <p>CADASTRE-SE</p>
            <h4>Faça o seu cadastro agora mesmo, de forma rápida e fácil.</h4>
            <button className="cadastrar_button">CONTINUAR</button>
        </div>
    </div>
    )
}
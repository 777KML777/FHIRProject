import styles from './tarefas.module.css'


function Tarefas() {
    return (
        <>
            <div className="container">
                <div className="cabecario">
                    <div className="exibicoes">
                        <div className="lista"></div>
                        <div className="calendario"></div>
                    </div>
                    <div className="filtros"></div>
                    <div className="nova_tarefa"></div>
                </div>
                <div className="corpo">
                    <div className="item">
                        <div className="data"></div>
                        <div className="horario"></div>
                        <div className="nome"></div>
                        <div className="opcoes"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tarefas
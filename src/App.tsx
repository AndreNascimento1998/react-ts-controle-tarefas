import { useState } from "react";
import Cronometro from "./components/Cronometro";
import Form from "./components/Form";
import List from "./components/List";
import { ITarefa } from "./Interface/ITarefa";
import './style.scss';

function App() {
    const [tarefas, setTarefas] = useState<ITarefa[] | []> ([]);
    
    const [selecionado, setSelecionado] = useState<ITarefa>();

    function selecionaTarefa(tarefaSelecionada: ITarefa)  {
        setSelecionado(tarefaSelecionada);
        setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
            ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false
        })))
    }

    return (
        <div className="row gx-0">
            <div className="col-8 offset-2 margem p-5">
                <div className="card p-2">

                    <Form 
                        setTarefas={setTarefas}
                    />

                    <Cronometro 
                        titulo='Escolha um card e inicie o cronômetro'
                        corLetra='white'
                        selecionado={selecionado}
                    />
                    <List 
                        style={{backgroundColor: 'white'}}
                        tarefas={tarefas}
                        selecionaTarefa={selecionaTarefa}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;

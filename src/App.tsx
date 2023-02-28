import { useState } from "react";
import Cronometro from "./components/Cronometro";
import Form from "./components/Form";
import List from "./components/List";
import './style.scss';

function App() {
    const [tarefas, setTarefas] = useState([
        {
            tarefa: 'Resact',
            tempo: '01:30:00'
        },
        {
            tarefa: 'JavaScript',
            tempo: '01:00:00'
        },
    ])
    ;
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
                    />
                    <List 
                        style={{backgroundColor: 'white'}}
                        tarefas={tarefas}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;

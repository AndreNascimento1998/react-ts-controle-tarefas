import { useState } from "react";
import Cronometro from "./components/Cronometro";
import Form from "./components/Form";
import List from "./components/List";
import { ITarefa } from "./Interface/ITarefa";
import './style.scss';

function App() {
    const [tarefas, setTarefas] = useState<ITarefa[] | []> ([]);
    //const [selecionado, setSelecionado] = useState<ITarefa>();

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

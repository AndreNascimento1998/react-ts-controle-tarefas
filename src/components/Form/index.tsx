import React, { useState } from "react";
import { ITarefa } from "../../Interface/ITarefa";
import Button from "../Button";
import "./style.scss";

function Form(props: {setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>, style?: Object}){


   const [tarefas1, setTarefas1]  = useState({
        tarefa: '',
        tempo: '00:00:00'
   })

    function adicionarTarefa(e: React.FormEvent) {
        debugger;
        e.preventDefault();
        // qual a diferença ?? tarefas1
        props.setTarefas(antigas => [...antigas, { ...tarefas1}])
        setTarefas1({tarefa: '', tempo: '00:00:00'})
    }

    return (
        <form onSubmit={adicionarTarefa}>
            <div className="row alinhamento mt-5 gx-0 p-1 text-center">
                <div className="col-5 mr-1">
                    <div className="input-group input-group mb-3">
                        <span 
                            className="col-3 input-group-text" 
                            id="inputGroup-sizing-default"
                            >
                                Tarefa
                        </span>
                        <input 
                            type="text" 
                            onChange={(e) => setTarefas1({...tarefas1, tarefa:e.target.value})}
                            className="form-control" 
                            value={tarefas1.tarefa}
                            aria-label="Sizing example input" 
                            aria-describedby="inputGroup-sizing-default" 
                            placeholder="Qual tarefa deseja realizar ?"
                            required
                            name='tarefa'
                            id='tarefa'
                        />
                    </div>
                </div>

                <div className="col-5 offset-1">
                    <div className="input-group input-group mb-3">
                        <span 
                            className="col-3 input-group-text" 
                            id="inputGroup-sizing-default"
                        >
                            Tempo
                        </span>
                        <input
                            onChange={(e) => setTarefas1({...tarefas1, tempo: e.target.value})}
                            type="time"
                            name='tempo'
                            id='tempo'
                            step='1'
                            value={tarefas1.tempo}
                            className="form-control" 
                            aria-label="Sizing example input" 
                            aria-describedby="inputGroup-sizing-default" 
                            min='00:00:00'
                            max='05:30:00'
                            required
                        />
                    </div>
                </div>
            </div>
                <div className="row text-center" >
                    <div className="col">
                        <Button 
                            style={
                                {
                                    backgroundColor: '#6528E0', 
                                    color: 'white', 
                                    borderColor: 'white'
                                }
                            } 
                            type='submit'
                            nome='Iniciar'
                        />
                    </div>
                </div>
        </form>
    )
}

export default Form;
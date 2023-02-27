import Button from "../Button";

function Form(){
    return (
        <form>
            <div className="row mt-5 gx-0 p-2 text-center">
                <div className="col-3 mr-1">
                    <div className="input-group input-group-sm mb-3">
                        <span 
                            className="col-3 input-group-text" 
                            id="inputGroup-sizing-sm"
                            >
                                Tarefa
                        </span>
                        <input 
                            type="text" 
                            className="form-control" 
                            aria-label="Sizing example input" 
                            aria-describedby="inputGroup-sizing-sm" 
                            placeholder="Qual tarefa deseja realizar ?"
                            required
                            name='tarefa'
                            id='tarefa'
                        />
                    </div>
                </div>

                <div className="col-3 offset-1">
                    <div className="input-group input-group-sm mb-3">
                        <span className="col-3 input-group-text" id="inputGroup-sizing-sm">Tempo</span>
                        <input 
                            type="time"
                            name='tempo'
                            id='tempo'
                            step='1'
                            className="form-control" 
                            aria-label="Sizing example input" 
                            aria-describedby="inputGroup-sizing-sm" 
                            min='00:00:00'
                            max='01:30:00'
                            required
                        />
                    </div>
                </div>
            </div>
                <div className="row text-center">
                    <div className="col">
                        <Button nome='Iniciar'/>
                    </div>
                </div>
        </form>
    )
}

export default Form;
import { ITarefa } from "../../../Interface/ITarefa";

function Lista( props: {cor?: string, item: ITarefa, selecionaTarefa: any}) {

    return (
        <div className="col-4 text-center p-2">
            <ul className='p-0 '>
                <div  className='card mt-4 mb-5'>
                    <li 
                        style={
                            props.item.selecionado ? { 
                                backgroundColor: '#3D3D3D', 
                                color: 'white',
                                cursor: 'pointer'
                            }
                            : {
                                background : props.cor,
                                cursor: 'pointer'
                            }
                        } 
                        className="rounded p-2"
                        onClick={() => props.selecionaTarefa({...props.item})}
                    >
                        <h4>{props.item.tarefa}</h4>
                        <span>{props.item.tempo}</span>
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default Lista;
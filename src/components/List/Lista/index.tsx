import { ITarefa } from "../../../Interface/ITarefa";

function Lista( props: {cor?: string, item: ITarefa}) {

    return (
        <div className="col-4 text-center p-2">
            <ul className='p-0'>
                <div  className='card mt-4 mb-5'>
                    <li 
                        style={{ backgroundColor: props.cor }} 
                        className="rounded p-1"
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
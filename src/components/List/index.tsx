import Lista from './Lista';
import './style.scss';
import { ITarefa } from '../../Interface/ITarefa';

interface IStyle {
    backgroundColor: string
}

function List(props: {tarefas: ITarefa[], style: IStyle, selecionaTarefa: any}) {

    return (
        <aside>
            <div className="row gx-0">
                {props.tarefas.map((item, index) => (
                    <Lista
                        selecionaTarefa={props.selecionaTarefa}
                        key={index}
                        item={item}      
                        cor={props.style.backgroundColor}
                    />
                ))}
            </div>
        </aside>
    )
}

export default List;
import './style.scss';

function List(props: any) {
    const tarefas = [
        {
            tarefa: 'React',
            tempo: '01:30:00'
        },
        {
            tarefa: 'JavaScript',
            tempo: '01:00:00'
        },
        {
            tarefa: 'JavaScript',
            tempo: '01:00:00'
        },
        {
            tarefa: 'JavaScript',
            tempo: '01:00:00'
        }
    ]

    return (
        <aside>
            <div className="row gx-0">
                {tarefas.map((item, index) => (
                    <div key={index} className="col-4 text-center p-1">
                        <ul className='p-0'>
                            <div  className='card mt-2'>
                                <li 
                                    style={{ backgroundColor: props.style.backgroundColor }} className="cor-letra rounded p-1"
                                    >
                                    <h4>{item.tarefa}</h4>
                                    <span>{item.tempo}</span>
                                </li>
                            </div>
                        </ul>
                    </div>
                ))}
            </div>
        </aside>
    )
}

export default List;
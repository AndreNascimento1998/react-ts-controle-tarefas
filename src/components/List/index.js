function List() {
    const tarefas = [
        {
            tarefa: 'React',
            tempo: '01:30:00'
        },
        {
            tarefa: 'JavaScript',
            tempo: '01:00:00'
        }
    ]

    return (
        <aside>
            <div className="row gx-0">
                <div className="col-3">
                    <ul>
                        {tarefas.map((item, index) => (
                            <li key={index}>
                                <h3>{item.tarefa}</h3>
                                <span>{item.tempo}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default List;
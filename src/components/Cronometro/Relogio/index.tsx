function Relogio({tempo = 0 }: any) {
    
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;

    const [minutoMilhar, minutoDezena = 0, minutoUnidade ] = String(minutos).padStart(3, '0');
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');
    return (

        <span className="row temp">
            <div className="col-12">
                <span 
                    className="col-2 border rounded p-1" 
                    style={{backgroundColor: '#3D3D3D'}}
                >
                    {minutoMilhar}{minutoDezena}{minutoUnidade}
                </span>
                <span>:</span>
                <span 
                    className="col-2 border rounded p-1" 
                    style={{backgroundColor: '#3D3D3D'}}
                >
                    {segundoDezena}{segundoUnidade}
                </span>
            </div>
        </span>
    )
}

export default Relogio;
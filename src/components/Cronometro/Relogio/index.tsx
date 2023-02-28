function Relogio() {
    return (
        <span className="row temp">
            <div className="col-12">
                <span 
                    className="col-2 border rounded p-1" 
                    style={{backgroundColor: '#3D3D3D'}}
                >
                    00
                </span>
                <span>:</span>
                <span 
                    className="col-2 border rounded p-1" 
                    style={{backgroundColor: '#3D3D3D'}}
                >
                    00
                </span>
            </div>
        </span>
    )
}

export default Relogio;
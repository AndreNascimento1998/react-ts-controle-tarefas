import { useEffect, useState } from 'react';
import { tempoParaSegundos } from '../../common/utils/time';
import Button from '../Button';
import Relogio from './Relogio';
import './style.scss';

function Cronometro(props: 
    {
        titulo: string, 
        corLetra: string, 
        selecionado: any, 
    }) {

    const {titulo, corLetra} = props
    const [tempo, setTempo] = useState<any>();
        
        useEffect(() => {
            if(props.selecionado?.tempo){
                setTempo(tempoParaSegundos(props.selecionado.tempo));    
            }
        }, [props.selecionado])
    
        function regressiva(contador: number = 0){
            setTimeout(() => {
                if(contador > 0) {
                    setTempo(contador - 1);
                    return regressiva(contador - 1);
                }
            }, 1000)
        }

    return (
        <div className="row centro mb-3 p-2 mt-3 letra" style={{color: corLetra}}>
            <div className='col-12'>
                <span >{titulo}</span>
                
            </div>
            <div className='col-2' >
                <Relogio tempo={tempo}/>
            </div>
            <div className='col-3'>
                <Button 
                    style={{backgroundColor: '#3D3D3D', color: 'white'}}
                    nome='Começar'
                    type='button'
                    onClick={() => regressiva(tempo)}
                />
            </div>
        </div>
    )
}

export default Cronometro;
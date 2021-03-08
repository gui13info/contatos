import React, { useState } from 'react';
import { generateUID } from '../utils/helpers';
import TextField from '@material-ui/core/TextField';
import SaveButton from './SaveButton';

export default function FormContato(props){
    const [nome, setNome] = useState('');
    const [instagram, setInstagram] = useState('');

        function handleSubmit(e) {
            e.preventDefault();

            console.log('Novo contato: ', {nome, instagram})
            
            props.onCreateContato({
                nome,
                instagram,
                id: generateUID()
            })

            setNome('');
            setInstagram('');       
        }

    return(
        <div>
            <h1>Novo Contato</h1>

            <form onSubmit={handleSubmit}>
                    <div className="text-field">
                        <TextField 
                            type="text" 
                            name="nome" 
                            value={nome}
                            onChange={({target}) => setNome(target.value)}
                            placeholder="Nome"
                            fullWidth
                        />
                    </div>

                    <div className="text-field">
                        <TextField 
                            type="text" 
                            name="instagram" 
                            value={instagram}
                            onChange={({target}) => setInstagram(target.value)}
                            placeholder="Instragram"
                            fullWidth
                        />
                    </div>
                    <SaveButton />
            </form>
        </div>
    );
} 
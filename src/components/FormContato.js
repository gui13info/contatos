import React, { useState } from 'react';
import { generateUID } from '../utils/helpers';

export default function FormContato(){
    const [nome, setNome] = useState('');
    const [instagram, setInstagram] = useState('');

        function handleSubmit(e) {
            e.preventDefault();

            console.log('Novo contato: ', {nome, instagram})
        }

    return(
        <div>
            <h1>Novo Contato</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text" 
                        name="nome" 
                        value={nome}
                        onChange={({target}) => setNome(target.value)}
                        placeholder="Nome"
                    />
                    <input 
                        type="text" 
                        name="instagram" 
                        value={instagram}
                        onChange={({target}) => setInstagram(target.value)}
                        placeholder="Instragram"
                    />
                    <button>Adicionar contato</button>
                </div>
            </form>
        </div>
    );
} 
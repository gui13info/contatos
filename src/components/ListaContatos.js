import React from 'react';

export default function ListaContatos(props){
    return(
        <div>
            <h1>Lista</h1>
            <ul style={{listStyleType: 'nome', padding: '0'}}>
                {props.contatos.map(contato => (
                    <li key={contato.id}>
                        <h4>{contato.nome}</h4>
                        <p>{contato.instagram}</p>
                        <button onClick={() => props.onDeleteContato(contato)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
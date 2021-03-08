import { useState } from 'react';
import ListaContatos from './components/ListaContatos';
import FormContato from './components/FormContato';

import './global.css';

function App() {
  const [state, setState] = useState({
    contatos: [
      {
        "id": "0",
        "nome": "Guilherme",
        "instagram": "@guimarquess13"
      },
      {
        "id": "1",
        "nome": "Leonardo",
        "instagram": "@leonardo13"
      },
      {
        "id": "2",
        "nome": "Maria",
        "instagram": "@mari13"
      },
    ]})

  function removeContato(contato){
    setState((currentState) => ({
      contatos: currentState.contatos.filter((c) => {
        return c.id !== contato.id
      })
    }))
  }

  return (
    <div>
      <h1>Contatos</h1>
      <FormContato />
      <ListaContatos 
      contatos={state.contatos}
      onDeleteContato={removeContato}
      />
    </div>
  );
}

export default App;

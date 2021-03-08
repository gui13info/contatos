import { useState } from 'react';
import { Route } from 'react-router-dom'
import ListaContatos from './components/ListaContatos';
import FormContato from './components/FormContato';
import Bar from './components/Bar';

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


  function createContato(contato){
    setState((currentState) => ({
      contatos: currentState.contatos.concat([contato])
    }))
  }

  function removeContato(contato){
    setState((currentState) => ({
      contatos: currentState.contatos.filter((c) => {
        return c.id !== contato.id
      })
    }))
  }

  return (
    <div>
      <Bar />
      <div className="container">
        <Route exact path='/' render={() => (
          <ListaContatos 
          contatos={state.contatos}
          onDeleteContato={removeContato}
          />
        )} />
        <Route path="/create" render={({history}) => (
          <FormContato 
            onCreateContato={(contato) => {
              createContato(contato)
              history.push('/')
            }}
          />
        )} />
      </div>
      
    </div>
  );
}

export default App;

import ListaContatos from './components/ListaContatos';
import './global.css';

function App() {
  let state= {
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
    ]
  }
  return (
    <div>
      <h1>Contatos</h1>
      <ListaContatos contatos={state.contatos}/>
    </div>
  );
}

export default App;

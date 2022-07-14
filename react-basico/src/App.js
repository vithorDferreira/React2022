import "./components/Comentario.css"
import './App.css';
import Barra from "./components/Barra";
import Sobre from "./components/Sobre";
import Lista from "./components/Lista";
import Contato from "./components/Contato";
import Foto from "./components/Foto";

function App() {
  return (
    <div className="App">
      <h1>Portifolio React</h1>
      <br></br>
      <Barra/>
      <Foto/>
      <Sobre/>
      <Lista/>
      <Contato/>

    </div>
  );
}

export default App;

import { useState } from 'react'
import Navbar from './components/Navbar'
import FormularioCadastro from './components/FormularioCadastro'
import ListaPokemons from './components/ListaPokemons'
import ModalSucesso from './components/ModalSucesso'
import './App.css'

function App() {
  const [telaAtiva, setTelaAtiva] = useState('cadastro')
  const [mostrarSucesso, setMostrarSucesso] = useState(false)
  const [pokemons, setPokemons] = useState([])

  const handleCadastrar = (novoPokemon) => {
    setPokemons([...pokemons, novoPokemon])
    setMostrarSucesso(true)
  }

  const fecharSucesso = () => {
    setMostrarSucesso(false)
  }

  return (
    <div className="app">
      <Navbar telaAtiva={telaAtiva} setTelaAtiva={setTelaAtiva} />

      {telaAtiva === 'cadastro' && (
        <FormularioCadastro onCadastrar={handleCadastrar} />
      )}

      {telaAtiva === 'pokemons' && (
        <ListaPokemons pokemons={pokemons} setTelaAtiva={setTelaAtiva} />
      )}

      <ModalSucesso mostrar={mostrarSucesso} onFechar={fecharSucesso} />
    </div>
  )
}

export default App

function Navbar({ telaAtiva, setTelaAtiva }) {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
            alt="Pokeball"
            className="logo-icon"
          />
        </div>
        <nav className="navbar-menu">
          <button
            className={`nav-button ${telaAtiva === 'cadastro' ? 'active' : ''}`}
            onClick={() => setTelaAtiva('cadastro')}
          >
            Cadastrar Pokémon
          </button>
          <button
            className={`nav-button ${telaAtiva === 'pokemons' ? 'active' : ''}`}
            onClick={() => setTelaAtiva('pokemons')}
          >
            Pokémons Adicionados
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

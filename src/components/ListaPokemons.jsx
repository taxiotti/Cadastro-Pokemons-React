import PokemonCard from './PokemonCard'

function ListaPokemons({ pokemons, setTelaAtiva }) {
  const tiposDisponiveis = [
    { valor: 'fogo', emoji: '🔥', nome: 'Fogo', cor: '#FF6B35' },
    { valor: 'agua', emoji: '💧', nome: 'Água', cor: '#4A90E2' },
    { valor: 'grama', emoji: '🌱', nome: 'Grama', cor: '#7ED321' },
    { valor: 'eletrico', emoji: '⚡', nome: 'Elétrico', cor: '#F5A623' },
    { valor: 'psiquico', emoji: '🧠', nome: 'Psíquico', cor: '#BD10E0' },
    { valor: 'pedra', emoji: '🪨', nome: 'Pedra', cor: '#8B7355' },
  ]

  const getInfoTipo = (tipoValor) => {
    return tiposDisponiveis.find((t) => t.valor === tipoValor)
  }

  return (
    <div className="tela-pokemons">
      <div className="pokemons-container">
        <h2 className="pokemons-title">Pokémons Cadastrados</h2>

        {pokemons.length === 0 ? (
          <div className="empty-state">
            <p>Nenhum Pokémon cadastrado ainda.</p>
            <button
              className="btn-voltar"
              onClick={() => setTelaAtiva('cadastro')}
            >
              Cadastrar primeiro Pokémon
            </button>
          </div>
        ) : (
          <div className="pokemons-grid">
            {pokemons.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                tipoInfo={getInfoTipo(pokemon.tipo)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ListaPokemons

function PokemonCard({ pokemon, tipoInfo }) {
  return (
    <div className="pokemon-card">
      <div
        className="card-image"
        style={{
          backgroundColor: pokemon.imagem
            ? 'transparent'
            : tipoInfo?.cor || '#FF6B35',
        }}
      >
        {pokemon.imagem ? (
          <img
            src={pokemon.imagem}
            alt={pokemon.nome}
            className="pokemon-image"
          />
        ) : (
          <span className="card-emoji">{tipoInfo?.emoji}</span>
        )}
      </div>
      <div className="card-body">
        <h3 className="card-title">{pokemon.nome}</h3>
        <p className="card-tipo">
          Tipo: {tipoInfo?.emoji} {tipoInfo?.nome}
        </p>
        <p className="card-descricao">{pokemon.descricao}</p>
        <div className="card-poder">
          <span>Poder: {pokemon.poder}</span>
          <div className="poder-bar">
            <div
              className="poder-fill"
              style={{
                width: `${pokemon.poder}%`,
                backgroundColor: tipoInfo?.cor || '#FF6B35',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard

function ModalSucesso({ mostrar, onFechar }) {
  if (!mostrar) return null

  return (
    <div className="modal-overlay" onClick={onFechar}>
      <div className="modal-sucesso" onClick={(e) => e.stopPropagation()}>
        <div className="sucesso-icon">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#4CAF50" />
            <path
              d="M8 12l2 2 4-4"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3>Pokémon adicionado com sucesso!</h3>
        <button className="btn-fechar" onClick={onFechar}>
          OK
        </button>
      </div>
    </div>
  )
}

export default ModalSucesso

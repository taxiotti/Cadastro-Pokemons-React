function UploadImagem({ imagemPreview, setImagemPreview }) {
  const handleImagemChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagemPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const removerImagem = () => {
    setImagemPreview(null)
  }

  return (
    <div className="image-upload-container">
      <input
        type="file"
        id="imagem-upload"
        accept="image/*"
        onChange={handleImagemChange}
        style={{ display: 'none' }}
      />

      {imagemPreview ? (
        <div className="image-preview">
          <img src={imagemPreview} alt="Preview" />
          <button
            type="button"
            className="btn-remover-imagem"
            onClick={removerImagem}
          >
            ✕
          </button>
        </div>
      ) : (
        <label htmlFor="imagem-upload" className="image-placeholder">
          <div className="placeholder-icon">
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            <span>+</span>
          </div>
          <p className="upload-text">Clique para adicionar imagem</p>
        </label>
      )}
    </div>
  )
}

export default UploadImagem

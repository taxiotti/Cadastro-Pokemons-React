import { useState } from 'react'
import UploadImagem from './UploadImagem'

function FormularioCadastro({ onCadastrar }) {
  const [nome, setNome] = useState('')
  const [tipo, setTipo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [poder, setPoder] = useState('')
  const [imagemPreview, setImagemPreview] = useState(null)
  const [erro, setErro] = useState('')

  const tiposDisponiveis = [
    { valor: 'fogo', emoji: '🔥', nome: 'Fogo', cor: '#FF6B35' },
    { valor: 'agua', emoji: '💧', nome: 'Água', cor: '#4A90E2' },
    { valor: 'grama', emoji: '🌱', nome: 'Grama', cor: '#7ED321' },
    { valor: 'eletrico', emoji: '⚡', nome: 'Elétrico', cor: '#F5A623' },
    { valor: 'psiquico', emoji: '🧠', nome: 'Psíquico', cor: '#BD10E0' },
    { valor: 'pedra', emoji: '🪨', nome: 'Pedra', cor: '#8B7355' },
  ]

  const validarCampos = () => {
    if (!nome.trim()) {
      setErro('O nome do Pokémon é obrigatório!')
      return false
    }
    if (!tipo) {
      setErro('Selecione um tipo para o Pokémon!')
      return false
    }
    if (!descricao.trim()) {
      setErro('A descrição é obrigatória!')
      return false
    }
    if (!poder || poder < 0 || poder > 100) {
      setErro('O poder deve estar entre 0 e 100!')
      return false
    }
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErro('')

    if (!validarCampos()) {
      return
    }

    const novoPokemon = {
      id: Date.now(),
      nome,
      tipo,
      descricao,
      poder: Number(poder),
      imagem: imagemPreview,
    }

    onCadastrar(novoPokemon)

    // Limpar campos
    setNome('')
    setTipo('')
    setDescricao('')
    setPoder('')
    setImagemPreview(null)
  }

  return (
    <div className="tela-cadastro">
      <div className="form-container">
        <div className="form-content">
          <div className="form-left">
            <h2 className="form-title">Cadastrar novo Pokémon</h2>

            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label>Digite o nome</label>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Ex: Pikachu"
                  className={erro && !nome.trim() ? 'input-error' : ''}
                />
              </div>

              <div className="input-group">
                <label>Escolha o tipo</label>
                <select
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                  className={erro && !tipo ? 'input-error' : ''}
                >
                  <option value="">Selecione um tipo</option>
                  {tiposDisponiveis.map((t) => (
                    <option key={t.valor} value={t.valor}>
                      {t.emoji} {t.nome}
                    </option>
                  ))}
                </select>
              </div>

              <div className="input-group">
                <label>Descreva seu Pokémon</label>
                <textarea
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  placeholder="Descreva as características..."
                  rows="3"
                  className={erro && !descricao.trim() ? 'input-error' : ''}
                />
              </div>

              <div className="input-group">
                <label>Defina o poder</label>
                <input
                  type="number"
                  value={poder}
                  onChange={(e) => setPoder(e.target.value)}
                  placeholder="0 - 100"
                  min="0"
                  max="100"
                  className={
                    erro && (!poder || poder < 0 || poder > 100)
                      ? 'input-error'
                      : ''
                  }
                />
              </div>

              {erro && <div className="error-message">⚠️ {erro}</div>}

              <button type="submit" className="btn-cadastrar">
                Adicionar
              </button>
            </form>
          </div>

          <div className="form-right">
            <UploadImagem
              imagemPreview={imagemPreview}
              setImagemPreview={setImagemPreview}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormularioCadastro

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { remover, editar } from '../../store/reducers/tarefas'
import ContatoClass from '../../models/Contato'

import * as S from './styles'
import { Botao } from '../../styles'
import { CampoEditor } from './styles'

type Props = ContatoClass

const Contato = ({ nome, email, telefone, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nomeEditado, setNomeEditado] = useState(false)

  const [novoNome, setNovoNome] = useState(nome)
  const [novoEmail, setNovoEmail] = useState(email)
  const [novoTelefone, setNovoTelefone] = useState(telefone)

  function editarContato() {
    // dispatch(editar({ nome, email, telefone, id }))
    setEstaEditando(true)
    setNomeEditado(true)
  }

  function salvar() {
    dispatch(
      editar({ nome: novoNome, email: novoEmail, telefone: novoTelefone, id })
    )
    setEstaEditando(false)
    setNomeEditado(false)
  }

  function cancelarEdicao() {
    setEstaEditando(false)
    setNomeEditado(false)
    setNovoNome(nome)
    setNovoEmail(email)
    setNovoTelefone(telefone)
  }

  return (
    <S.Card>
      <div>
        {nomeEditado ? (
          <form>
            <CampoEditor
              type="text"
              value={novoNome}
              onChange={(e) => setNovoNome(e.target.value)}
            />
            <CampoEditor
              type="email"
              value={novoEmail}
              onChange={(e) => setNovoEmail(e.target.value)}
            />
            <CampoEditor
              type="tel"
              value={novoTelefone}
              onChange={(e) => setNovoTelefone(parseInt(e.target.value))}
            />
          </form>
        ) : (
          <div>
            <S.Item>{nome}</S.Item>
            <S.Item>{email}</S.Item>
            <S.Item>{telefone}</S.Item>
          </div>
        )}
      </div>

      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar onClick={salvar}>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={editarContato}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}
export default Contato

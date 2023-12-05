import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

export const Card = styled.div`
  background-color: #fcfcfc;
  padding: 16px;
  border-radius: 12px;
`
export const Item = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
export const CampoEditor = styled.input`
  display: flex;
  width: 100%;
  padding: 12px;
  margin: 12px auto;
`

import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const BotaoVoltarHome = styled(Link)`
  text-decoration: none;
  color: ${variaveis.branco};
`

export const BotaoVoltarDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`

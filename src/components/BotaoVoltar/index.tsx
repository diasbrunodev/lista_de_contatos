import { BotaoHomeVoltar } from '../../styles'
import { BotaoVoltarDiv, BotaoVoltarHome } from './styles'

const BotaoVoltar = () => (
  <BotaoVoltarDiv>
    <BotaoHomeVoltar>
      <BotaoVoltarHome to="/">Home</BotaoVoltarHome>
    </BotaoHomeVoltar>
  </BotaoVoltarDiv>
)

export default BotaoVoltar

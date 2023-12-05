import { BotaoHomeVoltar, BotaoPosition } from '../../styles'
import * as S from './styles'

const BotaoNovoContato = () => (
  <BotaoPosition>
    <BotaoHomeVoltar>
      <S.BotaoNovo to="/novo-contato">Adicionar novo</S.BotaoNovo>
    </BotaoHomeVoltar>
  </BotaoPosition>
)

export default BotaoNovoContato

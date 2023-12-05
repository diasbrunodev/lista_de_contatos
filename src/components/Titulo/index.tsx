import * as S from './styles'

type Props = {
  mostrarTitulo: boolean
}

const Titulo = ({ mostrarTitulo }: Props) => {
  return (
    <div>
      {mostrarTitulo ? (
        <S.TituloH>LISTA DE CONTATOS</S.TituloH>
      ) : (
        <S.TituloH>ADICIONAR CONTATO</S.TituloH>
      )}
    </div>
  )
}

export default Titulo

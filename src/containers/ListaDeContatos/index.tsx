import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { ListaItens } from './styles'

import { RootReducer } from '../../store'
import { Container } from '../../styles'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <Container>
      <ul>
        {itens.map((c) => (
          <ListaItens key={c.nome}>
            <Contato
              nome={c.nome}
              email={c.email}
              telefone={c.telefone}
              id={c.id}
            />
          </ListaItens>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos

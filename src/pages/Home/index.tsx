import BotaoNovoContato from '../../components/BotaoNovoContato'
import Titulo from '../../components/Titulo'
import ListaDeContatos from '../../containers/ListaDeContatos'

const Home = () => (
  <>
    <Titulo mostrarTitulo />
    <BotaoNovoContato />
    <ListaDeContatos />
  </>
)

export default Home

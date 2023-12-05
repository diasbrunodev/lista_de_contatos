import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { adicionar } from '../../store/reducers/tarefas'
import { Campo, Form, FormDiv } from './styles'
import { Botao } from '../../styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const validarEmail = (input: string) => {
    // Expressão regular para validar o formato de e-mail
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regexEmail.test(input)
  }

  const validarTelefone = (input: string) => {
    // Expressão regular para validar um número de telefone simples
    const regexTelefone = /^\d{11}$/
    return regexTelefone.test(input)
  }

  const adicionarContato = (e: FormEvent) => {
    e.preventDefault()

    if (nome.trim().indexOf(' ') === -1) {
      alert('Por favor, insira um nome completo com sobrenome.')
      return
    }

    if (!validarEmail(email)) {
      alert('Por favor, insira um e-mail válido.')
      return
    }

    if (!validarTelefone(telefone)) {
      alert('Por favor, insira um número de telefone válido (21999999999).')
      return
    }

    const telefoneNumero = parseInt(telefone)

    dispatch(adicionar({ nome, email, telefone: telefoneNumero }))
    navigate('/')
  }

  return (
    <FormDiv>
      <Form onSubmit={adicionarContato}>
        <Campo
          type="text"
          placeholder="Nome completo:"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <Campo
          type="email"
          placeholder="Email:"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Campo
          type="tel"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <Botao type="submit">Adicionar</Botao>
      </Form>
    </FormDiv>
  )
}

export default Formulario

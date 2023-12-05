import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: arial, sans-serif;
    list-style: none;

    body {
      background-color: ${variaveis.amarelo};
    }
`

export const Container = styled.div`
  max-width: 680px;
  width: 100%;
  height: 100%;
  margin: auto;
  padding-bottom: 24px;
  background-color: ${variaveis.amarelo};
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulFosco};
  margin-right: 12px;
  border-radius: 10px;
`

export const BotaoPosition = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 24px;
  margin-top: 24px;
`

export const BotaoHomeVoltar = styled.button`
  background-color: ${variaveis.cinzaFosco};
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 10px;
`

export default EstiloGlobal

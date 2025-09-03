import React from 'react'

const Header = () => {
  const dataAtual = new Date();
  const ano = new Date().getFullYear();
  const nomeDoMes = dataAtual.toLocaleString('pt-BR', { month: 'long' }); 

  return (
    <div className='header'>
      <h1>{nomeDoMes} | {ano}</h1>
    </div>
  )
}

export default Header
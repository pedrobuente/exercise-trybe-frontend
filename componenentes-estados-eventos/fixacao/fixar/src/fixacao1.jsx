import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */
function handleClick() {
  console.log('Clicou no botão!')
}

function handleClick1() {
  console.log('Clicou no botão 2!')
}
function handleClick2() {
  console.log('Clicou no botão 3!')
}
class fixa extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  render() {
    return (
    <div>  
    <button onClick={handleClick}>Meu botão</button>
    <button onClick={handleClick1}>Meu botão</button>
    <button onClick={handleClick2}>Meu botão</button>
      </div>
    )
  }
}

export default fixa;
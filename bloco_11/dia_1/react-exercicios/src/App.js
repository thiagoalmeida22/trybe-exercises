import './App.css';
import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['Jogar COD', 'Estudar React', 'Fofocar', 'Passear com o dog'];

class App extends React.Component {
  render() {
    return (<ul>
      { compromissos.map( (compromisso) => Task(compromisso) ) }
      </ul>);
  }
}

export default App;

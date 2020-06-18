import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp/TodoApp';

import './style.css';

function App() {
    return (
      <div className="container">
        <h1 className="page__title">Todos</h1>

        <TodoApp />
      </div>
    );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
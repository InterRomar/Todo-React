import React from 'react';
import TodoApp from './TodoApp';

import '../style.css';

function App() {
  return (
      <div className="container">
        <h1 className="page__title">Todos</h1>

        <TodoApp />
      </div>
  );
}

export default App;

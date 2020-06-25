import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TodoApp from './components/TodoApp';
import { store } from './store/index';

import './style.css';


function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1 className="page__title">Todos</h1>
        <TodoApp />
      </div>
    </Provider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

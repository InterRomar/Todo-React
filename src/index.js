import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import TodoApp from './components/TodoApp';
import { store } from './store/index';

import './style.css';


function App() {
  return (
    <Provider store={store}>
      <TodoApp dispatch={store.dispatch}/>
    </Provider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

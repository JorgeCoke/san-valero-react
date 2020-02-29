import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, action, StoreProvider} from 'easy-peasy';

const store = createStore({
    todos: {
        items: [
            {text: 'Comprar el pan'},
            {text: 'Aprender React'},
            {text: 'Ir al cine'}
        ],
        addTodo: action((state, payload) => {
            state.items.push(payload)
        })
    }
});

ReactDOM.render(
    <StoreProvider store={store}>
        <App />
    </StoreProvider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

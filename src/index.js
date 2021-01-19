import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { applyPolyfills, defineCustomElements } from 'h8k-components/loader';
import './index.css';
import App from './App';
import reducer from '../src/store/reducer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
)
registerServiceWorker();

applyPolyfills().then(() => {
    defineCustomElements(window);
})
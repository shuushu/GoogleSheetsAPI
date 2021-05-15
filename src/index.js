import React from 'react'
import { render } from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import mySaga from './common/saga'
import  rootReducer from './store/rootResucer'
import App from './App'

// saga 미들웨어를 생성합니다.
const sagaMiddleware = createSagaMiddleware()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const STORE = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(mySaga);

render(
    <Provider store={STORE}>
        <App />
    </Provider>,
    document.getElementById('root')
);


serviceWorker.unregister();

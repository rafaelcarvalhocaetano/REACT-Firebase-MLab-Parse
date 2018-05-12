import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './main/reducers'

import { BrowserRouter } from 'react-router-dom'

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <App />
</BrowserRouter>
</Provider>, document.getElementById('app'))


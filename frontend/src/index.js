import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store.js'
import './bootstrap.min.css'
import './index.css'
import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <div style={{ position: 'relative', height: '100%' }}>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
)

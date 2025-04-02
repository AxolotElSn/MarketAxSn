import '@/assets/fonts/fonts.css'
import 'react-tooltip/dist/react-tooltip.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { App } from '@/app/App'
import { GlobalStyles } from '@/app/GlobalStyles/GlobalStyles'

import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  // </React.StrictMode>,
)

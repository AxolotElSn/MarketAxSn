import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import '@/assets/fonts/fonts.css'
import 'react-tooltip/dist/react-tooltip.css'

import { App } from '@/app/App'
import { GlobalStyles } from '@/app/GlobalStyles/GlobalStyles'
import { store } from './store/store'
import { AppInitializer } from '@/components/AppInitializer/AppInitializer'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <AppInitializer>
        <App />
      </AppInitializer>
    </Provider>
  </React.StrictMode>
)

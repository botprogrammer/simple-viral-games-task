import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import CoreTheme from './theme'
import GlobalContext from './context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CoreTheme>
      <GlobalContext>
        <App />
      </GlobalContext>
    </CoreTheme>
  </React.StrictMode>
)

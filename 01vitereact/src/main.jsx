import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (
  <a href="http://google.com" target='_blank'>
  Visit google
  </a>
)

reactDOM.createRoot(document.getElementById('root'))
.render(
    <anotherElement />
)

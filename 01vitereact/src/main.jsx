import React from 'react'
import ReactDOM from 'react-dom/client'
// import {jsx as _jsx} from 'react/jsx-runtime.js'
import App from './App.jsx'

const anotherElement = (
  <a href="http://google.com" target='_blank'>
  Visit google
  </a>
)

const ReactElement = React.createElement(
  'a',
  {href: 'http://google.com', target: '_blank'},
  'click here to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).
render(
    ReactElement
)

import './index.css'

import React from "react"
import ReactDOM from 'react-dom'

import { Router } from 'react-router';
import { Routes } from './components/Routes'


ReactDOM.render(
  <React.StrictMode>
        <Router>
            
                <Routes />
          </Router>

  </React.StrictMode>, document.querySelector('#app')

);
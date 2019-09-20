import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import IndexPage from './pages/IndexPage'
import configureStore from './store/';

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.scss'

const store = configureStore()

ReactDOM.render(<Provider store={store}><IndexPage /></Provider>, document.getElementById( 'react' ) );

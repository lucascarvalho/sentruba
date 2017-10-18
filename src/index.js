import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.scss'

const App = () =>
  <h1 className={styles.title}>{'Sentruba'}</h1>


if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(<App />, document.getElementById('app'))

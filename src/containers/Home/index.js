import React from 'react'
import {Link} from 'react-router-dom'
import Layout from '../../components/Layout/'
import './style.css'

class Home extends React.Component {
  componentDidMount = () => {
    document.title = 'DankGaming'
  }
  render = () => (
    <Layout>
      <header id="header">
        <h1>Dank Gaming</h1>
        <p>Gaming has never been this dank<br/>
        Made by dank people for dank people </p>
      </header>
    </Layout>
  )
}

export default Home

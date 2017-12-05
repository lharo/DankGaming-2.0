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
     <div className="container">
    <div className="row">
      <div className="col-md-12"> 
        <div className="jumbotron">
          <h1>DankGaming</h1>
          <h2>De Gamers para gamers</h2>
          <blockquote>
          <p>DankGaming es una empresa 100% mexicana dedicada a la venta de videojuegos.</p>
          <p>Somos un equipo de gamers apasionados por nuestro trabajo. Para nosotros lo más importante son los hermanos gamers como tú. Así
           que nos levantamos todos los días con una sola idea en la mente: poner lo mejor del mundo de los videojuegos en tus manos.</p>
          <p>¿Quieres enterarte sobre los juegos nuevos que vienen?, ¿Buscas averiguar cuales son los juegos más populares?</p>
          <p>Además te ofrecemos los mejores servicios para complementar tu experiencia:</p>

          <p>Atentamente: DankGaming Online Team</p>
          </blockquote> 
        </div>
      </div>
    </div>
  </div>
    </Layout>
  )
}

export default Home

import React from 'react'
import {Link} from 'react-router-dom'
import Layout from '../../components/Layout/'
import Course from './Games'
import api from '../../helpers/api'

class Games extends React.Component {
  state = {process: false, list: []}
  componentDidMount = () => {
    this.load()
  }
  load = () => {
    this.setState({process: true}, () => {
      api('Games')
      .then(res => this.setState({process: false, list: res.data}))
      .catch(err => {
        console.log(err);
        this.setState({process: false, err: err.message})
      })
    })
  }
  render = () => {
    const emptyEl = <div>No hay Juegos</div>
    return (
      <Layout>
        <h1>Juegos</h1>
        <div className="text-right">
          <Link className="btn-lazyfy" to='/Games/new'>Agregar Juego +</Link>
        </div>
        <div className="col-md-6">
          {this.state.process ? <div>Cargando...</div> : null}
          {this.state.list.length
            ? this.state.list.map(course => <Course key={course._id} {...course} />)
            : emptyEl}
        </div>
      </Layout>
    )
  }
}

export default Games

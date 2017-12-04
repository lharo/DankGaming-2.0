import React from 'react'
import {Link} from 'react-router-dom'

const Games = props => (
    <div className="row myItemList">
      <Link to={'/Games/' + props._id}>
        <div>Nombre del Juego: {props.name}</div>
      </Link><br /><br />
    </div>
)

export default Games

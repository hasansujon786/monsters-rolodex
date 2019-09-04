import React from 'react'
import './Card.css'

const Card = props => {
  const { monster } = props
  return (
    <div className="card" tabIndex="0">
      <img src={`https://robohash.org/${monster.id}?set=set2`} alt="" />
      <p className="card__name">{monster.name}</p>
      <p className="card__email">{monster.email}</p>
    </div>
  )
}

export default Card

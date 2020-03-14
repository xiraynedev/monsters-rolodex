import React from 'react'
import './CardList.styles.css'
import Card from '../Card/Card'

export default function CardList({ monsters }) {
    return (
        <div className='card-list'>
            {monsters.map(monster => {
                return <Card key={monster.id} monster={monster} />
            })}
        </div>
    )
}




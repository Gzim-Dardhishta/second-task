import React from 'react'
import "./domains.css"

function DomainCards( {cards} ) {
  return (
    <div className='body'>
        <div className="card-wrapper">
            {cards.map((card) => (
                <div className="card-info">
                    <h2 className='domain'>{ card.domain }</h2>
                    <h3 className='price'>{ card.price }</h3>
                    <p className='old-price'> { card.oldPrice}</p>
                    <button className='buy-button'>Buy Now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default DomainCards
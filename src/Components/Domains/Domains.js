import React, { useState } from 'react'
import DomainCards from './DomainCards';

function Domains() {

    const [domains, setDomains] = useState([
        {
            id: 1,
            domain: '.COM',
            price: '$5.99/yr',
            oldPrice: 'Insted of $10.99/yr'
        },
        {
            id: 2,
            domain: '.AI',
            price: '$55.99/yr',
            oldPrice: 'Insted of $10.99/yr'
        },
        {
            id: 3,
            domain: '.NET',
            price: '$7.99/yr',
            oldPrice: 'Insted of $10.99/yr'
        },
        {
            id: 4,
            domain: '.HEALTH',
            price: '$7.99/yr',
            oldPrice: 'Insted of $10.99/yr'
        },
        {
            id: 5,
            domain: '.CO.UK',
            price: '$3.99/yr',
            oldPrice: 'Insted of $10.99/yr'
        },
        {
            id: 6,
            domain: '.ORG',
            price: '$15.99/yr',
            oldPrice: 'Insted of $10.99/yr'
        },
        {
            id: 7,
            domain: '.CO',
            price: '$26.33/yr',
            oldPrice: 'Insted of $10.99/yr'
        },
        {
            id: 8,
            domain: '.SEA',
            price: '$26.33/yr',
            oldPrice: 'Insted of $10.99/yr'
        },
    ]);

  return (
    <div>
        <DomainCards cards = {domains}/>
    </div>
  )
}

export default Domains;
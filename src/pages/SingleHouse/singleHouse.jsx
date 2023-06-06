import React from 'react'
import Card from '@mui/material/Card'
import CardAge from '../../components/card/card'
import './singleHouse.css'

export default function singleHouse() {
  return (
    <div className="container">
     
    <div className= "singleHouse">
    <Card className='card'>
   <CardAge />
   </Card>
   <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione iusto exercitationem in quam eius minima sunt sit laborum natus nihil. Dolores praesentium minima voluptatibus temporibus nihil ut eligendi quod iste, maxime autem ullam distinctio, ipsa et labore quas ipsum veniam?</p>
    </div>
    </div>
  )
}


import React, {useState} from 'react'
// import Card from '@mui/material/Card'
// import CardContent from  '@mui/material/CardContent'
// import CardMedia from '@mui/material/CardMedia';
// import CardActionArea from '@mui/material/CardActionArea'
// import CardActions from '@mui/material/CardActions';
// import Typography from '@mui/material/Typography'
import {Card, CardContent, CardMedia, CardActionArea, CardActions , Typography, Rating, Box } from '@mui/material'
import house from '../../assets/house1.jpg'
import './card.css'

export default function CardAge() {
  const [value, setValue] = useState(2)
  const[visible, setVisible] = useState(false)
  const handleClick = ()=>{
    setVisible(!visible)
  }
  return (
    
        <CardActionArea>
       
          <CardMedia className="cardMedia"
          component='img'
          height='300'
          image={house}
          alt='house'
           />
          <CardContent className="cardContent">
          {/* <CardActions onClick={handleClick}>Description</CardActions> */}
          <Typography className='descriptionC'>Lorem ipsum dolor sit, amet consectetur adipisicing elit </Typography>
          
        </CardContent>
        <Box className="box">
        <Typography>$3000pmr</Typography>
        <Rating name="simple-controlled" value={value} onChange={(event, newValue)=>setValue(newValue)}></Rating>
        </Box>
        </CardActionArea>
        
 
  )
}

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchHouse } from '../../features/house/houseSlice'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import  CardActions from '@mui/material/CardActions';
import CardAge from '../../components/card/card'
import Loading from '../../components/Loading/loading'
import './house.css'



export default function house() {

  const dispatch = useDispatch();
  const { house } = useSelector((state) => state.house)
  useEffect(() => {
    dispatch(fetchHouse())
  }, [dispatch])
 

  return (
    <div className='container'>
      <aside className="aside">
        <div><p>hello I am here</p></div></aside>
    <div className='scrolling-wrapper'>
       
      {house.length > 0 ? house.map((h) => (
        <Card key={h.id} className='card' >
          <CardAge />
          <CardActions>
            <Link to={{ pathname: "/singleHouse", state: { ...h } }}>Get data</Link>
          </CardActions>

        </Card>))
        : <Loading />}
       </div>
        </div>

  )
}

import React from 'react'
import { Card } from 'react-bootstrap'

const MovieCard=({movie})=>{
return (
    <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.PosterUrl} />
  <Card.Body>
    <Card.Title>{movie.Title}</Card.Title>
    <Card.Text>
      {movie.Description}
    </Card.Text>
  </Card.Body>
</Card>  
    </div>
  )
}

export default MovieCard

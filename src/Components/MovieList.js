import React from 'react'
import MovieCard from './MovieCard'
import './MovieList.css'

const MovieList = ({ movies }) => {
    return (
      <div
         className='movielist'>

     
    {movies.map(movie =>  
      <MovieCard movie={movie} key={movie.id}/>
 
      
    )}
      
  </div>
  )
}

export default MovieList
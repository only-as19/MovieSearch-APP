import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className='mb-5 py-7 px-10 bg-white shadows rounded-md md:flex'>
            <img className='block mx-auto mb-8 md:mb-0 ' src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt="" />
            <div className='md:ml-10'>
              <h2 className='text-4xl font-bold mb-3'>{movie.title}</h2>
              <h4 className='text-small'>Release Date : {movie.release_date}</h4>
              <h3 className='text-small'>IMDB Rating : {movie.vote_average === 0 ? ("Not Available"):(movie.vote_average)}</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
  )
}

export default MovieCard

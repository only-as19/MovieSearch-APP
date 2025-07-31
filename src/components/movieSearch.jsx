import React from 'react'

const MovieSearch = () => {
  return (
    <div>
      <form 
           
            
          >
            <label 
                htmlFor="query"
                
                >Movie Name
            </label>
                <input 
                type="text" 
                name='query' placeholder='i.e Jurassic Park' 
                
                
                />
            <button type='submit'
                
                >Search
            </button>
      </form>
    </div>
  )
}

export default MovieSearch

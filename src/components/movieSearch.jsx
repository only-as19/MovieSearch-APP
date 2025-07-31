import React from 'react'

const MovieSearch = () => {

    const[query,setQuery] = useState("")
    const handleChange = (event)=>{
    setQuery(event.target.value)
  }

  return (
    <div>
      <form 
            className='grid text-2xl md:grid-cols-[auto_1fr_auto] md:items-center md:gap-4'
            onSubmit={searchMovies}
          >
            <label 
                htmlFor="query"
                className='mb-3'
                >Movie Name
            </label>
                <input 
                type="text" 
                name='query' placeholder='i.e Jurassic Park' 
                className='border text-2xl py-3 px-5 rounded-3xl outline-none mb-2'
                value={query}
                onChange={handleChange}
                />
            <button type='submit'
                className='border border-[rgba(0,0,0,0.75)] text-2xl py-3 px-5 rounded-3xl bg-[rgba(0,0,0,0.75)] text-white transition-all duration-300 hover:bg-[rgba(0,0,0,0.85)]'
                >Search
            </button>
      </form>
    </div>
  )
}

export default MovieSearch

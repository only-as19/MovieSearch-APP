import MovieSearch from "./components/movieSearch"

const App = ()=>{
  return(
    <>
    <main>
      <div className="p-10 max-w-xl mx-auto uppercase">
      <h1 className="text-center">React Movie Search </h1>
      <MovieSearch />
      </div>
    </main>
    </>
  )
}

export default App
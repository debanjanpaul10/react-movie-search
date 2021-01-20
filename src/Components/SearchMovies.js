import React, { useState } from "react"
import MovieCards from "./MovieCards"

export default function SearchMovies() {

    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    
    const searchMovies = async (event) => {
        event.preventDefault()
        console.log("Submitted")

        const APIurl = `https://api.themoviedb.org/3/search/movie?api_key=ad478db1540740d29a1643b921c28222&language=en-US&query=${query}&page=1&include_adult=false`

        try {
            const res = await fetch(APIurl)
            const data = await res.json()
            setMovies(data.results)
        }
        catch (err) {
            console.log(err)
        }
        
    }
    
    return (
        <div>
            <div className="searching">
                <form className="form" onSubmit={searchMovies}>
                    <label className="label" htmlFor="query">Movie Name</label>
                    <input 
                        className="input" 
                        type="text" 
                        name="query"
                        placeholder="i.e., Jurassic Park"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <button className="button" type="submit">Search!</button>
                </form>
            </div>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCards key={movie.id} movie={movie} />
                ))}    
            </div>
        </div>
    )
}
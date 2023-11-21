import { useState } from "react"
import { moviesData } from "../../fakeAPI"
import MovieCard from "../MovieCard/MovieCard"

const MoviesList = () => {

    const [movies, setMovies] = useState(moviesData)

    const removeMovie = movieToDelete => {
        const newMovies = movies.filter(elm => elm._id != movieToDelete)
        setMovies(newMovies)
    }

    const addMovie = () => {
        const newMovie = { title: 'Pirañaconda', director: 'Bardem', _id: '8746IKGH', hasOscars: true, IMDBRating: 9 }

        // Saco una copia liviana (los array se pasan por referencia, no por valor!)
        const moviesCopy = [...movies]

        // Manipuilo la copia (unshift NO retorna un nuevo array, muta el original)
        moviesCopy.unshift(newMovie)

        // Actualizo el estado con la copia mutada
        setMovies(moviesCopy)
    }


    return (
        <section className="MoviesList">

            <h1>Listado de películas</h1>
            <br />
            <button onClick={addMovie}>Meter nueva peli (OJO!)</button>
            <br />
            <br />
            {
                movies.map(eachMovie => {
                    return (
                        <MovieCard key={eachMovie._id} {...eachMovie} removeMovie={removeMovie} />
                    )
                })
            }
        </section>
    )
}

export default MoviesList
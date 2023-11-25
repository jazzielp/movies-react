import PropTypes from 'prop-types'
// import { useState } from 'react'
import { getFromStorage } from '../helpers/SaveToStorage'
import Card from './Card'
function List({ movies, setMovies }) {
    // const [editMovie, setEditMovie] = useState(null)
    const deleteMovie = (id) => {
        const moviesStorage = getFromStorage('movies')
        const newMovies = moviesStorage.filter((movie) => movie.id !== id)
        localStorage.setItem('movies', JSON.stringify(newMovies))
        setMovies(newMovies)
    }



    return (
        <>
            {
                movies.length === 0
                    ? <p>No hay peliculas</p>
                    : movies.map((movie) => (
                      <Card key={movie.id} movie={movie} deleteMovie={deleteMovie} />
                    ))
            }
        </>
    )
}

List.propTypes = {
    movies: PropTypes.array.isRequired,
    setMovies: PropTypes.func.isRequired
}

export default List
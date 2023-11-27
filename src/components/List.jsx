import PropTypes from 'prop-types'
import { useState } from 'react'
import { getFromStorage } from '../helpers/SaveToStorage'
import Card from './Card'
import Form from './Form'
function List({ movies, setMovies }) {
    // State to edit a movie
    const [editedMovie, setEditedMovie] = useState(1700934487880)

    // Function to delete a movie
    const deleteMovie = (id) => {
        const moviesStorage = getFromStorage('movies')
        const newMovies = moviesStorage.filter((movie) => movie.id !== id)
        localStorage.setItem('movies', JSON.stringify(newMovies))
        setMovies(newMovies)
    }

    // Function to edit a movie
    const editMovie = (id) => {
        if (id) {
            setEditedMovie(id)
        }
    }

    return (
        <>
            {
                movies.length === 0
                    ? <p>No hay peliculas</p>
                    : movies.map((movie) => (
                        <article className="peli-item" key={movie.id}>
                            { editedMovie === movie.id
                                ? <Form key={movie.id} movie={movie} />
                                : <Card key={movie.id} movie={movie} deleteMovie={deleteMovie} editMovie={editMovie} />
                            }
                        </article>
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
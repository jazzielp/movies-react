import { useEffect, useState } from "react"

function List() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const moviesStorage = getMovies()
        setMovies(moviesStorage)
    }, [])

    const getMovies = () => {
        const movies = JSON.parse(localStorage.getItem('movies')) || []
        return movies
    }

    return (
        <>
            {/* aqui van las peliculas */}
            {
                movies.length === 0
                    ? <p>No hay peliculas</p>
                    : movies.map((movie, index) => (
                        <article className="peli-item" key={index}>
                            <h3 className="title">{movie.title}</h3>
                            <p className="description">{movie.description}</p>

                            <button className="edit">Editar</button>
                            <button className="delete">Borrar</button>
                        </article>
                    ))
            }
        </>
    )
}

export default List
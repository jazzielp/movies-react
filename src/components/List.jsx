import PropTypes from 'prop-types'
function List({ movies }) {

    return (
        <>
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

List.propTypes = {
    movies: PropTypes.array.isRequired
}

export default List
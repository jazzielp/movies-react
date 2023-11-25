import propTypes from 'prop-types'
function Card({ movie, deleteMovie}) {
    return (
        <article className="peli-item" key={movie.id}>
            <h3 className="title">{movie.title}</h3>
            <p className="description">{movie.description}</p>

            <button className="edit">Editar</button>
            <button className="delete" onClick={() => deleteMovie(movie.id)}>Borrar</button>
        </article>
    )
}
Card.propTypes = {
    movie: propTypes.object.isRequired,
    deleteMovie: propTypes.func.isRequired
}

export default Card
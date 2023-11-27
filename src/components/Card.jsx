import propTypes from 'prop-types'
function Card({ movie, deleteMovie, editMovie }) {
    return (

        <>
            <h3 className="title">{movie.title}</h3>
            <p className="description">{movie.description}</p>

            <button className="edit" onClick={() => editMovie(movie.id)}>Editar</button>
            <button className="delete" onClick={() => deleteMovie(movie.id)}>Borrar</button>
        </>
    )
}
Card.propTypes = {
    movie: propTypes.object.isRequired,
    deleteMovie: propTypes.func.isRequired,
    editMovie: propTypes.func.isRequired,
}

export default Card
import '../public/css/styles.css'
import { useState, useEffect } from 'react'
import List from './components/List'
import Searcher from './components/Searcher'
import { getFromStorage } from './helpers/SaveToStorage'
import Add from './components/Add'

function App() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const moviesStorage = getFromStorage('movies')
        setMovies(moviesStorage)
    }, [])
    return (
        <>
            <div className="layout">
                {/* Cabecera */}
                <header className="header">
                    <div className="logo">
                        <div className="play"></div>
                    </div>

                    <h1>MisPelis</h1>
                </header>

                {/* Barra de navegación */}
                <nav className="nav">
                    <ul>
                        <li><a href="/#">Inicio</a></li>
                        <li><a href="/#">Peliculas</a></li>
                        <li><a href="/#">Blog</a></li>
                        <li><a href="/#">Contacto</a></li>
                    </ul>
                </nav>

                {/* Contenido principal */}
                <section id="content" className="content">

                    <List movies={movies} setMovies={setMovies} />

                </section>

                {/* Barra lateral */}
                <aside className="lateral">
                    <Searcher />
                    <Add setMovies={setMovies}/>
                </aside>

                {/* Pie de página */}
                <footer className="footer">
                    &copy; Máster en React - <a href="https://victorroblesweb.es">victorroblesweb.es</a>
                </footer>

            </div>

        </>
    )
}

export default App

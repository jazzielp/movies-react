export const saveToStorage = (key, item) => {
    localStorage.setItem(key, JSON.stringify(item))
}

export const getFromStorage = (key) => {
    return JSON.parse(localStorage.getItem(key)) || []
}

export const addMovie = (movie) => {
    const movies = getFromStorage('movies')
    movies.push(movie)
    return movies
}
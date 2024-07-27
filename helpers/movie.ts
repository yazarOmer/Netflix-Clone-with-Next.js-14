import { db } from "@/lib"
import { movies as movieData } from "@/constants/movies"

export const createMovieData = async () => {
    try {
        const movies = await db.movie.createMany({
            data: movieData
        })

        return movies
    } catch (error) {
        console.log(error)
    }
}

export const getRandomMovie = async () => {
    try {
        const movieCount = movieData.length
        const randomIndex = Math.floor(Math.random() * movieCount)

        // const randomMovie = await db.movie.findMany({
        //     take: 1,
        //     skip: randomIndex
        // })
        const movies = await db.movie.findMany()
        const movie = movies[randomIndex]

        return movie
    } catch (error) {
        console.log(error)
    }
}

export const getMovies = async () => {
    try {
        const movies = await db.movie.findMany({})

        return movies
    } catch (error) {
        console.log(error)
    }
}
import React from 'react'
import { createContext, useContext, useState, useEffect } from 'react'

const MovieContext = createContext();

// berfungsi untuk mengakses data dari MovieContext
export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {

    const [favorite, setFavorite] = useState([]);

    // Menyimpan data favorite ke local storage
    useEffect(() => {
        const storedFavorite = localStorage.getItem("favorite");
        if (storedFavorite) setFavorite(JSON.parse(storedFavorite));
    }, []);

    // Menyimpan perubahan data favorite ke Local Storage
    useEffect(() => {
        localStorage.setItem("favorite", JSON.stringify(favorite));
    }, [favorite]);

    const addFavorite = (movie) => {
        setFavorite(prev => [...prev, movie]);
    }

    const removeFavorite = (movieId) => {
        setFavorite(prev => prev.filter(movie => movie.id !== movieId));
    }

    const likeMovie = (movieId) => {
        return favorite.some(movie => movie.id === movieId);
    }

    const value = {
        favorite,
        addFavorite,
        removeFavorite,
        likeMovie,
    }

    return (
        <MovieContext.Provider value={value}>
            {children}
        </ MovieContext.Provider> 
    )
}
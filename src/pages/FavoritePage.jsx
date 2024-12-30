import React, { useState } from 'react'
import "../css/Favorite.css"
import { useMovieContext } from '../Context/MovieContext';
import MovieCard from '../components/MovieCard';

const FavoritePage = () => {

  const { favorite } = useMovieContext();

  return (
    <>
    {/* Jika film favoritnya ada, maka aplikasi akan menampilkan daftar-daftar film favorit dari user */}
      { favorite.length > 0 ? (
      <div className='favorite'>
        <h2 className='film-favorit'>Film Favorit anda</h2>
          <div className="movie-list">
            {favorite.map((item) => (
              <MovieCard item={item} key={item.id} />
            ))}
          </div>
      </div>
      ) : (
        <div className="favorites-empty">
            <h1>Belum ada film favorit disini!</h1>
            <p>Tambahkan film favorit anda, maka akan muncul disini</p>
        </div>
      ) }     
    </>
  )

}

export default FavoritePage
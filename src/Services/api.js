const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export async function getMovies() {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`) // ---> function fetch() digunakan untuk mengirim permintaan HTTP ke server.
    const data = await response.json()  // ---> function json() digunakan untuk mengubah data yang diterima dari server yaitu 'response' menjadi format JSON.
    return data.results; // ---> data.results adalah data yang akan diambil dari hasil akhir response.
};

export async function searchMovies(query) {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`); // --> query yang diinputkan oleh user pada komponen search bar akan di encode menggunakan function encodeURIComponent().
    const data = await response.json();
    return data.results;
};
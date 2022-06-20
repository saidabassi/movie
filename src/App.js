import { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./Components/MovieList";
import { moviesData } from "./Components/MovieData";
import { AddMovie } from "./Components/AddMovie";
import FilterByName from "./Components/FilterByName";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Error from "./Components/Error";
import { Routes,Route } from "react-router-dom";
// import Filter from './Components/Filtre';

function App() {
  // variables declaration step 1: passing props movies

  const [movies, setMovies] = useState(moviesData);
  // props add
  const add = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  const [inputSearch, setInputSearch] = useState("");
  // useEffect(() => {
  //   const inputSearch = movies.filter(movies =>
  //     movies.toLowerCase().includes(inputSearch.toLocaleLowerCase)
  //     );
  //     setInputSearch(movies);
  //   }, [inputSearch]);
  
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} exact />
          <Route path="/Route" element={<Error />} />
        </Routes>
        <FilterByName inputSearch={inputSearch} />
        <MovieList movies={movies} />
        {/* <Filter movies={movies} /> */}
        <AddMovie add={add} />
        <Footer />
      </div>
    );
  }

export default App

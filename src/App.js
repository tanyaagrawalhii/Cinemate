
import './App.css';

import {BrowserRouter , Routes,Route} from 'react-router-dom';
import Header from './components/header/Header';
import MovieList from './components/movieList/MovieList';
import Home from './pages/home/home.js';
import MovieDetails from './pages/home/movieDetails/MovieDetails';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element ={<Home/>}></Route>
          <Route path="movie/:id" element={<MovieDetails/>} ></Route>
          <Route path="movies/:type" element={<MovieList/>}></Route>
          <Route path="/*" element={<h1>Error page</h1>}></Route>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.scss';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    
    console.log(movies)

    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    this.getMovies();
  }

  render () {
    const { isLoading, movies } = this.state;
    const loading = isLoading ?
      <div className="loader">
        <div className="loader__text">
          <img src="/loading.gif" alt="loading" title="loading"/>
        </div>
      </div>
      : '';
    return (
      <section className="container">
        {loading}
        <div className="movies">
        {movies.map((movie) => {
          console.log(movie);
          return ( 
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          );
        })}
        </div>
      </section>
    ) 
  }
}

export default App;
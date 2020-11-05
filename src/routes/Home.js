import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.scss';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    naver: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    
    this.setState({ movies, isLoading: false });
  }

  getNaverMovies = async () => {
    const config = {
      headers: {
        'X-Naver-Client-Id': 'kLeil_DjkJr9R_PwXo0f',
        'X-Naver-Client-Secret': 'HvjkFKOTeW'
      }
    }
    const {
      data : {
        data: { naver },
      },
    } = await axios.get('https://openapi.naver.com/v1/search/movie.xml', config);
    console.log('네이버', naver)
  }

  componentDidMount() {
    // Redux 넣기
    // if (this.state.movies.length === 0 ) {
      this.getMovies();
      this.getNaverMovies();
    // }
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

export default Home;
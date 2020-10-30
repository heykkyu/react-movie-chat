import React from 'react';
import './Detail.scss';
import '../components/Movie.scss';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }

  render() {
    console.log(this.props)
    const { poster, title, year, genre, summary } = this.props.location.state;
    return (
      <div className="movie__wrapper">
        <div className="movie">
          <img src={poster} alt={title} title={title}></img>
            <div className="movie__data">
              <h3 className="movie__title">{title}</h3>
              <h5 className="movie__year">{year}</h5>
              <ul className="movie__genres">
                {genre}
              </ul>
              <p className="movie__summary">{summary}</p>
            </div>
        </div>
      </div>
    )
  }
} 

export default Detail;
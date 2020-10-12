import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}) {
  return (
    <div>
      <h1>I like {name} </h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  );
}

const foodILike = [
  {
    id:1,
    name: '김치',
    image: 'https://www.fossmint.com/wp-content/uploads/2019/08/Free-Logo-Maker-and-Creator.png',
    rating: 5,
  },
  {
    id:2,
    name: '김치2',
    image: 'https://www.fossmint.com/wp-content/uploads/2019/08/Free-Logo-Maker-and-Creator.png',
    rating: 3,
  },
  {
    id:3,
    name: '김치3',
    image: 'https://www.fossmint.com/wp-content/uploads/2019/08/Free-Logo-Maker-and-Creator.png',
    rating: 1,
  },
  {
    id:4,
    name: '김치4',
    image: 'https://www.fossmint.com/wp-content/uploads/2019/08/Free-Logo-Maker-and-Creator.png',
    rating: 4.9,
  },

];


function App() {
  return (
    <div>
      {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

export default App;

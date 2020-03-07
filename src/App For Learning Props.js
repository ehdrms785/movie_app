import React from 'react';
import PropTypes from "prop-types";


const foodILike = [
  { 
    id: 1,
    name: "DduckGuk",
    image: "https://www.koreanbapsang.com/wp-content/uploads/2019/01/DSC7570-3-e1577862721959.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Kimbab",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2016/04/08/1d26c0444e724bca8ed271b24da0057a1.jpg",
    rating: 3.5
  }
]; 

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like { name }</h2>
      <h4>{rating}/5</h4>
      <img src = { picture } alt= {name}/>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};


function App() {
  return (
    <div className="App">
      {foodILike.map(dish => (
          <Food key = {dish.id} 
                name = {dish.name} 
                picture = {dish.image}
                rating = {dish.rating} />
      ))}
    </div>

  );
}

export default App;

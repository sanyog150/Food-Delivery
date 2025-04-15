import React, { useContext } from 'react';
import './FoodDisplay.css';
import { UserContext } from '../../Context';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = () => {
  const { food_list, category } = useContext(UserContext);
  // console.log(food_list);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list
          .filter((item) => category === 'All' || item.category === category)
          .map((item, index) => (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
};

export default FoodDisplay;

import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';
import Search from './Components/Search';



function App() {
  const [foodList, setFoodList] = useState(foods);
  const [foodDisplay, setFoodDisplay] = useState(foods)

  const addNewFood = (newFood) => {
    const updatedFood = [...foodList, newFood];
    setFoodList(updatedFood);
    setFoodDisplay(updatedFood);
  };


  const searchFilter = (searchQuery) => {
    let filteredFoods = foodList.filter((food) =>
      food.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    console.log(filteredFoods);
    setFoodDisplay(filteredFoods);
  };
  


  const deleteFood = (foodName) => {
    const filteredFoods = foodList.filter((food) => {
      return food.name !== foodName;
    });
    setFoodDisplay(filteredFoods);
  };

  return (

    <div>
      <h1>Food List</h1>
      
      <AddFoodForm newFood={addNewFood}/>
      <Search search={searchFilter} />

      {
        foodDisplay.map((item) => {
          return(
            <div>
            <FoodBox clickToDelete={deleteFood} food={item} />
          </div>
          )
          
        })}

      
        
    </div>

  );
}

export default App;

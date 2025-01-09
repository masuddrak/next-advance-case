import React from "react";
import Meal from "./meal";

const Meals = ({ meals }) => {
  return (
    <article>
      {meals.map((meal) => (
        <Meal key={meal.idMeal} meal={meal}></Meal>
      ))}
    </article>
  );
};

export default Meals;

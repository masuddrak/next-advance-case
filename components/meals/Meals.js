import React from "react";
import Meal from "./meal";

const Meals = async ({ meals }) => {
  return (
    <article className="grid grid-cols-4 gap-5">
      {meals.map((meal) => (
        <Meal key={meal.idMeal} meal={meal}></Meal>
      ))}
    </article>
  );
};

export default Meals;

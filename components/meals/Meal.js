// import Image from "next/image";
import React from "react";
const Meal = ({ meal }) => {
  return (
    <div className="space-y-4">
      {/* <Image src={meal.strMealThumb} alt="meals image" priority fill></Image> */}
      <h1>elli</h1>
      <p>{meal.strInstructions}</p>
      <p>{meal.strArea}</p>
    </div>
  );
};

export default Meal;

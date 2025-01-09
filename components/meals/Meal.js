import Image from "next/image";
import React from "react";
const Meal = ({ meal }) => {
  return (
    <div className="space-y-1 shadow-lg p-1 rounded-md">
      <Image
        src={`${meal.strMealThumb}`}
        alt="meals image"
        width={500}
        height={400}
        className="w-[400px] h-[250px] object-cover"
        priority
      />
      <p className="text-xl font-medium text-primary">{meal.strArea}</p>
      <p>
        {meal.strInstructions.slice(0, 50)}....
        <span className=" text-primary cursor-pointer">read more</span>
      </p>
    </div>
  );
};

export default Meal;

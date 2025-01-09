import Meals from "@/components/meals/Meals";
import MealsHeader from "@/components/meals/MealsHeader";
import { GetMeals } from "@/lib/GetMeals";
import React from "react";

const MealsPage = async () => {
  const { meals } = await GetMeals();
  return (
    <>
      <header className="my-10">
        <MealsHeader></MealsHeader>
        <Meals meals={meals}></Meals>
      </header>
    </>
  );
};

export default MealsPage;

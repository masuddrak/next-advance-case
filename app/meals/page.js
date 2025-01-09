import React, { Suspense } from "react";

import Meals from "@/components/meals/Meals";
import MealsHeader from "@/components/meals/MealsHeader";
import { GetMeals } from "@/lib/GetMeals";
const MealContainer = async () => {
  const { meals } = await GetMeals();
  return <Meals meals={meals} />;
};
const MealsPage = async () => {
  return (
    <>
      <header className="my-10 space-y-5">
        <MealsHeader></MealsHeader>
        <Suspense fallback={<p className="text-2xl">Loading............</p>}>
          <MealContainer />
        </Suspense>
      </header>
    </>
  );
};

export default MealsPage;

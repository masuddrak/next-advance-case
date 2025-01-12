import Link from "next/link";
import React from "react";

const MealsHeader = () => {
  return (
    <>
      <header className="w-1/2 space-y-2">
        <h1 className="text-5xl font-bold">
          Easy dinner <span className="text-primary">recipes</span>
        </h1>
        <p>
          Save yourself stress in the kitchen with our easy dinner ideas, from
          fresh tacos and hearty pasta bakes to warming curries and simple
          traybakes everyone will love.
        </p>
        <p className="mt-11">
          <Link
            href="/meals/sheard"
            className="text-xl text-black bg-primary font-semibold px-3 py-1 rounded-sm"
          >
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
    </>
  );
};

export default MealsHeader;

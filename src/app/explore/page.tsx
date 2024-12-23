import React from "react";
import Image from "next/image";
import { recipes } from "./data";
import Link from "next/link";

function ExploreMore() {

  return (
    <main className="bg-gray-50 min-h-screen font-[sans-serif]">
      {/* Header */}
      <header className="bg-pink-500 text-white py-10 px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Explore More Recipes</h1>
        <p className="text-lg">Find inspiration for your next meal!</p>
      </header>

      {/* Recipes Grid */}
      <section className="py-10 px-8 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <Link key={recipe.id} href={`/explore/${recipe.item}`}>
            <div
              key={recipe.id}
              className="bg-white rounded shadow-md overflow-hidden transition-transform transform hover:scale-105"
            >
              <Image
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 mb-2">
                  {recipe.title}
                </h2>
                <p className="text-sm text-pink-500 uppercase font-semibold">
                  {recipe.category}
                </p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-200 py-6 px-8 lg:px-24 text-center">
        <h3 className="text-xl font-semibold mb-2">Looking for something specific?</h3>
        <p className="mb-4">
          Use the search bar or explore categories to find your favorite recipes.
        </p>
        <button className="bg-pink-500 text-white font-bold px-6 py-2 rounded hover:bg-pink-600">
          Search Recipes
        </button>
      </section>
    </main>
  );
}

export default ExploreMore;

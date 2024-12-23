import React from "react";
import Image from "next/image";
import recipeImage from "../images/pancake.jpg";
import recipeImage2 from "../images/pancake2.jpg";
import Link from "next/link";

function RecipePage() {
  return (
    <main className="bg-gray-50 min-h-screen font-[sans-serif]">
      {/* Recipe Header */}
      <header className="relative w-full h-64">
        <Image
          src={recipeImage}
          alt="Recipe Image"
          layout="fill"
          objectFit="cover"
          className="rounded-b-lg lg:hidden block md:hidden"
        />
        <Image
          src={recipeImage2}
          alt="Recipe Image"
          layout="fill"
          objectFit="cover"
          className="rounded-b-lg lg:block hidden md:block"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold mainName lg:text-[50px]">Classic Pancakes</h1>
        </div>
      </header>

      {/* Recipe Content */}
      <section className="px-8 py-6 lg:px-24 lg:py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>1 cup of flour</li>
            <li>2 tablespoons of sugar</li>
            <li>1/2 cup of milk</li>
            <li>2 eggs</li>
            <li>1 teaspoon of vanilla extract</li>
            <li>1/4 teaspoon of salt</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Preheat the oven to 350°F (175°C).</li>
            <li>Mix the flour, sugar, and salt in a large bowl.</li>
            <li>Whisk the milk, eggs, and vanilla in another bowl.</li>
            <li>Combine the wet and dry ingredients until smooth.</li>
            <li>Pour the mixture into a greased baking dish.</li>
            <li>Bake for 30-35 minutes or until golden brown.</li>
            <li>Let it cool before serving. Enjoy!</li>
          </ol>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Tips</h2>
          <p className="text-gray-700">
            For a richer flavor, consider adding a pinch of cinnamon or nutmeg. You
            can also substitute almond milk for a dairy-free version.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-pink-500 text-white py-6 px-8 lg:px-24 text-center">
        <h3 className="text-xl font-semibold mb-2">Loved this recipe?</h3>
        <p className="mb-4">
          Share your experience and tag us on social media with
          <span className="font-bold"> #GourmetDiaries</span>
        </p>
        <button className="bg-white text-pink-500 font-bold px-6 py-2 rounded hover:bg-gray-100">
          <Link href={'/explore'}>Explore More Recipes</Link>
        </button>
      </section>
    </main>
  );
}

export default RecipePage;

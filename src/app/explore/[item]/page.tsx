import Image from "next/image";
import { recipes } from "../data"
import { notFound } from "next/navigation";
export async function generateStaticParams(){
    return(
        recipes.map((e)=>({
            item: e.item
        }))
    )
}

export default function Recipes ({params}:{params:{item:string}}){
    const post = recipes.find((e)=> e.item === params.item)

      if (!post) {
        notFound();
      }
    
      return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center mb-6">
            <Image
              src={post.image}
              alt={post.title}
              className="w-1/3 rounded-lg shadow-lg"
            />
            <div className="ml-6">
              <p className="text-gray-600 mb-2">{post.description}</p>
              <p className="text-gray-500">
                <span className="font-semibold">Author: </span>
                {post.author}
              </p>
              <p className="text-gray-500">
                <span className="font-semibold">Date: </span>
                {post.date}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {/* Ingredients Section */}
            <div>
              <h2 className="text-2xl font-bold mb-3 text-teal-600">Ingredients</h2>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                {post.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
    
            {/* Instructions Section */}
            <div>
              <h2 className="text-2xl font-bold mb-3 text-teal-600">Instructions</h2>
              <ol className="list-decimal pl-6 space-y-2 text-lg text-gray-700">
                {post.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </div>
          </div>
    
          {/* Footer */}
          <div className="mt-6 border-t pt-4 text-center">
            <p className="text-gray-600">
              Did you make this recipe? Tag us on Instagram with{" "}
              <span className="text-teal-600 font-bold">@GourmetDiaries</span>.
            </p>
          </div>
        </div>
      );
    }

    
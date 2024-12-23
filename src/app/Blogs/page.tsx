import React from "react";
import { blogs } from "./cards";
import Image from "next/image";
import Link from "next/link";

const BlogListPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <section className="text-center mb-10">
        <h1 className="text-5xl font-extrabold mainName text-pink-600 ">Gourmet Diaries</h1>
        <p className="text-lg text-gray-600">
          Explore the most delicious and trending recipes and know interesting informations about them!
        </p>
      </section>

      <div className="grid grid-cols-1 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
          >
            {/* Image Section */}
            <div className="flex-shrink-0 w-full md:w-1/3">
              <Image
                src={blog.image}
                alt={blog.title}
                className="w-full h-[300px] object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col justify-between w-full">
              <div>
                {/* Title and Description */}
                <h2 className="lg:text-3xl md:text-3xl text-2xl font-semibold text-gray-800 lg:leading-[60px] md:leading-[60px]">{blog.title}</h2>
                <p className="text-lg text-pink-600 font-bold">{blog.tagline}</p>
                <p className="mt-2 text-gray-600 text-sm line-clamp-4">
                  {blog.description}
                </p>
              </div>

              {/* Ratings, Views, Comments, and Button */}
              <div className="mt-4 flex lg:flex-row md:flex-row flex-col justify-between lg:items-center md:items-center text-sm text-gray-500 lg:space-x-4 md:space-x-4 lg:space-y-0 md:space-y-0 space-y-4">
                <div className="flex flex-col text-gray-500 space-y-2">
                  <span>⭐ {blog.rating}</span>
                  <span>👁 {blog.views} Views</span>
                  <span>💬 {blog.comments} Comments</span>
                </div>

                {/* View Post Button */}
                <Link href={`/Blogs/${blog.id}`}>
                <button className="bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition">
                  View Post
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default BlogListPage;

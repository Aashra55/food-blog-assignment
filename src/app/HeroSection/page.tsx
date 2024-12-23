import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { posts } from './detail';
export function Cards() {
  
  return (
    <main className="py-10 lg:px-6 px-2">
      <h2 className="text-center lg:text-[40px] text-[24px] font-bold text-gray-800 lg:mb-6">Featured Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div key={index} className="post-card w-full p-4 hover:shadow-2xl border-[2px] rounded-sm">
            <div
              className="rounded overflow-hidden"
              style={{ borderTop: `4px solid ${post.color}` }}
            >
              <Image className="w-full h-80 object-cover" src={post.image} alt={post.title}/>
              <div className="lg:px-6 py-4">
                <div
                  className="text-sm font-bold uppercase tracking-wide"
                  style={{ color: post.color }}
                >
                  {post.category}
                </div>
                <h2 className="font-bold text-xl mt-2">{post.title}</h2>
              </div>
              <div className="lg:px-6 py-4">
              <Link key={index} href={`/HeroSection/${post.slug}`}>
                <button className="bg-pink-500 text-white font-semibold px-4 py-2 rounded hover:bg-pink-600">
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
}

export default Cards;

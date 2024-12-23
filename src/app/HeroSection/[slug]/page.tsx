import { notFound } from 'next/navigation';
import Image from 'next/image';
import { posts } from '../detail';
import ClientPostActions from './ClientPostActions'; // Import client component for client-side logic

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function PostDetail({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const renderList = (items: string[]) => (
    <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  return (
    <main className="py-12 px-6 lg:px-16 bg-gray-50">
      <article className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={800}
          className="w-full h-96 object-cover rounded-t-lg"
        />
        <div className="p-8">
          <p className="text-sm text-gray-500 uppercase font-medium mb-4">
            {post.category} - {post.date}
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <p className="text-md text-gray-600 italic mb-6">By {post.author}</p>
          <p className="text-lg text-gray-700 mb-6">{post.description}</p>

          {/* Ingredients Section */}
          <section className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ingredients</h3>
            {renderList(post.ingredients)}
          </section>

          {/* Instructions Section */}
          <section className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Instructions</h3>
            {renderList(post.instructions)}
          </section>

          {/* Tips Section */}
          <section className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tips</h3>
            {renderList(post.tips)}
          </section>

          {/* Variations Section */}
          <section className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Variations</h3>
            {renderList(post.variations)}
          </section>
        </div>

        {/* Client-Side Share Button */}
        <ClientPostActions post={post} />
      </article>
    </main>
  );
}

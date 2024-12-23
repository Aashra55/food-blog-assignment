'use client';

import React from 'react';

export default function ClientPostActions({ post }: { post: any }) {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: post.title,
          text: post.description,
          url: window.location.href,
        })
        .then(() => console.log('Shared successfully!'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      alert('Share functionality is not supported on this device.');
    }
  };

  return (
    <div className="mt-6 mb-6 text-center">
      <button
        onClick={handleShare}
        className="px-8 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-300"
      >
        Share This Post
      </button>
    </div>
  );
}

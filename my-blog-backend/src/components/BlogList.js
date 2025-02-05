import { useEffect, useState } from 'react';
import { getBlogPosts } from '../services/api';

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getBlogPosts();
      setPosts(data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <div key={post.id} className="border rounded-lg p-4">
          <h2 className="text-xl font-bold">{post.attributes.title}</h2>
          <p className="mt-2">{post.attributes.description}</p>
          {/* Add image if you have one */}
          {post.attributes.featuredImage?.data && (
            <img
              src={`http://localhost:1337${post.attributes.featuredImage.data.attributes.url}`}
              alt={post.attributes.title}
              className="w-full h-48 object-cover mt-4"
            />
          )}
        </div>
      ))}
    </div>
  );
} 
import { useEffect, useState } from 'react';
import { fetchPosts } from '../api/jsonPlaceholder';

export default function APIFetch() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return loading ? <p>Loading...</p> : (
    <ul>
      {posts.map(p => <li key={p.id}>{p.title}</li>)}
    </ul>
  );
}